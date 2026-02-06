// API Keys Management System
let currentTheme = 'light';
let autoHideKeys = true;
let apiKeysData = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen for 6 seconds
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        const mainContent = document.getElementById('mainContent');
        
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        
        setTimeout(() => {
            mainContent.style.display = 'block';
            // Add transition effect
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                mainContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
                
                // Load API keys after page is visible
                loadApiKeys();
            }, 100);
        }, 800);
    }, 6000);

    // Initialize theme
    initTheme();
    
    // Initialize event listeners
    initEventListeners();
    
    // Prevent zooming
    preventZoom();
    
    // Initialize service worker for PWA capabilities
    initServiceWorker();
});

// Load API keys from encrypted source
function loadApiKeys() {
    // Create script element to load config.js
    const script = document.createElement('script');
    script.src = 'config.js';
    script.onload = function() {
        if (window.secureApiKeys) {
            apiKeysData = window.secureApiKeys;
            renderApiKeys();
            showNotification('API keys loaded securely from encrypted source', false);
        } else {
            // Fallback to placeholder if config.js is not available
            showPlaceholderKeys();
            showNotification('Using placeholder API keys. Live keys will be available on deployed website.', true);
        }
    };
    
    script.onerror = function() {
        // config.js not found (expected on GitHub)
        showPlaceholderKeys();
        console.log('Secure config.js not found. This is expected on GitHub repository.');
        showNotification('⚠️ Viewing placeholder API keys. Real keys are only visible on live website deployment.', true);
    };
    
    document.head.appendChild(script);
}

// Show placeholder API keys (for GitHub repository view)
function showPlaceholderKeys() {
    apiKeysData = [
        {
            id: 1,
            name: "Numverify API",
            key: "🔐 ENCRYPTED-KEY-NOT-VISIBLE-IN-GITHUB",
            category: "Phone Validation",
            description: "Validate phone numbers from all over the world with carrier and location information.",
            usage: "// Real API key is encrypted and only visible on live website",
            limits: "1000 requests/month free tier",
            status: "encrypted"
        },
        {
            id: 2,
            name: "OpenCage Geocoding",
            key: "🔐 ENCRYPTED-KEY-NOT-VISIBLE-IN-GITHUB",
            category: "Geolocation",
            description: "Forward and reverse geocoding with open data sources.",
            usage: "// Real API key is encrypted and only visible on live website",
            limits: "2500 requests/day free tier",
            status: "encrypted"
        },
        {
            id: 3,
            name: "Shodan API",
            key: "🔐 ENCRYPTED-KEY-NOT-VISIBLE-IN-GITHUB",
            category: "Security",
            description: "Search engine for Internet-connected devices and services.",
            usage: "// Real API key is encrypted and only visible on live website",
            limits: "100 results/query free tier",
            status: "encrypted"
        },
        // Add more placeholder entries as needed
    ];
    
    renderApiKeys();
}

// Prevent zooming on mobile devices
function preventZoom() {
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });

    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    document.addEventListener('gesturestart', function(event) {
        event.preventDefault();
    });
}

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('apikey-theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            updateThemeButton('dark');
        } else {
            updateThemeButton('light');
        }
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme = 'dark';
            document.body.classList.add('dark-mode');
            updateThemeButton('dark');
        }
    }
}

// Update theme button text and icon
function updateThemeButton(theme) {
    const themeBtn = document.getElementById('themeToggle');
    const icon = themeBtn.querySelector('i');
    const text = themeBtn.querySelector('span');
    
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        text.textContent = 'Light Mode';
    } else {
        icon.className = 'fas fa-moon';
        text.textContent = 'Dark Mode';
    }
}

// Toggle theme
function toggleTheme() {
    if (currentTheme === 'light') {
        currentTheme = 'dark';
        document.body.classList.add('dark-mode');
        localStorage.setItem('apikey-theme', 'dark');
        updateThemeButton('dark');
    } else {
        currentTheme = 'light';
        document.body.classList.remove('dark-mode');
        localStorage.setItem('apikey-theme', 'light');
        updateThemeButton('light');
    }
}

// Render API keys to the grid
function renderApiKeys() {
    const container = document.getElementById('apiKeysContainer');
    container.innerHTML = '';
    
    apiKeysData.forEach(api => {
        const keyToShow = api.key || api.token || api.clientId || '';
        const isEncrypted = keyToShow.includes('ENCRYPTED-KEY');
        
        const card = document.createElement('div');
        card.className = 'api-key-card';
        card.dataset.id = api.id;
        
        card.innerHTML = `
            <div class="api-card-header">
                <h3 class="api-name" data-id="${api.id}">${api.name}</h3>
                <span class="api-category">${api.category}</span>
            </div>
            <div class="api-description">
                ${api.description}
                ${isEncrypted ? '<div style="margin-top: 10px; color: #FF2E63; font-size: 0.9rem;"><i class="fas fa-lock"></i> Key encrypted - Visible on live website only</div>' : ''}
            </div>
            <div class="api-key-display">
                <label>API Key:</label>
                <div class="key-container">
                    <input type="password" value="${keyToShow}" 
                           class="key-input" id="key-${api.id}" readonly>
                    <button class="key-action-btn toggle-key" data-id="${api.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="key-action-btn copy-btn" data-key="${keyToShow}">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
                ${!isEncrypted ? '<div class="key-source"><i class="fas fa-shield-alt"></i> Loaded from secure encrypted source</div>' : ''}
            </div>
            <div class="api-card-footer">
                <button class="view-details-btn" data-id="${api.id}">
                    <i class="fas fa-info-circle"></i> View Details
                </button>
                <span class="api-status ${api.status}">
                    <i class="fas fa-circle"></i> ${isEncrypted ? 'Encrypted' : api.status.charAt(0).toUpperCase() + api.status.slice(1)}
                </span>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Initialize event listeners
function initEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Auto-hide keys toggle
    document.getElementById('autoHideKeys').addEventListener('change', function(e) {
        autoHideKeys = e.target.checked;
        if (autoHideKeys) {
            hideAllKeys();
        }
    });
    
    // Copy notifications toggle
    document.getElementById('copyNotifications').addEventListener('change', function(e) {
        localStorage.setItem('copy-notifications', e.target.checked);
    });
    
    // Export keys button
    document.getElementById('exportKeys').addEventListener('click', exportAllKeys);
    
    // Close modal button
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('closeDetailModal').addEventListener('click', closeModal);
    
    // Modal close on background click
    document.getElementById('apiDetailModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Toggle modal key visibility
    document.getElementById('toggleModalKey').addEventListener('click', function() {
        const input = document.getElementById('modalApiKeyValue');
        const icon = this.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.className = 'fas fa-eye-slash';
        } else {
            input.type = 'password';
            icon.className = 'fas fa-eye';
        }
    });
    
    // Copy modal key
    document.getElementById('copyModalKey').addEventListener('click', function() {
        const key = this.dataset.key;
        copyToClipboard(key);
    });
    
    // Delegate events for dynamically created elements
    document.addEventListener('click', function(e) {
        const target = e.target;
        
        // Toggle key visibility
        if (target.closest('.toggle-key')) {
            const btn = target.closest('.toggle-key');
            const id = btn.dataset.id;
            toggleKeyVisibility(id);
        }
        
        // Copy key
        if (target.closest('.copy-btn')) {
            const btn = target.closest('.copy-btn');
            const key = btn.dataset.key;
            copyToClipboard(key);
        }
        
        // View details
        if (target.closest('.view-details-btn') || target.closest('.api-name')) {
            const element = target.closest('.view-details-btn') || target.closest('.api-name');
            const id = element.dataset.id;
            showApiDetails(id);
        }
    });
}

// Toggle key visibility
function toggleKeyVisibility(id) {
    const input = document.getElementById(`key-${id}`);
    const toggleBtn = document.querySelector(`.toggle-key[data-id="${id}"] i`);
    
    if (input.type === 'password') {
        input.type = 'text';
        toggleBtn.className = 'fas fa-eye-slash';
    } else {
        input.type = 'password';
        toggleBtn.className = 'fas fa-eye';
    }
}

// Hide all keys
function hideAllKeys() {
    document.querySelectorAll('.key-input').forEach(input => {
        input.type = 'password';
    });
    
    document.querySelectorAll('.toggle-key i').forEach(icon => {
        icon.className = 'fas fa-eye';
    });
}

// Copy to clipboard
function copyToClipboard(text) {
    // Don't copy placeholder text
    if (text.includes('ENCRYPTED-KEY-NOT-VISIBLE')) {
        showNotification('Real API key is only available on live website deployment', true);
        return;
    }
    
    navigator.clipboard.writeText(text).then(() => {
        showNotification('API Key copied to clipboard!');
        
        // Show copy effect
        document.body.classList.add('copy-effect');
        setTimeout(() => {
            document.body.classList.remove('copy-effect');
        }, 300);
        
        // Log copy event
        if (localStorage.getItem('copy-notifications') !== 'false') {
            console.log(`API Key copied: ${text.substring(0, 15)}...`);
        }
    }).catch(err => {
        showNotification('Failed to copy API Key!', true);
        console.error('Copy failed:', err);
    });
}

// Show notification
function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = 'notification';
    
    if (isError) {
        notification.classList.add('error');
    }
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Show API details modal
function showApiDetails(id) {
    const api = apiKeysData.find(a => a.id == id);
    if (!api) return;
    
    const modal = document.getElementById('apiDetailModal');
    const modalApiName = document.getElementById('modalApiName');
    const modalApiDescription = document.getElementById('modalApiDescription');
    const modalApiKeyValue = document.getElementById('modalApiKeyValue');
    const modalApiUsage = document.getElementById('modalApiUsage');
    const modalApiLimits = document.getElementById('modalApiLimits');
    const copyModalKeyBtn = document.getElementById('copyModalKey');
    const toggleModalKeyBtn = document.getElementById('toggleModalKey');
    
    // Populate modal with API data
    modalApiName.textContent = api.name;
    modalApiDescription.innerHTML = api.description + 
        (api.key.includes('ENCRYPTED-KEY') ? 
            '<div style="margin-top: 10px; padding: 10px; background: rgba(255, 46, 99, 0.1); border-radius: 5px; color: #FF2E63;"><i class="fas fa-lock"></i> <strong>Note:</strong> This is a placeholder key. The real API key is encrypted and only visible on the live website deployment.</div>' : 
            '<div style="margin-top: 10px; padding: 10px; background: rgba(8, 217, 214, 0.1); border-radius: 5px; color: #08D9D6;"><i class="fas fa-shield-alt"></i> <strong>Secure:</strong> This key was loaded from encrypted source file not included in GitHub repository.</div>');
    
    modalApiKeyValue.value = api.key || api.token || api.clientId || '';
    modalApiUsage.textContent = api.usage;
    modalApiLimits.textContent = api.limits;
    
    // Update copy button data
    copyModalKeyBtn.dataset.key = api.key || api.token || api.clientId || '';
    
    // Reset toggle button
    toggleModalKeyBtn.querySelector('i').className = 'fas fa-eye';
    modalApiKeyValue.type = 'password';
    
    // Show modal with transition
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('apiDetailModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Export all keys
function exportAllKeys() {
    // Check if we're using real keys or placeholders
    const hasRealKeys = apiKeysData.some(api => !api.key.includes('ENCRYPTED-KEY'));
    
    if (!hasRealKeys) {
        showNotification('Real API keys are only available on live website deployment', true);
        return;
    }
    
    const exportData = apiKeysData.map(api => ({
        name: api.name,
        key: api.key || api.token || api.clientId || '',
        category: api.category,
        description: api.description,
        limits: api.limits,
        status: api.status
    }));
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `apikey-network-export-${new Date().toISOString().slice(0,10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification('All API keys exported successfully!');
}

// Initialize service worker for PWA
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful');
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
}

// Add copy effect CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .copy-effect {
        animation: copyPulse 0.3s ease;
    }
    
    @keyframes copyPulse {
        0% { background-color: transparent; }
        50% { background-color: rgba(8, 217, 214, 0.1); }
        100% { background-color: transparent; }
    }
`;
document.head.appendChild(style);