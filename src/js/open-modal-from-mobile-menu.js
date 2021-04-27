(() => {
  const menuMobileBtnRef = document.querySelector("[data-menu-mobile-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileBackdrop = document.querySelector("[data-menu-backdrop]");
    const modal = document.querySelector('[data-modal]');
    const dasktopNavigation = document.querySelector("[data-menu-daskt-nav]");
 
    menuMobileBtnRef.addEventListener("click", () => {
        mobileMenuRef.classList.toggle("is-open");
        return false;
    });

    menuMobileBtnRef.addEventListener("click", () => {
        mobileBackdrop.classList.toggle("is-open-backdrop");
        return false;
    });

        menuMobileBtnRef.addEventListener("click", () => {
        modal.classList.toggle("is-hidden");
        return false;
        });
    
    menuMobileBtnRef.addEventListener('click', () => {
    dasktopNavigation.classList.toggle("is-open-nav");
  });

})()