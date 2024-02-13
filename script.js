const switchButton = document.querySelector('#switch')
switchButton.addEventListener('click', toggleMode)

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light-theme')

  const img = document.querySelector('#profile img')

  if (html.classList.contains('light-theme')) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute('src', './assets/avatar.png')
  }
}
