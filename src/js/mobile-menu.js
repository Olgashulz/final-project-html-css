(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");
  const mobileBackdrop = document.querySelector("[data-menu-backdrop]");
  const dasktopNavigation = document.querySelector("[data-menu-daskt-nav]");

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  })

  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle("is-open");
  });


  menuBtnRef.addEventListener("click", () => {
    mobileBackdrop.classList.toggle("is-open-backdrop");
  })

  mobileBtnClose.addEventListener('click', () => {
    mobileBackdrop.classList.toggle("is-open-backdrop");
  });

  menuBtnRef.addEventListener("click", () => {
    dasktopNavigation.classList.toggle("is-open-nav");
  })

  mobileBtnClose.addEventListener('click', () => {
    dasktopNavigation.classList.toggle("is-open-nav");
  });
})()
