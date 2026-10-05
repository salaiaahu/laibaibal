# Lai Baibal

Lai Baibal is a mobile-first, installable Progressive Web App for reading the Bible, hymns, and group readings. It is a static client-side application: there is no application server or build step. Bible and commentary databases are read in the browser with SQL.js, and user data is stored locally in IndexedDB and localStorage.

## Run locally

Serve the project over HTTP; do not open `index.html` as a `file://` URL. The app uses IndexedDB and a service worker, and SQL.js currently loads its WebAssembly file from the absolute path `/laibaibal/sql-wasm.wasm`.

When the checkout directory is named `laibaibal`, run a static server from its parent directory:

```sh
cd ..
python3 -m http.server 8000
```

Then open `http://localhost:8000/laibaibal/`. If the project is served from a different path, update the SQL.js `locateFile` path in `script.js` and check the service-worker scope and GitHub Pages base path. No npm install or compilation is required.

The app shell works offline after it has been cached, but first-time downloads of predefined Bible/commentary files and CDN-hosted Font Awesome and html2canvas require network access.

## Project structure

| File | Responsibility |
| --- | --- |
| `index.html` | App markup: splash and landing screens, Bible reader, reader panels, side menu, dialogs, and instructions. It also loads the scripts and registers the service worker. |
| `script.js` | Main application logic and the built-in hymn and reading datasets. Contains navigation, Bible/database management, search, verse actions, persistence, PWA update handling, and mobile interactions. This is a large, classic global script rather than a module bundle. |
| `style.css` | App layout, responsive/mobile styling, themes, reader controls, animations, and scrollbar behavior. |
| `service-worker.js` | PWA app-shell cache, offline fallback, and update lifecycle. The current cache identifier is declared as `CACHE_NAME` at the top of this file. |
| `manifest.webmanifest` | Installable-app name, display mode, theme colors, start URL, and icon. |
| `icons/icon.svg` | Local app icon. |
| `sql-wasm.js`, `sql-wasm.wasm`, `worker.sql-wasm.js` | Vendored SQL.js runtime and Web Worker used to open uploaded or downloaded SQLite databases. Keep these files together. |
| `.github/workflows/static.yml` | GitHub Pages deployment. Deploys the repository contents on pushes to `main` or a manual workflow run. |

The early inline history guard in the `<head>` of `index.html` is intentional: it must run before the larger app script so a mobile back press during startup cannot leave the app. The main back handler takes over once `script.js` loads. Keep this handoff intact when changing script loading or page structure.

## App sections and features

### Landing page

The first screen links to Bible, Khrihfa Hlabu (hymns), and Chawnghlang Relnak (group readings). Pull down on this page to check for a service-worker update. When a new worker is found, the app tells the user that it is updating before reloading.

### Bible

- Uses SQL.js to read predefined or user-uploaded SQLite Bible versions. The built-in resource list is `PREDEFINED_RESOURCES` in `script.js`; it currently downloads WEB, CHIN, and NASB Bibles, plus Sermon-c, MHC, and EASY'18 commentaries, from the `salaiaahu/baibalca` GitHub repository.
- Supports version management, single/parallel versions, commentary selection, book/chapter/verse navigation, text search with automatically refreshed results, and chapter/book swipe navigation.
- Verse taps support multi-verse selection and actions for highlights, notes, bookmarks, sharing, and shareable verse images. The My Data view lists saved highlights, notes, and bookmarks.
- The UI has mobile zoom locking, touch navigation, and hidden scrollbars while preserving scrolling.

### Khrihfa Hlabu and Chawnghlang Relnak

- Their built-in datasets, `allHymns` and `allReadings`, are in `script.js`. Entries use `id`, `name`, and HTML content in `destext`.
- Each section has a searchable list, detail navigation, favorites, adjustable reader text size, swipe navigation, and a LaiTech credit at the end of the content.
- Favorites are shared through a favorites list and stored locally in the browser.

### Other app behavior

- The side menu provides navigation, data management, favorites, themes, and concise App Hmandaan instructions.
- Hardware/browser back traverses app history toward the landing page. The app only offers exit after the landing page is visible and the user presses back twice in quick succession.
- Custom dialogs/toasts are implemented in the app; reuse them rather than adding native `alert`, `confirm`, or `prompt` dialogs.
- Font-size and theme choices are remembered. The mobile UI includes swipe transitions, a centered splash animation, and auto-hiding reader font controls.

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
- GitHub Actions deploys the static repository to GitHub Pages when `main` is updated. The app currently assumes it is hosted under `/laibaibal/` for the SQL.js WASM URL.
- The built-in resource list has its own `PRELOADED_RESOURCES_MANAGER.batchVersion`. Update that version when the predefined resources list changes so existing installs re-check it.

## Working on the app

- There is no package manifest, bundler, or automated test suite in this repository. Keep changes compatible with plain browser JavaScript and the existing static deployment.
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

### Current preview note

Recent browser previews logged an initialization error for `toggleCommentaryUploadBtn` and a warning that `handleHighlightIconClick` was not found. Check the current markup and listener setup before assuming these are caused by a new change or have already been resolved.
