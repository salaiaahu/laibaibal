// DEBUG: script.js version 2025-05-31_Final_Confirmed_All_Features

// --- Global Variables ---
let SQL;
let loadedVersions = {}; // Stores Bible versions
let activeVersions = { primary: null, secondary: null };
let activeDbs = { primary: null, secondary: null }; // Stores active Bible DB instances

let loadedCommentaries = {}; // Stores commentary versions
let activeCommentary = null; // Name of active commentary
let activeCommentaryDb = null; // Active commentary DB instance

let currentBook = null;
let currentChapter = null;
let currentVerse = null; // Current verse in focus for notes/bookmarks
let currentViewMode = 'parallel';

let oldTestamentBookRange = { start: null, end: null };
let newTestamentBookRange = { start: null, end: null };

let currentCommentaryList = [];
let currentCommentaryIndex = 0;

let selectedVerses = new Set();
let lastClickedVerseId = null;
let savedSelection = null;     // <<< ADD THIS DECLARATION
let savedSelectedText = ''; 

let activeHighlightListener = null;

const THEME_STORAGE_KEY = 'bibleReaderAppTheme';
const themeSelect = document.getElementById('themeSelect');

const LAST_READ_KEY = 'bibleReaderLastRead';
const LOADED_VERSIONS_STORAGE_KEY = 'bibleReaderLoadedVersions';
const LOADED_COMMENTARIES_STORAGE_KEY = 'bibleReaderLoadedCommentaries';

let isScrollingProgrammatically = false;

// IndexedDB Constants (Updated Version for new stores)
const DB_NAME = 'BibleReaderDB';
const DB_VERSION = 2; // INCREMENTED VERSION FOR NEW OBJECT STORES
const OBJECT_STORE_NAME = 'bibleVersions';
const COMMENTARY_STORE_NAME = 'commentaryVersions';
const HIGHLIGHTS_STORE_NAME = 'highlights'; // NEW
const NOTES_STORE_NAME = 'notes'; // NEW
const BOOKMARKS_STORE_NAME = 'bookmarks'; // NEW

const FONT_SIZE_STORAGE_KEY = 'bibleReaderAppFontSize';
const DEFAULT_FONT_SIZE_REM = 1.0; // This is your baseline (100%)
const FONT_SIZE_STEP_REM = 0.1;
const MIN_FONT_SIZE_REM = 0.7;  // 70%
const MAX_FONT_SIZE_REM = 2.0;  // 200%
let currentAppFontSizeRem = DEFAULT_FONT_SIZE_REM; 

let dbPromise; // Will hold the IndexedDB database promise instance

const PREDEFINED_RESOURCES = [
    {
        name: "WEB", // This will be the 'versionName' used in the app
        type: "bible",
        url: "https://raw.githubusercontent.com/salaiaahu/baibalca/main/WEB.SQLite3", // Replace with the actual URL
        description: "World English Bible" // Optional
    },
    {
        name: "CHIN", // This will be the 'versionName' used in the app
        type: "bible",
        url: "https://raw.githubusercontent.com/salaiaahu/baibalca/main/CHIN.SQLite3", // Replace with the actual URL
        description: "Hakha Baibal" // Optional
    },
    {
        name: "NASB",
        type: "bible",
        url: "https://raw.githubusercontent.com/salaiaahu/baibalca/main/NASB%2795.SQLite3",
        description: "New American Standard Bible"
    },
    {
        name: "Sermon-c", // Sermon Commentary
        type: "commentary",
        url: "https://raw.githubusercontent.com/salaiaahu/baibalca/main/Sermon-c.commentaries.SQLite3",
        description: "Sermon Commentary"
    },
    {
        name: "MHC", // Matthew Henry's Concise Commentary
        type: "commentary",
        url: "https://raw.githubusercontent.com/salaiaahu/baibalca/main/MHC-c.commentaries.SQLite3",
        description: "Matthew Henry Concise Commentary"
    },
    {
        name: "EASY'18", 
        type: "commentary",
        url: "https://raw.githubusercontent.com/salaiaahu/baibalca/main/EASY%2718.commentaries.SQLite3",
        description: "EASY'18 Commentary"
    },
    {
        name: "Sermon-c", // Matthew Henry's Concise Commentary
        type: "commentary",
        url: "https://raw.githubusercontent.com/salaiaahu/baibalca/main/Sermon-c.commentaries.SQLite3",
        description: "Sermon Commentary"
    }
    // Add more Bibles and Commentaries as needed
];

const PRELOADED_RESOURCES_MANAGER = {
    key: 'bibleReaderAppPreloaded', // localStorage key to track preloaded resources
    // Increment this version if you change the PREDEFINED_RESOURCES list
    // to force a re-check and potential re-load/addition of new items.
    batchVersion: 'preload_v1.0.1', 
    
    getPreloadedStatus: function() {
        try {
            const status = JSON.parse(localStorage.getItem(this.key));
            if (status && status.batchVersion === this.batchVersion) {
                return status.loadedNames || {}; // Return dictionary of loaded names { "KJV": true, "MHCC": true }
            }
        } catch (e) { console.error("Error reading preloaded status:", e); }
        // If no status, or batch version mismatch, return empty to force processing
        return {}; 
    },

    markAsLoaded: function(resourceName, currentStatus) {
        currentStatus[resourceName] = true;
        try {
            localStorage.setItem(this.key, JSON.stringify({
                batchVersion: this.batchVersion,
                loadedNames: currentStatus
            }));
        } catch (e) { console.error("Error saving preloaded status:", e); }
    }
};

// --- DOM Elements ---
const hamburgerMenuBtn = document.getElementById('hamburgerMenuBtn');
const slideMenu = document.getElementById('slideMenu');
const slideMenuOverlay = document.getElementById('slideMenuOverlay');
const closeSlideMenuBtn = document.getElementById('closeSlideMenuBtn');

const slideMenuManageBiblesBtn = document.getElementById('slideMenuManageBiblesBtn');
const slideMenuManageCommentariesBtn = document.getElementById('slideMenuManageCommentariesBtn');
const slideMenuMyDataBtn = document.getElementById('slideMenuMyDataBtn');
// Top Bar
const primaryVersionSelect = document.getElementById('primaryVersionSelect');
const secondaryVersionSelect = document.getElementById('secondaryVersionSelect');
const commentarySelect = document.getElementById('commentarySelect');
const prevChapterBtn = document.getElementById('prevChapterBtn');
const nextChapterBtn = document.getElementById('nextChapterBtn');
const currentChapterDisplay = document.getElementById('currentChapterDisplay');
const toggleViewBtn = document.getElementById('toggleViewBtn');
const toggleSearchBtn = document.getElementById('toggleSearchBtn');
const toggleFileUploadBtn = document.getElementById('toggleFileUploadBtn');
const toggleCommentaryUploadBtn = document.getElementById('toggleCommentaryUploadBtn');
const toggleUserDataBtn = document.getElementById('toggleUserDataBtn');
const decreaseFontSizeBtn = document.getElementById('decreaseFontSizeBtn');
const increaseFontSizeBtn = document.getElementById('increaseFontSizeBtn');
const currentFontSizeDisplay = document.getElementById('currentFontSizeDisplay');
// Main Content Areas / Panels
const sidebar = document.getElementById('sidebar');
const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
const bookList = document.getElementById('bookList');

const uploadPanel = document.getElementById('upload-panel');
const bibleFileInput = document.getElementById('bibleFile');
const versionNameInput = document.getElementById('versionNameInput');
const addVersionBtn = document.getElementById('addVersionBtn');
const loadedVersionsList = document.getElementById('loadedVersionsList');
const closeUploadPanelBtn = document.getElementById('closeUploadPanelBtn');
const statusMessage = document.getElementById('statusMessage');

const commentaryUploadPanel = document.getElementById('commentary-upload-panel');
const commentaryFile = document.getElementById('commentaryFile');
const commentaryNameInput = document.getElementById('commentaryNameInput');
const addCommentaryBtn = document.getElementById('addCommentaryBtn');
const commentaryStatusMessage = document.getElementById('commentaryStatusMessage');
const loadedCommentariesList = document.getElementById('loadedCommentariesList');
const closeCommentaryUploadBtn = document.getElementById('closeCommentaryUploadBtn');

const searchPanel = document.getElementById('search-panel');
const searchQueryInput = document.getElementById('searchQueryInput');
const searchScopeSelect = document.getElementById('searchScopeSelect');
const matchTypeSelect = document.getElementById('matchTypeSelect');
const performSearchBtn = document.getElementById('performSearchBtn');
const searchStatusMessage = document.getElementById('searchStatusMessage');
const searchResultsList = document.getElementById('searchResultsList');
const closeSearchPanelBtn = document.getElementById('closeSearchPanelBtn');

const userDataPanel = document.getElementById('user-data-panel');
const userDataTabButtons = userDataPanel.querySelectorAll('.tab-button');
const highlightsTab = document.getElementById('highlights-tab');
const notesTab = document.getElementById('notes-tab');
const bookmarksTab = document.getElementById('bookmarks-tab');
const highlightsList = document.getElementById('highlightsList');
const notesList = document.getElementById('notesList');
const bookmarksList = document.getElementById('bookmarksList');
const bookmarkCategorySelect = document.getElementById('bookmarkCategorySelect');
const bookmarkCategoriesDatalist = document.getElementById('bookmarkCategoriesDatalist');
const closeUserDataPanelBtn = document.getElementById('closeUserDataPanelBtn');

const bookChapterVerseSelector = document.getElementById('bookChapterVerseSelector');
const chapterGrid = document.getElementById('chapterGrid');
const chapterGridTitle = document.getElementById('chapterGridTitle');
const verseGrid = document.getElementById('verseGrid');
const verseGridTitle = document.getElementById('verseGridTitle');
const backToChaptersBtn = document.getElementById('backToChaptersBtn');
const backToVersesBtn = document.getElementById('backToVersesBtn');

const bibleContentView = document.getElementById('bibleContentView');
const parallelContainer = bibleContentView.querySelector('.parallel-container');
const primaryChapterTitle = document.getElementById('primaryChapterTitle');
const secondaryChapterTitle = document.getElementById('secondaryChapterTitle'); // Corrected ID usage.
const primaryBibleContent = document.getElementById('primaryBibleContent');
const secondaryBibleContent = document.getElementById('secondaryBibleContent');

// Modals
const introModal = document.getElementById('introModal');
const introModalTitle = document.getElementById('introModalTitle');
const introModalText = document.getElementById('introModalText');
const closeModalButton = introModal.querySelector('.close-button');

const commentaryModal = document.getElementById('commentaryModal');
const commentaryModalTitle = document.getElementById('commentaryModalTitle');
const commentaryModalText = document.getElementById('commentaryModalText');
const closeCommentaryModalButton = commentaryModal.querySelector('.close-button');

const noteModal = document.getElementById('noteModal');
const noteModalTitle = document.getElementById('noteModalTitle');
let currentNoteVerseRef = null; // { versionName, bookNumber, chapter, verse }
const noteTextarea = document.getElementById('noteTextarea');
const saveNoteBtn = document.getElementById('saveNoteBtn');
const deleteNoteBtn = document.getElementById('deleteNoteBtn');
const cancelNoteBtn = document.getElementById('cancelNoteBtn');
const closeNoteModalButton = noteModal.querySelector('.close-button');

const bookmarkModal = document.getElementById('bookmarkModal');
const bookmarkModalTitle = document.getElementById('bookmarkModalTitle');
let currentBookmarkVerseRef = null; // { versionName, bookNumber, chapter, verse }
const bookmarkCategoryInput = document.getElementById('bookmarkCategoryInput');
const saveBookmarkBtn = document.getElementById('saveBookmarkBtn');
const deleteBookmarkBtn = document.getElementById('deleteBookmarkBtn');
const cancelBookmarkBtn = document = document.getElementById('cancelBookmarkBtn');
const closeBookmarkModalButton = bookmarkModal.querySelector('.close-button');

const bookGridView = document.getElementById('bookGridView');
const otBookGrid = document.getElementById('otBookGrid');
const ntBookGrid = document.getElementById('ntBookGrid');
const closeNavigatorBtn = document.getElementById('closeNavigatorBtn'); // General close

const chapterGridView = document.getElementById('chapterGridView');
const backToBookGridBtn = document.getElementById('backToBookGridBtn');
const closeNavigatorBtnChapterView = document.getElementById('closeNavigatorBtnChapterView');


const verseGridView = document.getElementById('verseGridView');
const backToChapterGridBtn = document.getElementById('backToChapterGridBtn'); // Was backToChaptersBtn
const closeNavigatorBtnVerseView = document.getElementById('closeNavigatorBtnVerseView');

const bibleVersionPopupBtn = document.getElementById('bibleVersionPopupBtn');
const bibleVersionSelectModal = document.getElementById('bibleVersionSelectModal');
const popupPrimaryVersionSelect = document.getElementById('popupPrimaryVersionSelect');
const popupSecondaryVersionSelect = document.getElementById('popupSecondaryVersionSelect');
const currentPopupPrimaryVersion = document.getElementById('currentPopupPrimaryVersion');
const currentPopupSecondaryVersion = document.getElementById('currentPopupSecondaryVersion');
// const applyBibleVersionsBtn = document.getElementById('applyBibleVersionsBtn'); // If you use an apply button

const commentaryPopupBtn = document.getElementById('commentaryPopupBtn');
const commentarySelectModal = document.getElementById('commentarySelectModal');
const popupCommentaryList = document.getElementById('popupCommentaryList');

const themePopupBtn = document.getElementById('themePopupBtn');
const themeSelectModal = document.getElementById('themeSelectModal');
const popupThemeList = document.getElementById('popupThemeList');

// Highlight Picker
const highlightPicker = document.getElementById('highlightPicker');
let currentHighlightVerseElement = null; // The <p> element for highlighting
let currentHighlightVerseRef = null; // { versionName, bookNumber, chapter, verse }

let latestSelection = null;
let latestSelectedText = '';


// -------- NEW FUNCTIONS ---------
///////--------- sliding menu
function setupSlideMenuListeners() {
    if (hamburgerMenuBtn && slideMenu && slideMenuOverlay) {
        hamburgerMenuBtn.addEventListener('click', () => {
            console.log("Hamburger menu button clicked");
            slideMenu.classList.remove('hidden'); // Or .add('open') if using that for animation
            slideMenuOverlay.classList.remove('hidden');
        });

        const closeMenu = () => {
            slideMenu.classList.add('hidden'); // Or .remove('open')
            slideMenuOverlay.classList.add('hidden');
        };

        if (closeSlideMenuBtn) {
            closeSlideMenuBtn.addEventListener('click', closeMenu);
        }
        slideMenuOverlay.addEventListener('click', closeMenu);

        // Listeners for items within the slide menu
        if (slideMenuManageBiblesBtn && uploadPanel) {
            slideMenuManageBiblesBtn.addEventListener('click', () => {
                console.log("Manage Bibles from slide menu clicked");
                showPanel(uploadPanel);
                closeMenu();
            });
        }
        if (slideMenuManageCommentariesBtn && commentaryUploadPanel) {
            slideMenuManageCommentariesBtn.addEventListener('click', () => {
                console.log("Manage Commentaries from slide menu clicked");
                showPanel(commentaryUploadPanel);
                closeMenu();
            });
        }
        if (slideMenuMyDataBtn && userDataPanel) {
            slideMenuMyDataBtn.addEventListener('click', () => {
                console.log("My Data from slide menu clicked");
                showPanel(userDataPanel);
                updateUserDataPanel('highlights'); // Default to highlights tab
                closeMenu();
            });
        }
        console.log("Slide menu listeners configured.");
    } else {
        console.error("One or more slide menu elements not found.");
    }
}
// --------- preload helper ----------//
async function fetchFileFromUrl(url) {
    console.log("Attempting to fetch from URL:", url);
    const response = await fetch(url, { mode: 'cors' }); // mode: 'cors' is default but good to be explicit

    if (!response.ok) {
        // Try to get more specific error info if possible
        let errorDetails = `HTTP error! Status: ${response.status}`;
        if (response.status === 0) { // Often indicates a CORS issue or network failure
            errorDetails += " (This might be a CORS issue or network connectivity problem. Ensure the server allows cross-origin requests.)";
        } else {
             errorDetails += ` ${response.statusText}`;
        }
        throw new Error(errorDetails);
    }
    console.log("Successfully fetched. Converting to ArrayBuffer...");
    return await response.arrayBuffer();
}

async function processPredefinedResources() {
    console.log("Checking for predefined resources to load...");
    if (statusMessage) statusMessage.textContent = "Setting up initial resources (may take a moment on first load)...";

    const preloadedStatus = PRELOADED_RESOURCES_MANAGER.getPreloadedStatus();
    let newResourcesWereProcessed = false;

    for (const resource of PREDEFINED_RESOURCES) {
        if (preloadedStatus[resource.name]) {
            console.log(`Resource "${resource.name}" (${resource.type}) previously marked as preloaded for this batch. Skipping download attempt.`);
            // Ensure it's actually in our in-memory lists if it was preloaded
            if (resource.type === "bible" && !loadedVersions[resource.name]) {
                 console.warn(`Preloaded Bible "${resource.name}" not in loadedVersions. May need to re-verify from IndexedDB.`);
                 // The main loadSavedVersionsMetadata should ideally pick it up if it's in IndexedDB
            } else if (resource.type === "commentary" && !loadedCommentaries[resource.name]) {
                 console.warn(`Preloaded Commentary "${resource.name}" not in loadedCommentaries.`);
            }
            continue;
        }

        // Also check if it's already present from a manual load in a previous session
        if ((resource.type === "bible" && loadedVersions[resource.name]) ||
            (resource.type === "commentary" && loadedCommentaries[resource.name])) {
            console.log(`Resource "${resource.name}" (${resource.type}) already present in loaded collections. Marking as preloaded.`);
            PRELOADED_RESOURCES_MANAGER.markAsLoaded(resource.name, preloadedStatus);
            newResourcesWereProcessed = true; // To trigger UI updates if needed
            continue;
        }

        console.log(`Attempting to preload ${resource.type}: "${resource.name}" from ${resource.url}`);
        if (statusMessage) statusMessage.textContent = `Downloading predefined ${resource.type}: ${resource.name}...`;

        try {
            const arrayBuffer = await fetchFileFromUrl(resource.url); // Your existing function
            const uint8Array = new Uint8Array(arrayBuffer);

            if (resource.type === "bible") {
                const tempDbInstance = new SQL.Database(uint8Array);
                const bookData = [];
                const stmt = tempDbInstance.prepare("SELECT book_number, long_name, short_name FROM books ORDER BY book_number ASC;");
                while(stmt.step()) { bookData.push(stmt.getAsObject()); }
                stmt.free();
                tempDbInstance.close();

                if (bookData.length === 0) throw new Error(`No book data found in predefined Bible: ${resource.name}`);

                await putIndexedDB(OBJECT_STORE_NAME, { versionName: resource.name, fileData: uint8Array, books: bookData });
                loadedVersions[resource.name] = { fileData: uint8Array, db: null, books: bookData };
                console.log(`Predefined Bible "${resource.name}" added successfully.`);
            } else if (resource.type === "commentary") {
                let commentaryBookMetadata = {};
                try {
                    const tempDbInstance = new SQL.Database(uint8Array);
                    const stmt = tempDbInstance.prepare("SELECT book_number, long_name, short_name FROM books ORDER BY book_number ASC;");
                    while(stmt.step()) { const row = stmt.getAsObject(); commentaryBookMetadata[row.book_number] = { long_name: row.long_name, short_name: row.short_name }; }
                    stmt.free();
                    tempDbInstance.close();
                } catch (e) { console.warn(`Could not read book metadata from predefined commentary "${resource.name}".`, e); }

                await putIndexedDB(COMMENTARY_STORE_NAME, { versionName: resource.name, fileData: uint8Array, metadata: { books: commentaryBookMetadata } });
                loadedCommentaries[resource.name] = { fileData: uint8Array, db: null, metadata: { books: commentaryBookMetadata } };
                console.log(`Predefined commentary "${resource.name}" added successfully.`);
            }
            
            PRELOADED_RESOURCES_MANAGER.markAsLoaded(resource.name, preloadedStatus);
            newResourcesWereProcessed = true;

        } catch (err) {
            console.error(`Failed to preload resource "${resource.name}" from ${resource.url}:`, err);
            if (statusMessage) { // Show error to user for this specific resource
                statusMessage.textContent = `Failed to load predefined ${resource.type} "${resource.name}". Check console.`;
                statusMessage.classList.add('error');
                // Keep the message for a few seconds
                await new Promise(resolve => setTimeout(resolve, 4000)); 
                statusMessage.classList.remove('error');
            }
        }
    }

    if (newResourcesWereProcessed) {
        // These save the *keys* of all loaded versions/commentaries (including newly preloaded ones)
        // to localStorage for faster initial determination next app load.
        await saveLoadedVersionsMetadata(); 
        await saveLoadedCommentariesMetadata();
        
        // These refresh the UI lists in the "Manage..." panels
        updateLoadedVersionsList();    
        updateLoadedCommentariesList();
        
        // The popup select lists will be repopulated when they are next opened via their respective populate...Modal functions.
        // Or, if you want to update them now if they happen to be open (less likely during initial load):
        // if (bibleVersionSelectModal && !bibleVersionSelectModal.classList.contains('hidden')) populateBibleVersionModal();
        // if (commentarySelectModal && !commentarySelectModal.classList.contains('hidden')) populateCommentaryModal();
    }
    if (statusMessage) statusMessage.textContent = "Initial resources setup complete.";
    console.log("Finished processing predefined resources.");
}

////////////////////////////

function applyFontSize(sizeRem) {
    // Clamp the value between min and max
    currentAppFontSizeRem = Math.max(MIN_FONT_SIZE_REM, Math.min(MAX_FONT_SIZE_REM, sizeRem));
    
    document.documentElement.style.setProperty('--bible-text-font-size', `${currentAppFontSizeRem}rem`);
    
    if (currentFontSizeDisplay) {
        // Display as percentage relative to the default
        currentFontSizeDisplay.textContent = `${Math.round((currentAppFontSizeRem / DEFAULT_FONT_SIZE_REM) * 100)}%`;
    }
    
    localStorage.setItem(FONT_SIZE_STORAGE_KEY, currentAppFontSizeRem.toString());
    console.log(`Font size applied: ${currentAppFontSizeRem}rem`);

    // Disable buttons if at min/max
    if (decreaseFontSizeBtn) {
        decreaseFontSizeBtn.disabled = currentAppFontSizeRem <= MIN_FONT_SIZE_REM;
    }
    if (increaseFontSizeBtn) {
        increaseFontSizeBtn.disabled = currentAppFontSizeRem >= MAX_FONT_SIZE_REM;
    }
}

function loadSavedFontSize() {
    const savedSize = localStorage.getItem(FONT_SIZE_STORAGE_KEY);
    if (savedSize) {
        applyFontSize(parseFloat(savedSize));
    } else {
        applyFontSize(DEFAULT_FONT_SIZE_REM); // Apply default if nothing is saved
    }
}

// NEW function to manage views within the navigator panel
function closeAllSelectionModals() {
    bibleVersionSelectModal.classList.add('hidden');
    commentarySelectModal.classList.add('hidden');
    themeSelectModal.classList.add('hidden');
}

function applyTheme(themeName) {
    console.log("Applying theme:", themeName);
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-sepia'); // Remove all known

    // Add the new theme class if it's not the default (light)
    // Assuming 'light' theme is achieved by having no specific theme class,
    // relying on the :root variables. Or you can add a 'theme-light' class too.
    if (themeName === 'dark') {
        document.body.classList.add('theme-dark');
    } else if (themeName === 'sepia') {
        document.body.classList.add('theme-sepia');
    }
    // If you have a .theme-light class that sets the :root variables:
    // else if (themeName === 'light') {
    //     document.body.classList.add('theme-light');
    // }


    localStorage.setItem(THEME_STORAGE_KEY, themeName);
    if (themeSelect) { // Update the dropdown to reflect the current theme
        themeSelect.value = themeName;
    }
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
        console.log("Loading saved theme:", savedTheme);
        applyTheme(savedTheme);
    } else {
        console.log("No saved theme found, applying default (light).");
        applyTheme('light'); // Default theme
    }
}

function setupThemeControls() { // Or add this content to setupNavigationListeners
    loadSavedTheme(); // Load and apply theme on startup

    if (themeSelect) {
        themeSelect.addEventListener('change', (event) => {
            applyTheme(event.target.value);
        });
    } else {
        console.error("Theme select dropdown not found.");
    }
}

function populateBibleVersionModal() {
    if (!popupPrimaryVersionSelect || !popupSecondaryVersionSelect) return;
    
    const versions = Object.keys(loadedVersions);
    
    // Populate Primary
    popupPrimaryVersionSelect.innerHTML = '<option value="">-- Select Primary --</option>';
    versions.forEach(versionName => {
        const option = document.createElement('option');
        option.value = versionName;
        option.textContent = versionName;
        if (activeVersions.primary === versionName) {
            option.selected = true;
        }
        popupPrimaryVersionSelect.appendChild(option);
    });
    currentPopupPrimaryVersion.textContent = activeVersions.primary ? `(${activeVersions.primary})` : '';


    // Populate Secondary
    popupSecondaryVersionSelect.innerHTML = '<option value="">-- Select Secondary (None) --</option>';
    versions.forEach(versionName => {
        const option = document.createElement('option');
        option.value = versionName;
        option.textContent = versionName;
        if (activeVersions.secondary === versionName) {
            option.selected = true;
        }
        popupSecondaryVersionSelect.appendChild(option);
    });
    currentPopupSecondaryVersion.textContent = activeVersions.secondary ? `(${activeVersions.secondary})` : '(None)';

    // Update visual indicators on the main bible icon button
    if(primaryVersionIndicator) primaryVersionIndicator.style.display = activeVersions.primary ? 'inline-flex' : 'none';
    if(secondaryVersionIndicator) secondaryVersionIndicator.style.display = activeVersions.secondary ? 'inline-flex' : 'none';

}

function populateCommentaryModal() {
    if (!popupCommentaryList || !commentarySelectModal) return; // Add check for modal
    popupCommentaryList.innerHTML = ''; 

    // "None" option
    const noneButton = document.createElement('button');
    noneButton.classList.add('popup-list-item'); // Use common class
    noneButton.textContent = "-- None --";
    noneButton.dataset.value = ""; // Empty value for "None"
    if (!activeCommentary) {
        noneButton.classList.add('selected-item');
    }
    noneButton.addEventListener('click', async () => {
        await setActiveCommentary(""); // Set active commentary to none
        // populateCommentaryModal(); // Re-populate to update selection (optional if closing immediately)
        commentarySelectModal.classList.add('hidden'); // Auto-close
    });
    popupCommentaryList.appendChild(noneButton);

    // Loaded commentaries
    const commentaries = Object.keys(loadedCommentaries);
    commentaries.forEach(commentaryName => {
        const button = document.createElement('button');
        button.classList.add('popup-list-item');
        button.textContent = commentaryName;
        button.dataset.value = commentaryName;
        if (activeCommentary === commentaryName) {
            button.classList.add('selected-item');
        }
        button.addEventListener('click', async () => {
            await setActiveCommentary(commentaryName);
            // populateCommentaryModal(); // Re-populate to update selection (optional if closing immediately)
            commentarySelectModal.classList.add('hidden'); // Auto-close
        });
        popupCommentaryList.appendChild(button);
    });
    console.log("Commentary modal populated.");
}

function populateThemeModal() {
    if (!popupThemeList) return;
    const currentTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'light';
    popupThemeList.querySelectorAll('.theme-option-button').forEach(button => {
        if (button.dataset.value === currentTheme) {
            button.classList.add('selected-item');
        } else {
            button.classList.remove('selected-item');
        }
    });
}
function setupNavigationListeners() {
    console.log("LOG: setupNavigationListeners() called.");

    // Listener for the main chapter display at the top to open the book navigator
    if (currentChapterDisplay) {
        currentChapterDisplay.addEventListener('click', () => {
            console.log("EVENT: #currentChapterDisplay CLICKED.");
            openBookNavigator(); // This function will show the book grid
        });
    } else {
        console.error("ERROR: currentChapterDisplay element not found in setupNavigationListeners.");
    }

    // General function to close the main navigator and decide what to show next
    const closeAndExitNavigator = () => {
        if (bookChapterVerseSelector) {
            bookChapterVerseSelector.classList.add('hidden');
        }
        // If a book and chapter are selected, show the Bible content view
        if (currentBook && currentChapter && currentChapter !== 'introduction') {
            showPanel(bibleContentView);
        } else if (currentBook && currentChapter === 'introduction') {
            // If it's an introduction, bibleContentView should already be shown by loadChapterContent
            // If not, ensure it is.
             showPanel(bibleContentView);
        }
        else {
            // Fallback if no specific content is ready (e.g., show upload panel or a default welcome)
            // Adjust this to your preferred default panel if no Bible content is active
            if (Object.keys(loadedVersions).length > 0 && activeVersions.primary) {
                // If versions are loaded but no chapter, maybe show an empty bibleContentView or prompt.
                // For now, let's assume bibleContentView handles a "no chapter selected" state gracefully
                // or we default to the book selection if they close without going to a chapter.
                // If they close navigator from book view, and no chapter was ever loaded, bibleContentView might be empty.
                // Consider what the best default state is. If bibleContentView is empty, maybe go to uploadPanel.
                if (primaryBibleContent.innerHTML.trim() === '' || primaryBibleContent.firstChild?.classList?.contains('placeholder')) {
                     // If primary content is empty or just a placeholder, and versions exist,
                     // perhaps keep bookChapterVerseSelector open or go to upload if no versions.
                     // For now, this logic means if you close from book view without selecting anything,
                     // and bibleContentView was previously empty, it will show that empty view.
                     showPanel(bibleContentView); // Or choose a more appropriate default
                } else {
                    showPanel(bibleContentView);
                }

            } else {
                showPanel(uploadPanel);
            }
        }
        console.log("LOG: Navigator closed.");
    };

    // Listeners for the "Close Navigator" buttons
    if (closeNavigatorBtn) {
        closeNavigatorBtn.addEventListener('click', closeAndExitNavigator);
    } else {
        console.error("ERROR: closeNavigatorBtn element not found.");
    }
    if (closeNavigatorBtnChapterView) {
        closeNavigatorBtnChapterView.addEventListener('click', closeAndExitNavigator);
    } else {
        console.error("ERROR: closeNavigatorBtnChapterView element not found.");
    }
    if (closeNavigatorBtnVerseView) {
        closeNavigatorBtnVerseView.addEventListener('click', closeAndExitNavigator);
    } else {
        console.error("ERROR: closeNavigatorBtnVerseView element not found.");
    }

    // Listener for "Back to Books" button (from Chapter Grid View)
    if (backToBookGridBtn) {
        backToBookGridBtn.addEventListener('click', () => {
            console.log("EVENT: backToBookGridBtn CLICKED.");
            showNavigatorView(bookGridView); // Show the book selection grid
			openBookNavigator();
        });
    } else {
        console.error("ERROR: backToBookGridBtn element not found.");
    }

    // Listener for "Back to Chapters" button (from Verse Grid View)
    // This was likely your existing backToChaptersBtn, ensure ID matches
    if (backToChapterGridBtn) { // Assuming you renamed backToChaptersBtn to backToChapterGridBtn in HTML for clarity
        backToChapterGridBtn.addEventListener('click', () => {
            console.log("EVENT: backToChapterGridBtn CLICKED.");
            if (currentBook) { // currentBook should be set if we are in verse grid
                // populateChapterGrid(currentBook); // Optionally re-populate, or assume it's still fine
                showNavigatorView(chapterGridView); // Show the chapter grid view
            } else {
                // Fallback if currentBook is somehow lost
                console.warn("WARN: currentBook not set when going back to chapter grid. Showing book grid instead.");
                showNavigatorView(bookGridView);
            }
        });
    } else {
        console.error("ERROR: backToChapterGridBtn (or your equivalent backToChaptersBtn) element not found.");
    }
    console.log("LOG: setupNavigationListeners() finished attaching listeners.");
}

function setupPopupTriggersAndModals() {
    // Helper to close all these specific selection modals
    const closeAllPopups = () => {
        if (bibleVersionSelectModal) bibleVersionSelectModal.classList.add('hidden');
        if (commentarySelectModal) commentarySelectModal.classList.add('hidden');
        if (themeSelectModal) themeSelectModal.classList.add('hidden');
    };

    // Generic close buttons for these modals (the '×' button)
    document.querySelectorAll('.selection-modal .close-selection-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalToClose = btn.closest('.selection-modal');
            if (modalToClose) {
                modalToClose.classList.add('hidden');
            }
        });
    });

    // --- Bible Version Selection Modal ---
    if (bibleVersionPopupBtn && bibleVersionSelectModal && popupPrimaryVersionSelect && popupSecondaryVersionSelect) {
        bibleVersionPopupBtn.addEventListener('click', () => {
            closeAllPopups(); // Close any other open selection popups
            populateBibleVersionModal(); // Populate with current selections and options
            bibleVersionSelectModal.classList.remove('hidden');
        });

        popupPrimaryVersionSelect.addEventListener('change', async (e) => {
            console.log("Primary version selected in popup:", e.target.value);
            await setActiveVersion('primary', e.target.value);
            populateBibleVersionModal(); // Update current version display in modal & main icon
            bibleVersionSelectModal.classList.add('hidden'); // Auto-close
        });

        popupSecondaryVersionSelect.addEventListener('change', async (e) => {
            console.log("Secondary version selected in popup:", e.target.value);
            await setActiveVersion('secondary', e.target.value);
            populateBibleVersionModal(); // Update current version display in modal & main icon
            bibleVersionSelectModal.classList.add('hidden'); // Auto-close
        });
    } else {
        console.error("Bible version popup trigger or modal elements not found.");
    }

    // --- Commentary Selection Modal ---
    if (commentaryPopupBtn && commentarySelectModal && popupCommentaryList) {
        commentaryPopupBtn.addEventListener('click', () => {
            closeAllPopups();
            populateCommentaryModal(); // Populates the list and sets up internal click listeners
            commentarySelectModal.classList.remove('hidden');
        });
        // Note: The click listeners for individual commentary buttons inside populateCommentaryModal
        // should already handle setActiveCommentary and then closing the modal.
        // We'll ensure that logic is in populateCommentaryModal.
    } else {
        console.error("Commentary popup trigger or modal elements not found.");
    }

    // --- Theme Selection Modal ---
    if (themePopupBtn && themeSelectModal && popupThemeList) {
        themePopupBtn.addEventListener('click', () => {
            closeAllPopups();
            populateThemeModal(); // Marks the current theme as selected
            themeSelectModal.classList.remove('hidden');
        });

        // Event listeners for theme buttons within the popup
        popupThemeList.querySelectorAll('.theme-option-button').forEach(button => {
            // Remove old listener before adding new one to prevent duplication if this setup runs multiple times
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);

            newButton.addEventListener('click', () => {
                applyTheme(newButton.dataset.value); // Applies the theme
                populateThemeModal();             // Updates the selected item in the popup
                themeSelectModal.classList.add('hidden'); // Auto-close
            });
        });
    } else {
        console.error("Theme popup trigger or modal elements not found.");
    }
}

function showNavigatorView(viewToShow) {
	 console.log("LOG: showNavigatorView - Showing:", viewToShow ? viewToShow.id : 'null');
    [bookGridView, chapterGridView, verseGridView].forEach(view => {
        if (view === viewToShow) {
            view.classList.remove('hidden');
        } else {
            view.classList.add('hidden');
        }
    });
    // Always ensure the main navigator panel is visible when one of its views is shown
    if (viewToShow) {
        showPanel(bookChapterVerseSelector);
    }
}

// NEW function to populate the book grid
async function populateBookGrid() {
    console.log("LOG: populateBookGrid() called.");
    otBookGrid.innerHTML = ''; 
    ntBookGrid.innerHTML = '';

    if (!activeVersions.primary || !loadedVersions[activeVersions.primary] || !loadedVersions[activeVersions.primary].books) {
        console.warn("LOG: populateBookGrid - Primary version/books not loaded. Cannot populate.");
        otBookGrid.innerHTML = '<li>Primary version or its book list not loaded.</li>';
        return;
    }

    console.log("LOG: populateBookGrid - OT Range:", oldTestamentBookRange, "NT Range:", newTestamentBookRange);
    const books = loadedVersions[activeVersions.primary].books;
    let otBooksCount = 0;
    let ntBooksCount = 0;

    books.forEach(book => {
        // console.log(`LOG: populateBookGrid - Processing book: ${book.short_name} (ID: ${book.book_number})`);
        const bookItem = document.createElement('div');
        bookItem.classList.add('grid-item'); // Ensure your .grid-item CSS is applied
        bookItem.textContent = book.short_name;
        bookItem.title = book.long_name;
        bookItem.dataset.bookNumber = book.book_number;

        bookItem.addEventListener('click', () => {
            currentBook = book; 
            console.log("LOG: Book clicked in grid:", currentBook.long_name);
            currentChapter = null; 
            currentVerse = null;
            populateChapterGrid(book); 
            showNavigatorView(chapterGridView);
        });

        // Check ranges carefully
        let addedToOt = false;
        if (oldTestamentBookRange.start !== null && oldTestamentBookRange.end !== null &&
            book.book_number >= oldTestamentBookRange.start && book.book_number <= oldTestamentBookRange.end) {
            otBookGrid.appendChild(bookItem);
            otBooksCount++;
            addedToOt = true;
        }
        // Use 'else if' if books cannot be in both, or 'if' if they could (e.g. for apocrypha in some lists)
        // Assuming distinct OT/NT for now.
        if (!addedToOt && newTestamentBookRange.start !== null && newTestamentBookRange.end !== null &&
            book.book_number >= newTestamentBookRange.start && book.book_number <= newTestamentBookRange.end) {
            ntBookGrid.appendChild(bookItem);
            ntBooksCount++;
        } else if (!addedToOt) { 
            // Fallback for books not fitting strictly, or if ranges are weird.
            // This might happen if your book_numbers are not typical 1-66.
             console.warn(`LOG: populateBookGrid - Book ${book.short_name} (ID: ${book.book_number}) did not fit OT range (${oldTestamentBookRange.start}-${oldTestamentBookRange.end}) or NT range (${newTestamentBookRange.start}-${newTestamentBookRange.end}). Appending to NT as fallback or check ranges.`);
             ntBookGrid.appendChild(bookItem); // Or handle differently
        }
    });
    console.log(`LOG: populateBookGrid - Populated ${otBooksCount} OT books and ${ntBooksCount} NT books.`);
    if (books.length > 0 && otBooksCount === 0 && ntBooksCount === 0) {
        console.error("LOG: populateBookGrid - No books were added to OT or NT grids, despite having books. Check OT/NT range logic and book_number values!");
    }
}

// NEW function to show the book selection panel (triggered by clicking #currentChapterDisplay)
function openBookNavigator() {
    console.log("LOG: openBookNavigator() called."); // Log 2: Function entered

    if (!activeVersions.primary || !loadedVersions[activeVersions.primary]) {
        console.warn("LOG: openBookNavigator - No primary version active or loaded. Alerting.");
        alert("Please load and select a primary Bible version first.");
        showPanel(uploadPanel); // Or your default panel for loading versions
        return;
    }
    console.log("LOG: openBookNavigator - Primary version seems active. Proceeding...");

    // Ensure OT/NT ranges are determined. This might be better placed in setActiveVersion
    // but let's ensure it runs if needed for populateBookGrid.
    if ((!oldTestamentBookRange.end || !newTestamentBookRange.start) && activeDbs.primary) {
        console.log("LOG: openBookNavigator - OT/NT ranges not set or incomplete, calling determineOtNtRanges.");
        determineOtNtRanges(activeDbs.primary); // Ensure this doesn't error out
    } else {
        console.log("LOG: openBookNavigator - OT/NT ranges appear to be set:", oldTestamentBookRange, newTestamentBookRange);
    }


    console.log("LOG: openBookNavigator - Calling populateBookGrid().");
    populateBookGrid(); // This populates the OT/NT book lists in the bookGridView

    console.log("LOG: openBookNavigator - Calling showNavigatorView(bookGridView).");
    showNavigatorView(bookGridView); // This should make bookGridView visible within its parent

    console.log("LOG: openBookNavigator - Calling showPanel(bookChapterVerseSelector).");
    showPanel(bookChapterVerseSelector); // This ensures the main #bookChapterVerseSelector panel is visible

    console.log("LOG: openBookNavigator() finished.");
}


// MODIFIED: populateChapterGrid (was showChaptersGrid, now focuses on populating)
async function populateChapterGrid(book) { // Takes book object
    console.log("Populating chapter grid for book:", book.long_name);
    chapterGridTitle.textContent = `${book.long_name}`; // Use the main title element for the chapter grid view
    // const chaptersContainer = document.getElementById('chaptersContainer'); // If you have a specific inner container
    chapterGrid.innerHTML = ''; // Clear previous chapters

    if (!activeDbs.primary || !book) {
        chapterGrid.innerHTML = '<p>No book selected or database not loaded.</p>';
        return;
    }

    const primaryDb = activeDbs.primary;
    try {
        // Handle Introduction "Chapter"
        const introStmt = primaryDb.prepare("SELECT introduction FROM introductions WHERE book_number = ?;");
        introStmt.bind([book.book_number]);
        if (introStmt.step() && introStmt.getAsObject().introduction) { // Check if introduction actually exists
            const introItem = document.createElement('div');
            introItem.classList.add('grid-item');
            introItem.innerHTML = `<span class="chapter-number">Intro</span>`; // No verse count for intro
            introItem.title = `Introduction to ${book.long_name}`;
            introItem.addEventListener('click', () => {
                currentChapter = 'introduction';
                currentVerse = null;
                saveLastReadPosition();
                loadChapterContent(book.book_number, 'introduction');
                showPanel(bibleContentView); // Go to reader view
                bookChapterVerseSelector.classList.add('hidden'); // Hide navigator
            });
            chapterGrid.appendChild(introItem);
        }
        introStmt.free();

        // Get all distinct chapters for the book
        const chaptersStmt = primaryDb.prepare("SELECT DISTINCT chapter FROM verses WHERE book_number = ? ORDER BY chapter ASC;");
        chaptersStmt.bind([book.book_number]);
        const chapterPromises = [];

        while (chaptersStmt.step()) {
            const chapterRow = chaptersStmt.getAsObject();
            const chapterNumber = chapterRow.chapter;

            // Create a promise to get verse count for this chapter
            const verseCountPromise = new Promise(async (resolve) => {
                let verseCount = 0;
                try {
                    const countStmt = primaryDb.prepare("SELECT COUNT(DISTINCT verse) as verse_count FROM verses WHERE book_number = ? AND chapter = ?;");
                    countStmt.bind([book.book_number, chapterNumber]);
                    if (countStmt.step()) {
                        verseCount = countStmt.getAsObject().verse_count;
                    }
                    countStmt.free();
                } catch (e) { console.error(`Error counting verses for ${book.short_name} ${chapterNumber}: ${e}`); }
                resolve({ chapterNumber, verseCount });
            });
            chapterPromises.push(verseCountPromise);
        }
        chaptersStmt.free();

        const chapterDataWithCounts = await Promise.all(chapterPromises);

        chapterDataWithCounts.forEach(({ chapterNumber, verseCount }) => {
            const chapterItem = document.createElement('div');
            chapterItem.classList.add('grid-item');
            chapterItem.innerHTML = `<span class="chapter-number">${chapterNumber}</span><span class="verse-count">${verseCount} </span>`;
            chapterItem.dataset.chapter = chapterNumber;

            chapterItem.addEventListener('click', () => {
                currentChapter = chapterNumber; // Set global currentChapter
                currentVerse = null; // Reset verse when a chapter is selected
                saveLastReadPosition();
                populateVerseGrid(book, chapterNumber); // New function
                showNavigatorView(verseGridView);
            });
            chapterGrid.appendChild(chapterItem);
        });
        console.log("Chapter grid populated for", book.long_name);

    } catch (err) {
        statusMessage.textContent = `Error loading chapters: ${err.message}`;
        statusMessage.classList.add('error');
        console.error('Error populating chapters:', err);
        chapterGrid.innerHTML = `<p class="error">Error loading chapters.</p>`;
    }
}






// --- Helper Functions (All helper/utility functions defined first) ---

function insertPartialNoteIndicatorDOM(verseEl, partialNote) {
    if (!verseEl || !partialNote || !partialNote.selectedText || typeof partialNote.selectedText !== 'string' || partialNote.selectedText.trim() === '') {
        return false; // Nothing to do
    }

    const textToFind = partialNote.selectedText;
    let replaced = false;

    // Use a TreeWalker to iterate over text nodes only
    const walker = document.createTreeWalker(verseEl, NodeFilter.SHOW_TEXT, null, false);
    let node;
    const nodesToProcess = []; // Collect nodes to avoid issues while modifying live list
    while (node = walker.nextNode()) {
        nodesToProcess.push(node);
    }

    for (const textNode of nodesToProcess) {
        if (replaced && !textToFind.includes(textNode.nodeValue)) { // Simple optimization if we only want to replace first
            // If you want to replace ALL occurrences, remove this 'replaced &&' check
            // but be aware that DOM manipulation in a loop needs care.
            // For now, let's target the first clear match.
        }

        let matchIndex = textNode.nodeValue.indexOf(textToFind);
        if (matchIndex !== -1) {
            // Found the text within this text node
            const parent = textNode.parentNode;
            if (!parent || parent.closest('.partial-note-anchor')) { // Avoid re-wrapping inside an existing anchor
                continue;
            }

            // Create the icon
            const icon = document.createElement('i');
            icon.className = 'fas fa-map-pin verse-indicator partial-note-icon'; // New distinct icon
            icon.dataset.noteId = partialNote.id;
            icon.title = `Note on: "${partialNote.selectedText.substring(0, 20)}..."`;

            // Create a wrapper span for the text and the icon to make them clickable together
            const anchorSpan = document.createElement('span');
            anchorSpan.className = 'partial-note-anchor';
            anchorSpan.dataset.noteId = partialNote.id;
            anchorSpan.title = `Note on: "${partialNote.selectedText.substring(0, 20)}..."`;

            // Split the text node
            const textBefore = textNode.nodeValue.substring(0, matchIndex);
            const matchedText = textNode.nodeValue.substring(matchIndex, matchIndex + textToFind.length);
            const textAfter = textNode.nodeValue.substring(matchIndex + textToFind.length);

            // Reconstruct: textBefore -> anchorSpan(matchedText + icon) -> textAfter
            if (textBefore) {
                parent.insertBefore(document.createTextNode(textBefore), textNode);
            }

            anchorSpan.appendChild(document.createTextNode(matchedText)); // Add the matched text to the anchor
            anchorSpan.appendChild(icon); // Add the icon to the anchor
            parent.insertBefore(anchorSpan, textNode);

            if (textAfter) {
                parent.insertBefore(document.createTextNode(textAfter), textNode);
            }

            parent.removeChild(textNode); // Remove the original combined text node
            
            replaced = true; // Mark that we've made a replacement
            console.log(`PARTIAL NOTES DOM: Inserted indicator for note ID ${partialNote.id} next to text "${textToFind}"`);
            
            // For simplicity, this replaces the first occurrence found.
            // Replacing all occurrences robustly with DOM manipulation is more complex
            // as node lists change. If 'g' flag behavior is critical, this needs expansion.
            break; // Process only the first match for this note in this verse for now
        }
    }
    return replaced;
}

function getPopupRef() {
  const popup = document.getElementById('verseActionPopup');
  return {
    versionName: popup.dataset.versionName,
    bookNumber: parseInt(popup.dataset.bookNumber),
    chapter: parseInt(popup.dataset.chapter),
    verse: parseInt(popup.dataset.verse)
  };
}

function openAppDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('BibleReaderDB', 2);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}


function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function syncScroll(scrollingElement, targetElement) {
    if (isScrollingProgrammatically) {
        return;
    }
    isScrollingProgrammatically = true;
    targetElement.scrollTop = scrollingElement.scrollTop;
    clearTimeout(scrollingElement._scrollTimeout);
    scrollingElement._scrollTimeout = setTimeout(() => {
        isScrollingProgrammatically = false;
    }, 50);
}

function showPanel(panelToShow) {
	console.log("LOG: showPanel - Showing:", panelToShow ? panelToShow.id : 'null');
    const panels = [uploadPanel, searchPanel, commentaryUploadPanel, userDataPanel, bookChapterVerseSelector, bibleContentView];
    panels.forEach(panel => {
        if (panel === panelToShow) {
            panel.classList.remove('hidden');
        } else {
            panel.classList.add('hidden');
        }
    });
    // Sidebar visibility
    if (panelToShow === bibleContentView || panelToShow === bookChapterVerseSelector || panelToShow === searchPanel || panelToShow === commentaryUploadPanel || panelToShow === userDataPanel) {
        sidebar.classList.remove('hidden');
    } else {
        sidebar.classList.add('hidden');
    }
}

function updateViewModeDisplay() {
    if (!parallelContainer || !toggleViewBtn) {
        console.warn("updateViewModeDisplay: parallelContainer or toggleViewBtn DOM element not found.");
        return;
    }

    if (currentViewMode === 'single') {
        parallelContainer.classList.add('single-view');
        toggleViewBtn.innerHTML = '<i class="fas fa-file-alt"></i>'; // Single view icon
        toggleViewBtn.title = 'Switch to Parallel View';
        console.log("View mode set to single.");
    } else { // Parallel view
        parallelContainer.classList.remove('single-view');
        toggleViewBtn.innerHTML = '<i class="fas fa-columns"></i>'; // Parallel view icon
        toggleViewBtn.title = 'Switch to Single View';
        console.log("View mode set to parallel.");
    }
}

function toggleViewMode() {
    console.log("toggleViewMode called. Current mode was:", currentViewMode);
    currentViewMode = (currentViewMode === 'parallel') ? 'single' : 'parallel';
    console.log("New view mode set to:", currentViewMode);
    saveLastReadPosition(); // Save the new view mode preference
    updateViewModeDisplay(); // Update button icon/title and container class
    if (currentBook && currentChapter) {
        // Reload content to apply view mode (e.g., show/hide secondary column)
        loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
    }
}

function determineOtNtRanges(dbInstance) {
    try {
        const allBooks = loadedVersions[activeVersions.primary].books;
        
        let otEndBookNumber = null;
        let ntStartBookNumber = null;

        const malachi = allBooks.find(b => b.long_name.toLowerCase() === 'malachi' || b.short_name.toLowerCase() === 'mal');
        const matthew = allBooks.find(b => b.long_name.toLowerCase() === 'matthew' || b.short_name.toLowerCase() === 'matt');

        if (malachi) otEndBookNumber = malachi.book_number;
        if (matthew) ntStartBookNumber = matthew.book_number;

        if (!otEndBookNumber && allBooks.length > 39) {
            otEndBookNumber = allBooks[38].book_number;
        }
        if (!ntStartBookNumber && allBooks.length > 40) {
            ntStartBookNumber = allBooks[39].book_number;
        }
        
        const minBookNumber = allBooks.length > 0 ? allBooks[0].book_number : 1;
        const maxBookNumber = allBooks.length > 0 ? allBooks[allBooks.length - 1].book_number : 66;

        oldTestamentBookRange = { 
            start: minBookNumber, 
            end: otEndBookNumber || maxBookNumber 
        };
        newTestamentBookRange = { 
            start: ntStartBookNumber || minBookNumber,
            end: maxBookNumber 
        };

        console.log("OT Range:", oldTestamentBookRange);
        console.log("NT Range:", newTestamentBookRange);

    } catch (err) {
        console.error("Could not determine OT/NT book ranges:", err);
        oldTestamentBookRange = { start: 1, end: 66 };
        newTestamentBookRange = { start: 1, end: 66 };
    }
}

function getNextBook(currentBookNumber) {
    if (!activeVersions.primary || !loadedVersions[activeVersions.primary] || !loadedVersions[activeVersions.primary].books) {
        return null;
    }
    const books = loadedVersions[activeVersions.primary].books;
    const currentIndex = books.findIndex(b => b.book_number === currentBookNumber);
    if (currentIndex !== -1 && currentIndex < books.length - 1) {
        return books[currentIndex + 1];
    }
    return null;
}

function getPreviousBook(currentBookNumber) {
    if (!activeVersions.primary || !loadedVersions[activeVersions.primary] || !loadedVersions[activeVersions.primary].books) {
        return null;
    }
    const books = loadedVersions[activeVersions.primary].books;
    const currentIndex = books.findIndex(b => b.book_number === currentBookNumber);
    if (currentIndex > 0) {
        return books[currentIndex - 1];
    }
    return null;
}

function uint8ArrayToBase64ViaFileReader(uint8Array) {
    return new Promise((resolve, reject) => {
        const blob = new Blob([uint8Array], { type: 'application/octet-stream' });
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result.split(',')[1];
            resolve(base64String);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

// --- IndexedDB Management Functions (Generic CRUD for any store) ---
document.addEventListener('mouseup', (event) => {
    // If the mouseup event originates from within one of our known interactive UI elements
    // (popups, pickers), we should not clear the selection, as the user might be
    // interacting with those elements based on a prior text selection.
    // Let their specific handlers manage selection clearing if needed.
    if (event.target.closest('#verseActionPopup') ||
        event.target.closest('#highlightColorPicker') ||
        event.target.closest('#highlightPicker') ||
        event.target.closest('.selection-modal') || // For new theme/version/commentary popups
        event.target.closest('#noteModal') ||       // For the note modal itself
        event.target.closest('#bookmarkModal')) {   // For the bookmark modal
        // console.log("MouseUp event inside an interactive UI element, not clearing global text selection here.");
        return;
    }

    const selection = window.getSelection();

    // If no selection object or no range selected, clear our tracked state
    if (!selection || selection.rangeCount === 0) {
        if (latestSelection || latestSelectedText) { // Clear only if they had values
            // console.log("[MouseUp] No selection range, clearing tracked selection.");
            latestSelection = null;
            latestSelectedText = '';
        }
        return;
    }

    const range = selection.getRangeAt(0);

    // If the selection is collapsed (it's a click, not a drag), clear our tracked state
    if (range.collapsed) {
        if (latestSelection || latestSelectedText) { // Clear only if they had values
            // console.log("[MouseUp] Collapsed selection (click), clearing tracked selection.");
            latestSelection = null;
            latestSelectedText = '';
        }
        return;
    }

    const selectedText = selection.toString().trim();

    // Try to determine if the selection is meaningfully within a verse paragraph
    let verseElement = null;
    const commonAncestor = range.commonAncestorContainer;
    if (commonAncestor) {
        // Navigate up to find the closest verse paragraph from the selection's common ancestor
        verseElement = commonAncestor.nodeType === Node.TEXT_NODE ?
            commonAncestor.parentElement.closest('.verse-paragraph') :
            commonAncestor.closest('.verse-paragraph');
    }

    // Only save the selection if actual text was selected AND it's clearly within a verse paragraph
    if (selectedText && verseElement) {
        // Further check: ensure both start and end of the selection are within the same verseElement.
        // This helps prevent capturing selections that span across multiple <p> tags or outside verses.
        const startContainerVerse = range.startContainer.nodeType === Node.TEXT_NODE ?
                                   range.startContainer.parentElement.closest('.verse-paragraph') :
                                   range.startContainer.closest('.verse-paragraph');
        const endContainerVerse = range.endContainer.nodeType === Node.TEXT_NODE ?
                                 range.endContainer.parentElement.closest('.verse-paragraph') :
                                 range.endContainer.closest('.verse-paragraph');

        if (startContainerVerse === verseElement && endContainerVerse === verseElement) {
            latestSelection = range.cloneRange(); // Store the Range object
            latestSelectedText = selectedText;    // Store the selected text string
            console.log(`[MouseUp] Text selected: "${latestSelectedText}" in verse ${verseElement.dataset.verse} of ${verseElement.dataset.versionName}`);
        } else {
            // Selection spans elements or its boundaries are not clearly within this single verse.
            // console.log("[MouseUp] Selection spans elements or invalid verse context, clearing tracked selection.");
            latestSelection = null;
            latestSelectedText = '';
        }
    } else {
        // No text selected after trim, or selection not anchored within a verse context.
        // console.log("[MouseUp] No trimmed text or not in verse context, clearing tracked selection.");
        latestSelection = null;
        latestSelectedText = '';
    }
});

function openIndexedDB() {
    return new Promise((resolve, reject) => {
        if (dbPromise && dbPromise.readyState === 'open') {
            resolve(dbPromise);
            return;
        }
        
        const request = indexedDB.open(DB_NAME, DB_VERSION);

request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const oldVersion = event.oldVersion;
    console.log(`DB onupgradeneeded: Upgrading from version ${oldVersion} to ${db.version}.`);

    // Object stores for Bible and Commentary files
    if (oldVersion < 1 || !db.objectStoreNames.contains(OBJECT_STORE_NAME)) { // OBJECT_STORE_NAME = 'bibleVersions'
        console.log("DB onupgradeneeded: Creating/ensuring 'bibleVersions' store.");
        db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'versionName' });
    }
    if (oldVersion < 1 || !db.objectStoreNames.contains(COMMENTARY_STORE_NAME)) { // COMMENTARY_STORE_NAME = 'commentaryVersions'
        console.log("DB onupgradeneeded: Creating/ensuring 'commentaryVersions' store.");
        db.createObjectStore(COMMENTARY_STORE_NAME, { keyPath: 'versionName' });
    }

    // User data stores (Highlights, Notes, Bookmarks) - assume these are new for DB_VERSION = 2
    // If event.oldVersion is 0, it's a new DB, create everything.
    // If event.oldVersion is 1, it's an upgrade from v1 to v2, so create these new stores.
    if (oldVersion < 2) {
        console.log("DB onupgradeneeded: Version < 2 detected, creating user data stores and indexes.");
        if (!db.objectStoreNames.contains(HIGHLIGHTS_STORE_NAME)) {
            console.log("DB onupgradeneeded: Creating highlights store with 'byVerse' index.");
            const highlightsStore = db.createObjectStore(HIGHLIGHTS_STORE_NAME, { keyPath: 'id', autoIncrement: true });
            highlightsStore.createIndex('byVerse', ['versionName', 'bookNumber', 'chapter', 'verse'], { unique: false });
        } else { // Store exists, ensure index exists if upgrading from a version that might not have it
            const transaction = event.target.transaction; // Get transaction from event
            const highlightsStore = transaction.objectStore(HIGHLIGHTS_STORE_NAME);
            if (!highlightsStore.indexNames.contains('byVerse')) {
                console.log("DB onupgradeneeded: 'highlights' store exists, creating missing 'byVerse' index.");
                highlightsStore.createIndex('byVerse', ['versionName', 'bookNumber', 'chapter', 'verse'], { unique: false });
            }
        }

        if (!db.objectStoreNames.contains(NOTES_STORE_NAME)) {
            console.log("DB onupgradeneeded: Creating notes store with 'byVerse' index.");
            const notesStore = db.createObjectStore(NOTES_STORE_NAME, { keyPath: 'id', autoIncrement: true });
            notesStore.createIndex('byVerse', ['versionName', 'bookNumber', 'chapter', 'verse'], { unique: false });
        } else {
            const transaction = event.target.transaction;
            const notesStore = transaction.objectStore(NOTES_STORE_NAME);
            if (!notesStore.indexNames.contains('byVerse')) {
                console.log("DB onupgradeneeded: 'notes' store exists, creating missing 'byVerse' index.");
                notesStore.createIndex('byVerse', ['versionName', 'bookNumber', 'chapter', 'verse'], { unique: false });
            }
        }

        if (!db.objectStoreNames.contains(BOOKMARKS_STORE_NAME)) {
            console.log("DB onupgradeneeded: Creating bookmarks store with 'byVerse' and 'byCategory' indexes.");
            const bookmarksStore = db.createObjectStore(BOOKMARKS_STORE_NAME, { keyPath: 'id', autoIncrement: true });
            bookmarksStore.createIndex('byVerse', ['versionName', 'bookNumber', 'chapter', 'verse'], { unique: false });
            bookmarksStore.createIndex('byCategory', 'category', { unique: false });
        } else {
            const transaction = event.target.transaction;
            const bookmarksStore = transaction.objectStore(BOOKMARKS_STORE_NAME);
            if (!bookmarksStore.indexNames.contains('byVerse')) {
                console.log("DB onupgradeneeded: 'bookmarks' store exists, creating missing 'byVerse' index.");
                bookmarksStore.createIndex('byVerse', ['versionName', 'bookNumber', 'chapter', 'verse'], { unique: false });
            }
            if (!bookmarksStore.indexNames.contains('byCategory')) {
                console.log("DB onupgradeneeded: 'bookmarks' store exists, creating missing 'byCategory' index.");
                bookmarksStore.createIndex('byCategory', 'category', { unique: false });
            }
        }
    }
    console.log("DB onupgradeneeded: Schema setup process completed for version", db.version);
};

        request.onsuccess = (event) => {
            dbPromise = event.target.result;
            console.log('IndexedDB opened successfully:', dbPromise);
            resolve(dbPromise);
        };

        request.onerror = (event) => {
            console.error('IndexedDB error:', event.target.errorCode, event.target.error);
            reject(event.target.error);
        };
    });
}

// Generic put (create/update) into any IndexedDB store
async function putIndexedDB(storeName, data) { // Data object must contain keyPath (e.g., versionName or id)
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.put(data);

        request.onsuccess = () => {
            console.log(`IndexedDB (${storeName}): Saved data for key "${data.versionName || data.id}".`);
            resolve(request.result); // For auto-incremented keys, this is the new ID
        };

        request.onerror = (event) => {
            console.error(`IndexedDB (${storeName}): Error saving data for key "${data.versionName || data.id}":`, event.target.error);
            reject(event.target.error);
        };
    });
}

// Generic get from any IndexedDB store by keyPath
async function getIndexedDB(storeName, key) {
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.get(key);

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onerror = (event) => {
            console.error(`IndexedDB (${storeName}): Error retrieving key "${key}":`, event.target.error);
            reject(event.target.error);
        };
    });
}

// Generic delete from any IndexedDB store by keyPath
async function deleteIndexedDB(storeName, key) {
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.delete(key);

        request.onsuccess = () => {
            console.log(`IndexedDB (${storeName}): Deleted key "${key}".`);
            resolve();
        };

        request.onerror = (event) => {
            console.error(`IndexedDB (${storeName}): Error deleting key "${key}":`, event.target.error);
            reject(event.target.error);
        };
    });
}

// Generic get all from any IndexedDB store (e.g., for listing)
async function getAllIndexedDB(storeName, indexName = null, query = null) {
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readonly');
        const store = transaction.objectStore(storeName);
        let req;
        if (indexName && query) {
            const index = store.index(indexName);
            req = index.getAll(query);
        } else {
            req = store.getAll();
        }

        req.onsuccess = () => resolve(req.result);
        req.onerror = (event) => {
            console.error(`IndexedDB (${storeName}): Error getting all data:`, event.target.error);
            reject(event.target.error);
        };
    });
}


// --- Persistence Functions ---

function saveLastReadPosition() {
    const position = {
        book: currentBook,
        chapter: currentChapter,
        verse: currentVerse,
        activeVersions: activeVersions,
        activeCommentary: activeCommentary,
        viewMode: currentViewMode
    };
    try {
        localStorage.setItem(LAST_READ_KEY, JSON.stringify(position));
    } catch (e) {
        console.error("Error saving last read position to localStorage:", e);
    }
}

async function saveLoadedVersionsMetadata() {
    try {
        const versionNamesInDB = Object.keys(loadedVersions);
        localStorage.setItem(LOADED_VERSIONS_STORAGE_KEY, JSON.stringify(versionNamesInDB));
    } catch (e) {
        console.error("Error saving loaded versions metadata (to localStorage):", e);
        statusMessage.textContent = 'Warning: Could not save Bible version list to local storage. They may not persist across sessions.';
        statusMessage.classList.add('error');
    }
}

async function saveLoadedCommentariesMetadata() {
    try {
        const commentaryNamesInDB = Object.keys(loadedCommentaries);
        localStorage.setItem(LOADED_COMMENTARIES_STORAGE_KEY, JSON.stringify(commentaryNamesInDB));
    } catch (e) {
        console.error("Error saving loaded commentaries metadata (to localStorage):", e);
        commentaryStatusMessage.textContent = 'Warning: Could not save Commentary list to local storage. They may not persist across sessions.';
        commentaryStatusMessage.classList.add('error');
    }
}

async function loadSavedVersionsMetadata() {
    try {
        await openIndexedDB();

        const storedVersionNames = localStorage.getItem(LOADED_VERSIONS_STORAGE_KEY);
        if (storedVersionNames) {
            const versionNames = JSON.parse(storedVersionNames);
            
            const promises = versionNames.map(async (versionName) => {
                const data = await getIndexedDB(OBJECT_STORE_NAME, versionName);
                if (data && data.fileData && data.books) {
                    loadedVersions[versionName] = {
                        fileData: data.fileData,
                        db: null,
                        books: data.books
                    };
                } else {
                    console.warn(`IndexedDB: Bible data for ${versionName} incomplete or not found, skipping.`);
                }
            });
            await Promise.all(promises);

            updateLoadedVersionsList();
            //updateVersionSelects();
            statusMessage.textContent = `Loaded ${Object.keys(loadedVersions).length} saved Bible versions metadata.`;
        } else {
            console.log("No saved Bible versions metadata in localStorage.");
        }
    } catch (e) {
        console.error("Error loading saved Bible versions metadata (from localStorage/IndexedDB):", e);
        localStorage.removeItem(LOADED_VERSIONS_STORAGE_KEY);
        statusMessage.textContent = 'Error loading saved Bibles. List cleared.';
        statusMessage.classList.add('error');
    }
}

async function loadSavedCommentariesMetadata() {
    try {
        await openIndexedDB();

        const storedCommentaryNames = localStorage.getItem(LOADED_COMMENTARIES_STORAGE_KEY);
        if (storedCommentaryNames) {
            const commentaryNames = JSON.parse(storedCommentaryNames);
            
            const promises = commentaryNames.map(async (commentaryName) => {
                const data = await getIndexedDB(COMMENTARY_STORE_NAME, commentaryName);
                if (data && data.fileData && data.metadata) {
                    loadedCommentaries[commentaryName] = {
                        fileData: data.fileData,
                        db: null,
                        metadata: data.metadata
                    };
                } else {
                    console.warn(`IndexedDB: Commentary data for ${commentaryName} incomplete or not found, skipping.`);
                }
            });
            await Promise.all(promises);

            updateLoadedCommentariesList();
//updateCommentarySelects();
            commentaryStatusMessage.textContent = `Loaded ${Object.keys(loadedCommentaries).length} saved Commentaries.`;
        } else {
            console.log("No saved Commentaries metadata in localStorage.");
        }
    } catch (e) {
        console.error("Error loading saved Commentaries metadata (from localStorage/IndexedDB):", e);
        localStorage.removeItem(LOADED_COMMENTARIES_STORAGE_KEY);
        commentaryStatusMessage.textContent = 'Error loading saved Commentaries. List cleared.';
        commentaryStatusMessage.classList.add('error');
    }
}


// --- Bible Version Management Functions ---

async function addBibleVersion() {
    console.log("AddVersionBtn clicked: addBibleVersion function started."); // New log
    const fileInput = document.getElementById('bibleFile');
    const file = fileInput.files[0];
    const versionName = versionNameInput.value.trim();

    console.log("AddVersionBtn: File selected:", file ? file.name : "No file", "Version name input:", versionName); // New log

    if (!file) {
        statusMessage.textContent = 'Please select a file.';
        statusMessage.classList.add('error');
        console.log("AddVersionBtn: No file selected. Exiting."); // New log
        return;
    }
    if (!versionName) {
        statusMessage.textContent = 'Please enter a version name.';
        statusMessage.classList.add('error');
        return;
    }
    if (loadedVersions[versionName]) {
        statusMessage.textContent = `Version "${versionName}" already loaded.`;
        statusMessage.classList.add('error');
        return;
    }

    statusMessage.textContent = `Adding ${versionName}... This might take a moment.`;
    statusMessage.classList.remove('error');

    try {
        const arrayBuffer = await readFileAsync(file);
        const uint8Array = new Uint8Array(arrayBuffer);
        const dbInstance = new SQL.Database(uint8Array);

        const bookData = [];
        const stmt = dbInstance.prepare("SELECT book_number, long_name, short_name FROM books ORDER BY book_number ASC;");
        while(stmt.step()) {
            bookData.push(stmt.getAsObject());
        }
        stmt.free();
        dbInstance.close();

        await putIndexedDB(OBJECT_STORE_NAME, { versionName: versionName, fileData: uint8Array, books: bookData });

        loadedVersions[versionName] = {
            fileData: uint8Array,
            db: null,
            books: bookData
        };

        if (activeVersions.primary) {
            determineOtNtRanges(activeDbs.primary);
        }

        await saveLoadedVersionsMetadata();
        updateLoadedVersionsList();
        //updateVersionSelects();
        if (bibleVersionSelectModal && !bibleVersionSelectModal.classList.contains('hidden')) {
            populateBibleVersionModal();
        }
        statusMessage.textContent = `Version "${versionName}" added and loaded!`;
        versionNameInput.value = '';
        bibleFileInput.value = '';

        if (!activeVersions.primary) {

            await setActiveVersion('primary', versionName);
        } else if (!activeVersions.secondary) {

            await setActiveVersion('secondary', versionName);
        }

    } catch (err) {
        console.error("Error adding version:", err);
        statusMessage.textContent = `Error adding version: ${err.message}`;
        if (err.name === 'QuotaExceededError') {
            statusMessage.textContent = 'Error: Bible file too large for browser storage quota. Please try a smaller file.';
        } else if (err.name === 'ConstraintError') {
            statusMessage.textContent = `Error: Version "${versionName}" already exists in storage. Please choose a different name.`;
        }
        statusMessage.classList.add('error');
        delete loadedVersions[versionName];
        deleteIndexedDB(OBJECT_STORE_NAME, versionName).catch(e => console.error("Failed to cleanup IDB entry:", e));
        updateLoadedVersionsList();
        if (typeof populateBibleVersionModal === "function") {
             populateBibleVersionModal();
        }
    }
}

function removeBibleVersion(versionName) {
    if (confirm(`Are you sure you want to remove "${versionName}"?`)) {
        deleteIndexedDB(OBJECT_STORE_NAME, versionName)
            .then(() => console.log(`Deleted ${versionName} from IndexedDB.`))
            .catch(err => {
                console.error(`Error deleting ${versionName} from IndexedDB:`, err);
                statusMessage.textContent = `Warning: Could not fully delete ${versionName} from storage. Error: ${err.message}`;
                statusMessage.classList.add('error');
            });

        delete loadedVersions[versionName];
        if (activeVersions.primary === versionName) activeVersions.primary = null;
        if (activeVersions.secondary === versionName) activeVersions.secondary = null;

        updateLoadedVersionsList();
        //updateVersionSelects();
        saveLastReadPosition();
        saveLoadedVersionsMetadata();


        if (!activeVersions.primary) {
            activeDbs.primary = null;
            currentBook = null;
            currentChapter = null;
            currentVerse = null;
            saveLastReadPosition();
            oldTestamentBookRange = { start: null, end: null };
            newTestamentBookRange = { start: null, end: null };

            if (Object.keys(loadedVersions).length > 0) {
                 primaryVersionSelect.value = Object.keys(loadedVersions)[0];
                 setActiveVersion('primary', primaryVersionSelect.value);
            } else {
                 showPanel(uploadPanel);
                 statusMessage.textContent = 'No primary Bible version loaded. Please add one.';
                 primaryBibleContent.innerHTML = '';
                 secondaryBibleContent.innerHTML = '';
                 primaryChapterTitle.textContent = '';
                 secondaryChapterTitle.textContent = '';
                 currentChapterDisplay.textContent = '';
                 sidebar.classList.add('hidden');
            }
        }
        if (!activeVersions.secondary) {
            activeDbs.secondary = null;
            secondaryBibleContent.innerHTML = '';
            secondaryChapterTitle.textContent = '';
        }

        if (activeVersions.primary && currentBook && currentChapter) {
            loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
        }
    }
}

async function setActiveVersion(type, versionName) {
    if (activeVersions[type] === versionName) return;

    activeVersions[type] = versionName;
    if (versionName && loadedVersions[versionName]) {
        if (!loadedVersions[versionName].db) {
            statusMessage.textContent = `Loading ${versionName} from storage...`;
            try {
                const dataFromDB = await getIndexedDB(OBJECT_STORE_NAME, versionName);
                if (dataFromDB && dataFromDB.fileData) {
                    loadedVersions[versionName].fileData = dataFromDB.fileData;
                    loadedVersions[versionName].db = new SQL.Database(dataFromDB.fileData);
                    loadedVersions[versionName].books = dataFromDB.books;
                    statusMessage.textContent = `${versionName} loaded from storage.`;
                } else {
                    throw new Error(`File data for ${versionName} not found in storage.`);
                }
            } catch (err) {
                console.error(`Error loading ${versionName} from storage:`, err);
                statusMessage.textContent = `Error: Could not load data for version "${versionName}". It might be corrupted or missing.`;
                statusMessage.classList.add('error');
                activeVersions[type] = null;
                if (type === 'primary') {
                    primaryVersionSelect.value = '';
                    showPanel(uploadPanel);
                } else {
                    secondaryVersionSelect.value = '';
                }
                return;
            }
        }
        activeDbs[type] = loadedVersions[versionName].db;
    } else {
        activeDbs[type] = null;
    }
determineOtNtRanges(activeDbs.primary); 
    if (type === 'primary' && activeVersions.secondary === versionName) {
        secondaryVersionSelect.value = '';
        activeVersions.secondary = null;
        activeDbs.secondary = null;
        secondaryBibleContent.innerHTML = '';
        secondaryChapterTitle.textContent = '';
        statusMessage.textContent = 'Secondary version cannot be the same as primary. Cleared secondary.';
    } else if (type === 'secondary' && activeVersions.primary === versionName) {
        secondaryVersionSelect.value = '';
        activeVersions.secondary = null;
        activeDbs.secondary = null;
        secondaryBibleContent.innerHTML = '';
        secondaryChapterTitle.textContent = '';
        statusMessage.textContent = 'Secondary version cannot be the same as primary. Cleared secondary.';
    }


    if (type === 'primary' && activeVersions.primary) {
        determineOtNtRanges(activeDbs.primary);
        showBooksList();
        if (currentBook && currentChapter) {
            loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
        } else {
            const primaryBooks = loadedVersions[activeVersions.primary].books;
            if (primaryBooks.length > 0) {
                currentBook = primaryBooks[0];
                currentChapter = 1;
                currentVerse = null;
                showChaptersGrid(currentBook);
            } else {
                showPanel(bookChapterVerseSelector);
            }
        }
    } else if (type === 'secondary' && activeVersions.secondary && currentBook && currentChapter) {
        loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
    } else if (!activeVersions.primary) {
        showPanel(uploadPanel);
        statusMessage.textContent = 'Please select a primary Bible version.';
        primaryBibleContent.innerHTML = '';
        secondaryBibleContent.innerHTML = '';
        primaryChapterTitle.textContent = '';
        secondaryChapterTitle.textContent = '';
        currentChapterDisplay.textContent = '';
        sidebar.classList.add('hidden');
    }

    saveLastReadPosition();
}

function updateVersionSelects() {
    const versions = Object.keys(loadedVersions);
    const createOptions = (selectElement) => {
        selectElement.innerHTML = '<option value="">-- Select --</option>';
        versions.forEach(versionName => {
            const option = document.createElement('option');
            option.value = versionName;
            option.textContent = versionName;
            selectElement.appendChild(option);
        });
    };

    createOptions(primaryVersionSelect);
    createOptions(secondaryVersionSelect);

    if (activeVersions.primary) primaryVersionSelect.value = activeVersions.primary;
    if (activeVersions.secondary) secondaryVersionSelect.value = activeVersions.secondary;
}

function updateLoadedVersionsList() {
    loadedVersionsList.innerHTML = ''; // Clear previous items
    if (Object.keys(loadedVersions).length === 0) {
        loadedVersionsList.innerHTML = '<p class="placeholder" style="text-align:center; width:100%; padding: 20px 0;">No Bible versions loaded yet.</p>';
        return;
    }
    for (const versionName in loadedVersions) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('grid-list-item'); // Class for individual item styling

        const icon = document.createElement('i');
        icon.className = 'fas fa-book-bible item-icon'; // Font Awesome Bible icon

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('item-name');
        nameSpan.textContent = versionName;
        nameSpan.title = versionName; // Show full name on hover if it's truncated

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-item-btn');
        removeBtn.title = `Remove ${versionName}`;
        removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Font Awesome trash icon

        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent any parent click listeners if itemDiv becomes clickable
            removeBibleVersion(versionName);
        });

        itemDiv.appendChild(icon);
        itemDiv.appendChild(nameSpan);
        itemDiv.appendChild(removeBtn);
        loadedVersionsList.appendChild(itemDiv);
    }
}

// --- Commentary Management Functions ---

async function addCommentary() {
    console.log("FUNCTION CALL: addCommentary() started.");
    const fileInput = document.getElementById('commentaryFile'); // Ensure this ID matches your HTML
    const nameInput = document.getElementById('commentaryNameInput'); // Ensure this ID matches

    if (!fileInput || !nameInput) {
        console.error("addCommentary: commentaryFile or commentaryNameInput element not found!");
        if (commentaryStatusMessage) { // Check if commentaryStatusMessage exists
            commentaryStatusMessage.textContent = 'Error: UI elements missing for adding commentary.';
            commentaryStatusMessage.classList.add('error');
        }
        return;
    }

    const file = fileInput.files[0];
    const commentaryName = nameInput.value.trim();

    console.log("addCommentary: File selected:", file ? file.name : "No file", "Commentary name:", `'${commentaryName}'`);

    if (!file) {
        commentaryStatusMessage.textContent = 'Please select a commentary file.';
        commentaryStatusMessage.classList.add('error');
        return;
    }
    if (!commentaryName) {
        commentaryStatusMessage.textContent = 'Please enter a commentary name.';
        commentaryStatusMessage.classList.add('error');
        return;
    }
    if (loadedCommentaries[commentaryName]) {
        commentaryStatusMessage.textContent = `Commentary "${commentaryName}" already loaded.`;
        commentaryStatusMessage.classList.add('error');
        return;
    }

    commentaryStatusMessage.textContent = `Adding ${commentaryName}... This might take a moment.`;
    commentaryStatusMessage.classList.remove('error');

    try {
        const arrayBuffer = await readFileAsync(file);
        const uint8Array = new Uint8Array(arrayBuffer);
        const dbInstance = new SQL.Database(uint8Array); // Temporary instance to read metadata

        let commentaryBookMetadata = {};
        try {
            // Attempt to read book metadata if the commentary DB has a 'books' table
            const stmt = dbInstance.prepare("SELECT book_number, long_name, short_name FROM books ORDER BY book_number ASC;");
            while(stmt.step()) {
                const row = stmt.getAsObject();
                commentaryBookMetadata[row.book_number] = { long_name: row.long_name, short_name: row.short_name };
            }
            stmt.free();
        } catch (e) {
            console.warn("Commentary DB does not have a 'books' table or structure is different. Metadata might be limited.", e);
            commentaryBookMetadata = {}; // Default to empty if not found or error
        }
        dbInstance.close(); // Close the temporary DB instance

        // Store the raw file data and metadata
        await putIndexedDB(COMMENTARY_STORE_NAME, { 
            versionName: commentaryName, // Using 'versionName' as keyPath like Bibles
            fileData: uint8Array, 
            metadata: { books: commentaryBookMetadata } 
        });

        loadedCommentaries[commentaryName] = {
            fileData: uint8Array, // Keep raw data to initialize DB when made active
            db: null,             // DB instance will be created by setActiveCommentary
            metadata: { books: commentaryBookMetadata }
        };

        await saveLoadedCommentariesMetadata(); // Update list in localStorage
        updateLoadedCommentariesList();         // Refresh the grid display in the "Manage Commentaries" panel

        // DO NOT CALL updateCommentarySelects(); - It's for the old top-bar select

        commentaryStatusMessage.textContent = `Commentary "${commentaryName}" added and loaded!`;
        nameInput.value = '';      // Clear the name input field
        fileInput.value = '';      // Clear the file input field

        // If no commentary is currently active, set the new one as active.
        if (!activeCommentary) {
            // DO NOT DO: commentarySelect.value = commentaryName; // Old select is gone
            await setActiveCommentary(commentaryName); // This is the correct way
        }

        // If the new commentary selection popup is currently open, refresh its content
        if (commentarySelectModal && !commentarySelectModal.classList.contains('hidden')) {
            populateCommentaryModal();
        }

    } catch (err) {
        console.error("Error adding commentary:", err);
        commentaryStatusMessage.textContent = `Error adding commentary: ${err.message}`;
        if (err.name === 'QuotaExceededError') {
            commentaryStatusMessage.textContent = 'Error: Commentary file too large for browser storage quota.';
        } else if (err.name === 'ConstraintError') { // This might occur if versionName is not unique for the store keyPath
            commentaryStatusMessage.textContent = `Error: Commentary "${commentaryName}" already exists in storage or key conflict.`;
        }
        commentaryStatusMessage.classList.add('error');

        delete loadedCommentaries[commentaryName]; // Clean up in-memory object
        // Attempt to clean up IndexedDB entry if save failed partway or constraint error
        deleteIndexedDB(COMMENTARY_STORE_NAME, commentaryName).catch(e => console.warn("Cleanup: Failed to delete potentially partial commentary from IDB:", e));

        updateLoadedCommentariesList(); // Refresh the list in the panel
        // Refresh popup list if open
        if (commentarySelectModal && !commentarySelectModal.classList.contains('hidden')) {
            populateCommentaryModal();
        }
    }
}

function removeCommentary(commentaryName) {
    if (confirm(`Are you sure you want to remove "${commentaryName}"?`)) {
        deleteIndexedDB(COMMENTARY_STORE_NAME, commentaryName)
            .then(() => console.log(`Deleted ${commentaryName} from IndexedDB.`))
            .catch(err => {
                console.error(`Error deleting ${commentaryName} from IndexedDB:`, err);
                commentaryStatusMessage.textContent = `Warning: Could not fully delete ${commentaryName} from storage. Error: ${err.message}`;
                commentaryStatusMessage.classList.add('error');
            });

        delete loadedCommentaries[commentaryName];
        if (activeCommentary === commentaryName) activeCommentary = null;

        updateLoadedCommentariesList();
        //updateCommentarySelects();
        saveLastReadPosition();
        saveLoadedCommentariesMetadata();

        if (!activeCommentary && currentBook && currentChapter) {
             loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
        }
    }
}

async function setActiveCommentary(commentaryName) {
    if (activeCommentary === commentaryName) {
        // If clicking the already active commentary, perhaps deselect it (set to no commentary)
        // Or if commentaryName is "" or null, then deselect.
        if (!commentaryName) { 
            console.log("Setting active commentary to None.");
        } else {
            console.log("Commentary already active:", commentaryName);
            return; // No change needed if already active and not deselecting
        }
    }

    activeCommentary = commentaryName || null; // Set to null if empty string passed
    activeCommentaryDb = null; // Reset DB instance first

    if (activeCommentary && loadedCommentaries[activeCommentary]) {
        const commentaryData = loadedCommentaries[activeCommentary];
        if (!commentaryData.db) { // If DB not yet initialized for this session
            if (commentaryStatusMessage) commentaryStatusMessage.textContent = `Loading ${activeCommentary} from storage...`;
            try {
                // fileData should have been loaded by loadSavedCommentariesMetadata or addCommentary
                if (commentaryData.fileData) {
                    commentaryData.db = new SQL.Database(commentaryData.fileData);
                    if (commentaryStatusMessage) commentaryStatusMessage.textContent = `${activeCommentary} loaded.`;
                } else {
                    // Attempt to re-fetch from IndexedDB if fileData is missing in memory
                    const dataFromDB = await getIndexedDB(COMMENTARY_STORE_NAME, activeCommentary);
                    if (dataFromDB && dataFromDB.fileData) {
                        commentaryData.fileData = dataFromDB.fileData;
                        commentaryData.db = new SQL.Database(dataFromDB.fileData);
                        if (!commentaryData.metadata && dataFromDB.metadata) { // Also restore metadata if missing
                             commentaryData.metadata = dataFromDB.metadata;
                        }
                        if (commentaryStatusMessage) commentaryStatusMessage.textContent = `${activeCommentary} loaded from storage.`;
                    } else {
                         throw new Error(`File data for ${activeCommentary} not found in memory or storage.`);
                    }
                }
            } catch (err) {
                console.error(`Error initializing DB for commentary ${activeCommentary}:`, err);
                if (commentaryStatusMessage) {
                    commentaryStatusMessage.textContent = `Error: Could not load DB for commentary "${activeCommentary}".`;
                    commentaryStatusMessage.classList.add('error');
                }
                activeCommentary = null; // Failed to load, so no active commentary
                // No old commentarySelect.value = ''; to worry about
                return; // Exit
            }
        }
        activeCommentaryDb = commentaryData.db;
    }

    // DO NOT DO: if (commentarySelect) commentarySelect.value = activeCommentary || ''; // Old top-bar select is gone
    // The new UI (popup) will reflect the activeCommentary when populateCommentaryModal() is called.

    saveLastReadPosition(); // Save the new active commentary choice
    // Reload content to show/hide commentary links
    if (currentBook && currentChapter) {
        loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
    }
    console.log("Active commentary set to:", activeCommentary);
}

function updateCommentarySelects() {
	const allOption = document.createElement('option');
allOption.value = '__all__';
allOption.textContent = 'All';
commentarySelect.appendChild(allOption);
document.getElementById('multiCommentaryToggle').addEventListener('change', (e) => {
  const useAll = e.target.checked;

  if (currentBook && currentChapter) {
    loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
  }
});
    const commentaries = Object.keys(loadedCommentaries);
    commentarySelect.innerHTML = '<option value="">-- Select Commentary --</option>';
    commentaries.forEach(commentaryName => {
        const option = document.createElement('option');
        option.value = commentaryName;
        option.textContent = commentaryName;
        commentarySelect.appendChild(option);
    });
    if (activeCommentary) commentarySelect.value = activeCommentary;
}

function updateLoadedCommentariesList() {
    loadedCommentariesList.innerHTML = ''; // Clear previous items
    if (Object.keys(loadedCommentaries).length === 0) {
        loadedCommentariesList.innerHTML = '<p class="placeholder" style="text-align:center; width:100%; padding: 20px 0;">No commentaries loaded yet.</p>';
        return;
    }
    for (const commentaryName in loadedCommentaries) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('grid-list-item');

        const icon = document.createElement('i');
        icon.className = 'fas fa-comments item-icon'; // Font Awesome comments icon for commentaries

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('item-name');
        nameSpan.textContent = commentaryName;
        nameSpan.title = commentaryName;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-item-btn');
        removeBtn.title = `Remove ${commentaryName}`;
        removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeCommentary(commentaryName);
        });

        itemDiv.appendChild(icon);
        itemDiv.appendChild(nameSpan);
        itemDiv.appendChild(removeBtn);
        loadedCommentariesList.appendChild(itemDiv);
    }
}


// --- Navigation Grids Functions ---

function showBooksList() {
    bookList.innerHTML = '<ul></ul>';
    const ul = bookList.querySelector('ul');

    if (!activeVersions.primary || !loadedVersions[activeVersions.primary] || !loadedVersions[activeVersions.primary].books) {
        ul.innerHTML = '<li>No primary version loaded.</li>';
        return;
    }

    loadedVersions[activeVersions.primary].books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book.short_name;
        li.title = book.long_name;
        if (currentBook && currentBook.book_number === book.book_number) {
            li.classList.add('selected');
        }
        li.addEventListener('click', () => {
            const prevSelected = bookList.querySelector('li.selected');
            if (prevSelected) prevSelected.classList.remove('selected');
            li.classList.add('selected');

            currentBook = book;
            currentChapter = null;
            currentVerse = null;
            saveLastReadPosition();
            showChaptersGrid(currentBook);
        });
        ul.appendChild(li);
    });
}

async function showChaptersGrid(book) {
    showPanel(bookChapterVerseSelector);
    if (bookGridView) bookGridView.classList.add('hidden');
    if (chapterGridView) chapterGridView.classList.remove('hidden'); 
    if (verseGridView) verseGridView.classList.add('hidden');

    if (!chapterGridTitle || !chapterGrid) {
        console.error("showChaptersGrid: chapterGridTitle or chapterGrid element not found!");
        return;
    }

    chapterGridTitle.textContent = book.long_name; // Set the title
    chapterGrid.innerHTML = ''; // Clear #chapterGrid directly, as it's the new container

    if (!activeDbs.primary || !book) {
        chapterGrid.innerHTML = '<p class="placeholder">No book selected or primary database not loaded.</p>'; // Set placeholder in #chapterGrid
        return;
    }

    const primaryDb = activeDbs.primary;
    try {
        // Handle Introduction "Chapter"
        const introStmt = primaryDb.prepare("SELECT introduction FROM introductions WHERE book_number = ?;");
        introStmt.bind([book.book_number]);
        if (introStmt.step() && introStmt.getAsObject().introduction) {
            const introItem = document.createElement('div');
            introItem.classList.add('grid-item'); // Use new professional styling class
            introItem.innerHTML = `<span class="chapter-number">Intro</span>`;
            introItem.title = `Introduction to ${book.long_name}`;
            introItem.addEventListener('click', () => {
                currentChapter = 'introduction';
                currentVerse = null;
                saveLastReadPosition();
                loadChapterContent(book.book_number, 'introduction');
                showPanel(bibleContentView);
                if (bookChapterVerseSelector) bookChapterVerseSelector.classList.add('hidden');
            });
            chapterGrid.appendChild(introItem);
        }
        introStmt.free();

        // Get all distinct chapters for the book
        const chaptersStmt = primaryDb.prepare("SELECT DISTINCT chapter FROM verses WHERE book_number = ? ORDER BY chapter ASC;");
        chaptersStmt.bind([book.book_number]);
        const chapterPromises = [];

        while (chaptersStmt.step()) {
            const chapterRow = chaptersStmt.getAsObject();
            const chapterNumber = chapterRow.chapter;

            const verseCountPromise = new Promise(async (resolve) => {
                let verseCount = 0;
                try {
                    const countStmt = primaryDb.prepare("SELECT COUNT(DISTINCT verse) as verse_count FROM verses WHERE book_number = ? AND chapter = ?;");
                    countStmt.bind([book.book_number, chapterNumber]);
                    if (countStmt.step()) {
                        verseCount = countStmt.getAsObject().verse_count;
                    }
                    countStmt.free();
                } catch (e) { console.error(`Error counting verses for ${book.short_name} ${chapterNumber}: ${e}`); }
                resolve({ chapterNumber, verseCount });
            });
            chapterPromises.push(verseCountPromise);
        }
        chaptersStmt.free();

        const chapterDataWithCounts = await Promise.all(chapterPromises);

        chapterDataWithCounts.forEach(({ chapterNumber, verseCount }) => {
            const chapterItem = document.createElement('div');
            chapterItem.classList.add('grid-item'); // Use new professional styling class
            // Add new structure for chapter number and verse count
            chapterItem.innerHTML = `<span class="chapter-number">${chapterNumber}</span><span class="verse-count">${verseCount} </span>`;
            chapterItem.dataset.chapter = chapterNumber;

            chapterItem.addEventListener('click', () => {
                currentChapter = chapterNumber;
                currentVerse = null;
                saveLastReadPosition();
                // When a chapter is clicked, show the verse grid view
                if (typeof populateVerseGrid === "function") { // Check if new function exists
                    populateVerseGrid(book, currentChapter);
                    showNavigatorView(verseGridView); // Show the verse grid view
                } else {
                    console.error("populateVerseGrid function not found.");
                    // Fallback or load content directly if verse grid is not part of this old flow
                    loadChapterContent(book.book_number, currentChapter);
                }
            });
            chapterGrid.appendChild(chapterItem); // Append directly to #chapterGrid
        });
        console.log("showChaptersGrid: Chapters populated for", book.long_name);

    } catch (err) {
        statusMessage.textContent = `Error loading chapters in showChaptersGrid: ${err.message}`;
        statusMessage.classList.add('error');
        console.error('Error populating chapters in showChaptersGrid:', err);
        if (chapterGrid) chapterGrid.innerHTML = `<p class="error">Error loading chapters.</p>`;
    }
}

async function populateVerseGrid(book, chapter) { // Takes book object, chapter number
    console.log("Populating verse grid for:", book.long_name, chapter);
    verseGridTitle.textContent = `${book.long_name} Chapter ${chapter}`;
    // const versesContainer = document.getElementById('versesContainer'); // If you have specific inner container
    verseGrid.innerHTML = ''; // Clear previous verses

    if (!activeDbs.primary || !book || !chapter) {
        verseGrid.innerHTML = '<p>No chapter selected or database not loaded.</p>';
        return;
    }

    try {
        const primaryDb = activeDbs.primary;
        const stmt = primaryDb.prepare("SELECT DISTINCT verse FROM verses WHERE book_number = ? AND chapter = ? ORDER BY verse ASC;");
        stmt.bind([book.book_number, chapter]);

        while (stmt.step()) {
            const row = stmt.getAsObject();
            if (row.verse < 1 || row.verse !== Math.floor(row.verse)) { // Skip non-integer or <1 verses if any
                continue;
            }

            const verseItem = document.createElement('div');
            verseItem.classList.add('grid-item');
            verseItem.textContent = row.verse;
            verseItem.dataset.verse = row.verse;

            verseItem.addEventListener('click', () => {
                currentVerse = row.verse; // Set global currentVerse
                saveLastReadPosition();
                loadChapterContent(book.book_number, chapter, currentVerse);
                showPanel(bibleContentView); // Switch to reader view
                bookChapterVerseSelector.classList.add('hidden'); // Hide navigator
            });
            verseGrid.appendChild(verseItem);
        }
        stmt.free();
        console.log("Verse grid populated for", book.long_name, chapter);
    } catch (err) {
        statusMessage.textContent = `Error loading verses: ${err.message}`;
        statusMessage.classList.add('error');
        console.error('Error populating verses:', err);
        verseGrid.innerHTML = `<p class="error">Error loading verses.</p>`;
    }
}



// --- Chapter Navigation Functions ---
async function navigateChapter(direction) {
    if (!currentBook || !currentChapter || !activeDbs.primary) {
        statusMessage.textContent = 'Please select a book and chapter first.';
        statusMessage.classList.add('error');
        return;
    }

    const primaryDb = activeDbs.primary;
    try {
        const stmt = primaryDb.prepare("SELECT DISTINCT chapter FROM verses WHERE book_number = ? ORDER BY chapter ASC;");
        stmt.bind([currentBook.book_number]);
        const chapters = [];
        while (stmt.step()) {
            chapters.push(stmt.getAsObject().chapter);
        }
        stmt.free();

        let nextChapterToLoad = null;

        if (direction === 1) { // Next
            if (currentChapter === 'introduction') {
                nextChapterToLoad = 1;
            } else {
                const currentIndex = chapters.indexOf(currentChapter);
                if (currentIndex !== -1 && currentIndex < chapters.length - 1) {
                    nextChapterToLoad = chapters[currentIndex + 1];
                } else {
                    const nextBook = getNextBook(currentBook.book_number);
                    if (nextBook) {
                        currentBook = nextBook;
                        nextChapterToLoad = 1;
                        statusMessage.textContent = `Navigating to ${currentBook.long_name} Chapter 1.`;
                        showBooksList();
                    } else {
                        statusMessage.textContent = 'You are at the last chapter of the last book!';
                        statusMessage.classList.remove('error');
                        return;
                    }
                }
            }
        } else { // Previous
            if (currentChapter === 1) {
                const introStmt = primaryDb.prepare("SELECT introduction FROM introductions WHERE book_number = ?;");
                introStmt.bind([currentBook.book_number]);
                if (introStmt.step()) {
                    nextChapterToLoad = 'introduction';
                    statusMessage.textContent = `Navigating to Introduction of ${currentBook.long_name}.`;
                } else {
                    const prevBook = getPreviousBook(currentBook.book_number);
                    if (prevBook) {
                        currentBook = prevBook;
                        const prevBookChaptersStmt = primaryDb.prepare("SELECT MAX(chapter) AS last_chapter FROM verses WHERE book_number = ?;");
                        prevBookChaptersStmt.bind([prevBook.book_number]);
                        if (prevBookChaptersStmt.step()) {
                            nextChapterToLoad = prevBookChaptersStmt.getAsObject().last_chapter;
                        } else {
                            nextChapterToLoad = 1;
                        }
                        prevBookChaptersStmt.free();
                        statusMessage.textContent = `Navigating to ${currentBook.long_name} Chapter ${nextChapterToLoad}.`;
                        showBooksList();
                    } else {
                        statusMessage.textContent = 'You are at the first chapter of the first book!';
                        statusMessage.classList.remove('error');
                        return;
                    }
                }
                introStmt.free();
            } else if (currentChapter === 'introduction') {
                statusMessage.textContent = 'You are at the introduction, cannot go back further.';
                statusMessage.classList.remove('error');
                return;
            } else {
                const currentIndex = chapters.indexOf(currentChapter);
                if (currentIndex > 0) {
                    nextChapterToLoad = chapters[currentIndex - 1];
                } else {
                    statusMessage.textContent = 'You are at the first chapter of this book!';
                    statusMessage.classList.remove('error');
                    return;
                }
            }
        }

        if (nextChapterToLoad !== null) {
            currentChapter = nextChapterToLoad;
            currentVerse = null;
            saveLastReadPosition();
            loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
        }

    } catch (err) {
        statusMessage.textContent = `Navigation error: ${err.message}`;
        statusMessage.classList.add('error');
        console.error('Navigation error:', err);
    }
}


// --- Content Loading Functions ---
// loadVersionContent is a helper for loadChapterContent
async function loadVersionContent(versionType) {
    const dbInstance = activeDbs[versionType];
    const contentDiv = versionType === 'primary' ? primaryBibleContent : secondaryBibleContent;
    const chapterTitleEl = versionType === 'primary' ? primaryChapterTitle : secondaryChapterTitle;
    const processingVersionName = activeVersions[versionType];

    if (!currentBook || currentChapter === null || currentChapter === undefined) {
        contentDiv.innerHTML = '<p class="placeholder">Book or chapter not selected.</p>';
        chapterTitleEl.textContent = processingVersionName || (versionType === 'primary' ? 'Primary Version' : 'Secondary Version');
        return;
    }

    const processingBookNumber = currentBook.book_number;
    const processingChapterString = currentChapter;
    const selectedVerseToScrollTo = currentVerse;

    if (!dbInstance) {
        contentDiv.innerHTML = `<p class="placeholder">Bible version '${processingVersionName || versionType}' not loaded.</p>`;
        chapterTitleEl.textContent = `No ${processingVersionName || versionType} version selected`;
        return;
    }

    let bookDisplayNameForDisplay = `Book ${processingBookNumber}`;
    const bookMeta = loadedVersions[processingVersionName]?.books.find(b => b.book_number === processingBookNumber);
    if (bookMeta) {
        bookDisplayNameForDisplay = bookMeta.short_name;
    }

    try {
        let contentHtml = '';
        let chapterTitleText = `${processingVersionName}: ${bookDisplayNameForDisplay} ${processingChapterString === 'introduction' ? 'Introduction' : processingChapterString}`;
        
        let allHighlightsInChapter = [];
        let notesInChapter = [];
        let bookmarksInChapter = [];
        let numericChapterForQuery; // Will hold the integer chapter number

        if (processingChapterString === 'introduction') {
            const introStmt = dbInstance.prepare("SELECT introduction FROM introductions WHERE book_number = ?;");
            introStmt.bind([processingBookNumber]);
            if (introStmt.step()) {
                contentHtml += `<div class="introduction-text">${introStmt.getAsObject().introduction}</div>`;
            } else {
                contentHtml += `<p class="placeholder">No introduction found for this book in ${processingVersionName}.</p>`;
            }
            introStmt.free();
        } else {
            numericChapterForQuery = parseInt(processingChapterString);
            if (isNaN(numericChapterForQuery)) {
                throw new Error(`Invalid chapter specified: ${processingChapterString}`);
            }

            const verseStmt = dbInstance.prepare("SELECT verse, text FROM verses WHERE book_number = ? AND chapter = ? ORDER BY verse ASC;");
            verseStmt.bind([processingBookNumber, numericChapterForQuery]);
            const verses = [];
            while (verseStmt.step()) { verses.push(verseStmt.getAsObject()); }
            verseStmt.free();
            console.log(`loadVersionContent: Fetched ${verses.length} verses for ${processingVersionName} Ch ${numericChapterForQuery}.`);

            const storyStmt = dbInstance.prepare("SELECT verse, title FROM stories WHERE book_number = ? AND chapter = ? ORDER BY verse ASC, order_if_several ASC;");
            storyStmt.bind([processingBookNumber, numericChapterForQuery]);
            const subheadings = [];
            while (storyStmt.step()) { subheadings.push(storyStmt.getAsObject()); }
            storyStmt.free();

            const rangeQuery = IDBKeyRange.bound(
                [processingVersionName, processingBookNumber, numericChapterForQuery, 0],
                [processingVersionName, processingBookNumber, numericChapterForQuery, Infinity]
            );

            [allHighlightsInChapter, notesInChapter, bookmarksInChapter] = await Promise.all([
                getAllIndexedDB(HIGHLIGHTS_STORE_NAME, 'byVerse', rangeQuery),
                getAllIndexedDB(NOTES_STORE_NAME, 'byVerse', rangeQuery),
                getAllIndexedDB(BOOKMARKS_STORE_NAME, 'byVerse', rangeQuery)
            ]);
            
            const wholeVerseHighlights = allHighlightsInChapter.filter(h => !h.text);
            const wholeVerseHighlightsMap = new Map(wholeVerseHighlights.map(h => [h.verse, h]));
            
            const wholeVerseNotes = notesInChapter.filter(n => !n.selectedText); // Specifically notes without selectedText
            const wholeVerseNotesMap = new Map(wholeVerseNotes.map(n => [n.verse, n]));
            
            const bookmarksMap = new Map(bookmarksInChapter.map(b => [b.verse, b]));

            let contentItems = [];
            let currentSubheadingIndex = 0;
            // Merge verses and subheadings
            while (currentSubheadingIndex < subheadings.length && subheadings[currentSubheadingIndex].verse < 1) {
                contentItems.push({ type: 'subheading', text: subheadings[currentSubheadingIndex].title });
                currentSubheadingIndex++;
            }
            verses.forEach(verse => {
                while (currentSubheadingIndex < subheadings.length && subheadings[currentSubheadingIndex].verse <= verse.verse) {
                    contentItems.push({ type: 'subheading', text: subheadings[currentSubheadingIndex].title });
                    currentSubheadingIndex++;
                }
                contentItems.push({ type: 'verse', verse_number: verse.verse, text: verse.text });
            });
            while (currentSubheadingIndex < subheadings.length) {
                contentItems.push({ type: 'subheading', text: subheadings[currentSubheadingIndex].title });
                currentSubheadingIndex++;
            }

            for (const item of contentItems) {
                if (item.type === 'subheading') {
                    contentHtml += `<h4 class="subheading">${item.text}</h4>`;
                } else { 
                    const { verse_number, text: verseText } = item;
                    const selectedClass = selectedVerseToScrollTo === verse_number ? 'selected-verse' : '';
                    const wholeVerseHighlightClass = wholeVerseHighlightsMap.has(verse_number) ? `highlight-${wholeVerseHighlightsMap.get(verse_number).color}` : '';
                    
let commentaryLinksHtml = '';
const multiMode = document.getElementById('multiCommentaryToggle')?.checked;

// Use these consistently defined variables for the current verse context
const currentBookForCommentary = processingBookNumber;
const currentChapterForCommentary = numericChapterForQuery; // This is the integer chapter number

if (multiMode) {
    for (const commentaryName in loadedCommentaries) {
        const commDb = loadedCommentaries[commentaryName]?.db;
        if (!commDb) continue;
        try {
            // Querying for a specific verse
            const stmt = commDb.prepare(
                "SELECT COUNT(*) AS count FROM commentaries WHERE book_number = ? AND chapter_number_from = ? AND verse_number_from = ?;"
            );
            // Bind with the correctly scoped variables for the current verse
            stmt.bind([currentBookForCommentary, currentChapterForCommentary, verse_number]);
            if (stmt.step() && stmt.getAsObject().count > 0) {
                commentaryLinksHtml += `<span class="commentary-link" data-book-number="${currentBookForCommentary}" data-chapter="${currentChapterForCommentary}" data-verse="${verse_number}" data-commentary-name="${commentaryName}" title="View ${commentaryName} commentary">(${commentaryName.substring(0,3)})</span> `;
            }
            stmt.free();
        } catch (err) { console.warn(`Multi-commentary DB error for ${commentaryName} (B:${currentBookForCommentary} C:${currentChapterForCommentary} V:${verse_number})`, err); }
    }
} else if (activeCommentaryDb && activeCommentary) {
    try {
        const stmt = activeCommentaryDb.prepare(
            "SELECT COUNT(*) AS count FROM commentaries WHERE book_number = ? AND chapter_number_from = ? AND verse_number_from = ?;"
        );
        stmt.bind([currentBookForCommentary, currentChapterForCommentary, verse_number]);
        if (stmt.step() && stmt.getAsObject().count > 0) {
            commentaryLinksHtml = `<span class="commentary-link" data-book-number="${currentBookForCommentary}" data-chapter="${currentChapterForCommentary}" data-verse="${verse_number}" data-commentary-name="${activeCommentary}" title="View ${activeCommentary} on this verse">(${activeCommentary.substring(0,3)})</span> `;
        }
        stmt.free();
    } catch (err) { console.warn(`Single commentary DB issue for "${activeCommentary}" (B:${currentBookForCommentary} C:${currentChapterForCommentary} V:${verse_number})`, err); }
}

                    let indicatorIcons = '';
					const hasAnyPartialNoteForThisVerse = notesInChapter.some(n => 
    n.verse === verse_number && 
    n.selectedText && 
    n.versionName === processingVersionName && // ensure context match
    n.bookNumber === processingBookNumber &&
    n.chapter === numericChapterForQuery
);
                    if (wholeVerseNotesMap.has(verse_number)) { 
                        indicatorIcons += `<i class="fas fa-sticky-note verse-indicator note-indicator" data-book-number="${processingBookNumber}" data-chapter="${numericChapterForQuery}" data-verse="${verse_number}" data-version-name="${processingVersionName}" title="Verse Note exists"></i>`;
                    }
                    if (bookmarksMap.has(verse_number)) {
                        indicatorIcons += `<i class="fas fa-bookmark verse-indicator bookmark-indicator" data-book-number="${processingBookNumber}" data-chapter="${numericChapterForQuery}" data-verse="${verse_number}" data-version-name="${processingVersionName}" title="Bookmarked"></i>`;
                    }

                    contentHtml += `<p id="${versionType}-verse-${verse_number}"
                        class="verse-paragraph ${selectedClass} ${wholeVerseHighlightClass}"
                        data-book-number="${processingBookNumber}"
                        data-chapter="${numericChapterForQuery}"
                        data-verse="${verse_number}"
                        data-version-name="${processingVersionName}">
                        <span class="verse-number">${verse_number}.</span>
                        ${verseText} ${commentaryLinksHtml}${indicatorIcons}
                    </p>`;
                }
            }
        } // End of 'else' for numeric chapters

        contentDiv.innerHTML = contentHtml.trim() === '' ? `<p class="placeholder">No content found for this chapter.</p>` : contentHtml;
        chapterTitleEl.textContent = chapterTitleText;
        console.log(`loadVersionContent: Base HTML set for ${versionType}. Ready to layer partials.`);

        // Restore PARTIAL Highlights (modifies contentDiv.innerHTML)
        if (processingChapterString !== 'introduction' && allHighlightsInChapter && Array.isArray(allHighlightsInChapter)) {
            const numericCh_hl = parseInt(processingChapterString); // Use a distinct var name if numericChapterForQuery isn't set for intro
            try {
                const partialHighlightsToApply = allHighlightsInChapter.filter(h =>
                    h.text && typeof h.text === 'string' && h.text.trim() !== '' &&
                    h.versionName === processingVersionName &&
                    h.bookNumber === processingBookNumber &&
                    h.chapter === numericCh_hl
                );
                console.log(`PARTIAL HIGHLIGHTS: Found ${partialHighlightsToApply.length} to display for Ch ${numericCh_hl}.`);
                for (const h of partialHighlightsToApply) {
                    const verseEl = contentDiv.querySelector(
                        `p#${versionType}-verse-${h.verse}[data-book-number="${h.bookNumber}"][data-chapter="${h.chapter}"][data-version-name="${h.versionName}"]`
                    );
                    if (verseEl) {
                        let verseHTML = verseEl.innerHTML;
                        const alreadyWrappedRegex = new RegExp(`<span class="partial-highlight highlight-${h.color}">\\s*${escapeRegExp(h.text)}\\s*</span>`);
                        if (verseHTML.includes(h.text) && !alreadyWrappedRegex.test(verseHTML)) {
                            const escapedText = escapeRegExp(h.text);
                            const regex = new RegExp(escapedText); 
                            verseEl.innerHTML = verseHTML.replace(regex, (match) => `<span class="partial-highlight highlight-${h.color}">${match}</span>`);
                        }
                    }
                }
            } catch (err) { console.error(`Error restoring partial highlights for ${versionType} (${processingVersionName}), Ch ${processingChapterString}:`, err); }
        } else { console.log("PARTIAL HIGHLIGHTS: Skipped or no highlights to process."); }


        // Restore/Render PARTIAL NOTE Indicators (modifies contentDiv.innerHTML)
if (processingChapterString !== 'introduction' && notesInChapter && Array.isArray(notesInChapter)) {
    const numericCh_notes = parseInt(processingChapterString);
    console.log(`PARTIAL NOTES: Attempting to render DOM indicators. Chapter: ${numericCh_notes}. notesInChapter count: ${notesInChapter.length}`);
    try {
        const partialNotesToDisplay = notesInChapter.filter(n =>
            n.selectedText && typeof n.selectedText === 'string' && n.selectedText.trim() !== '' &&
            n.versionName === processingVersionName &&
            n.bookNumber === processingBookNumber &&
            n.chapter === numericCh_notes
        );
        console.log(`PARTIAL NOTES: Found ${partialNotesToDisplay.length} partial notes to process for DOM insertion.`);

        if (partialNotesToDisplay.length > 0) {
            for (const note of partialNotesToDisplay) {
                const verseEl = contentDiv.querySelector(
                    `p#${versionType}-verse-${note.verse}[data-book-number="${note.bookNumber}"][data-chapter="${note.chapter}"][data-version-name="${note.versionName}"]`
                );

                if (verseEl) {
                    insertPartialNoteIndicatorDOM(verseEl, note);
                } else {
                    console.warn(`PARTIAL NOTES: verseEl NOT found for note ID ${note.id} (Verse ${note.verse}) during DOM insertion.`);
                }
            }
        }
    } catch (err) {
        console.error(`Error in PARTIAL NOTE DOM insertion block for ${versionType} (${processingVersionName}), Ch ${processingChapterString}:`, err);
        statusMessage.textContent = `Error rendering note indicators: ${err.message}`;
        statusMessage.classList.add('error');
    }
} else {
    console.log(`PARTIAL NOTES: Skipped DOM insertion or no notesInChapter. Intro: ${processingChapterString === 'introduction'}, notesInChapter valid: ${notesInChapter && Array.isArray(notesInChapter)}`);
}

    } catch (err) {
        console.error(`Critical error in loadVersionContent for ${processingVersionName || 'Unknown Version'} ${bookDisplayNameForDisplay}:${processingChapterString}:`, err);
        contentDiv.innerHTML = `<p class="placeholder error">An error occurred loading content. Details: ${err.message}</p>`;
        chapterTitleEl.textContent = `${processingVersionName || 'Version'} (Error)`;
    }
    console.log(`loadVersionContent END for ${versionType}`);
}

async function loadChapterContent(bookNumber, chapterOrSpecial, selectedVerse = null) {
    showPanel(bibleContentView);

    currentChapterDisplay.textContent = `${currentBook.short_name} ${chapterOrSpecial === 'introduction' ? 'Intro' : chapterOrSpecial}`;

    primaryBibleContent.innerHTML = '<p class="placeholder">Loading primary content...</p>';
    secondaryBibleContent.innerHTML = '<p class="placeholder">Loading secondary content...</p>';
    primaryChapterTitle.textContent = '';
    secondaryChapterTitle.textContent = '';

    const loadPromises = [loadVersionContent('primary')];
    if (currentViewMode === 'parallel') {
        loadPromises.push(loadVersionContent('secondary'));
    }

    await Promise.all(loadPromises);

    if (selectedVerse !== null) {
        requestAnimationFrame(() => {
            const targetVerseElement = document.getElementById(`primary-verse-${selectedVerse}`);
            if (targetVerseElement) {
                primaryBibleContent.scrollTop = targetVerseElement.offsetTop - (primaryBibleContent.offsetHeight / 3);
            }
        });
    }

    // Add event listener for Introduction links after content is loaded
    primaryBibleContent.querySelectorAll('.introduction-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const bookNum = parseInt(event.target.dataset.bookNumber);
            const version = event.target.dataset.version;
            const bookLongName = event.target.dataset.bookLongName;
            showIntroductionPopup(bookNum, version, bookLongName);
        });
    });

	primaryBibleContent.querySelectorAll('.generate-image-indicator').forEach(icon => {
    icon.addEventListener('click', async (event) => {
        event.stopPropagation();
        const { bookNumber, chapter, verse, versionName } = event.currentTarget.dataset;
        await generateVerseImage({ bookNumber: +bookNumber, chapter: +chapter, verse: +verse, versionName });
		});
	});
    // NEW: Add event listener for Commentary links after content is loaded
    primaryBibleContent.querySelectorAll('.commentary-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const bookNum = parseInt(event.target.dataset.bookNumber);
            const chapterNum = parseInt(event.target.dataset.chapter);
            const verseNum = parseInt(event.target.dataset.verse);
            const commentaryName = event.target.dataset.commentaryName;
            showCommentaryPopup(bookNum, chapterNum, verseNum, commentaryName);
        });
    });

    // NEW: Add event listener for verse clicks (for highlight/note/bookmark actions)
    // Using a delegated event listener on the parent container
    const primaryContentDiv = primaryBibleContent; // Assuming primary is where actions happen
    primaryContentDiv.removeEventListener('click', handleVerseClick); // Remove previous to avoid duplicates
    primaryContentDiv.addEventListener('click', handleVerseClick);

    // NEW: Add event listeners for note/bookmark indicators (re-attach after content reload)
    primaryBibleContent.querySelectorAll('.note-indicator').forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent verse click handler
            const { bookNumber, chapter, verse, versionName } = event.currentTarget.dataset;
            showNoteModal({ bookNumber: parseInt(bookNumber), chapter: parseInt(chapter), verse: parseInt(verse), versionName });
        });
    });

    primaryBibleContent.querySelectorAll('.bookmark-indicator').forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent verse click handler
            const { bookNumber, chapter, verse, versionName } = event.currentTarget.dataset;
            showBookmarkModal({ bookNumber: parseInt(bookNumber), chapter: parseInt(chapter), verse: parseInt(verse), versionName });
        });
    });
	
	primaryBibleContent.querySelectorAll('.share-indicator').forEach(icon => {
    icon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent verse click handler
        const { bookNumber, chapter, verse, versionName } = event.currentTarget.dataset;
        shareVerse({ bookNumber: parseInt(bookNumber), chapter: parseInt(chapter), verse: parseInt(verse), versionName });
    });
});

	primaryBibleContent.querySelectorAll('.commentary-link').forEach(link => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			const { bookNumber, chapter, verse, commentaryName } = event.target.dataset;
			showCommentaryPopup(+bookNumber, +chapter, +verse, commentaryName);
		});
	});
	
	primaryBibleContent.addEventListener('click', (e) => {
		const verse = e.target.closest('.verse-paragraph');
		if (!verse) return;

		const dataset = verse.dataset;
		const ref = {
			versionName: dataset.versionName,
			bookNumber: +dataset.bookNumber,
			chapter: +dataset.chapter,
			verse: +dataset.verse
		};

		if (e.target.classList.contains('note-indicator')) {
			showNoteModal(ref);
		} else if (e.target.classList.contains('bookmark-indicator')) {
			showBookmarkModal(ref);
		} else if (e.target.classList.contains('share-indicator')) {
			shareVerse(ref);
		} else if (e.target.classList.contains('highlight-indicator')) {
			showHighlightPicker(verse);
		}
	});


    statusMessage.textContent = `${currentBook.long_name} ${chapterOrSpecial === 'introduction' ? 'Introduction' : 'Chapter ' + chapterOrSpecial} loaded.`;
}

// NEW: Handle Verse Clicks (for selecting for highlight/note/bookmark)
function handleVerseClick(event) {
    const verseEl = event.target.closest('.verse-paragraph');
    if (!verseEl) return;

    const verseId = `${verseEl.dataset.bookNumber}-${verseEl.dataset.chapter}-${verseEl.dataset.verse}`;

    const isCtrl = event.ctrlKey || event.metaKey;
    const isShift = event.shiftKey;

    if (isCtrl) {
        if (selectedVerses.has(verseId)) {
            selectedVerses.delete(verseId);
            verseEl.classList.remove('selected-verse');
        } else {
            selectedVerses.add(verseId);
            verseEl.classList.add('selected-verse');
        }
        lastClickedVerseId = verseId;
    } else if (isShift && lastClickedVerseId) {
        const allVerses = [...document.querySelectorAll('.verse-paragraph')];
        const startIndex = allVerses.findIndex(v => getVerseId(v) === lastClickedVerseId);
        const endIndex = allVerses.findIndex(v => getVerseId(v) === verseId);
        const [from, to] = [startIndex, endIndex].sort((a, b) => a - b);

        for (let i = from; i <= to; i++) {
            const el = allVerses[i];
            const id = getVerseId(el);
            selectedVerses.add(id);
            el.classList.add('selected-verse');
        }
    } else {
        // Clear all previous
        document.querySelectorAll('.verse-paragraph.selected-verse').forEach(el => el.classList.remove('selected-verse'));
        selectedVerses.clear();

        selectedVerses.add(verseId);
        verseEl.classList.add('selected-verse');
        lastClickedVerseId = verseId;
    }

    // Position popup to the last clicked
    showVersePopup(verseEl);
}

function getVerseId(el) {
    return `${el.dataset.bookNumber}-${el.dataset.chapter}-${el.dataset.verse}`;
}



// NEW: Show/Hide Highlight Picker
function showHighlightPicker(verseElement) {
    console.log("WHOLE VERSE DEBUG: showHighlightPicker CALLED with verseElement:", verseElement);
    if (!verseElement) {
        console.error("showHighlightPicker called with null/undefined verseElement!");
        return;
    }
    // const highlightPicker = document.getElementById('highlightPicker'); // Assuming global or fetched
    const rect = verseElement.getBoundingClientRect();
    highlightPicker.style.top = `${rect.top + window.scrollY - highlightPicker.offsetHeight - 5}px`;
    highlightPicker.style.left = `${rect.left + window.scrollX + (rect.width / 2) - (highlightPicker.offsetWidth / 2)}px`;
    
    highlightPicker.classList.remove('hidden');
    console.log("WHOLE VERSE DEBUG: highlightPicker classList after remove 'hidden':", highlightPicker.classList.toString());
    console.log("WHOLE VERSE DEBUG: highlightPicker offsetParent (to check visibility):", highlightPicker.offsetParent);

    currentHighlightVerseElement = verseElement; // Set global
    currentHighlightVerseRef = {           // Set global
        versionName: verseElement.dataset.versionName,
        bookNumber: parseInt(verseElement.dataset.bookNumber),
        chapter: parseInt(verseElement.dataset.chapter),
        verse: parseInt(verseElement.dataset.verse)
    };
    console.log("WHOLE VERSE DEBUG: currentHighlightVerseRef SET TO:", JSON.stringify(currentHighlightVerseRef));
    console.log("WHOLE VERSE DEBUG: currentHighlightVerseElement SET TO:", currentHighlightVerseElement);
}

function hideHighlightPicker() {
    // const highlightPicker = document.getElementById('highlightPicker'); // Assuming global or fetched
    if (highlightPicker && !highlightPicker.classList.contains("hidden")) {
        highlightPicker.classList.add('hidden');
        console.log("Highlight picker hidden.");
    }
    // Always clear these globals when the picker responsible for them is hidden
    currentHighlightVerseElement = null;
    currentHighlightVerseRef = null;

    // General cleanup of selection state, as any highlight action via this picker is now concluded or cancelled
    window.getSelection()?.removeAllRanges();
    latestSelection = null;
    latestSelectedText = '';
}

// --- Highlight Management ---
async function applyHighlight(color) {
    console.log("WHOLE VERSE DEBUG: applyHighlight CALLED. Color:", color, "Ref from global:", JSON.stringify(currentHighlightVerseRef));
    console.log("WHOLE VERSE DEBUG: applyHighlight - currentHighlightVerseElement value AT FUNCTION ENTRY:", currentHighlightVerseElement);

    // Use local constants to capture the state at the beginning of this specific function call
    // This prevents issues if globals are changed by other async operations or untimely event handlers.
    const elementToWorkOn = currentHighlightVerseElement;
    const refForThisAction = currentHighlightVerseRef;

    if (!refForThisAction || !elementToWorkOn) {
        console.error("WHOLE VERSE DEBUG: applyHighlight - EXITING because refForThisAction or elementToWorkOn is falsy. Ref:", refForThisAction, "Element:", elementToWorkOn);
        statusMessage.textContent = 'No verse selected for highlighting or element reference is missing.';
        statusMessage.classList.add('error');
        if (highlightPicker && !highlightPicker.classList.contains("hidden")) {
            hideHighlightPicker(); // This will nullify the globals
        }
        return;
    }

    console.log("WHOLE VERSE DEBUG: applyHighlight - Passed initial check. Element to work on is:", elementToWorkOn);

    try {
        console.log("WHOLE VERSE DEBUG: applyHighlight - About to remove classes from:", elementToWorkOn);
        elementToWorkOn.classList.remove('highlight-yellow', 'highlight-green', 'highlight-blue', 'highlight-purple', 'highlight-pink', 'highlight-orange');
    } catch (e) {
        console.error("WHOLE VERSE DEBUG: applyHighlight - ERROR during classList.remove. Element was:", elementToWorkOn, "Error:", e);
        statusMessage.textContent = 'Error modifying verse style.';
        statusMessage.classList.add('error');
        hideHighlightPicker(); // Hide picker on error
        return;
    }

    const { versionName, bookNumber, chapter, verse } = refForThisAction;
    const bookMeta = loadedVersions[versionName]?.books.find(b => b.book_number === bookNumber);
    const bookShortNameForStatus = bookMeta?.short_name || `Book ${bookNumber}`;


    try {
        const allVerseHighlights = await getAllIndexedDB(HIGHLIGHTS_STORE_NAME, 'byVerse', IDBKeyRange.only([versionName, bookNumber, chapter, verse]));
        const existingHighlight = allVerseHighlights.find(h => !h.text); // Find existing WHOLE verse highlight

        if (color === 'clear') {
            if (existingHighlight) {
                console.log("WHOLE VERSE DEBUG: applyHighlight - Clearing existing whole verse highlight ID:", existingHighlight.id);
                await deleteIndexedDB(HIGHLIGHTS_STORE_NAME, existingHighlight.id);
                statusMessage.textContent = `Highlight cleared for ${bookShortNameForStatus} ${chapter}:${verse}.`;
            } else {
                statusMessage.textContent = `No whole-verse highlight to clear for ${bookShortNameForStatus} ${chapter}:${verse}.`;
            }
        } else {
            console.log("WHOLE VERSE DEBUG: applyHighlight - About to add class:", `highlight-${color}`, "to element:", elementToWorkOn);
            elementToWorkOn.classList.add(`highlight-${color}`);
            
            const newHighlightData = { // This is a WHOLE verse highlight, so NO 'text' property
                versionName,
                bookNumber,
                chapter,
                verse,
                color,
                timestamp: Date.now()
            };

            if (existingHighlight) {
                newHighlightData.id = existingHighlight.id; // Preserve ID for update
                console.log("WHOLE VERSE DEBUG: applyHighlight - Updating existing whole verse highlight ID:", existingHighlight.id, "with data:", JSON.stringify(newHighlightData));
            } else {
                console.log("WHOLE VERSE DEBUG: applyHighlight - Adding new whole verse highlight with data:", JSON.stringify(newHighlightData));
            }
            await putIndexedDB(HIGHLIGHTS_STORE_NAME, newHighlightData);
            statusMessage.textContent = `Highlight ${existingHighlight ? 'updated' : 'added'} for ${bookShortNameForStatus} ${chapter}:${verse}.`;
        }
    } catch (dbError) {
        console.error("WHOLE VERSE DEBUG: applyHighlight - Database error:", dbError);
        statusMessage.textContent = 'Database error saving highlight.';
        statusMessage.classList.add('error');
    }

    hideHighlightPicker(); // This will nullify the global currentHighlightVerseElement and currentHighlightVerseRef
    updateUserDataPanel('highlights');
    if (currentBook && currentChapter) { // currentBook and currentChapter are global navigation state
        // Reload content using the details from refForThisAction to ensure context is correct
        loadChapterContent(refForThisAction.bookNumber, refForThisAction.chapter, refForThisAction.verse);
    }
}

// --- Note Management ---
// Modify existing showNoteModal
async function showNoteModal(verseRef, initialSelectedText = null) {
    console.log("showNoteModal called with verseRef:", verseRef, "and initialSelectedText:", initialSelectedText);
    currentNoteVerseRef = verseRef; // For save/delete context

    let noteModalTitleText = `${loadedVersions[verseRef.versionName]?.books.find(b => b.book_number === verseRef.bookNumber)?.short_name || `Book ${verseRef.bookNumber}`} ${verseRef.chapter}:${verseRef.verse} (${verseRef.versionName})`;
    let existingNoteToLoad = null;
    let isContextForPartialNote = !!initialSelectedText;
    let textToWhichThisNoteApplies = initialSelectedText;

    if (isContextForPartialNote) {
        noteModalTitleText = `Note for text: "${initialSelectedText.substring(0, 30)}${initialSelectedText.length > 30 ? '...' : ''}" (in ${noteModalTitleText})`;
        const notesForVerse = await getAllIndexedDB(NOTES_STORE_NAME, 'byVerse', IDBKeyRange.only([verseRef.versionName, verseRef.bookNumber, verseRef.chapter, verseRef.verse]));
        existingNoteToLoad = notesForVerse.find(n => n.selectedText === initialSelectedText);
        console.log("showNoteModal: Mode: New/Existing PARTIAL. Text:", initialSelectedText, "Found existing:", existingNoteToLoad);
    } else {
        const notesForVerse = await getAllIndexedDB(NOTES_STORE_NAME, 'byVerse', IDBKeyRange.only([verseRef.versionName, verseRef.bookNumber, verseRef.chapter, verseRef.verse]));
        existingNoteToLoad = notesForVerse.find(n => !n.selectedText);
        console.log("showNoteModal: Mode: New/Existing WHOLE verse. Found existing:", existingNoteToLoad);
    }

    noteModalTitle.textContent = noteModalTitleText;
    noteTextarea.value = ''; // Clear previous
    noteTextarea.dataset.id = '';
    noteTextarea.dataset.selectedText = textToWhichThisNoteApplies || '';

    noteTextarea.disabled = false;   // Explicitly enable
    noteTextarea.readOnly = false; // Explicitly make writable
    console.log("showNoteModal: Textarea attributes set: disabled=false, readOnly=false");

    deleteNoteBtn.classList.add('hidden');

    if (existingNoteToLoad) {
        noteTextarea.value = existingNoteToLoad.noteText;
        noteTextarea.dataset.id = existingNoteToLoad.id;
        noteTextarea.dataset.selectedText = existingNoteToLoad.selectedText || '';
        textToWhichThisNoteApplies = existingNoteToLoad.selectedText;
        if (existingNoteToLoad.selectedText && !initialSelectedText) {
            const originalVerseContextTitle = `${loadedVersions[verseRef.versionName]?.books.find(b => b.book_number === verseRef.bookNumber)?.short_name || `Book ${verseRef.bookNumber}`} ${verseRef.chapter}:${verseRef.verse} (${verseRef.versionName})`;
            noteModalTitle.textContent = `Note for text: "${existingNoteToLoad.selectedText.substring(0, 30)}${existingNoteToLoad.selectedText.length > 30 ? '...' : ''}" (in ${originalVerseContextTitle})`;
        }
        deleteNoteBtn.classList.remove('hidden');
    }
    
    noteModal.classList.remove('hidden');
    
    // Try to ensure other potential overlays are hidden
    if (highlightPicker && !highlightPicker.classList.contains('hidden')) {
        highlightPicker.classList.add('hidden');
    }
    if (highlightColorPicker && !highlightColorPicker.classList.contains('hidden')) {
        highlightColorPicker.classList.add('hidden');
    }
    if (verseActionPopup && !verseActionPopup.classList.contains('hidden')) {
        verseActionPopup.classList.add('hidden');
    }

    noteTextarea.focus(); // Attempt to focus
    setTimeout(() => { // Check focus after a brief moment
        if (document.activeElement === noteTextarea) {
            console.log("showNoteModal: noteTextarea IS FOCUSED after timeout.");
        } else {
            console.warn("showNoteModal: noteTextarea FAILED TO RETAIN focus. Active element is:", document.activeElement);
        }
    }, 100); // Increased timeout slightly

    latestSelection = null;
    latestSelectedText = '';
}

// When opening an existing partial note (e.g., from a list or clicking an indicator):
// You'll need a function like this:
async function openExistingNoteById(noteId) {
    console.log("openExistingNoteById called for ID:", noteId);
    const note = await getIndexedDB(NOTES_STORE_NAME, noteId);
    if (note) {
        currentNoteVerseRef = { // Set global context for save/delete
            versionName: note.versionName,
            bookNumber: note.bookNumber,
            chapter: note.chapter,
            verse: note.verse
        };

        let titleBase = `${loadedVersions[note.versionName]?.books.find(b=>b.book_number === note.bookNumber)?.short_name || `Book ${note.bookNumber}`} ${note.chapter}:${note.verse} (${note.versionName})`;
        if (note.selectedText) {
            noteModalTitle.textContent = `Note for text: "${note.selectedText.substring(0, 30)}${note.selectedText.length > 30 ? '...' : ''}" (in ${titleBase})`;
        } else {
            noteModalTitle.textContent = `Note for ${titleBase}`;
        }

        noteTextarea.value = note.noteText;
        noteTextarea.dataset.id = note.id;
        noteTextarea.dataset.selectedText = note.selectedText || ''; // Crucial for saveNote to know context

        noteTextarea.disabled = false;
        noteTextarea.readOnly = false;
        deleteNoteBtn.classList.remove('hidden');

        noteModal.classList.remove('hidden');
        noteTextarea.focus();
        setTimeout(() => {
            if (document.activeElement === noteTextarea) {
                console.log("openExistingNoteById: noteTextarea successfully focused.");
            } else {
                console.warn("openExistingNoteById: noteTextarea FAILED to focus. Active element is:", document.activeElement);
            }
        }, 10);

        // Clear any lingering global selection as we are opening an existing note
        latestSelection = null;
        latestSelectedText = '';
    } else {
        console.error("Could not find note with ID:", noteId);
        statusMessage.textContent = "Error: Could not load the selected note.";
        statusMessage.classList.add('error');
    }
}

// Modify existing saveNote
async function saveNote() {
    if (!currentNoteVerseRef || !noteTextarea.value.trim()) {
        statusMessage.textContent = 'Note cannot be empty.';
        statusMessage.classList.add('error');
        return;
    }
    // currentNoteVerseRef holds {versionName, bookNumber, chapter, verse}
    const { versionName, bookNumber, chapter, verse } = currentNoteVerseRef;
    const noteText = noteTextarea.value.trim();
    const noteId = noteTextarea.dataset.id ? parseInt(noteTextarea.dataset.id) : null;
    const selectedTextForNote = noteTextarea.dataset.selectedText || null; // Retrieve from modal context
    console.log("SAVENOTE: Retrieved noteTextarea.dataset.selectedText:", noteTextarea.dataset.selectedText);
    console.log("SAVENOTE: selectedTextForNote that will be saved to DB:", selectedTextForNote);

    let noteData = {
        versionName,
        bookNumber,
        chapter,
        verse,
        noteText,
        selectedText: selectedTextForNote, // Save null if it's a whole verse note
        timestamp: Date.now()
    };
    console.log("SAVENOTE: Full noteData object being saved:", JSON.stringify(noteData, null, 2));

    try {
        let action = "added";
        if (noteId) { // Update existing note
            noteData.id = noteId;
            await putIndexedDB(NOTES_STORE_NAME, noteData);
            action = "updated";
        } else { // Add new note
            const savedId = await putIndexedDB(NOTES_STORE_NAME, noteData); // ID will be auto-generated
            noteData.id = savedId; // For logging
        }
        console.log(`Note ${action}:`, noteData);
        statusMessage.textContent = `Note ${action} for ${loadedVersions[versionName]?.books.find(b=>b.book_number === bookNumber)?.short_name || 'Book'} ${chapter}:${verse}${selectedTextForNote ? ' (on selection)' : ''}.`;
        
        noteModal.classList.add('hidden');
        loadChapterContent(bookNumber, chapter, verse); // Reload chapter to update indicators
        updateUserDataPanel('notes'); // Refresh notes list
    } catch (e) {
        console.error('Error saving note:', e);
        statusMessage.textContent = 'Error saving note.';
        statusMessage.classList.add('error');
    }
}

async function deleteNote() {
    if (!currentNoteVerseRef || !confirm('Are you sure you want to delete this note?')) {
        return;
    }
    const noteId = noteTextarea.dataset.id; // Get ID to delete
    if (!noteId) {
        statusMessage.textContent = 'No note to delete.';
        statusMessage.classList.add('error');
        return;
    }
    const { bookNumber, chapter } = currentNoteVerseRef; // Needed for reloading chapter

    try {
        await deleteIndexedDB(NOTES_STORE_NAME, parseInt(noteId)); // Delete by ID
        statusMessage.textContent = `Note deleted for ${currentBook.short_name} ${chapter}:${currentNoteVerseRef.verse}.`;
        noteModal.classList.add('hidden'); // Hide modal
        loadChapterContent(bookNumber, chapter); // Reload chapter to update indicator
        updateUserDataPanel('notes'); // Refresh notes list
    } catch (e) {
        console.error('Error deleting note:', e);
        statusMessage.textContent = 'Error deleting note.';
        statusMessage.classList.add('error');
    }
}

function cancelNote() {
    noteModal.classList.add('hidden');
}


// --- Bookmark Management ---
async function showBookmarkModal(verseRef) {
    currentBookmarkVerseRef = verseRef; // Store verse reference
    bookmarkModalTitle.textContent = `Bookmark for ${currentBook.short_name} ${verseRef.chapter}:${verseRef.verse} (${verseRef.versionName})`;
    bookmarkCategoryInput.value = ''; // Clear category input
    bookmarkCategoryInput.dataset.id = ''; // Clear ID for new bookmark
    deleteBookmarkBtn.classList.add('hidden'); // Hide delete by default

    await populateBookmarkCategoriesDatalist(); // Populate existing categories for datalist

    // Load existing bookmark
    const existingBookmark = (await getAllIndexedDB(BOOKMARKS_STORE_NAME, 'byVerse', IDBKeyRange.only([verseRef.versionName, verseRef.bookNumber, verseRef.chapter, verseRef.verse])))[0];
    if (existingBookmark) {
        bookmarkCategoryInput.value = existingBookmark.category;
        bookmarkCategoryInput.dataset.id = existingBookmark.id; // Store existing ID
        deleteBookmarkBtn.classList.remove('hidden'); // Show delete button
    }
    bookmarkModal.classList.remove('hidden'); // Show modal
    bookmarkCategoryInput.focus(); // Focus on input
}

async function populateBookmarkCategoriesDatalist() {
    const categories = new Set();
    const allBookmarks = await getAllIndexedDB(BOOKMARKS_STORE_NAME);
    allBookmarks.forEach(b => categories.add(b.category));

    bookmarkCategoriesDatalist.innerHTML = '';
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        bookmarkCategoriesDatalist.appendChild(option);
    });
}

async function saveBookmark() {
    if (!currentBookmarkVerseRef || !bookmarkCategoryInput.value.trim()) {
        statusMessage.textContent = 'Category cannot be empty.';
        statusMessage.classList.add('error');
        return;
    }
    const { versionName, bookNumber, chapter, verse } = currentBookmarkVerseRef;
    const category = bookmarkCategoryInput.value.trim();
    const bookmarkId = bookmarkCategoryInput.dataset.id;

    let bookmarkData = { versionName, bookNumber, chapter, verse, category, timestamp: Date.now() };

    try {
        if (bookmarkId) { // Update existing
            bookmarkData.id = parseInt(bookmarkId);
            await putIndexedDB(BOOKMARKS_STORE_NAME, bookmarkData);
            statusMessage.textContent = `Bookmark updated for ${currentBook.short_name} ${chapter}:${verse}.`;
        } else { // Add new
            await putIndexedDB(BOOKMARKS_STORE_NAME, bookmarkData);
            statusMessage.textContent = `Bookmark added for ${currentBook.short_name} ${chapter}:${verse}.`;
        }
        bookmarkModal.classList.add('hidden');
        loadChapterContent(bookNumber, chapter); // Reload chapter to update indicator
        updateUserDataPanel('bookmarks'); // Refresh bookmarks list
    } catch (e) {
        console.error('Error saving bookmark:', e);
        statusMessage.textContent = 'Error saving bookmark.';
        statusMessage.classList.add('error');
    }
}

async function deleteBookmark() {
    if (!currentBookmarkVerseRef || !confirm('Are you sure you want to delete this bookmark?')) {
        return;
    }
    const bookmarkId = bookmarkCategoryInput.dataset.id;
    if (!bookmarkId) {
        statusMessage.textContent = 'No bookmark to delete.';
        statusMessage.classList.add('error');
        return;
    }
    const { bookNumber, chapter } = currentBookmarkVerseRef;

    try {
        await deleteIndexedDB(BOOKMARKS_STORE_NAME, parseInt(bookmarkId));
        statusMessage.textContent = `Bookmark deleted for ${currentBook.short_name} ${chapter}:${currentBookmarkVerseRef.verse}.`;
        bookmarkModal.classList.add('hidden');
        loadChapterContent(bookNumber, chapter); // Reload chapter to update indicator
        updateUserDataPanel('bookmarks'); // Refresh bookmarks list
    } catch (e) {
        console.error('Error deleting bookmark:', e);
        statusMessage.textContent = 'Error deleting bookmark.';
        statusMessage.classList.add('error');
    }
}

function cancelBookmark() {
    bookmarkModal.classList.add('hidden');
}


// --- User Data Panel Management (Listing Highlights, Notes, Bookmarks) ---
async function updateUserDataPanel(activeTab = 'highlights') {
    // Hide all tab contents
    highlightsTab.classList.add('hidden');
    notesTab.classList.add('hidden');
    bookmarksTab.classList.add('hidden');

    // Remove 'active' class from all tab buttons
    userDataTabButtons.forEach(btn => btn.classList.remove('active'));

    // Display chosen tab and set active button
    if (activeTab === 'highlights') {
        highlightsTab.classList.remove('hidden');
        userDataTabButtons[0].classList.add('active');
        await populateHighlightsList();
    } else if (activeTab === 'notes') {
        notesTab.classList.remove('hidden');
        userDataTabButtons[1].classList.add('active');
        await populateNotesList();
    } else if (activeTab === 'bookmarks') {
        bookmarksTab.classList.remove('hidden');
        userDataTabButtons[2].classList.add('active');
        await populateBookmarkCategoriesSelect(); // Populate categories first
        await populateBookmarksList();
    }
}

function createVerseCardDOM({
    bookName, chapter, verse, text, versionName, theme, footer,
    font, align, logoDataUrl, bgImageUrl, textSize, textColor
}) {
    const bgStyles = {
        sunset: 'linear-gradient(135deg, #fceabb, #f8b500)',
        midnight: 'linear-gradient(135deg, #232526, #414345)',
        aqua: 'linear-gradient(135deg, #00c6ff, #0072ff)',
        custom: 'linear-gradient(135deg, #ffffff, #dddddd)'
    };

    const fontSizes = {
        small: '1em',
        medium: '1.4em',
        large: '1.8em'
    };

    const container = document.createElement('div');
    container.id = 'verseCardCanvasWrapper';
    container.style.width = '600px';
    container.style.padding = '40px';
    container.style.background = bgImageUrl ? `url(${bgImageUrl}) center/cover no-repeat` : (bgStyles[theme] || bgStyles.sunset);
    container.style.color = textColor || '#333';
    container.style.borderRadius = '20px';
    container.style.fontFamily = font || '"Georgia", serif';
    container.style.textAlign = align || 'center';
    container.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
    container.style.position = 'absolute';
    container.style.top = '-9999px';

    container.innerHTML = `
        <h2 style="margin-bottom: 20px; font-size: 1.6em; color: ${textColor};">${bookName} ${chapter}:${verse}</h2>
        <p style="font-size: ${fontSizes[textSize]}; line-height: 1.6; margin-bottom: 20px; color: ${textColor};">"${text}"</p>
        <p style="font-style: italic; color: ${textColor};">${versionName}</p>
        ${logoDataUrl ? `<img src="${logoDataUrl}" style="max-height: 60px; margin: 20px auto;">` : ''}
        <p style="font-size: 0.8em; margin-top: 30px; color: ${textColor};">${footer}</p>
    `;

    return container;
}



let lastVerseCardData = null;

async function generateVerseImage(verseRef) {
    const db = activeDbs.primary;
    const book = loadedVersions[verseRef.versionName]?.books.find(b => b.book_number === verseRef.bookNumber);
    const bookName = book?.long_name || `Book ${verseRef.bookNumber}`;
    let verseText = '';

    try {
        const stmt = db.prepare("SELECT text FROM verses WHERE book_number = ? AND chapter = ? AND verse = ?;");
        stmt.bind([verseRef.bookNumber, verseRef.chapter, verseRef.verse]);
        if (stmt.step()) {
            verseText = stmt.getAsObject().text;
        }
        stmt.free();
    } catch (err) {
        alert("Failed to load verse text.");
        return;
    }

    // Save the verse data to be reused
    lastVerseCardData = {
        bookName,
        chapter: verseRef.chapter,
        verse: verseRef.verse,
        text: verseText,
        versionName: verseRef.versionName
    };

    // Generate initial preview
    await updateVerseImagePreview();
    document.getElementById('verseImageModal').classList.remove('hidden');
}

async function updateVerseImagePreview() {
    if (!lastVerseCardData) return;

    const theme = document.getElementById('verseCardTheme')?.value || 'sunset';
    const footer = document.getElementById('verseCardFooter')?.value?.trim() || 'Shared from Parallel Bible App';
    const font = document.getElementById('verseCardFont')?.value || 'Georgia';
    const align = document.getElementById('verseCardAlign')?.value || 'center';

	const textSize = document.getElementById('verseCardTextSize')?.value || 'medium';
	const textColor = document.getElementById('verseCardTextColor')?.value || '#333333';

    const logoFile = document.getElementById('verseCardLogo')?.files[0];
    const bgFile = document.getElementById('verseCardBgImage')?.files[0];

    const logoDataUrl = logoFile ? await readFileAsDataURL(logoFile) : null;
    const bgImageUrl = bgFile ? await readFileAsDataURL(bgFile) : null;

    const cardEl = createVerseCardDOM({
        ...lastVerseCardData,
        theme, footer, font, align, logoDataUrl, bgImageUrl,
		textSize, textColor
    });

    document.body.appendChild(cardEl);
    const canvas = await html2canvas(cardEl, { backgroundColor: null });
    document.body.removeChild(cardEl);

    lastGeneratedCanvas = canvas;

    const previewContainer = document.getElementById('verseImagePreviewContainer');
    previewContainer.innerHTML = '';
    previewContainer.appendChild(canvas);
}


async function populateHighlightsList() {
    highlightsList.innerHTML = '<p class="placeholder">Loading highlights...</p>';
    try {
        const allHighlights = await getAllIndexedDB(HIGHLIGHTS_STORE_NAME);
        if (!allHighlights || allHighlights.length === 0) {
            highlightsList.innerHTML = '<p class="placeholder">No highlights added yet.</p>';
            return;
        }
        highlightsList.innerHTML = '';

        // Sort highlights, handling potentially undefined properties gracefully
        allHighlights.sort((a, b) => {
            // Provide default empty strings for versionNames if they are undefined
            const aVersionName = a.versionName || '';
            const bVersionName = b.versionName || '';

            if (aVersionName !== bVersionName) {
                return aVersionName.localeCompare(bVersionName);
            }

            // Provide default 0 for numeric fields if they are undefined or not numbers
            const aBookNumber = (typeof a.bookNumber === 'number' && !isNaN(a.bookNumber)) ? a.bookNumber : 0;
            const bBookNumber = (typeof b.bookNumber === 'number' && !isNaN(b.bookNumber)) ? b.bookNumber : 0;
            if (aBookNumber !== bBookNumber) {
                return aBookNumber - bBookNumber;
            }

            const aChapter = (typeof a.chapter === 'number' && !isNaN(a.chapter)) ? a.chapter : 0;
            const bChapter = (typeof b.chapter === 'number' && !isNaN(b.chapter)) ? b.chapter : 0;
            if (aChapter !== bChapter) {
                return aChapter - bChapter;
            }

            const aVerse = (typeof a.verse === 'number' && !isNaN(a.verse)) ? a.verse : 0;
            const bVerse = (typeof b.verse === 'number' && !isNaN(b.verse)) ? b.verse : 0;
            return aVerse - bVerse;
        });

        allHighlights.forEach(h => {
            const li = document.createElement('li');
            
            let bookShortName = `Book ${h.bookNumber || 'N/A'}`;
            // Check if h.versionName is defined before trying to access loadedVersions[h.versionName]
            if (h.versionName && loadedVersions[h.versionName] && loadedVersions[h.versionName].books) {
                const bookInfo = loadedVersions[h.versionName].books.find(b => b.book_number === h.bookNumber);
                if (bookInfo) {
                    bookShortName = bookInfo.short_name;
                }
            }
            
            const displayVersion = h.versionName || 'Unknown Version';
            const displayChapter = h.chapter !== undefined ? h.chapter : 'N/A';
            const displayVerse = h.verse !== undefined ? h.verse : 'N/A';
            const displayColor = h.color || 'default'; // Use 'default' if color is missing

            li.innerHTML = `<span>${displayVersion}: ${bookShortName} ${displayChapter}:${displayVerse}</span>
                            <span class="color-swatch ${displayColor}" style="background-color: ${displayColor === 'default' ? 'grey' : displayColor}; width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span>`;
            
            // Safely set dataset attributes
            if (h.versionName) li.dataset.versionName = h.versionName;
            if (h.bookNumber !== undefined) li.dataset.bookNumber = h.bookNumber;
            if (h.chapter !== undefined) li.dataset.chapter = h.chapter;
            if (h.verse !== undefined) li.dataset.verse = h.verse;
            
            li.addEventListener('click', () => {
                // Ensure all necessary data is present before navigating
                if (li.dataset.versionName && li.dataset.bookNumber && li.dataset.chapter && li.dataset.verse) {
                    navigateToUserItem(li.dataset);
                } else {
                    console.warn("Cannot navigate to highlight, missing data:", h);
                    statusMessage.textContent = "Cannot navigate to this highlight, data is incomplete.";
                    statusMessage.classList.add('error');
                }
            });
            highlightsList.appendChild(li);
        });
    } catch (e) {
        console.error("Error populating highlights list:", e);
        highlightsList.innerHTML = '<p class="placeholder error">Error loading highlights.</p>';
    }
}

async function populateNotesList() {
    notesList.innerHTML = '<p class="placeholder">Loading notes...</p>';
    try {
        const allNotes = await getAllIndexedDB(NOTES_STORE_NAME);
        if (allNotes.length === 0) {
            notesList.innerHTML = '<p class="placeholder">No notes added yet.</p>';
            return;
        }
        notesList.innerHTML = '';
        allNotes.sort((a, b) => b.timestamp - a.timestamp); // Sort by most recent first

        allNotes.forEach(n => {
            const li = document.createElement('li');
            const notePreview = n.noteText.length > 50 ? n.noteText.substring(0, 50) + '...' : n.noteText;
            li.innerHTML = `<span>${n.versionName}: ${loadedVersions[n.versionName]?.books.find(b => b.book_number === n.bookNumber)?.short_name || `Book ${n.bookNumber}`} ${n.chapter}:${n.verse}</span>
                            <span class="meta">${notePreview}</span>`;
            li.dataset.versionName = n.versionName;
            li.dataset.bookNumber = n.bookNumber;
            li.dataset.chapter = n.chapter;
            li.dataset.verse = n.verse;
            li.addEventListener('click', () => {
                navigateToUserItem(li.dataset);
                showNoteModal(li.dataset); // Also open modal for editing
            });
            notesList.appendChild(li);
        });
    } catch (e) {
        console.error("Error populating notes list:", e);
        notesList.innerHTML = '<p class="placeholder error">Error loading notes.</p>';
    }
}

async function populateBookmarkCategoriesSelect() {
    const categories = new Set();
    const allBookmarks = await getAllIndexedDB(BOOKMARKS_STORE_NAME);
    allBookmarks.forEach(b => categories.add(b.category));

    bookmarkCategorySelect.innerHTML = '<option value="all">All Categories</option>';
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        bookmarkCategorySelect.appendChild(option);
    });
}

async function populateBookmarksList() {
    bookmarksList.innerHTML = '<p class="placeholder">Loading bookmarks...</p>';
    try {
        const selectedCategory = bookmarkCategorySelect.value;
        let bookmarksToDisplay;

        if (selectedCategory === 'all') {
            bookmarksToDisplay = await getAllIndexedDB(BOOKMARKS_STORE_NAME);
        } else {
            bookmarksToDisplay = await getAllIndexedDB(BOOKMARKS_STORE_NAME, 'byCategory', selectedCategory);
        }

        if (bookmarksToDisplay.length === 0) {
            bookmarksList.innerHTML = '<p class="placeholder">No bookmarks added yet for this category.</p>';
            return;
        }
        bookmarksList.innerHTML = '';
        bookmarksToDisplay.sort((a, b) => { // Sort by most recent first
            if (a.category !== b.category) return a.category.localeCompare(b.category);
            if (a.versionName !== b.versionName) return a.versionName.localeCompare(b.versionName);
            if (a.bookNumber !== b.bookNumber) return a.bookNumber - b.bookNumber;
            if (a.chapter !== b.chapter) return a.chapter - b.chapter;
            return a.verse - b.verse;
        });

        bookmarksToDisplay.forEach(b => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${b.versionName}: ${loadedVersions[b.versionName]?.books.find(b => b.book_number === b.bookNumber)?.short_name || `Book ${b.bookNumber}`} ${b.chapter}:${b.verse}</span>
                            <span class="category-tag">${b.category}</span>`;
            li.dataset.versionName = b.versionName;
            li.dataset.bookNumber = b.bookNumber;
            li.dataset.chapter = b.chapter;
            li.dataset.verse = b.verse;
            li.addEventListener('click', () => navigateToUserItem(li.dataset));
            bookmarksList.appendChild(li);
        });
    } catch (e) {
        console.error("Error populating bookmarks list:", e);
        bookmarksList.innerHTML = '<p class="placeholder error">Error loading bookmarks.</p>';
    }
}

async function navigateToUserItem(itemRef) {
    // Set active versions if necessary
    if (activeVersions.primary !== itemRef.versionName) {
        primaryVersionSelect.value = itemRef.versionName;
        await setActiveVersion('primary', itemRef.versionName);
    }
    // Set current navigation
    currentBook = loadedVersions[itemRef.versionName].books.find(b => b.book_number === parseInt(itemRef.bookNumber));
    currentChapter = parseInt(itemRef.chapter);
    currentVerse = parseInt(itemRef.verse);
    saveLastReadPosition();
    // Load content and scroll to verse
    await loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
    showPanel(bibleContentView); // Ensure content view is shown
}

// --- Sharing Functionality ---
async function shareVerse(verseRef) {
    if (!verseRef || !activeDbs.primary || !currentBook) {
        console.warn('No verse selected to share.');
        return;
    }

    try {
        const stmt = activeDbs.primary.prepare(
            "SELECT text FROM verses WHERE book_number = ? AND chapter = ? AND verse = ?;"
        );
        stmt.bind([verseRef.bookNumber, verseRef.chapter, verseRef.verse]);
        let verseText = stmt.step() ? stmt.getAsObject().text : '';
        stmt.free();

        const fullText = `${currentBook.long_name} ${verseRef.chapter}:${verseRef.verse} (${verseRef.versionName}): ${verseText}`;
        console.log('Prepared verse text:', fullText);

        if (navigator.share) {
            console.log('Using navigator.share...');
            await navigator.share({
                title: 'Bible Verse',
                text: fullText,
                url: window.location.href
            });
            alert('Verse shared via native share!');
        } else if (navigator.clipboard?.writeText) {
            console.log('Using navigator.clipboard...');
            await navigator.clipboard.writeText(fullText);
            alert('Verse copied to clipboard!');
        } else {
            console.log('Using fallback copy method...');
            const textarea = document.createElement('textarea');
            textarea.value = fullText;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('Verse copied using fallback.');
        }
    } catch (err) {
        console.error('Error sharing verse:', err);
        alert('Failed to share verse: ' + err.message);
    }
}

// --- Introduction Modal Function ---
async function showIntroductionPopup(bookNumber, versionName, bookLongName) {
    introModalTitle.textContent = `Introduction to ${bookLongName} (${versionName})`;
    introModalText.innerHTML = '<p class="placeholder">Loading introduction...</p>';
    introModal.classList.remove('hidden');

    const dbInstance = loadedVersions[versionName]?.db;
    if (!dbInstance) {
        introModalText.innerHTML = '<p class="placeholder error">Error: Database not loaded for this version.</p>';
        return;
    }

    try {
        const stmt = dbInstance.prepare("SELECT introduction FROM introductions WHERE book_number = ?;");
        stmt.bind([bookNumber]);
        if (stmt.step()) {
            const row = stmt.getAsObject();
            introModalText.innerHTML = row.introduction;
        } else {
            introModalText.innerHTML = '<p class="placeholder">No introduction found for this book in this version.</p>';
        }
        stmt.free();
    } catch (err) {
        introModalText.innerHTML = `<p class="placeholder error">Error loading introduction: ${err.message}</p>`;
        console.error('Error loading introduction for popup:', err);
    }
}

// --- NEW: Commentary Modal Function ---
async function showCommentaryPopup(bookNumber, chapterNumber, verseNumber, activeName = null) {
    const modal = document.getElementById('commentaryModal');
    const title = document.getElementById('commentaryModalTitle');
    const text = document.getElementById('commentaryModalText');
    const nav = document.getElementById('commentaryModalNav');

    modal.classList.remove('hidden');
    title.textContent = `Loading...`;
    text.innerHTML = '';

    const book = currentBook || { long_name: `Book ${bookNumber}` };
    const verseLabel = `${book.long_name} ${chapterNumber}:${verseNumber}`;

    // 1. Get all loaded commentaries with content for this verse
    const availableCommentaries = [];
    for (const name in loadedCommentaries) {
        const db = loadedCommentaries[name]?.db;
        if (!db) continue;
        const stmt = db.prepare("SELECT COUNT(*) AS count FROM commentaries WHERE book_number = ? AND chapter_number_from = ? AND verse_number_from = ?;");
        stmt.bind([bookNumber, chapterNumber, verseNumber]);
        if (stmt.step() && stmt.getAsObject().count > 0) {
            availableCommentaries.push(name);
        }
        stmt.free();
    }

    if (availableCommentaries.length === 0) {
        title.textContent = `No commentaries found for ${verseLabel}`;
        text.innerHTML = '';
        nav.classList.add('hidden');
        return;
    }

    // Save current state
    const commentaryTabsHtml = availableCommentaries.map(name => 
        `<button class="commentary-tab" data-name="${name}">${name}</button>`
    ).join('');

    const tabNav = document.createElement('div');
    tabNav.innerHTML = `<div class="commentary-tabs">${commentaryTabsHtml}</div>`;
    title.innerHTML = `${verseLabel}`;
    title.appendChild(tabNav);

    const tabsContainer = title.querySelector('.commentary-tabs');
    const tabButtons = tabsContainer.querySelectorAll('.commentary-tab');
    const selectedName = activeName || availableCommentaries[0];

    function activateTab(name) {
        tabButtons.forEach(btn => {
            if (btn.dataset.name === name) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        const db = loadedCommentaries[name]?.db;
        if (!db) {
            text.innerHTML = '<p class="placeholder error">Missing commentary DB.</p>';
            return;
        }

        try {
            const stmt = db.prepare("SELECT text FROM commentaries WHERE book_number = ? AND chapter_number_from = ? AND verse_number_from = ?;");
            stmt.bind([bookNumber, chapterNumber, verseNumber]);
            if (stmt.step()) {
                text.innerHTML = stmt.getAsObject().text;
            } else {
                text.innerHTML = '<p class="placeholder">No text found.</p>';
            }
            stmt.free();
        } catch (err) {
            console.error('Commentary load error:', err);
            text.innerHTML = `<p class="placeholder error">Error: ${err.message}</p>`;
        }
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => activateTab(btn.dataset.name));
    });

    activateTab(selectedName);

    // Prev/Next button logic
    const prevBtn = document.getElementById('prevCommentaryBtn');
    const nextBtn = document.getElementById('nextCommentaryBtn');

    function getPreviousVerseWithCommentary() {
        for (let i = verseNumber - 1; i >= 1; i--) {
            for (const name of availableCommentaries) {
                const db = loadedCommentaries[name]?.db;
                const stmt = db.prepare("SELECT COUNT(*) AS count FROM commentaries WHERE book_number = ? AND chapter_number_from = ? AND verse_number_from = ?;");
                stmt.bind([bookNumber, chapterNumber, i]);
                if (stmt.step() && stmt.getAsObject().count > 0) {
                    stmt.free();
                    return i;
                }
                stmt.free();
            }
        }
        return null;
    }

    function getNextVerseWithCommentary() {
        for (let i = verseNumber + 1; i <= 150; i++) { // assume 150 max per chapter
            for (const name of availableCommentaries) {
                const db = loadedCommentaries[name]?.db;
                const stmt = db.prepare("SELECT COUNT(*) AS count FROM commentaries WHERE book_number = ? AND chapter_number_from = ? AND verse_number_from = ?;");
                stmt.bind([bookNumber, chapterNumber, i]);
                if (stmt.step() && stmt.getAsObject().count > 0) {
                    stmt.free();
                    return i;
                }
                stmt.free();
            }
        }
        return null;
    }

    prevBtn.onclick = () => {
        const prev = getPreviousVerseWithCommentary();
        if (prev !== null) {
            showCommentaryPopup(bookNumber, chapterNumber, prev);
        }
    };
    nextBtn.onclick = () => {
        const next = getNextVerseWithCommentary();
        if (next !== null) {
            showCommentaryPopup(bookNumber, chapterNumber, next);
        }
    };
}


function showVersePopup(targetVerseEl) {
    const popup = document.getElementById('verseActionPopup');
    popup.classList.remove('hidden');

    const rect = targetVerseEl.getBoundingClientRect();
    popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
    popup.style.left = `${rect.left + window.scrollX + rect.width - popup.offsetWidth}px`;

    // Store dataset on popup for use in click handlers
popup.dataset.bookNumber = bookNumber;
popup.dataset.chapter = chapter;
popup.dataset.verse = verseNumber;
popup.dataset.versionName = versionName;
}


// Ensure this function is correctly defined in your script.js
function showVersePopup(verseEl) {
    if (!verseEl) {
        console.error("showVersePopup called with no verseEl");
        return;
    }
    console.log("showVersePopup CALLED for element:", verseEl.id);

    const bookNumber = verseEl.dataset.bookNumber;
    const chapter = verseEl.dataset.chapter;
    const verse = verseEl.dataset.verse;
    const versionName = verseEl.dataset.versionName;

    const popup = document.getElementById('verseActionPopup');
    if (!popup) {
        console.error("verseActionPopup element not found!");
        return;
    }

    popup.dataset.bookNumber = bookNumber;
    popup.dataset.chapter = chapter;
    popup.dataset.verse = verse;
    popup.dataset.versionName = versionName;

    // Capture and store relevant selected text on the popup itself
    let relevantSelectedTextForPopup = null;
    if (latestSelection && latestSelectedText) { // Check global latestSelection/Text
        const commonAncestor = latestSelection.commonAncestorContainer;
        const anchorVerseOfSelection = commonAncestor?.nodeType === Node.TEXT_NODE ?
                                       commonAncestor.parentElement?.closest('.verse-paragraph') :
                                       commonAncestor?.closest('.verse-paragraph');
        
        // Crucial check: Is the current global selection actually *within* the verseEl that was clicked?
        if (anchorVerseOfSelection === verseEl) {
            relevantSelectedTextForPopup = latestSelectedText;
            console.log(`showVersePopup: Valid selection found within this verseEl ("${verseEl.id}"). Text: "${relevantSelectedTextForPopup}"`);
        } else {
            console.log(`showVersePopup: latestSelectedText ("${latestSelectedText}") exists, but it's not for the currently clicked verseEl ("${verseEl.id}"). Anchor verse was:`, anchorVerseOfSelection);
        }
    } else {
        console.log("showVersePopup: No global latestSelection or latestSelectedText found.");
    }
    popup.dataset.currentSelectedText = relevantSelectedTextForPopup || ''; // Store it or empty string
    console.log("showVersePopup: Set popup.dataset.currentSelectedText to:", `'${popup.dataset.currentSelectedText}'`);

    // Position and show popup panel
    const rect = verseEl.getBoundingClientRect();
    let popupTop = rect.bottom + window.scrollY + 8;
    let popupLeft = rect.left + window.scrollX;

    // Adjust if popup goes off-screen
    const popupWidth = popup.offsetWidth; // Ensure popup is not hidden to get offsetWidth
    const popupHeight = popup.offsetHeight;

    if (popupLeft + popupWidth > window.innerWidth) {
        popupLeft = window.innerWidth - popupWidth - 10;
    }
    if (popupTop + popupHeight > (window.innerHeight + window.scrollY)) { // Compare with scroll height
        popupTop = rect.top + window.scrollY - popupHeight - 8;
    }
    if (popupLeft < 0) popupLeft = 10;
    if (popupTop < window.scrollY) popupTop = window.scrollY + 10; // Prevent from going above viewport top

    popup.style.top = `${popupTop}px`;
    popup.style.left = `${popupLeft}px`;
    popup.classList.remove('hidden');

    // Close other pickers that might interfere
    if (highlightPicker && !highlightPicker.classList.contains('hidden')) {
        hideHighlightPicker();
    }
    if (highlightColorPicker && !highlightColorPicker.classList.contains('hidden')) {
        highlightColorPicker.classList.add('hidden');
        // Don't clear latestSelection here, as we might need it if user immediately clicks note/highlight icon
    }
}


// --- Search Feature Functions ---
async function performSearch() {
    const query = searchQueryInput.value.trim();
    const scope = searchScopeSelect.value;
    const matchType = matchTypeSelect.value;
    searchResultsList.innerHTML = '';
    searchStatusMessage.textContent = '';

    if (!activeDbs.primary) {
        searchStatusMessage.textContent = 'Please load a primary Bible version first.';
        searchStatusMessage.classList.add('error');
        return;
    }

    if (!query) {
        searchStatusMessage.textContent = 'Please enter a search query.';
        searchStatusMessage.classList.add('error');
        return;
    }

    searchStatusMessage.textContent = 'Searching...';
    searchStatusMessage.classList.remove('error');

    try {
        const primaryDb = activeDbs.primary;
        let sqlQuery = `SELECT b.long_name, v.book_number, v.chapter, v.verse, v.text FROM verses v JOIN books b ON v.book_number = b.book_number WHERE `;
        const params = [];
        let conditions = [];

        if (matchType === 'sentence') {
            conditions.push(`v.text LIKE ?`);
            params.push(`%${query}%`);
        } else { // 'words'
            const words = query.split(/\s+/).filter(word => word.length > 0);
            if (words.length === 0) {
                searchStatusMessage.textContent = 'Please enter words to search.';
                searchStatusMessage.classList.add('error');
                return;
            }
            words.forEach(word => {
                conditions.push(`v.text LIKE ?`);
                params.push(`%${word}%`);
            });
        }
        sqlQuery += `(${conditions.join(' AND ')})`;

        if (scope === 'currentBook') {
            if (!currentBook) {
                searchStatusMessage.textContent = 'Please select a book to search within.';
                searchStatusMessage.classList.add('error');
                return;
            }
            sqlQuery += ` AND v.book_number = ?`;
            params.push(currentBook.book_number);
        } else if (scope === 'oldTestament') {
            if (!oldTestamentBookRange.start || !oldTestamentBookRange.end) {
                 searchStatusMessage.textContent = 'OT book ranges not determined for this Bible version. Load a primary Bible first.';
                 searchStatusMessage.classList.add('error');
                 return;
            }
            sqlQuery += ` AND v.book_number BETWEEN ? AND ?`;
            params.push(oldTestamentBookRange.start, oldTestamentBookRange.end);
        } else if (scope === 'newTestament') {
            if (!newTestamentBookRange.start || !newTestamentBookRange.end) {
                searchStatusMessage.textContent = 'NT book ranges not determined for this Bible version. Load a primary Bible first.';
                searchStatusMessage.classList.add('error');
                return;
            }
            sqlQuery += ` AND v.book_number BETWEEN ? AND ?`;
            params.push(newTestamentBookRange.start, newTestamentBookRange.end);
        }

        sqlQuery += ` ORDER BY v.book_number ASC, v.chapter ASC, v.verse ASC LIMIT 200;`;

        const stmt = primaryDb.prepare(sqlQuery);
        stmt.bind(params);

        let resultsFound = 0;
        while (stmt.step()) {
            const row = stmt.getAsObject();
            resultsFound++;
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result-item');

            let highlightedText = row.text;
            if (matchType === 'sentence') {
                const regex = new RegExp(escapeRegExp(query), 'gi');
                highlightedText = highlightedText.replace(regex, '<em>$&</em>');
            } else {
                const words = query.split(/\s+/).filter(word => word.length > 0);
                words.forEach(word => {
                    const regex = new RegExp(escapeRegExp(word), 'gi');
                    highlightedText = highlightedText.replace(regex, '<em>$&</em>');
                });
            }

            resultItem.innerHTML = `<span>${row.long_name} ${row.chapter}:${row.verse}</span> ${highlightedText}`;
            resultItem.dataset.bookNumber = row.book_number;
            resultItem.dataset.chapter = row.chapter;
            resultItem.dataset.verse = row.verse;
            resultItem.dataset.bookLongName = row.long_name;

            resultItem.addEventListener('click', () => {
                currentBook = {
                    book_number: row.book_number,
                    long_name: row.long_name,
                    short_name: loadedVersions[activeVersions.primary].books.find(b => b.book_number === row.book_number)?.short_name || row.long_name
                };
                currentChapter = row.chapter;
                currentVerse = row.verse;
                saveLastReadPosition();
                loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
            });
            searchResultsList.appendChild(resultItem);
        }
        stmt.free();

        searchStatusMessage.textContent = `Found ${resultsFound} results.`;
        if (resultsFound === 0) {
            searchStatusMessage.textContent = `No results found for "${query}".`;
        } else if (resultsFound >= 200) {
            searchStatusMessage.textContent += ` (Limited to 200 results. Refine your search.)`;
        }

    } catch (err) {
        searchStatusMessage.textContent = `Search error: ${err.message}`;
        statusMessage.classList.add('error');
        console.error('Search error:', err);
    }
}

// ARE DEFINED IN THE GLOBAL SCOPE OF SCRIPT.JS (i.e., outside initializeApp)

async function initializeApp() {
    console.log('DEBUG: initializeApp() function started execution.');
	loadSavedFontSize();
	    if (decreaseFontSizeBtn) {
        decreaseFontSizeBtn.addEventListener('click', () => {
            applyFontSize(currentAppFontSizeRem - FONT_SIZE_STEP_REM);
        });
    } else {
        console.error("decreaseFontSizeBtn not found");
    }

    if (increaseFontSizeBtn) {
        increaseFontSizeBtn.addEventListener('click', () => {
            applyFontSize(currentAppFontSizeRem + FONT_SIZE_STEP_REM);
        });
    } else {
        console.error("increaseFontSizeBtn not found");
    }
    try {
        statusMessage.textContent = 'Initializing SQL.js...';
        SQL = await window.initSqlJs({ locateFile: file => `/laibaibal/sql-wasm.wasm` });
        console.log('DEBUG: SQL.js initialized.');
        statusMessage.textContent = 'SQL.js initialized.';
        
        if (addVersionBtn) addVersionBtn.disabled = false;

        // Load theme first so the UI reflects it early
        loadSavedTheme(); // This function should call applyTheme defined globally

        console.log('DEBUG: Before calling loadSavedVersionsMetadata() & loadSavedCommentariesMetadata().');
        await loadSavedVersionsMetadata();
        await loadSavedCommentariesMetadata();
        console.log('DEBUG: loadSavedVersionsMetadata() & loadSavedCommentariesMetadata() completed.');

        await processPredefinedResources(); 
        updateViewModeDisplay(); // Set initial view mode display

        // Load last read position or set defaults
        const lastReadString = localStorage.getItem(LAST_READ_KEY);
        let successfullyLoadedLastReadOrSetDefault = false;

        if (lastReadString) {
            const lastRead = JSON.parse(lastReadString);
            console.log("DEBUG: Restoring from lastRead data:", lastRead);

            if (lastRead.viewMode) {
                currentViewMode = lastRead.viewMode;
                updateViewModeDisplay();
            }

            if (lastRead.activeVersions && lastRead.activeVersions.primary && loadedVersions[lastRead.activeVersions.primary]) {
                await setActiveVersion('primary', lastRead.activeVersions.primary);
                if (lastRead.activeVersions.secondary && loadedVersions[lastRead.activeVersions.secondary] && lastRead.activeVersions.primary !== lastRead.activeVersions.secondary) {
                    await setActiveVersion('secondary', lastRead.activeVersions.secondary);
                } else {
                    activeVersions.secondary = null; activeDbs.secondary = null;
                }
            } else if (Object.keys(loadedVersions).length > 0) {
                await setActiveVersion('primary', Object.keys(loadedVersions)[0]);
            }

            if (lastRead.activeCommentary && loadedCommentaries[lastRead.activeCommentary]) {
                await setActiveCommentary(lastRead.activeCommentary);
            }

            if (activeVersions.primary && lastRead.book && loadedVersions[activeVersions.primary]?.books.find(b => b.book_number === lastRead.book.book_number)) {
                currentBook = loadedVersions[activeVersions.primary].books.find(b => b.book_number === lastRead.book.book_number);
                currentChapter = lastRead.chapter;
                currentVerse = lastRead.verse;
                if (currentChapterDisplay && currentBook && currentChapter) {
                    currentChapterDisplay.textContent = `${currentBook.short_name} ${currentChapter === 'introduction' ? 'Intro' : currentChapter}`;
                }
                await loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
                successfullyLoadedLastReadOrSetDefault = true;
            }
        }

        if (!successfullyLoadedLastReadOrSetDefault) {
            console.log("DEBUG: No valid last read data, or initial setup. Setting defaults if versions exist.");
            const versionKeys = Object.keys(loadedVersions);
            if (versionKeys.length > 0) {
                if (!activeVersions.primary) {
                    await setActiveVersion('primary', versionKeys[0]); // This will call determineOtNtRanges
                }
                if (activeVersions.primary && loadedVersions[activeVersions.primary]?.books?.length > 0) {
                    if (!currentBook) { // If currentBook wasn't set by lastRead or setActiveVersion's internal logic
                        currentBook = loadedVersions[activeVersions.primary].books[0];
                    }
                    if (!currentChapter) { // If currentChapter wasn't set
                         // Check if book object has a 'chapters' count property, or query DB for first chapter
                        const bookDataForChapter = loadedVersions[activeVersions.primary]?.books.find(b => b.book_number === currentBook.book_number);
                        currentChapter = bookDataForChapter?.chapters > 0 ? 1 : 'introduction';
                    }
                    currentVerse = null; // Default to no specific verse

                    if (currentChapterDisplay && currentBook && currentChapter) {
                        currentChapterDisplay.textContent = `${currentBook.short_name} ${currentChapter === 'introduction' ? 'Intro' : currentChapter}`;
                    }
                    // Decide whether to load content or show navigator
                    // If we have a book and chapter, load it. Otherwise, user starts via navigator.
                    if (currentBook && currentChapter) {
                         await loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
                    } else if (currentBook) { // Only book is known, let user pick chapter
                        if(currentChapterDisplay) currentChapterDisplay.textContent = `${currentBook.short_name}`;
                        openBookNavigator(); // Open the navigator to select chapter
                    } else { // No book known
                        openBookNavigator();
                    }
                } else { // No books for the loaded primary version
                    showPanel(uploadPanel);
                    if(currentChapterDisplay) currentChapterDisplay.textContent = 'No Books';
                }
            } else { // No versions loaded at all
                showPanel(uploadPanel);
                if(currentChapterDisplay) currentChapterDisplay.textContent = 'No Version';
            }
        }
        
        // ----- Setup UI Listeners -----
        // These functions should be defined globally
        setupNavigationListeners();     // For book/chapter/verse navigator panel (triggered by currentChapterDisplay click & its internal back/close buttons)
        setupThemeControls();           // For theme modal trigger and theme application
        setupPopupTriggersAndModals();  // For Bible version, commentary, theme popups (opening them and handling selections)
		setupSlideMenuListeners();
        // ----- Other Global Event Listeners that were in your initializeApp -----
	if (addVersionBtn) {
    addVersionBtn.addEventListener('click', () => {
        console.log("EVENT: addVersionBtn CLICKED. Calling addBibleVersion...");
        addBibleVersion();
    });
    console.log("DEBUG: Event listener for addVersionBtn ATTACHED. Button disabled state:", addVersionBtn.disabled);
} else {
    console.error("ERROR: addVersionBtn element not found during initializeApp.");
}

if (addCommentaryBtn) {
    addCommentaryBtn.addEventListener('click', () => {
        console.log("EVENT: addCommentaryBtn CLICKED. Calling addCommentary...");
        addCommentary();
    });
    console.log("DEBUG: Event listener for addCommentaryBtn ATTACHED. Button disabled state:", addCommentaryBtn.disabled);
} else {
    console.error("ERROR: addCommentaryBtn element not found during initializeApp.");
}
	
if (closeCommentaryModalButton) { // Check if the button element was found
    closeCommentaryModalButton.addEventListener('click', () => {
        console.log("EVENT: closeCommentaryModalButton CLICKED."); // For debugging
        if (commentaryModal) { // Check if modal element exists
            commentaryModal.classList.add('hidden');
        } else {
            console.error("ERROR: commentaryModal element is null when trying to hide it.");
        }
    });
    console.log("DEBUG: Click listener ATTACHED to closeCommentaryModalButton.");
} else {
    console.error("ERROR: closeCommentaryModalButton element not found. Listener NOT attached.");
}

// Listener for clicking on the modal backdrop (outside .modal-content) to close
if (commentaryModal) { // Check if modal element exists
    window.addEventListener('click', (event) => {
        if (event.target === commentaryModal) { // Check if the click was directly on the modal backdrop
            console.log("EVENT: Click on commentaryModal backdrop detected."); // For debugging
            commentaryModal.classList.add('hidden');
        }
    });
    console.log("DEBUG: Window click listener for commentaryModal backdrop ATTACHED.");
} else {
    console.error("ERROR: commentaryModal element not found. Window click listener for backdrop NOT attached.");
}
	
    if (toggleFileUploadBtn) {
        toggleFileUploadBtn.addEventListener('click', () => {
            console.log("Toggle File Upload Panel button CLICKED."); // Add log
            showPanel(uploadPanel);
        });
    }
    if (closeUploadPanelBtn) {
        closeUploadPanelBtn.addEventListener('click', () => {
            // Decide what to show: if content is loaded, show bibleContentView, else show navigator or upload
            if (currentBook && currentChapter) showPanel(bibleContentView); 
            else if (Object.keys(loadedVersions).length > 0) openBookNavigator(); // If versions loaded, open book nav
            else showPanel(uploadPanel); // Fallback
        });
    }

    // ADD THIS BACK FOR COMMENTARY PANEL
    if (toggleCommentaryUploadBtn) {
        toggleCommentaryUploadBtn.addEventListener('click', () => {
            console.log("Toggle Commentary Upload Panel button CLICKED."); // Add log
            showPanel(commentaryUploadPanel);
        });
    } else {
        console.error("ERROR: toggleCommentaryUploadBtn element not found in initializeApp.");
    }

    if (closeCommentaryUploadBtn) {
        closeCommentaryUploadBtn.addEventListener('click', () => {
            if (currentBook && currentChapter) showPanel(bibleContentView);
            else if (Object.keys(loadedVersions).length > 0) openBookNavigator();
            else showPanel(uploadPanel);
        });
    }
        const verseActionPopup = document.getElementById('verseActionPopup'); // Defined again for clarity in this scope

        // Search Panel Listeners
        if (toggleSearchBtn) { // Your toggleSearchBtn listener with focus logic should be here
            toggleSearchBtn.addEventListener('click', () => {
                const searchPanelIsCurrentlyHidden = searchPanel.classList.contains('hidden');
                showPanel(searchPanel);
                if (searchPanelIsCurrentlyHidden && !searchPanel.classList.contains('hidden')) {
                    if (searchQueryInput) {
                        searchQueryInput.disabled = false; searchQueryInput.readOnly = false;
                        searchQueryInput.focus();
                        setTimeout(() => console.log(`toggleSearchBtn: searchQueryInput focus success: ${document.activeElement === searchQueryInput}`), 100);
                    }
                }
            });
        }
        if (performSearchBtn) performSearchBtn.addEventListener('click', performSearch);
        if (closeSearchPanelBtn) closeSearchPanelBtn.addEventListener('click', () => {
             if (currentBook && currentChapter) showPanel(bibleContentView); else openBookNavigator();
        });

        // User Data Panel Listeners
        if (toggleUserDataBtn) toggleUserDataBtn.addEventListener('click', () => {
            showPanel(userDataPanel);
            updateUserDataPanel('highlights'); 
        });
        if (closeUserDataPanelBtn) closeUserDataPanelBtn.addEventListener('click', () => {
             if (currentBook && currentChapter) showPanel(bibleContentView); else openBookNavigator();
        });
        if (userDataTabButtons) {
            userDataTabButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    userDataTabButtons.forEach(btn => btn.classList.remove('active'));
                    event.currentTarget.classList.add('active');
                    updateUserDataPanel(event.currentTarget.dataset.tab);
                });
            });
        }
        if (bookmarkCategorySelect) bookmarkCategorySelect.addEventListener('change', () => populateBookmarksList());

        // Highlight Picker (for WHOLE verse highlights) - Swatch Clicks
        if (highlightPicker) {
            highlightPicker.querySelectorAll('.color-swatch').forEach(swatch => {
                const newSwatch = swatch.cloneNode(true); // Ensure fresh listeners
                swatch.parentNode.replaceChild(newSwatch, swatch);
                newSwatch.addEventListener('click', () => {
                    const color = newSwatch.dataset.color;
                    if (color) applyHighlight(color); // applyHighlight is global
                });
            });
        }
        
  
if (verseActionPopup) {
    console.log("DEBUG: Setting up listeners for verseActionPopup icons.");

    // Highlighter Icon
    const highlighterIcon = verseActionPopup.querySelector('.fa-highlighter');
    if (highlighterIcon) {
        // Mousedown to prevent focus stealing (already in your script)
        highlighterIcon.addEventListener('mousedown', (e) => e.preventDefault());

        if (typeof handleHighlightIconClick === "function") { // Check if you defined it separately
             highlighterIcon.addEventListener('click', handleHighlightIconClick);
        } else {
             console.warn("handleHighlightIconClick function for highlighter not found, complex listener might be missing from here.");
             // If your complex highlight logic is directly here as an anonymous function from previous steps, that's fine.
        }

    } else { console.error("Highlighter icon not found in verseActionPopup."); }

    // Note Icon
    const noteIcon = verseActionPopup.querySelector('.fa-sticky-note');
if (noteIcon) {
    noteIcon.addEventListener('click', () => {
        console.log("EVENT: Note icon in verseActionPopup CLICKED.");
        const verseRef = getPopupRef(); // Reads from verseActionPopup.dataset (book, chapter, verse, version)
        
        // Get the selected text that was stored on the popup's dataset by showVersePopup
        const textForPartialNote = verseActionPopup.dataset.currentSelectedText || null;

        if (textForPartialNote && textForPartialNote.trim() !== '') { // Ensure it's not just empty string
            console.log("Note icon click: Using textForPartialNote from popup dataset:", `'${textForPartialNote}'`);
        } else {
            console.log("Note icon click: No valid currentSelectedText on popup dataset. Proceeding as whole verse note.");
        }
        
        showNoteModal(verseRef, textForPartialNote ? textForPartialNote.trim() : null); // Pass trimmed or null
        
        // Clear the temporary dataset attribute and globals after use for this action
        verseActionPopup.dataset.currentSelectedText = '';
        latestSelection = null;
        latestSelectedText = '';
        verseActionPopup.classList.add('hidden'); // Hide popup after initiating action
    });
} else {
    console.error("Note icon (.fa-sticky-note) not found in verseActionPopup.");
}

const verseActionPopupHighlightIcon = verseActionPopup.querySelector('.fa-highlighter');

if (verseActionPopupHighlightIcon) {
    // Prevent mousedown on icon from stealing focus from potential text selection
    verseActionPopupHighlightIcon.addEventListener('mousedown', (e) => {
        e.preventDefault();
    });

    verseActionPopupHighlightIcon.addEventListener('click', async (iconClickEvent) => {
        console.log("EVENT: Highlighter icon in verseActionPopup CLICKED.");
        iconClickEvent.stopPropagation(); // Prevent window click listeners from firing immediately

        const verseRefFromPopup = getPopupRef(); // Assumes getPopupRef uses verseActionPopup.dataset
        console.log("HIGHLIGHT ICON CLICK: verseRefFromPopup is:", JSON.stringify(verseRefFromPopup));

        const verseElement = primaryBibleContent.querySelector(
            `.verse-paragraph[data-version-name="${verseRefFromPopup.versionName}"][data-book-number="${verseRefFromPopup.bookNumber}"][data-chapter="${verseRefFromPopup.chapter}"][data-verse="${verseRefFromPopup.verse}"]`
        );
        console.log("HIGHLIGHT ICON CLICK: verseElement found:", verseElement);

        if (!verseElement) {
            console.error("Highlight action: Verse element not found for ", verseRefFromPopup);
            alert("Could not find the verse element to highlight.");
            verseActionPopup.classList.add('hidden'); // Hide popup if error
            return;
        }

        // Crucially, use the text stored on the popup by showVersePopup for deciding partial action.
        // The global latestSelection (Range object) is still needed for DOM manipulation if it's a new partial highlight.
        const textForPartialAction = verseActionPopup.dataset.currentSelectedText || null;
        // Capture global latestSelection at this point, as it's needed for new partial highlights.
        const rangeForPartialAction = latestSelection;

        console.log("HIGHLIGHT ICON CLICK: Text from popup dataset for partial action:", `'${textForPartialAction}'`);
        console.log("HIGHLIGHT ICON CLICK: Global latestSelection (Range) for DOM ops:", rangeForPartialAction);

        let proceedWithPartialHighlightAction = false;
        if (textForPartialAction && textForPartialAction.trim() !== '') {
            // We have text, check if we also have a valid Range object if we intend to add a new highlight
            // If we are clearing an existing one, textForPartialAction is enough to identify it.
            proceedWithPartialHighlightAction = true;
        }
        console.log("HIGHLIGHT ICON CLICK: Determined proceedWithPartialHighlightAction:", proceedWithPartialHighlightAction);

        if (proceedWithPartialHighlightAction) {
            // --- PARTIAL TEXT ACTION (HIGHLIGHT OR CLEAR EXISTING) ---
            console.log("PARTIAL FLOW: Action for text:", textForPartialAction);

            const existingPartialHighlights = await getAllIndexedDB(HIGHLIGHTS_STORE_NAME, 'byVerse', IDBKeyRange.only([verseRefFromPopup.versionName, verseRefFromPopup.bookNumber, verseRefFromPopup.chapter, verseRefFromPopup.verse]));
            const matchingExistingPartial = existingPartialHighlights.find(h => h.text === textForPartialAction.trim()); // Ensure using trimmed text for matching

            if (matchingExistingPartial) {
                verseActionPopup.classList.add('hidden'); // Hide before confirm
                if (confirm(`This text ("${matchingExistingPartial.text.substring(0,30)}...") is highlighted in ${matchingExistingPartial.color}.\nDo you want to clear this specific highlight?`)) {
                    try {
                        await deleteIndexedDB(HIGHLIGHTS_STORE_NAME, matchingExistingPartial.id);
                        statusMessage.textContent = 'Partial highlight cleared.';
                        console.log("PARTIAL FLOW: Cleared existing partial highlight ID:", matchingExistingPartial.id);
                        if (currentBook && currentChapter) {
                            loadChapterContent(currentBook.book_number, currentChapter, verseRefFromPopup.verse);
                        }
                        updateUserDataPanel('highlights');
                    } catch (err) {
                        console.error("PARTIAL FLOW: Error clearing existing partial highlight:", err);
                        statusMessage.textContent = 'Error clearing highlight.';
                        statusMessage.classList.add('error');
                    }
                }
                // Reset selection state after action (clear or cancel)
                window.getSelection()?.removeAllRanges();
                latestSelection = null;
                latestSelectedText = '';
                verseActionPopup.dataset.currentSelectedText = '';
                return; // Action complete
            } else {
                // No existing exact match, proceed to ADD new partial highlight
                // For this, we absolutely need the Range object (rangeForPartialAction)
                if (!rangeForPartialAction || !textForPartialAction || rangeForPartialAction.toString().trim() !== textForPartialAction.trim()) {
                    console.warn("PARTIAL FLOW: Mismatch or missing Range object for new partial highlight. Text from dataset:", textForPartialAction, "Current selection text:", rangeForPartialAction?.toString().trim());
                    alert("Selection mismatch or no valid selection range found for new partial highlight. Please re-select the text.");
                    verseActionPopup.classList.add('hidden');
                    verseActionPopup.dataset.currentSelectedText = '';
                    latestSelection = null; latestSelectedText = ''; // Clear globals
                    return;
                }

                console.log("PARTIAL FLOW: No exact existing partial highlight. Proceeding to ADD new for text:", textForPartialAction);
                const popupRect = verseActionPopup.getBoundingClientRect();
                highlightColorPicker.style.top = `${popupRect.bottom + window.scrollY + 5}px`;
                highlightColorPicker.style.left = `${popupRect.left + window.scrollX}px`;
                highlightColorPicker.classList.remove('hidden');
                verseActionPopup.classList.add('hidden');

                document.querySelectorAll('#highlightColorPicker .color-option').forEach(option => {
                    const newOption = option.cloneNode(true);
                    option.parentNode.replaceChild(newOption, option);
                    newOption.addEventListener('click', async (colorOptionClickEvent) => {
                        colorOptionClickEvent.stopPropagation(); // Prevent this click from closing things via window listener
                        const color = newOption.dataset.color;
                        console.log("PARTIAL FLOW: 1. New partial highlight color PICKED:", color);

                        // Use the captured rangeForPartialAction and textForPartialAction
                        if (!color || !rangeForPartialAction || !textForPartialAction) {
                            alert("Internal error: Highlight color or selection data missing.");
                            highlightColorPicker.classList.add('hidden');
                            window.getSelection()?.removeAllRanges();
                            latestSelection = null; latestSelectedText = '';
                            verseActionPopup.dataset.currentSelectedText = '';
                            return;
                        }

                        const span = document.createElement('span');
                        span.className = `partial-highlight highlight-${color}`;
                        span.textContent = textForPartialAction; // Use the captured text
                        console.log("PARTIAL FLOW: 2. Span class set to:", span.className);

                        try {
                            rangeForPartialAction.deleteContents(); // Use the captured Range
                            rangeForPartialAction.insertNode(span);
                        } catch (e) {
                            console.error('PARTIAL FLOW: DOM insert error:', e);
                            alert('Error applying highlight to text.');
                            highlightColorPicker.classList.add('hidden');
                            window.getSelection()?.removeAllRanges();
                            latestSelection = null; latestSelectedText = '';
                            verseActionPopup.dataset.currentSelectedText = '';
                            return;
                        }

                        const highlightEntry = {
                            versionName: verseRefFromPopup.versionName,
                            bookNumber: verseRefFromPopup.bookNumber,
                            chapter: verseRefFromPopup.chapter,
                            verse: verseRefFromPopup.verse,
                            text: textForPartialAction, // Save the captured text
                            color: color,
                            timestamp: Date.now()
                        };
                        console.log("PARTIAL FLOW: 3. Saving NEW partial highlight entry:", JSON.stringify(highlightEntry, null, 2));
                        try {
                            const savedId = await putIndexedDB(HIGHLIGHTS_STORE_NAME, highlightEntry);
                            console.log(`PARTIAL FLOW: Saved NEW partial highlight (ID: ${savedId})`);
                            statusMessage.textContent = `Partial highlight added.`;
                            if (currentBook && currentChapter) {
                                loadChapterContent(currentBook.book_number, currentChapter, verseRefFromPopup.verse);
                            }
                            updateUserDataPanel('highlights');
                        } catch (err) {
                            console.error('PARTIAL FLOW: Error saving NEW partial highlight to DB:', err);
                            statusMessage.textContent = 'Error saving partial highlight.';
                            statusMessage.classList.add('error');
                        }
                        highlightColorPicker.classList.add('hidden');
                        window.getSelection()?.removeAllRanges();
                        latestSelection = null; latestSelectedText = '';
                        verseActionPopup.dataset.currentSelectedText = '';
                    });
                });
            }
            // iconClickEvent.stopPropagation(); // Already done at the top of handler

        } else {
            // --- WHOLE VERSE HIGHLIGHTING ---
            console.log("WHOLE VERSE FLOW: Proceeding for verseRef:", JSON.stringify(verseRefFromPopup));
            window.getSelection()?.removeAllRanges(); // Clear any residual selection
            latestSelection = null;
            latestSelectedText = '';
            verseActionPopup.dataset.currentSelectedText = ''; // Ensure this is clear

            showHighlightPicker(verseElement); // This shows the whole verse picker
            verseActionPopup.classList.add('hidden');
            // iconClickEvent.stopPropagation(); // Already done at the top
        }
    });
} else {
    console.error("ERROR: Highlighter icon (.fa-highlighter) not found in verseActionPopup during setup.");
}
    // Bookmark Icon
    const bookmarkIcon = verseActionPopup.querySelector('.fa-bookmark');
    if (bookmarkIcon) {
        bookmarkIcon.addEventListener('click', () => {
            console.log("EVENT: Bookmark icon in verseActionPopup CLICKED.");
            const ref = getPopupRef();
            showBookmarkModal(ref);
        });
    } else { console.error("Bookmark icon not found in verseActionPopup."); }

    // Share Icon
    const shareIcon = verseActionPopup.querySelector('.fa-share-alt');
    if (shareIcon) {
        shareIcon.addEventListener('click', () => {
            console.log("EVENT: Share icon in verseActionPopup CLICKED.");
            const ref = getPopupRef();
            shareVerse(ref);
        });
    } else { console.error("Share icon not found in verseActionPopup."); }

    // Image/Verse Card Icon
    const imageIcon = verseActionPopup.querySelector('.fa-image');
    if (imageIcon) {
        imageIcon.addEventListener('click', () => {
            console.log("EVENT: Image icon in verseActionPopup CLICKED.");
            const ref = getPopupRef();
            generateVerseImage(ref);
        });
    } else { console.error("Image icon not found in verseActionPopup."); }

} else {
    console.error("ERROR: verseActionPopup element not found during initializeApp.");
}

if (prevChapterBtn) {
    prevChapterBtn.addEventListener('click', () => {
        console.log("EVENT: prevChapterBtn CLICKED. Calling navigateChapter(-1).");
        navigateChapter(-1);
    });
    console.log("DEBUG: Event listener for prevChapterBtn ATTACHED.");
} else {
    console.error("ERROR: prevChapterBtn element not found during initializeApp.");
}

if (nextChapterBtn) {
    nextChapterBtn.addEventListener('click', () => {
        console.log("EVENT: nextChapterBtn CLICKED. Calling navigateChapter(1).");
        navigateChapter(1);
    });
    console.log("DEBUG: Event listener for nextChapterBtn ATTACHED.");
} else {
    console.error("ERROR: nextChapterBtn element not found during initializeApp.");
}

if (toggleViewBtn) {
    toggleViewBtn.addEventListener('click', toggleViewMode);
    console.log("DEBUG: Event listener for toggleViewBtn ATTACHED.");
} else {
    console.error("ERROR: toggleViewBtn element not found during initializeApp.");
}
        // Note Modal Buttons
        if (saveNoteBtn) saveNoteBtn.addEventListener('click', saveNote);
        if (deleteNoteBtn) deleteNoteBtn.addEventListener('click', deleteNote);
        if (cancelNoteBtn) cancelNoteBtn.addEventListener('click', cancelNote);
        if (closeNoteModalButton) closeNoteModalButton.addEventListener('click', cancelNote);

        // Bookmark Modal Buttons
        if (saveBookmarkBtn) saveBookmarkBtn.addEventListener('click', saveBookmark);
        if (deleteBookmarkBtn) deleteBookmarkBtn.addEventListener('click', deleteBookmark);
        if (cancelBookmarkBtn) cancelBookmarkBtn.addEventListener('click', cancelBookmark);
        if (closeBookmarkModalButton) closeBookmarkModalButton.addEventListener('click', cancelBookmark);

        // Global Click Listeners for closing modals/pickers
        window.addEventListener('click', (event) => {
            if (introModal && event.target == introModal) introModal.classList.add('hidden');
            if (commentaryModal && event.target == commentaryModal) commentaryModal.classList.add('hidden');
            if (noteModal && event.target == noteModal) cancelNote();
            if (bookmarkModal && event.target == bookmarkModal) cancelBookmark();
            
            const verseActionPopupInstance = document.getElementById('verseActionPopup'); // Re-fetch or use global

            // Hide highlightPicker
            if (highlightPicker && !highlightPicker.classList.contains('hidden') &&
                !highlightPicker.contains(event.target) &&
                !event.target.closest('.verse-paragraph') &&
                !(verseActionPopupInstance && verseActionPopupInstance.querySelector('.fa-highlighter')?.contains(event.target))) {
                hideHighlightPicker();
            }
            // Hide highlightColorPicker
            if (highlightColorPicker && !highlightColorPicker.classList.contains('hidden') &&
                !highlightColorPicker.contains(event.target) &&
                !(verseActionPopupInstance && verseActionPopupInstance.querySelector('.fa-highlighter')?.contains(event.target))) {
                 highlightColorPicker.classList.add('hidden');
            }
            // Hide verseActionPopup
            if (verseActionPopupInstance && !verseActionPopupInstance.classList.contains('hidden') &&
                !verseActionPopupInstance.contains(event.target) &&
                !event.target.closest('.verse-paragraph')) {
                verseActionPopupInstance.classList.add('hidden');
            }
        });

        // Mouseup listener for latestSelection/latestSelectedText (ensure this is the one, defined globally)


        // Verse Card Image Modal listeners
        const closeVerseImgModal = document.getElementById('closeVerseImageModal');
        if (closeVerseImgModal) closeVerseImgModal.addEventListener('click', () => document.getElementById('verseImageModal').classList.add('hidden'));
        // ... add other listeners for download/copy image, theme changes for card ...
        const verseCardInputs = ['verseCardTheme', 'verseCardFooter', 'verseCardFont', 'verseCardAlign', 'verseCardLogo', 'verseCardBgImage', 'verseCardTextSize', 'verseCardTextColor'];
        verseCardInputs.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                const eventType = (el.tagName === 'INPUT' && el.type === 'text') || el.tagName === 'TEXTAREA' ? 'input' : 'change';
                el.addEventListener(eventType, updateVerseImagePreview);
            }
        });
		
        const downloadVerseImgBtn = document.getElementById('downloadVerseImageBtn');
        if(downloadVerseImgBtn) downloadVerseImgBtn.addEventListener('click', ()/*: void*/ => { 
					if (!lastGeneratedCanvas) return;
			const link = document.createElement('a');
			link.download = `verse-card.png`;
			link.href = lastGeneratedCanvas.toDataURL('image/png');
			link.click();
		});
		
        const copyVerseImgBtn = document.getElementById('copyVerseImageBtn');
        if(copyVerseImgBtn) copyVerseImgBtn.addEventListener('click', async () => {
						if (!lastGeneratedCanvas) return;
			try {
				const blob = await new Promise(resolve => lastGeneratedCanvas.toBlob(resolve));
				await navigator.clipboard.write([
					new ClipboardItem({ 'image/png': blob })
				]);
				alert('Image copied to clipboard!');
			} catch (e) {
				console.error('Clipboard error:', e);
				alert('Failed to copy image. Try downloading instead.');
			}
		});


        // Scroll Sync
        if (primaryBibleContent && secondaryBibleContent) {
            primaryBibleContent.addEventListener('scroll', () => syncScroll(primaryBibleContent, secondaryBibleContent));
            secondaryBibleContent.addEventListener('scroll', () => syncScroll(secondaryBibleContent, primaryBibleContent));
        }
        
        console.log('DEBUG: initializeApp() all event listeners configured.');

    } catch (err) {
        console.error('FATAL ERROR: initializeApp() caught a major error!', err);
        statusMessage.textContent = `CRITICAL ERROR: Initialization failed: ${err.message}`;
        statusMessage.classList.add('error');
        if (addVersionBtn) addVersionBtn.disabled = true;
        console.log('DEBUG: addVersionBtn.disabled set in catch block:', addVersionBtn ? addVersionBtn.disabled : 'N/A (addVersionBtn not found)');
    }
}

console.log('DEBUG: Script file loaded. Calling initializeApp().');
initializeApp();


