import '../scss/style.scss';
import { openSidebar, closeSidebar } from './sidebar.js';
import { updatePagination } from './pagination.js';
import { showMore, hide, initHiddenArray, showMoreArray, hideArray } from './show-more.js';

const windowWidthSmall = 768;
const windowWidthLarge = 1120;

const hiddenClass = "hidden";

const sidebarsLayer = document.querySelector(".sidebars-layer");
const menuSidebar = document.querySelector(".sidebar-menu");
const openButton = document.querySelector(".header__menu-button");
const closeButton = document.querySelector(".sidebar__close-button");

const sidebarOpenClass = "sidebar_open";

openSidebar(menuSidebar, openButton, sidebarOpenClass, sidebarsLayer, hiddenClass);
closeSidebar(menuSidebar, closeButton, sidebarOpenClass, sidebarsLayer, hiddenClass);

const mainText = document.querySelectorAll(".text-section__paragraph");
const showMoreButton = document.querySelector(".text-section__read-more-button");
const hideButton = document.querySelector(".text-section__hide-button");

showMore(mainText[1], showMoreButton, hideButton, hiddenClass);
hide(mainText[1], showMoreButton, hideButton, hiddenClass);

const brandsPagination = document.querySelector(".brands__pagination");
const brandList = document.querySelector(".brands__brand-list");

updatePagination(brandList, brandsPagination, "pagination__dot_active", 240);

const brands = document.querySelectorAll(".brand-list__brand");
const showMoreBrandsButton = document.querySelector(".brands__show-more-button");
const hideBrandsButton = document.querySelector(".brands__hide-button");

let visibleBrandsCount = 11;
if (window.innerWidth >= windowWidthSmall && window.innerWidth < windowWidthLarge) {
  visibleBrandsCount = 6;
}
else if (window.innerWidth >= windowWidthLarge) {
  visibleBrandsCount = 8;
}

initHiddenArray(brands, showMoreBrandsButton, hideBrandsButton, visibleBrandsCount);
showMoreArray(brands, showMoreBrandsButton, hideBrandsButton, hiddenClass);
hideArray(brands, showMoreBrandsButton, hideBrandsButton, visibleBrandsCount, hiddenClass);

const repairPagination = document.querySelector(".repair__pagination");
const repairList = document.querySelector(".repair__repair-list");

updatePagination(repairList, repairPagination, "pagination__dot_active", 240);

const repair = document.querySelectorAll(".repair-list__brand");
const showMoreRepairButton = document.querySelector(".repair__show-more-button");
const hideRepairButton = document.querySelector(".repair__hide-button");

let visibleRepairCount = 5;
if (window.innerWidth >= windowWidthSmall && window.innerWidth < windowWidthLarge) {
  visibleRepairCount = 3;
}
else if (window.innerWidth >= windowWidthLarge) {
  visibleRepairCount = 4;
}

initHiddenArray(repair, showMoreRepairButton, hideRepairButton, visibleRepairCount);
showMoreArray(repair, showMoreRepairButton, hideRepairButton, hiddenClass);
hideArray(repair, showMoreRepairButton, hideRepairButton, visibleRepairCount, hiddenClass);