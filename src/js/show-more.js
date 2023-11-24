export const showMore = (element, showButton, hideButton, hiddenClass) => {
  showButton.addEventListener("click", () => {
    element.classList.remove(hiddenClass);
    showButton.classList.add(hiddenClass);
    hideButton.classList.remove(hiddenClass);
  });
}

export const hide = (element, showButton, hideButton, hiddenClass) => {
  hideButton.addEventListener("click", () => {
    element.classList.add(hiddenClass);
    showButton.classList.remove(hiddenClass);
    hideButton.classList.add(hiddenClass);
  });
}

export const initHiddenArray = function (elements, showButton, hideButton, count) {
  showButton.classList.remove("hidden");
  hideButton.classList.add("hidden");
  elements.forEach((element, index) => {
      element.classList.add("hidden");
      if (index < count) {
          element.classList.remove("hidden");
      }
  });
}

export const showMoreArray = (elements, showButton, hideButton, hiddenClass) => {
  showButton.addEventListener("click", () => {
    elements.array.forEach(element => {
      element.classList.remove(hiddenClass);
    });
    showButton.classList.add(hiddenClass);
    hideButton.classList.remove(hiddenClass);
  });
}

export const hideArray = (elements, showButton, hideButton, count, hiddenClass) => {
  showButton.addEventListener("click", () => {
    elements.array.forEach((element, index) => {
      if (index >= count) {
        element.classList.add(hiddenClass);
      }
    });
    showButton.classList.add(hiddenClass);
    hideButton.classList.remove(hiddenClass);
  });
}