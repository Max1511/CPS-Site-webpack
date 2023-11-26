import '../scss/style.scss';
import { openSidebar, closeSidebar } from './sidebar.js';
import { updatePagination } from './pagination.js';
import { showMore, hide, initHiddenArray, showMoreArray, hideArray } from './show-more.js';

const windowWidthSmall = 768;
const windowWidthLarge = 1440;

const hiddenClass = "hidden";

const sidebarLayer = document.querySelector(".sidebar-left-layer");
const menuSidebar = document.querySelector(".sidebar-menu");
const openButton = document.querySelector(".header__menu-button");
const closeButton = document.querySelector(".sidebar-menu__close-button");

const sidebarLeftOpenClass = "sidebar-left_open";

openSidebar(menuSidebar, openButton, sidebarLeftOpenClass, sidebarLayer, hiddenClass);
closeSidebar(menuSidebar, closeButton, sidebarLeftOpenClass, sidebarLayer, hiddenClass);

const sidebarRightLayer = document.querySelector(".sidebar-right-layer");
const feedbackSidebar = document.querySelector(".sidebar-feedback");
const openFeedbackButtons = [document.querySelector(".header__repair-button"), document.querySelector(".title-block__repair-button")];
const closeFeedbackButton = document.querySelector(".sidebar-feedback__close-button");

const sidebarRightOpenClass = "sidebar-right_open";

openSidebar(feedbackSidebar, openFeedbackButtons[0], sidebarRightOpenClass, sidebarRightLayer, hiddenClass);
openSidebar(feedbackSidebar, openFeedbackButtons[1], sidebarRightOpenClass, sidebarRightLayer, hiddenClass);
closeSidebar(feedbackSidebar, closeFeedbackButton, sidebarRightOpenClass, sidebarRightLayer, hiddenClass);

const requestSidebar = document.querySelector(".sidebar-request");
const openRequestButtons = [document.querySelector(".header__search-button"), document.querySelector(".title-block__search-button")];
const closeRequestButton = document.querySelector(".sidebar-request__close-button");

openSidebar(requestSidebar, openRequestButtons[0], sidebarRightOpenClass, sidebarRightLayer, hiddenClass);
openSidebar(requestSidebar, openRequestButtons[1], sidebarRightOpenClass, sidebarRightLayer, hiddenClass);
closeSidebar(requestSidebar, closeRequestButton, sidebarRightOpenClass, sidebarRightLayer, hiddenClass);

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

const repair = document.querySelectorAll(".repair-list__repair-type");
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

const pricePagination = document.querySelector(".prices__pagination");
const priceList = document.querySelector(".prices__price-list");

updatePagination(priceList, pricePagination, "pagination__dot_active", 260);