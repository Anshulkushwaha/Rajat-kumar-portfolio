/**
 * Main Application Logic - Rajat Kumar Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    // State variables
    let currentFilter = 'All';
    let currentSort = 'year-desc';
    let searchQuery = '';

    // Elements
    const pubListContainer = document.getElementById('pub-list-container');
    const pubSearchInput = document.getElementById('pub-search-input');
    const pubSortSelect = document.getElementById('pub-sort-select');
    const filterContainer = document.getElementById('filter-chips-container');
    const coauthorsContainer = document.getElementById('coauthors-container');
    const chartCanvas = document.getElementById('citation-chart-canvas');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    // Modals
    const citeModal = document.getElementById('cite-modal');
    const citeModalTitle = document.getElementById('cite-modal-title');
    const citeCodeBlock = document.getElementById('cite-code-block');
    const citeCopyBtn = document.getElementById('cite-copy-btn');
    const citeCloseBtn = document.getElementById('cite-close-btn');

    const cvModal = document.getElementById('cv-modal');
    const cvOpenBtn = document.getElementById('cv-open-btn');
    const cvCloseBtn = document.getElementById('cv-close-btn');

    // Toast Container
    const toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);

    function showToast(message, icon = 'check_circle') {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span class="material-symbols-outlined">${icon}</span> <span>${message}</span>`;
        toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // --- Theme Management ---
    function initTheme() {
        const savedTheme = localStorage.getItem('scholar_theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            updateThemeIcon(savedTheme);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            updateThemeIcon('dark');
        }
    }

    function updateThemeIcon(theme) {
        if (!themeToggleBtn) return;
        const iconSpan = themeToggleBtn.querySelector('.material-symbols-outlined');
        if (iconSpan) {
            iconSpan.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('scholar_theme', next);
            updateThemeIcon(next);
            drawChart(); // Redraw chart for proper color contrast
        });
    }

    initTheme();

    // --- Mobile Menu Toggle ---
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
        });
    }

    // --- Publications Filtering & Sorting ---
    function getFilteredPublications() {
        return SCHOLAR_DATA.publications.filter(pub => {
            // Topic filter
            const matchesFilter = currentFilter === 'All' || 
                pub.topics.some(t => t.toLowerCase() === currentFilter.toLowerCase());

            // Search query
            const q = searchQuery.toLowerCase().trim();
            const matchesSearch = !q || 
                pub.title.toLowerCase().includes(q) ||
                pub.authors.join(' ').toLowerCase().includes(q) ||
                pub.journal.toLowerCase().includes(q) ||
                (pub.abstract && pub.abstract.toLowerCase().includes(q));

            return matchesFilter && matchesSearch;
        }).sort((a, b) => {
            if (currentSort === 'citations-desc') {
                return b.citations - a.citations;
            } else if (currentSort === 'year-desc') {
                return b.year - a.year || b.citations - a.citations;
            } else if (currentSort === 'year-asc') {
                return a.year - b.year;
            } else if (currentSort === 'title-asc') {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });
    }

    function renderPublications() {
        if (!pubListContainer) return;
        const pubs = getFilteredPublications();

        if (pubs.length === 0) {
            pubListContainer.innerHTML = `
                <div style="text-align: center; padding: 3rem 1rem; color: var(--color-on-surface-variant);">
                    <span class="material-symbols-outlined" style="font-size: 3rem; margin-bottom: 0.5rem; opacity: 0.5;">search_off</span>
                    <p style="font-size: 1.1rem; font-weight: 500;">No publications found</p>
                    <p style="font-size: 0.9rem; margin-top: 0.25rem;">Try adjusting your search query or filter topic.</p>
                </div>
            `;
            return;
        }

        pubListContainer.innerHTML = pubs.map(pub => `
            <article class="pub-item">
                <a href="${pub.scholarUrl || pub.doiUrl}" target="_blank" rel="noopener" class="pub-title">${pub.title}</a>
                <p class="pub-authors">${pub.authorsFormatted}</p>
                <p class="pub-journal">${pub.journal} ${pub.volumeDetails ? '• ' + pub.volumeDetails : ''} (${pub.year})</p>
                <div class="pub-meta-row">
                    <div class="pub-tags">
                        ${pub.topics.map(t => `<span class="pub-tag">${t}</span>`).join('')}
                    </div>
                    <div class="pub-actions">
                        <span class="citation-badge">
                            <span class="material-symbols-outlined" style="font-size: 1rem;">format_quote</span>
                            Cited by ${pub.citations}
                        </span>
                        <button class="cite-export-btn" data-id="${pub.id}">
                            <span class="material-symbols-outlined" style="font-size: 1rem;">code</span> Cite
                        </button>
                    </div>
                </div>
            </article>
        `).join('');

        // Attach event listeners for cite buttons
        pubListContainer.querySelectorAll('.cite-export-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const pubId = btn.getAttribute('data-id');
                openCiteModal(pubId);
            });
        });
    }

    // Filter Chips Setup
    const availableFilters = ['All', 'Synthetic Jets', 'Heat Transfer', 'Fluid Flow', 'Machine Learning', 'Numerical CFD', 'Experimental'];

    function renderFilterChips() {
        if (!filterContainer) return;
        filterContainer.innerHTML = availableFilters.map(f => `
            <button class="filter-btn ${f === currentFilter ? 'active' : ''}" data-filter="${f}">
                ${f}
            </button>
        `).join('');

        filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentFilter = btn.getAttribute('data-filter');
                renderFilterChips();
                renderPublications();
            });
        });
    }

    if (pubSearchInput) {
        pubSearchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderPublications();
        });
    }

    if (pubSortSelect) {
        pubSortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderPublications();
        });
    }

    // --- Citation Export Modal ---
    let currentBibtexText = '';

    function openCiteModal(pubId) {
        const pub = SCHOLAR_DATA.publications.find(p => p.id === pubId);
        if (!pub || !citeModal) return;

        citeModalTitle.textContent = 'Cite Paper';
        currentBibtexText = pub.bibtex;
        citeCodeBlock.textContent = pub.bibtex;
        citeModal.classList.add('active');
    }

    if (citeCloseBtn && citeModal) {
        citeCloseBtn.addEventListener('click', () => {
            citeModal.classList.remove('active');
        });
        citeModal.addEventListener('click', (e) => {
            if (e.target === citeModal) citeModal.classList.remove('active');
        });
    }

    if (citeCopyBtn) {
        citeCopyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(currentBibtexText).then(() => {
                showToast('Citation copied to clipboard!');
                citeModal.classList.remove('active');
            }).catch(() => {
                showToast('Failed to copy citation', 'error');
            });
        });
    }

    // --- CV Modal ---
    if (cvOpenBtn && cvModal) {
        cvOpenBtn.addEventListener('click', () => cvModal.classList.add('active'));
    }
    if (cvCloseBtn && cvModal) {
        cvCloseBtn.addEventListener('click', () => cvModal.classList.remove('active'));
        cvModal.addEventListener('click', (e) => {
            if (e.target === cvModal) cvModal.classList.remove('active');
        });
    }

    // --- Co-Authors Rendering ---
    function renderCoAuthors() {
        if (!coauthorsContainer) return;
        coauthorsContainer.innerHTML = SCHOLAR_DATA.coAuthors.map(author => `
            <a href="${author.profileUrl}" target="_blank" rel="noopener" class="coauthor-card">
                <div class="coauthor-name">${author.name}</div>
                <div class="coauthor-role">${author.role}</div>
                <div class="coauthor-inst">${author.institution}</div>
            </a>
        `).join('');
    }

    // --- Citations Chart (Canvas Rendering) ---
    function drawChart() {
        if (!chartCanvas) return;
        const ctx = chartCanvas.getContext('2d');
        const data = SCHOLAR_DATA.profile.citationHistory;

        // Resize canvas for high resolution
        const rect = chartCanvas.getBoundingClientRect();
        chartCanvas.width = rect.width * window.devicePixelRatio || 300;
        chartCanvas.height = rect.height * window.devicePixelRatio || 160;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

        const width = rect.width;
        const height = rect.height;
        const padding = { top: 20, right: 30, bottom: 30, left: 40 };

        ctx.clearRect(0, 0, width, height);

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const barColor = isDark ? '#4f91ff' : '#005bbf';
        const textColor = isDark ? '#a0aec0' : '#44474d';
        const gridColor = isDark ? '#2d3748' : '#e5e7eb';

        const maxVal = Math.max(...data.map(d => d.count), 35);
        const chartWidth = width - padding.left - padding.right;
        const chartHeight = height - padding.top - padding.bottom;

        // Draw horizontal grid lines
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        [0, 15, 30].forEach(val => {
            const y = height - padding.bottom - (val / maxVal) * chartHeight;
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(width - padding.right, y);
            ctx.stroke();

            ctx.fillStyle = textColor;
            ctx.font = '11px Inter, sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText(val.toString(), padding.left - 8, y + 4);
        });

        // Draw Bars
        const barWidth = 36;
        const numBars = data.length;
        const step = chartWidth / numBars;

        data.forEach((item, index) => {
            const x = padding.left + index * step + (step - barWidth) / 2;
            const barH = (item.count / maxVal) * chartHeight;
            const y = height - padding.bottom - barH;

            // Bar shape
            ctx.fillStyle = barColor;
            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(x, y, barWidth, barH, [4, 4, 0, 0]);
            } else {
                ctx.rect(x, y, barWidth, barH);
            }
            ctx.fill();

            // Value label on top of bar
            ctx.fillStyle = isDark ? '#ffffff' : '#04162e';
            ctx.font = 'bold 12px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(item.count.toString(), x + barWidth / 2, y - 6);

            // Year label
            ctx.fillStyle = textColor;
            ctx.font = '12px Inter, sans-serif';
            ctx.fillText(item.year.toString(), x + barWidth / 2, height - 10);
        });
    }

    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('contact-name');
            const emailInput = document.getElementById('contact-email');
            const messageInput = document.getElementById('contact-message');
            const submitBtn = document.getElementById('contact-submit-btn');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            if (!name || !email || !message) {
                showToast('Please fill out all fields.', 'error');
                return;
            }

            // Disable button & indicate sending
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Sending... <span class="material-symbols-outlined">hourglass_empty</span>';
            }

            // Send message asynchronously to target email
            fetch('https://formsubmit.co/ajax/anshulkushwaha81@gmail.com', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                    _subject: `New Portfolio Message from ${name}`
                })
            })
            .then(response => response.json())
            .then(data => {
                showToast(`Thank you, ${name}! Your message has been sent to anshulkushwaha81@gmail.com.`);
                contactForm.reset();
            })
            .catch(err => {
                console.warn('FormSubmit AJAX fallback, submitting form directly:', err);
                showToast(`Thank you, ${name}! Your message is being sent to anshulkushwaha81@gmail.com.`);
                contactForm.submit();
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Send Message <span class="material-symbols-outlined">send</span>';
                }
            });
        });
    }

    // Initializations
    renderFilterChips();
    renderPublications();
    renderCoAuthors();
    setTimeout(drawChart, 100);

    window.addEventListener('resize', drawChart);
});
