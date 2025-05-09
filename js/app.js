// iLearn File Browser - Local Files Version

// DOM Elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const fileList = document.getElementById('file-list');
const loadingIndicator = document.getElementById('loading');
const filesContainer = document.getElementById('files-container');
const noResultsMessage = document.getElementById('no-results');
const emptyFolderMessage = document.getElementById('empty-folder');

// File type icons mapping
const fileIcons = {
    'application/pdf': 'fa-file-pdf',
    'application/vnd.google-apps.document': 'fa-file-word',
    'application/vnd.google-apps.spreadsheet': 'fa-file-excel',
    'application/vnd.google-apps.presentation': 'fa-file-powerpoint',
    'application/vnd.google-apps.folder': 'fa-folder',
    'image/jpeg': 'fa-file-image',
    'image/png': 'fa-file-image',
    'text/plain': 'fa-file-alt',
    'default': 'fa-file'
};

// File type names mapping
const fileTypeNames = {
    'application/pdf': 'PDF',
    'application/vnd.google-apps.document': 'Google Doc',
    'application/vnd.google-apps.spreadsheet': 'Google Sheet',
    'application/vnd.google-apps.presentation': 'Google Slides',
    'application/vnd.google-apps.folder': 'Folder',
    'image/jpeg': 'Image',
    'image/png': 'Image',
    'text/plain': 'Text',
    'default': 'File'
};

// Badge colors mapping
const badgeColors = {
    'application/pdf': 'danger',
    'application/vnd.google-apps.document': 'primary',
    'application/vnd.google-apps.spreadsheet': 'success',
    'application/vnd.google-apps.presentation': 'warning',
    'application/vnd.google-apps.folder': 'info',
    'image/jpeg': 'secondary',
    'image/png': 'secondary',
    'text/plain': 'dark',
    'default': 'light'
};

// Store all files for searching
let allFiles = [];

// Load files from the local directory
function loadLocalFiles() {
    // Show loading indicator
    loadingIndicator.classList.remove('d-none');
    filesContainer.classList.add('d-none');
    
    console.log('Loading local PDF files...');
    
    // List of PDF files in the root directory (hardcoded)
    const localFiles = [
        { 
            name: "Economic Survey 2024-25.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR _25 Naional parks and sanctuaries.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR 25 Constitutional Bodies.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR 25 Important Crops and Producers.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR 25 Mines and Minerals in India.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_2 5Environmental Legislations.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25  History of Constitution.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25  UNITED NATIONS 1.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 _ FOLK ARTS OF INDIA.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 _ INDUS VALLEY CIVILIZATION-1.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 _ PAINTING.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 Constitutional Amendments.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 Critically endangered species.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 DISEASES & PATHOGENS.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 Geographical Indication Tags.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 GOVERNOR GENERALS AND THEIR ADMINISTRATIVE CHANGES.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 IMPORTANT WATER BODIES OF THE WORLD.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 INTANGIBLE CULTURAL HERITAGE SITES.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 INTERNATIONAL ORGANISATIONS OTHER THAN UN.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 Islands in India.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 Lakes in India.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 LANDSCAPE OF THE WORLD.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 Major Pollutants.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 Mountain ranges of India.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 Non Constitutional Bodies.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 NUCLEAR ENERGY IN INDIA[1].pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 PARTICULARLY VULNERABLE TRIBAL GROUPS.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 REPORTS AND INDICES National & International.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 Rivers In India.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 SATELLITE LAUNCH VEHICLES OF INDIA.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 Sources of the Indian Constitution.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 Tiger reserves.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 UNESCO WORLD HERITAGE_SITES IN INDIA .pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25 World Bank & IMF.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25_ BHAKHI & SUFI MOVEMENT.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25_ BUDDHISM & JAINISM.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25_ANCIENT INDIA TERMINOLOGIES.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25_Biodiversity heritage sites.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25_Elephant reserves in India.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25_MEDIEVAL INDIAN TERMINOLOGIES.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25_NON-CONGRESS ORGANISATIONS.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR_25_Ramsar sites in India.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        },
        { 
            name: "LMR25 Union Budget 2025-26.pdf", 
            mimeType: "application/pdf",
            modifiedTime: new Date().toISOString()
        }
    ];
    
    // Add file paths and links
    localFiles.forEach(file => {
        file.id = file.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        file.webViewLink = file.name; // We'll use the filename as the link
    });
    
    processFiles(localFiles);
}

// Process files data
function processFiles(files) {
    allFiles = files;
    
    if (files && files.length > 0) {
        renderFileList(files);
    } else {
        showEmptyFolderMessage();
    }
    
    hideLoading();
}

// Render the list of files
function renderFileList(files) {
    fileList.innerHTML = '';
    
    files.forEach(file => {
        const listItem = createFileListItem(file);
        fileList.appendChild(listItem);
    });
    
    filesContainer.classList.remove('d-none');
    noResultsMessage.classList.add('d-none');
    emptyFolderMessage.classList.add('d-none');
}

// Create a list item for a file
function createFileListItem(file) {
    const listItem = document.createElement('div');  // Changed from 'a' to 'div'
    listItem.className = 'list-group-item list-group-item-action d-flex align-items-center';
    
    // Get appropriate icon
    const iconClass = fileIcons[file.mimeType] || fileIcons.default;
    const typeName = fileTypeNames[file.mimeType] || fileTypeNames.default;
    const badgeColor = badgeColors[file.mimeType] || badgeColors.default;
    
    // Format the date
    const modifiedDate = new Date(file.modifiedTime);
    const dateString = modifiedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    
    // Create the file list item HTML structure
    listItem.innerHTML = `
        <i class="fas ${iconClass} file-icon"></i>
        <div class="file-info flex-grow-1">
            <span class="file-name">${file.name}</span>
            <span class="file-meta">Last modified: ${dateString}</span>
        </div>
        <span class="badge bg-${badgeColor} file-type-badge">${typeName}</span>
        <a href="${file.webViewLink}" class="download-link ms-2" download>
            <i class="fas fa-download"></i>
        </a>
    `;
    
    // Make the entire item clickable for download
    listItem.addEventListener('click', function(e) {
        // Prevent download if clicking on the download icon (let the anchor tag handle it)
        if (e.target.closest('.download-link')) {
            return;
        }
        
        // Create a temporary link and trigger download
        const downloadLink = document.createElement('a');
        downloadLink.href = file.webViewLink;
        downloadLink.download = file.name;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });

    // Add pointer cursor style
    listItem.style.cursor = 'pointer';
    
    return listItem;
}

// Show an error message
function showError(message) {
    hideLoading();
    fileList.innerHTML = `<div class="alert alert-danger">${message}</div>`;
    filesContainer.classList.remove('d-none');
}

// Hide the loading indicator and show the file container
function hideLoading() {
    loadingIndicator.classList.add('d-none');
    filesContainer.classList.remove('d-none');
}

// Show the empty folder message
function showEmptyFolderMessage() {
    emptyFolderMessage.classList.remove('d-none');
    noResultsMessage.classList.add('d-none');
}

// Show the no results message
function showNoResultsMessage() {
    noResultsMessage.classList.remove('d-none');
    emptyFolderMessage.classList.add('d-none');
}

// Search functionality
function searchFiles() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        renderFileList(allFiles);
        return;
    }
    
    const filteredFiles = allFiles.filter(file => 
        file.name.toLowerCase().includes(searchTerm)
    );
    
    if (filteredFiles.length > 0) {
        renderFileList(filteredFiles);
    } else {
        fileList.innerHTML = '';
        showNoResultsMessage();
    }
}

// Event listeners
searchButton.addEventListener('click', searchFiles);
searchInput.addEventListener('keyup', function(e) {
    // Search as you type
    searchFiles();
});

// Initialize by loading files when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadLocalFiles();
});