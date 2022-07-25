const tabs = document.querySelector('.tickets__tabs');
const tabsBtns = tabs.querySelectorAll('.tickets__tabs-button');
const tabsItems = tabs.querySelectorAll('.tickets__tabs-items');


const tabsActive = () => {

  tabsBtns.forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      const currentBtn = tabBtn;
      const tabId = currentBtn.getAttribute('data-tab');
      const currentTab = tabs.querySelector(tabId);

      if (!currentBtn.classList.contains('button--tabs-active')) {
        tabsBtns.forEach((button) => {
          button.classList.remove('tickets__tabs-button--active');
        });

        tabsItems.forEach((tabItem) => {
          tabItem.classList.remove('tickets__tabs-items--active');
        });

        currentBtn.classList.add('tickets__tabs-button--active');
        currentTab.classList.add('tickets__tabs-items--active');
      }

    });
  });

};

export {tabsActive};
