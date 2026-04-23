const routes = {
    '/dashboard': 'dashboard_overview/code.html',
    '/students': 'student_management/code.html',
    '/leads': 'leads_sales_management/code.html',
    '/classes': 'class_management/code.html',
};

const defaultRoute = '/dashboard';

async function loadRoute() {
    let hash = window.location.hash.replace('#', '');
    if (!hash || !routes[hash]) {
        hash = defaultRoute;
        window.location.hash = '#' + hash;
        return;
    }

    const appContent = document.getElementById('app-content');
    
    // Add loading state
    appContent.innerHTML = '<div class="p-8 flex justify-center items-center h-full"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>';

    try {
        const url = routes[hash];
        const response = await fetch(url);
        if (!response.ok) throw new Error('Fetch failed');
        let htmlString = await response.text();
        
        // Use DOMParser to parse the fetched HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        
        // Find the <main> tag in the fetched document
        const mainElement = doc.querySelector('main');
        
        if (mainElement) {
            // Apply the classes of the fetched main onto our appContent container
            appContent.className = mainElement.className;
            appContent.innerHTML = mainElement.innerHTML;
        } else {
            appContent.innerHTML = '<div class="p-8 text-error">Could not find main element in the design file.</div>';
        }

        // Update active nav state
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('bg-blue-900', 'text-white');
            link.classList.add('text-slate-600', 'hover:bg-slate-200');
            if (link.getAttribute('href') === '#' + hash) {
                link.classList.add('bg-blue-900', 'text-white');
                link.classList.remove('text-slate-600', 'hover:bg-slate-200');
            }
        });

    } catch (err) {
        console.error('Error loading route:', err);
        appContent.innerHTML = `<div class="p-8 text-error">Error loading the page: ${err.message}</div>`;
    }
}

// Listen for hash changes
window.addEventListener('hashchange', loadRoute);

// Load the initial route
window.addEventListener('DOMContentLoaded', loadRoute);
