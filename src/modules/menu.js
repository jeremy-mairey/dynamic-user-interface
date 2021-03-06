const openNavMenu = document.querySelector('.open-nav-menu');
const closeNavMenu = document.querySelector('.close-nav-menu');
const navMenu = document.querySelector('.nav-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const mediaSize = 992;

const manageMenu = () => {
    const toggleNav = () => {
        navMenu.classList.toggle('open');
        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('hidden-scrolling');
    };

    openNavMenu.addEventListener('click', toggleNav);
    closeNavMenu.addEventListener('click', toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener('click', toggleNav);

    const collapseSubMenu = () => {
        navMenu
            .querySelector('.menu-item-has-children.active .sub-menu')
            .removeAttribute('style');
        navMenu
            .querySelector('.menu-item-has-children.active')
            .classList.remove('active');
    };

    const resizeFix = () => {
        // if navMenu is open ,close it
        if (navMenu.classList.contains('open')) {
            toggleNav();
        }
        // if menuItemHasChildren is expanded , collapse it
        if (navMenu.querySelector('.menu-item-has-children.active')) {
            collapseSubMenu();
        }
    };

    navMenu.addEventListener('click', (event) => {
        if (
            event.target.hasAttribute('data-toggle') &&
            window.innerWidth <= mediaSize
        ) {
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
            // if menuItemHasChildren is already expanded, collapse it
            if (menuItemHasChildren.classList.contains('active')) {
                collapseSubMenu();
            } else {
                // collapse existing expanded menuItemHasChildren
                if (navMenu.querySelector('.menu-item-has-children.active')) {
                    collapseSubMenu();
                }
                // expand new menuItemHasChildren
                menuItemHasChildren.classList.add('active');
                const subMenu = menuItemHasChildren.querySelector('.sub-menu');
                subMenu.style.maxHeight = `${subMenu.scrollHeight}px`;
            }
        }
    });

    window.addEventListener('resize', () => {
        if (this.innerWidth > mediaSize) {
            resizeFix();
        }
    });
};

export default manageMenu;
