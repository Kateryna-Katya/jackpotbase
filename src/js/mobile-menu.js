document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const iconContainer = menuBtn.querySelector('.icon');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    const burgerIcon = `
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <mask id="mask0_1_67" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
    <rect width="48" height="48" fill="#D9D9D9" />
  </mask>
  <g mask="url(#mask0_1_67)">
    <path d="M12 28C10.9 28 9.95833 27.6083 9.175 26.825C8.39167 26.0417 8 25.1 8 24C8 22.9 8.39167 21.9583 9.175 21.175C9.95833 20.3917 10.9 20 12 20C13.1 20 14.0417 20.3917 14.825 21.175C15.6083 21.9583 16 22.9 16 24C16 25.1 15.6083 26.0417 14.825 26.825C14.0417 27.6083 13.1 28 12 28ZM24 28C22.9 28 21.9583 27.6083 21.175 26.825C20.3917 26.0417 20 25.1 20 24C20 22.9 20.3917 21.9583 21.175 21.175C21.9583 20.3917 22.9 20 24 20C25.1 20 26.0417 20.3917 26.825 21.175C27.6083 21.9583 28 22.9 28 24C28 25.1 27.6083 26.0417 26.825 26.825C26.0417 27.6083 25.1 28 24 28ZM36 28C34.9 28 33.9583 27.6083 33.175 26.825C32.3917 26.0417 32 25.1 32 24C32 22.9 32.3917 21.9583 33.175 21.175C33.9583 20.3917 34.9 20 36 20C37.1 20 38.0417 20.3917 38.825 21.175C39.6083 21.9583 40 22.9 40 24C40 25.1 39.6083 26.0417 38.825 26.825C38.0417 27.6083 37.1 28 36 28Z" fill="white" />
  </g>
</svg>
    `;
  
    const crossIcon = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9999 23.5367L28.8382 32.375C29.3072 32.844 29.9433 33.1075 30.6066 33.1075C31.2698 33.1075 31.9059 32.844 32.3749 32.375C32.8439 31.906 33.1074 31.2699 33.1074 30.6067C33.1074 29.9434 32.8439 29.3073 32.3749 28.8383L23.5332 20L32.3732 11.1617C32.6054 10.9294 32.7895 10.6538 32.915 10.3504C33.0406 10.047 33.1052 9.72191 33.1051 9.39358C33.105 9.06525 33.0403 8.74014 32.9146 8.43683C32.7889 8.13352 32.6046 7.85795 32.3724 7.62583C32.1402 7.39372 31.8645 7.20962 31.5612 7.08405C31.2578 6.95847 30.9327 6.89388 30.6043 6.89396C30.276 6.89403 29.9509 6.95878 29.6476 7.0845C29.3443 7.21022 29.0687 7.39445 28.8366 7.62667L19.9999 16.465L11.1616 7.62667C10.9311 7.38779 10.6553 7.1972 10.3504 7.06604C10.0454 6.93487 9.71739 6.86575 9.38544 6.86271C9.0535 6.85967 8.72427 6.92277 8.41697 7.04833C8.10967 7.17389 7.83046 7.35939 7.59562 7.59401C7.36077 7.82863 7.17501 8.10767 7.04916 8.41485C6.92332 8.72203 6.85991 9.0512 6.86263 9.38315C6.86536 9.7151 6.93417 10.0432 7.06505 10.3482C7.19592 10.6533 7.38625 10.9293 7.62491 11.16L16.4666 20L7.62658 28.84C7.38791 29.0707 7.19759 29.3467 7.06671 29.6518C6.93584 29.9568 6.86703 30.2849 6.8643 30.6169C6.86157 30.9488 6.92498 31.278 7.05083 31.5851C7.17668 31.8923 7.36244 32.1714 7.59728 32.406C7.83212 32.6406 8.11134 32.8261 8.41864 32.9517C8.72594 33.0772 9.05516 33.1403 9.38711 33.1373C9.71905 33.1342 10.0471 33.0651 10.352 32.934C10.657 32.8028 10.9327 32.6122 11.1632 32.3733L19.9999 23.5367Z" fill="white" />
</svg>
    `;
  
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
      isMenuOpen ? openModal() : closeModal();
    });
  
    menuItem.forEach(item =>
      item.addEventListener('click', () => {
        closeModal();
        iconContainer.innerHTML = burgerIcon;
        isMenuOpen = false;
      })
    );
  
    window.addEventListener('scroll', blurHeader);
  
    function openModal() {
      modalMenu.style.display = 'block';
    }
  
    function closeModal() {
      modalMenu.style.display = 'none';
    }
  
    function blurHeader() {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add('header-scroll');
      } else {
        header.classList.remove('header-scroll');
      }
    }
  });