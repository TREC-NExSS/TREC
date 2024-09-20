fetch('/options-bar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('options-bar').innerHTML = data;

        // Find elements after loading
        const toggleButton = document.querySelector('.toggle-button');
        const navLinks = document.querySelector('.nav-links');
        const headerContainer = document.querySelector('.header-container');
        const optionsContainer = document.querySelector('.options-container');

        // Ensure elements exist before adding event listeners
        if (toggleButton && navLinks) {
            toggleButton.addEventListener('click', function() {
                console.log('Toggle button clicked');
                navLinks.classList.toggle('active');
            });
        }

        function adjustOptionsContainer() {
            if (headerContainer && optionsContainer) {
                const headerHeight = headerContainer.offsetHeight;
                optionsContainer.style.top = `${headerHeight}px`;
            } else {
                console.error('Header container or options container not found');
            }
        }

        // Use event delegation for dropdown buttons
        if (optionsContainer) {
            optionsContainer.addEventListener('click', (event) => {
                console.log('Options container clicked'); // Debug line
                if (event.target.matches('.dropdown-button')) {
                    console.log('Dropdown button clicked');
                    const dropdown = event.target.parentElement;
                    dropdown.classList.toggle('active');
                }
            });
            
        }

        // Initial adjustment
        adjustOptionsContainer();

        // Reposition on window resize
        window.addEventListener('resize', adjustOptionsContainer);
    })
    .catch(error => {
        console.error('Error fetching options bar:', error);
    });
