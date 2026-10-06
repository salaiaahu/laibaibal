# Lai Baibal

Lai Baibal is a mobile-first, installable Progressive Web App for reading the Bible, hymns, and group readings. It is a static client-side application with no application server. Bible and commentary databases are read in the browser with SQL.js, and user data is stored locally in IndexedDB and localStorage.

## Run locally

Serve the project over HTTP; do not open `index.html` as a `file://` URL. The app uses IndexedDB and a service worker. SQL.js loads its WebAssembly file relative to `sql-wasm.js`.

When the checkout directory is named `laibaibal`, run a static server from its parent directory:

```sh
cd ..
python3 -m http.server 8000
```

Then open `http://localhost:8000/laibaibal/`. This serves the source app directly and does not require npm. Use Node.js 22 or later to generate the minified production package with `npm ci` followed by `npm run build`; output is written to `dist/`.

The production build minifies JavaScript, CSS, the service worker, and the Capacitor native bridge, and bundles Font Awesome and html2canvas locally. First-time downloads of predefined Bible/commentary databases still require network access.

Minification only makes casual inspection and copying less convenient; it is not encryption or strong obfuscation. Client-side code can still be inspected or extracted, and a public source repository exposes the original files. Do not store secrets in the app.

## Project structure

| File | Responsibility |
| --- | --- |
| `index.html` | App markup: splash and landing screens, Bible reader, reader panels, side menu, dialogs, and instructions. It also loads the scripts and registers the service worker. |
| `script.js` | Main application logic and the built-in hymn and reading datasets. Contains navigation, Bible/database management, search, verse actions, persistence, PWA update handling, and mobile interactions. This is a large, classic global script rather than a module bundle. |
| `style.css` | App layout, responsive/mobile styling, themes, reader controls, animations, and scrollbar behavior. |
| `service-worker.js` | PWA app-shell cache, offline fallback, and update lifecycle. The current cache identifier is declared as `CACHE_NAME` at the top of this file. |
| `manifest.webmanifest` | Installable-app name, display mode, theme colors, start URL, and icon. |
| `icons/` | Local SVG, WebP, and Apple touch icons used by the PWA and browser installs. |
| `scripts/build.mjs` | Produces the minified static release in `dist/`. |
| `native-bridge.mjs` | Uses the native share sheet on iOS/Android and registers Android back/confirmed-exit handling. |
| `capacitor.config.json` | Capacitor app identity and the production web bundle directory. |
| `resources/icon.svg` | Square source artwork for generated native app icons and splash assets. |
| `package.json` | Pins build/platform dependencies and provides build, check, sync, and native-open commands. |
| `sql-wasm.js`, `sql-wasm.wasm`, `worker.sql-wasm.js` | Vendored SQL.js runtime and Web Worker used to open uploaded or downloaded SQLite databases. Keep these files together. |
| `.github/workflows/static.yml` | Builds the production package and deploys `dist/` to GitHub Pages on pushes to `main` or a manual workflow run. |
| `android/`, `ios/` | Capacitor native projects generated from `capacitor.config.json`; keep both in version control. |

The early inline history guard in the `<head>` of `index.html` is intentional: it must run before the larger app script so a mobile back press during startup cannot leave the app. The main back handler takes over once `script.js` loads. Keep this handoff intact when changing script loading or page structure.

## App sections and features

### Landing page

The first screen links to Bible, Khrihfa Hlabu (hymns), and Chawnghlang Relnak (group readings). Pull down on this page to check for a service-worker update. When a new worker is found, the app tells the user that it is updating before reloading.

### Bible

Selecting Bible opens its own dashboard with icon actions for Bible Reader, Manage Bibles, Manage Commentaries, and My Data; these tools are no longer separate items in the global side menu.

- Uses SQL.js to read predefined or user-uploaded SQLite Bible versions. The built-in resource list is `PREDEFINED_RESOURCES` in `script.js`; it currently downloads WEB, CHIN, and NASB Bibles, plus Sermon-c, MHC, and EASY'18 commentaries, from the `salaiaahu/baibalca` GitHub repository.
- Supports version management, single/parallel versions, commentary selection, book/chapter/verse navigation, text search with automatically refreshed results, and chapter/book swipe navigation.
- Verse taps support multi-verse selection and actions for highlights, notes, bookmarks, sharing, and shareable verse images. The My Data view lists saved highlights, notes, and bookmarks.
- The UI has mobile zoom locking, touch navigation, and hidden scrollbars while preserving scrolling.

### Khrihfa Hlabu and Chawnghlang Relnak

- Their built-in datasets, `allHymns` and `allReadings`, are in `script.js`. Entries use `id`, `name`, and HTML content in `destext`.
- Each section has a searchable list, detail navigation, favorites, adjustable reader text size, swipe navigation, and a LaiTech credit at the end of the content.
- Favorites are shared through a favorites list and stored locally in the browser.

### Other app behavior

- The side menu provides global navigation, favorites, themes, and concise App Hmandaan instructions.
- Hardware/browser back traverses app history toward the landing page. The app only offers exit after the landing page is visible and the user presses back twice in quick succession.
- Custom dialogs/toasts are implemented in the app; reuse them rather than adding native `alert`, `confirm`, or `prompt` dialogs.
- Font-size and theme choices are remembered. The mobile UI includes swipe transitions, a centered splash animation, and auto-hiding reader font controls.
- The Android Capacitor back-button bridge calls the existing app history handler and exits only after the landing-page double-back confirmation. iOS does not have a hardware back button.

## Native app development

The app ID is `com.laitech.laibaibal`; confirm it is available in the developer accounts before store submission. After `npm ci`, run `npm run build` once, then generate the projects with `npx cap add android` and `npx cap add ios`. Branded icons and splash assets generated from `resources/icon.svg` are included in both projects. Build/sync the web bundle into both native projects with `npm run cap:sync`, then open them using `npm run cap:open:android` or `npm run cap:open:ios`.

Android Studio with the required Android SDK and full Xcode are needed to compile and sign store builds. Capacitor packaging is not a guarantee of App Store approval; retain app-specific value such as offline reading, local study data, and reliable native navigation, and verify current store policies before submission.

## Store release checklist

- Verify `com.laitech.laibaibal` is available and register it in both developer accounts.
- Compile, sign, and test Android and iOS releases on real devices, including offline startup, app updates, local notes/bookmarks, native back behavior, and database downloads. Native projects are scaffolded but have not been compiled in this environment.
- Publish a privacy policy and link it in-app and in both store listings. Complete Google Play Data safety and Apple App Privacy disclosures to match actual local storage, analytics (if later added), and network behavior.
- Confirm redistribution rights for every bundled or downloadable Bible translation, commentary, hymn, and group-reading text.
- Prepare store descriptions, age/content ratings, screenshots, support contact, and required account details.
- Keep signing credentials and upload keys out of the repository. Minified client code can still be inspected or extracted; it does not protect a public source repository or content.

## Useful code entry points

Search for these function/constant names in `script.js` rather than relying on line numbers; the file is large and changes frequently.

| Area | Entry points |
| --- | --- |
| Startup and screen navigation | `initializeApp()`, `showPanel()`, `showHome()`, `hideHome()` |
| Mobile back behavior | `setupMobileBackButtonHandler()` in `script.js` and the earlier startup guard in the `<head>` of `index.html` |
| Bible loading and navigation | `PREDEFINED_RESOURCES`, `setActiveVersion()`, `loadChapterContent()`, `navigateChapter()`, `navigateBook()` |
| Search | `performSearch()`, `runSearch()` |
| Hymn/reading lists and details | `allHymns`, `allReadings`, `setupContentReaderListeners()`, `displayContentList()`, `displayItemContent()` |
| Saved verse data | `openIndexedDB()`, `applyHighlight()`, `saveNote()`, `saveBookmark()`, `updateUserDataPanel()` |
| Update check | `refreshApp()` and the pull-to-refresh setup near the end of `script.js` |

## Data storage and database expectations

User data is local to the browser and is not synced to a server. Do not clear or replace these stores as part of routine updates.

### IndexedDB

The database is `BibleReaderDB`, currently schema version `2` in `script.js`. Its object stores are:

- `bibleVersions` and `commentaryVersions`: saved SQLite database files and metadata.
- `highlights`, `notes`, and `bookmarks`: user annotations. These stores have indexes used to look up annotations by verse; bookmarks also have a category index.

When changing this schema, increment `DB_VERSION` and add a non-destructive migration in `openIndexedDB()` / `onupgradeneeded`. Existing users may have important data in these stores.

Uploaded Bible databases must provide `books` (`book_number`, `long_name`, `short_name`) and `verses` (`book_number`, `chapter`, `verse`, `text`) tables. The app also reads `introductions` (`book_number`, `introduction`) and `stories` (`book_number`, `chapter`, `verse`, `title`, `order_if_several`) when available. Commentary databases use a `commentaries` table with at least `book_number`, `chapter_number_from`, `verse_number_from`, and `text`; check the queries in `script.js` before changing or documenting a database format.

### localStorage

Small preferences and lookup metadata are stored separately, including theme, Bible and reader font sizes, last-read position, loaded-version metadata, preloaded-resource status, and reader favorites. Their key constants are near the global configuration at the top of `script.js`.

## Updating and deployment

- The service worker uses a network-first strategy for same-origin GET requests and falls back to cached responses when offline. It calls `skipWaiting()`, claims clients on activation, and removes older app-shell caches.
- When changing the service-worker lifecycle or app-shell caching policy, update `CACHE_NAME` in `service-worker.js`. Add new essential offline files to `APP_SHELL`; do not cache unnecessary user-generated data.
- GitHub Actions builds and deploys `dist/` to GitHub Pages when `main` is updated. Capacitor can use the same directory as its local web bundle.
- The built-in resource list has its own `PRELOADED_RESOURCES_MANAGER.batchVersion`. Update that version when the predefined resources list changes so existing installs re-check it.

## Working on the app

- There is no automated test suite in this repository. Keep source changes compatible with plain browser JavaScript; use `npm run build` to verify and generate the production bundle.
- `script.js` contains most behavior and is intentionally global. Follow its existing helpers and DOM IDs; check both the UI markup in `index.html` and the event wiring in `initializeApp()` when adding controls.
- Script tags in `index.html` appear before a small amount of the remaining modal markup. Top-level DOM lookups in `script.js` can therefore see `null` for elements that occur after the script tag; check parse order and initialization timing when wiring controls.
- Preserve touch scrolling and keyboard/back navigation while hiding visual scrollbars. Test narrow mobile widths (at least 320px and 390px) as well as desktop layouts for UI changes.
- Useful local checks after JavaScript changes:

  ```sh
  node --check script.js
  node --check service-worker.js
  git diff --check
  ```

- Test in a real browser over HTTP, including initial launch, offline reload, service-worker update, and relevant mobile interactions. There is no repository test runner to substitute for these checks.
