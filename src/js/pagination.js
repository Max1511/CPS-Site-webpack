export const updatePagination = (listDiv, pagination, DotActiveClass, elementWidth) => {
  listDiv.addEventListener("scroll", () => {
    let scrollX = listDiv.scrollLeft;
    let elements = pagination.children;
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(DotActiveClass);
        if (scrollX >= elementWidth * i && scrollX < elementWidth * (i + 1)) {
          elements[i].classList.add(DotActiveClass);
        }
      }
  });
}