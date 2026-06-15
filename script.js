const data = [
    {
        category: "Billing & Payments",
        catClass: "cat-billing",
        icon: "&#128179;",
        items: [
            { label: "Payment Failure", text: "I understand how concerning it can be when a payment doesn't go through as expected. Let me review the transaction details and help identify the best way to complete the payment." },
            { label: "Autopay Concern", text: "I understand why you'd want clarification regarding your automatic payments. Let me review the account settings and explain exactly what's happening." },
            { label: "Missing Credit or Adjustment", text: "I understand your concern regarding the missing credit. Let me review the account history and verify whether any adjustments need to be applied." },
            { label: "Late Fee Concern", text: "I understand why you're concerned about the additional charge. Let me review your billing history and explain what happened while looking for any available options." },
            { label: "Payment Arrangement", text: "I understand that keeping your service active is important. Let me review the options available on your account and see what payment arrangements or solutions we can offer today." },
            { label: "Prorated Billing Question", text: "I understand the billing can be confusing when changes are made mid-cycle. Let me break down the prorated charges and explain how they were calculated." }
        ]
    },
    {
        category: "Billing Disputes",
        catClass: "cat-dispute",
        icon: "&#128200;",
        items: [
            { label: "Charge Dispute", text: "I understand your concern about this charge on your bill. Let me review the details with you and investigate what this charge is for." },
            { label: "Refund Request", text: "I understand you'd like a refund for this charge. Let me review the circumstances and see what options are available for your account." },
            { label: "Unexpected Charge", text: "I understand why this charge would be unexpected. Let me pull up the details and walk through exactly what this is for." }
        ]
    },
    {
        category: "Service & Coverage",
        catClass: "cat-service",
        icon: "&#128225;",
        items: [
            { label: "Coverage Concern", text: "I understand how important reliable coverage is. Let me review the service availability in your area and provide the most accurate information possible." },
            { label: "Dropped Calls / Network Issues", text: "I can understand how inconvenient dropped calls can be. Let me investigate your service and network status so we can identify what's causing the issue." },
            { label: "Slow Data / Internet Speed", text: "I know how important a reliable connection is. Let me run some diagnostics and check for any issues that may be affecting your service performance." },
            { label: "Outage Situation", text: "I understand how disruptive an outage can be. Let me check for any reported service interruptions in your area and provide the latest updates available." },
            { label: "International Usage Concern", text: "I understand you'd like clarity regarding your service while traveling or communicating internationally. Let me review the details and explain the available options." }
        ]
    },
    {
        category: "Data Usage",
        catClass: "cat-data",
        icon: "&#128246;",
        items: [
            { label: "Data Overage", text: "I understand your concern about exceeding your data limit. Let me review your usage and discuss plan options that may better fit your needs." },
            { label: "Hotspot Issues", text: "I understand how important mobile hotspot is for your connectivity. Let me check your plan features and troubleshoot any issues with your hotspot." },
            { label: "Streaming Throttling", text: "I understand how frustrating slower speeds can be when streaming. Let me review your current plan and data usage to find the best solution." }
        ]
    },
    {
        category: "Account Changes",
        catClass: "cat-account",
        icon: "&#9881;",
        items: [
            { label: "Upgrade Request", text: "I understand you're interested in enhancing your current service. Let me review the available options and help find the one that best fits your needs." },
            { label: "Downgrade Request", text: "I understand your needs may have changed. Let me review your account and explore options that may better align with your current situation." },
            { label: "Plan Change Request", text: "I understand you're looking for a plan that better fits your needs. Let me review your current services and help find the best available option." },
            { label: "Unexpected Service Change", text: "I understand why this change may have caught you by surprise. Let me review the account details and explain what occurred." },
            { label: "Service Reactivation", text: "I understand you'd like to restore your service as soon as possible. Let me review the account and determine the quickest path to reactivation." },
            { label: "Service Cancellation Request", text: "I understand you're considering canceling your service. Before we proceed, I'd like to review your account and discuss the available options to ensure you're making the best decision for your needs." }
        ]
    },
    {
        category: "Family Plan Issues",
        catClass: "cat-family",
        icon: "&#128101;",
        items: [
            { label: "Adding a Line", text: "I understand you're looking to add someone to your plan. Let me review your current family plan and walk you through the available options." },
            { label: "Removing a Line", text: "I understand you need to make changes to your family plan. Let me review the details and help you with removing that line." },
            { label: "Family Plan Manager Change", text: "I understand you need to update the primary account holder. Let me review the requirements and guide you through this process." }
        ]
    },
    {
        category: "Device & Technical",
        catClass: "cat-device",
        icon: "&#128241;",
        items: [
            { label: "Device Issue", text: "I can understand how frustrating it is when your device isn't working properly. Let me walk through some troubleshooting steps with you and determine the best solution as quickly as possible." },
            { label: "Activation Problem", text: "I understand you're eager to start using your service. Let me check the activation status and take the necessary steps to get everything working for you." },
            { label: "App or Website Issue", text: "I understand how frustrating it can be when online tools aren't working as expected. Let me review the issue and determine the best next steps." },
            { label: "Technical Troubleshooting", text: "I understand how disruptive technical issues can be. Let me perform some troubleshooting and identify the best solution available." }
        ]
    },
    {
        category: "Device Protection",
        catClass: "cat-protection",
        icon: "&#128737;",
        items: [
            { label: "Insurance Claim", text: "I understand how stressful it is when your device is damaged. Let me review your device protection plan and walk you through the claim process." },
            { label: "Warranty Question", text: "I understand you have questions about your device warranty. Let me check the warranty status and explain what coverage is available." },
            { label: "Lost/Stolen Device", text: "I understand how concerning it is to lose your device. Let me help you suspend service and review your options for replacement." }
        ]
    },
    {
        category: "Orders & Porting",
        catClass: "cat-order",
        icon: "&#128230;",
        items: [
            { label: "Order Status Inquiry", text: "I understand you'd like an update on your order. Let me check the latest status and provide the most accurate information available." },
            { label: "Port-In / Number Transfer", text: "I understand how important it is to keep your number. Let me check the transfer status and make sure everything is progressing correctly." }
        ]
    },
    {
        category: "BYOD / Compatibility",
        catClass: "cat-byod",
        icon: "&#128187;",
        items: [
            { label: "Bring Your Own Device", text: "I understand you want to use your current device with Metro. Let me check the compatibility and walk you through the setup process." },
            { label: "Unlock Request", text: "I understand you need your device unlocked. Let me review the eligibility requirements and check if your device qualifies." },
            { label: "IMEI Check", text: "I understand you want to verify your device will work on our network. Let me run the IMEI check and confirm compatibility for you." }
        ]
    },
    {
        category: "Account Security & Verification",
        catClass: "cat-security",
        icon: "&#128274;",
        items: [
            { label: "Account Security Concern", text: "I understand your concern regarding the security of your account. Let me review the situation and help ensure your account remains protected." },
            { label: "Unauthorized Activity Concern", text: "I understand why this situation would be concerning. Let me review the account activity and investigate what may have occurred." },
            { label: "Verification Difficulty", text: "I understand the verification process can sometimes be inconvenient. Let me guide you through the available options so we can complete your request." }
        ]
    },
    {
        category: "Account Recovery",
        catClass: "cat-recovery",
        icon: "&#128273;",
        items: [
            { label: "Forgot PIN", text: "I understand how frustrating it is to forget your account PIN. Let me verify your identity and help you reset it securely." },
            { label: "Account Locked", text: "I understand you can't access your account right now. Let me review the lock status and help you regain access." },
            { label: "Fraud Alert", text: "I understand this fraud alert is concerning. Let me review the flagged activity and help secure your account." }
        ]
    },
    {
        category: "Promotions & Eligibility",
        catClass: "cat-promo",
        icon: "&#127873;",
        items: [
            { label: "Promotional Offer Inquiry", text: "I understand you'd like to ensure you're receiving the best value available. Let me review the promotions associated with your account and discuss any eligible offers." },
            { label: "Eligibility Concern", text: "I understand you'd like to know whether you qualify for this option. Let me review the requirements and check your eligibility." }
        ]
    },
    {
        category: "Competitive Switch",
        catClass: "cat-competitive",
        icon: "&#128260;",
        items: [
            { label: "Switching from Competitor", text: "I understand you're considering making the switch to Metro. Let me review what we can offer and help make your transition as smooth as possible." },
            { label: "Price Match Request", text: "I understand you're looking for the best value. Let me review our current promotions and see what we can do for you." },
            { label: "Retention Offer", text: "I understand you're exploring your options. Let me review your account and see what we can offer to keep you with Metro." }
        ]
    },
    {
        category: "Appointments & Scheduling",
        catClass: "cat-appointment",
        icon: "&#128197;",
        items: [
            { label: "Appointment Issue", text: "I understand how important it is for appointments to stay on schedule. Let me review the details and see what updates or alternatives are available." }
        ]
    },
    {
        category: "Store Experience",
        catClass: "cat-store",
        icon: "&#127978;",
        items: [
            { label: "In-Store Complaint", text: "I understand your recent store visit didn't meet your expectations. Let me document your feedback and see how we can make this right." },
            { label: "Store Visit Follow-Up", text: "I understand you visited a store recently and need follow-up assistance. Let me review what was discussed and continue helping you." },
            { label: "Equipment Return", text: "I understand you need to return equipment. Let me review the return process and make sure everything is handled correctly." }
        ]
    },
    {
        category: "Process & Documentation",
        catClass: "cat-process",
        icon: "&#128203;",
        items: [
            { label: "Documentation Request", text: "I understand you need additional information or documentation. Let me review what's available and assist you with obtaining it." },
            { label: "Account Review Request", text: "I understand you'd like a closer review of your account. Let me go through the details carefully and provide any recommendations or findings." },
            { label: "Customer Unsure of Next Steps", text: "I understand that the process may not be completely clear. Let me explain the next steps and guide you through what to expect moving forward." },
            { label: "Delayed Resolution", text: "I understand this has taken longer than expected. Let me review the current status and determine what can be done to move things forward." }
        ]
    },
    {
        category: "New Account Setup",
        catClass: "cat-setup",
        icon: "&#128640;",
        items: [
            { label: "New Customer Onboarding", text: "I understand you're excited to get started with Metro. Let me walk you through everything and make sure your service is set up perfectly." },
            { label: "SIM Card Issue", text: "I understand your SIM card isn't working properly. Let me troubleshoot this with you and get your service up and running." },
            { label: "Account PIN Reset", text: "I understand you need to update your account security. Let me verify your identity and help you set up a new PIN." }
        ]
    },
    {
        category: "Voicemail & Messaging",
        catClass: "cat-messaging",
        icon: "&#128172;",
        items: [
            { label: "Voicemail Setup", text: "I understand you need help setting up your voicemail. Let me guide you through the setup process step by step." },
            { label: "Text Message Issues", text: "I understand you're having trouble with text messages. Let me check your messaging settings and resolve this for you." },
            { label: "Spam/Scam Calls", text: "I understand how frustrating unwanted calls can be. Let me review the options available to help block these calls on your account." }
        ]
    },
    {
        category: "Feedback & Requests",
        catClass: "cat-feedback",
        icon: "&#128172;",
        items: [
            { label: "Feature Request", text: "I appreciate you sharing that suggestion with us. Let me document your feedback and review any existing options that may meet your needs." },
            { label: "Customer Feedback", text: "Thank you for taking the time to share your feedback. Your experience is important to us, and I'll make sure your comments are properly documented." }
        ]
    },
    {
        category: "Accessibility",
        catClass: "cat-accessibility",
        icon: "&#9855;",
        items: [
            { label: "Accessibility Needs", text: "I understand you have specific accessibility needs. Let me review the available accommodations and ensure you receive the best possible support." },
            { label: "Language Barrier", text: "I understand there may be a language barrier. Let me connect you with the appropriate resources to ensure we communicate effectively." },
            { label: "Hearing Impaired Support", text: "I understand you need accommodations for hearing impairment. Let me review the TTY and relay service options available to you." }
        ]
    },
    {
        category: "Escalation & Difficult Interactions",
        catClass: "cat-escalation",
        icon: "&#128680;",
        items: [
            { label: "General Escalation", text: "I understand this matter is important to you. Let me thoroughly review the situation and ensure the appropriate actions are taken." },
            { label: "Customer Requesting Exception", text: "I understand why you're requesting an exception in this situation. Let me review the account and determine what options may be available." },
            { label: "Customer Wants Supervisor", text: "I understand your concern and I want to make sure it gets the attention it deserves. Let me review the situation thoroughly and determine the best next step for you." },
            { label: "Customer Angry / Upset", text: "I understand why you're frustrated, and I appreciate you bringing this to our attention. Let me focus on resolving the issue and finding the best possible solution for you today." },
            { label: "Transfer from Another Agent", text: "I understand you've already explained this concern previously. I've reviewed the notes and will continue assisting from where the last interaction left off." },
            { label: "Long Hold Time", text: "I appreciate your patience and understand your time is valuable. Now that I have your account open, I'll work efficiently to address your concern and provide a resolution." }
        ]
    },
    {
        category: "Closing / Wrap-Up",
        catClass: "cat-closing",
        icon: "&#128077;",
        items: [
            { label: "Call Closing", text: "I understand you want to make sure everything is resolved. Let me confirm the details and ensure you're satisfied before we wrap up." },
            { label: "Follow-Up Scheduled", text: "I understand you need a follow-up on this matter. Let me schedule that for you and make sure you have all the details." },
            { label: "Survey Request", text: "I understand your time is valuable. If you have a moment after our call, your feedback would help us improve our service." }
        ]
    }
];

let currentFilter = 'all';
let searchQuery = '';
let favorites = JSON.parse(localStorage.getItem('metroFavorites') || '[]');
let recent = JSON.parse(localStorage.getItem('metroRecent') || '[]');
let darkMode = localStorage.getItem('metroDarkMode') === 'true';

const content = document.getElementById('content');
const searchBox = document.getElementById('searchBox');
const searchStats = document.getElementById('searchStats');
const filterContainer = document.getElementById('filterContainer');
const toast = document.getElementById('toast');
const toastText = document.getElementById('toastText');
const recentSection = document.getElementById('recentSection');
const recentChips = document.getElementById('recentChips');
const themeToggle = document.getElementById('themeToggle');

function init() {
    if (darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️ Light';
    }
    themeToggle.addEventListener('click', toggleTheme);
    renderRecent();
    renderFilters();
    renderContent();
    setupEventListeners();
}

function toggleTheme() {
    darkMode = !darkMode;
    if (darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️ Light';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = '🌙 Dark';
    }
    localStorage.setItem('metroDarkMode', darkMode);
}

function renderRecent() {
    if (recent.length === 0) {
        recentSection.classList.remove('visible');
        return;
    }
    recentSection.classList.add('visible');
    recentChips.innerHTML = recent.map(r => 
        `<div class="recent-chip" onclick="searchBox.value='${r.replace(/'/g, "\\'")}'; searchBox.dispatchEvent(new Event('input'));">${r}</div>`
    ).join('');
}

function addRecent(label) {
    recent = recent.filter(r => r !== label);
    recent.unshift(label);
    if (recent.length > 5) recent = recent.slice(0, 5);
    localStorage.setItem('metroRecent', JSON.stringify(recent));
    renderRecent();
}

function renderFilters() {
    const allCount = data.reduce((sum, cat) => sum + cat.items.length, 0);
    let html = `<div class="filter-pill ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">All <span class="count">${allCount}</span></div>`;
    data.forEach(cat => {
        html += `<div class="filter-pill ${currentFilter === cat.category ? 'active' : ''}" data-filter="${cat.category}">${cat.category} <span class="count">${cat.items.length}</span></div>`;
    });
    html += `<div class="filter-pill ${currentFilter === 'favorites' ? 'active' : ''}" data-filter="favorites">⭐ Favorites <span class="count">${favorites.length}</span></div>`;
    filterContainer.innerHTML = html;
}

function renderContent() {
    let filteredData = data;
    let totalCount = 0;

    if (currentFilter !== 'all' && currentFilter !== 'favorites') {
        filteredData = data.filter(cat => cat.category === currentFilter);
    }

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredData = filteredData.map(cat => ({
            ...cat,
            items: cat.items.filter(item => 
                item.label.toLowerCase().includes(query) || 
                item.text.toLowerCase().includes(query) ||
                cat.category.toLowerCase().includes(query)
            )
        })).filter(cat => cat.items.length > 0);
    }

    if (currentFilter === 'favorites') {
        filteredData = data.map(cat => ({
            ...cat,
            items: cat.items.filter(item => favorites.includes(item.label))
        })).filter(cat => cat.items.length > 0);
    }

    totalCount = filteredData.reduce((sum, cat) => sum + cat.items.length, 0);

    if (searchQuery) {
        searchStats.textContent = `Found ${totalCount} phrase${totalCount !== 1 ? 's' : ''} for "${searchQuery}"`;
    } else if (currentFilter === 'favorites') {
        searchStats.textContent = `${totalCount} favorite phrase${totalCount !== 1 ? 's' : ''}`;
    } else if (currentFilter !== 'all') {
        searchStats.textContent = `${totalCount} phrases in ${currentFilter}`;
    } else {
        searchStats.textContent = `Showing all ${totalCount} phrases`;
    }

    if (totalCount === 0) {
        content.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">&#128269;</div>
                <h3>No phrases found</h3>
                <p>Try adjusting your search or filter to find what you are looking for.</p>
            </div>
        `;
        return;
    }

    let html = '';
    filteredData.forEach((cat, index) => {
        html += `
            <div class="category-section ${cat.catClass}" style="animation-delay: ${index * 0.05}s">
                <div class="category-header">
                    <div class="category-icon">${cat.icon}</div>
                    <div class="category-title">${cat.category}</div>
                    <div class="category-count">${cat.items.length}</div>
                </div>
                <div class="cards-grid">
                    ${cat.items.map(item => {
                        const safeText = item.text.replace(/'/g, "\\'").replace(/"/g, '&quot;');
                        const safeLabel = item.label.replace(/'/g, "\\'");
                        return `
                        <div class="phrase-card ${cat.catClass}" data-label="${safeLabel}" data-text="${safeText}">
                            <div class="card-label">${item.label}</div>
                            <div class="card-text">"${item.text}"</div>
                            <div class="card-actions">
                                <button class="action-btn copy" onclick="event.stopPropagation(); copyPhrase('${safeText}', '${safeLabel}', this)">
                                    &#128203; Copy
                                </button>
                                <button class="action-btn fav ${favorites.includes(item.label) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${safeLabel}', this)">
                                    ${favorites.includes(item.label) ? '⭐ Favorited' : '☆ Favorite'}
                                </button>
                            </div>
                        </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    });

    content.innerHTML = html;
}

function copyPhrase(text, label, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const card = btn.closest('.phrase-card');
        card.classList.add('copied');
        setTimeout(() => card.classList.remove('copied'), 600);
        showToast('✅ Copied to clipboard!');
        btn.innerHTML = '✅ Copied!';
        setTimeout(() => { btn.innerHTML = '&#128203; Copy'; }, 2000);
        addRecent(label);
    });
}

function toggleFavorite(label, btn) {
    const index = favorites.indexOf(label);
    if (index > -1) {
        favorites.splice(index, 1);
        btn.classList.remove('active');
        btn.innerHTML = '☆ Favorite';
        showToast('☆ Removed from favorites');
    } else {
        favorites.push(label);
        btn.classList.add('active');
        btn.innerHTML = '⭐ Favorited';
        showToast('⭐ Added to favorites!');
    }
    localStorage.setItem('metroFavorites', JSON.stringify(favorites));
    renderFilters();
    if (currentFilter === 'favorites') {
        renderContent();
    }
}

function showToast(message) {
    toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 2500);
}

function setupEventListeners() {
    searchBox.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderContent();
    });

    filterContainer.addEventListener('click', (e) => {
        const pill = e.target.closest('.filter-pill');
        if (!pill) return;
        currentFilter = pill.dataset.filter;
        renderFilters();
        renderContent();
    });

    content.addEventListener('click', (e) => {
        if (e.target.closest('.action-btn')) return;
        const card = e.target.closest('.phrase-card');
        if (card) {
            const text = card.dataset.text;
            const label = card.dataset.label;
            navigator.clipboard.writeText(text).then(() => {
                card.classList.add('copied');
                setTimeout(() => card.classList.remove('copied'), 600);
                showToast('✅ Copied to clipboard!');
                addRecent(label);
            });
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchBox) {
            e.preventDefault();
            searchBox.focus();
        }
    });
}

init();
