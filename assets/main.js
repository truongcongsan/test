const $ = document.querySelector.bind(document);

const btnToggle = $(".btn-toggle");

const hideShow = () => {
  const sideBar = $("#sidebar");
  const mainContent = $(".main-content");

  const stickOne = $("#stick-one");
  const stickTwo = $("#stick-two");
  const stickThree = $("#stick-three");

  const setWidthMainContent = () => {
    if (sideBar.className == "sidebar-hide") {
      mainContent.style.width = "calc(100% - 10px)";
    }
    if (sideBar.className == "sidebar-show") {
      mainContent.style.width = "calc(100% - 200px)";
    }
  };

  const swapClassName = (domName, cl1, cl2) => {
    if (domName.className == cl1) {
      domName.className = cl2;
    } else {
      domName.className = cl1;
    }
  };
  swapClassName(sideBar, "sidebar-hide", "sidebar-show");
  swapClassName(stickOne, "stick one-open", "stick one-close");
  swapClassName(stickTwo, "stick two-open", "stick two-close");
  swapClassName(stickThree, "stick three-open", "stick three-close");

  setWidthMainContent();
};

const btnInfoProduct = () => {
  const info = $('.info');
  const product = $('.product');
  if(info.style.display === "none") {
    info.style.display = "flex";
    product.style.display = "none"
  }
  else {
    info.style.display = "none";
    product.style.display = "flex"
  }
}