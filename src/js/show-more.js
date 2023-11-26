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
  for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("hidden");
      if (i < count) {
        elements[i].classList.remove("hidden");
      }
  }
}

export const showMoreArray = (elements, showButton, hideButton, hiddenClass) => {
  showButton.addEventListener("click", () => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove(hiddenClass);
    }
    showButton.classList.add(hiddenClass);
    hideButton.classList.remove(hiddenClass);
  });
}

export const hideArray = (elements, showButton, hideButton, count, hiddenClass) => {
  hideButton.addEventListener("click", () => {
    for (let i = 0; i < elements.length; i++) {
      if (i >= count) {
        elements[i].classList.add(hiddenClass);
      }
    }
    showButton.classList.remove(hiddenClass);
    hideButton.classList.add(hiddenClass);
  });
}