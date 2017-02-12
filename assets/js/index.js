(function () {
  const menuBar = document.querySelector('.menu-bar-icon')
  const menus = document.querySelector('.nav-menus')
  const rootElement = document.documentElement // root Element

  // shows current date next copyright
  document.querySelector('.date').textContent = new Date().getFullYear()
  
  function navHide () {
    menus.classList.toggle('nav-hide')
  }
  
  // Event Listeners
  menuBar.addEventListener('click', navHide)
})()