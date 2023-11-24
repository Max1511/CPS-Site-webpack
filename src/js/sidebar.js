
export const openSidebar = (sidebar, openButton, sidebarOpenClass, sidebarsLayer = undefined, hiddenClass = "") => {
  openButton.addEventListener("click", () => {
    sidebar.classList.add(sidebarOpenClass);
    if (sidebarsLayer) {
      sidebarsLayer.classList.remove(hiddenClass);
    }
  });
}

export const closeSidebar = (sidebar, openButton, sidebarOpenClass, sidebarsLayer = undefined, hiddenClass = "") => {
  openButton.addEventListener("click", () => {
    sidebar.classList.remove(sidebarOpenClass);
    if (sidebarsLayer) {
      sidebarsLayer.classList.add(hiddenClass);
    }
  });
}