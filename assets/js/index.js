(function () {
  const menuBar = document.querySelector('.nav-toggle')
  const menus = document.querySelector('.nav-links')
  const header = document.getElementById('header')

  document.querySelectorAll('.date').forEach(el => {
    el.textContent = new Date().getFullYear()
  })

  if (menuBar && menus) {
    menuBar.addEventListener('click', () => menus.classList.toggle('open'))
  }

  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20)
    })
  }
})()
