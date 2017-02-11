(function () {
  const menuBar = document.querySelector('.menu-bar-icon')
  const menus = document.querySelector('.nav-menus')
  const rootElement = document.documentElement // root Element

	// shows current date next copyright
  document.querySelector('.date').textContent = new Date().getFullYear()

  function navHeightOnScroll () {
    const scrollAmt = window.scrollY
    if (scrollAmt > 100 && scrollAmt < 200) {
    // set navbar height to 80 px
      rootElement.style.setProperty('--navbar-height', '80px')
    } else if (scrollAmt < 100) {
	  // set navbar height to 100px
      rootElement.style.setProperty('--navbar-height', '100px')
    } else {
      return false
    }
  }

  function navHide () {
    menus.classList.toggle('nav-hide')
  }
  
	// Event Listeners
  menuBar.addEventListener('click', navHide)
  window.addEventListener('scroll', navHeightOnScroll)
})()
