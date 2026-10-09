import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build, transform } from 'esbuild';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const outputRoot = resolve(projectRoot, 'dist');
const fontAwesomeRoot = resolve(projectRoot, 'node_modules/@fortawesome/fontawesome-free');
const html2canvasRoot = resolve(projectRoot, 'node_modules/html2canvas');
const fontAwesomeCdn = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';
const html2canvasCdn = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const path of [
    'manifest.webmanifest',
    'sql-wasm.js',
    'sql-wasm.wasm',
    'worker.sql-wasm.js'
]) {
    await cp(resolve(projectRoot, path), resolve(outputRoot, path));
}
await cp(resolve(projectRoot, 'icons'), resolve(outputRoot, 'icons'), { recursive: true });
await cp(resolve(projectRoot, 'assets'), resolve(outputRoot, 'assets'), { recursive: true });

const html = await readFile(resolve(projectRoot, 'index.html'), 'utf8');
if (!html.includes(fontAwesomeCdn) || !html.includes(html2canvasCdn)) {
    throw new Error('Expected CDN references were not found in index.html.');
}
const appScriptTag = '<script src="script.js"></script>';
if (!html.includes(appScriptTag)) {
    throw new Error('Could not find the application script tag in index.html.');
}
await writeFile(
    resolve(outputRoot, 'index.html'),
    html
        .replace(fontAwesomeCdn, 'vendor/fontawesome/css/all.min.css')
        .replace(html2canvasCdn, 'vendor/html2canvas.min.js')
        .replace(appScriptTag, `${appScriptTag}\n    <script src="native-bridge.js"></script>`)
);

for (const [source, target, loader] of [
    ['script.js', 'script.js', 'js'],
    ['style.css', 'style.css', 'css']
]) {
    const sourceText = await readFile(resolve(projectRoot, source), 'utf8');
    const result = await transform(sourceText, {
        loader,
        target: 'es2020',
        minify: true,
        legalComments: 'none'
    });
    await writeFile(resolve(outputRoot, target), result.code);
}

await build({
    entryPoints: [resolve(projectRoot, 'native-bridge.mjs')],
    outfile: resolve(outputRoot, 'native-bridge.js'),
    bundle: true,
    format: 'iife',
    target: 'es2020',
    minify: true,
    legalComments: 'none'
});

const vendorFontAwesomeCss = 'vendor/fontawesome/css/all.min.css';
const vendorFontAwesomeFonts = 'vendor/fontawesome/webfonts';
const vendorHtml2canvas = 'vendor/html2canvas.min.js';
await mkdir(resolve(outputRoot, dirname(vendorFontAwesomeCss)), { recursive: true });
await cp(
    resolve(fontAwesomeRoot, 'css/all.min.css'),
    resolve(outputRoot, vendorFontAwesomeCss)
);
await cp(
    resolve(fontAwesomeRoot, 'webfonts'),
    resolve(outputRoot, vendorFontAwesomeFonts),
    { recursive: true }
);
await mkdir(resolve(outputRoot, 'vendor'), { recursive: true });
await cp(
    resolve(html2canvasRoot, 'dist/html2canvas.min.js'),
    resolve(outputRoot, vendorHtml2canvas)
);

const licenseRoot = resolve(outputRoot, 'THIRD-PARTY-LICENSES');
await mkdir(licenseRoot, { recursive: true });
await cp(
    resolve(fontAwesomeRoot, 'LICENSE.txt'),
    resolve(licenseRoot, 'Font-Awesome.txt')
);
await cp(
    resolve(html2canvasRoot, 'LICENSE'),
    resolve(licenseRoot, 'html2canvas.txt')
);
await cp(
    resolve(projectRoot, 'node_modules/@capacitor/core/LICENSE'),
    resolve(licenseRoot, 'Capacitor-Core.txt')
);
await cp(
    resolve(projectRoot, 'node_modules/@capacitor/app/LICENSE'),
    resolve(licenseRoot, 'Capacitor-App.txt')
);
await cp(
    resolve(projectRoot, 'node_modules/@capacitor/share/LICENSE'),
    resolve(licenseRoot, 'Capacitor-Share.txt')
);

const fontFiles = (await readdir(resolve(outputRoot, vendorFontAwesomeFonts)))
    .filter(file => /\.(woff2?|ttf|otf)$/.test(file))
    .map(file => `./${vendorFontAwesomeFonts}/${file}`);
const appShellFiles = [
    `./${vendorFontAwesomeCss}`,
    `./${vendorHtml2canvas}`,
    './native-bridge.js',
    ...fontFiles
];
let serviceWorker = await readFile(resolve(projectRoot, 'service-worker.js'), 'utf8');
const appShellStart = 'const APP_SHELL = [';
if (!serviceWorker.includes(appShellStart)) {
    throw new Error('Could not find APP_SHELL in service-worker.js.');
}
serviceWorker = serviceWorker.replace(
    appShellStart,
    `${appShellStart}\n${appShellFiles.map(path => `  '${path}',`).join('\n')}`
);
const minifiedServiceWorker = await transform(serviceWorker, {
    loader: 'js',
    target: 'es2020',
    minify: true,
    legalComments: 'none'
});
await writeFile(resolve(outputRoot, 'service-worker.js'), minifiedServiceWorker.code);

console.log('Production build created in dist/.');
