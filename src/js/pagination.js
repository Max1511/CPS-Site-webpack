export const updatePagination = (listDiv, pagination, DotActiveClass) => {
  listDiv.addEventListener("scroll", () => {
    const scrollX = listDiv.scrollLeft;
    const elements = pagination.children;
    const count = elements.length;
    const sliderLength = listDiv.scrollWidth - listDiv.offsetWidth;
    for (let i = 0; i < count; i++) {
        elements[i].classList.remove(DotActiveClass);
        if (scrollX >= sliderLength / count * i  && scrollX <= sliderLength / count * (i + 1)) {
          elements[i].classList.add(DotActiveClass);
        }
      }
  });
}