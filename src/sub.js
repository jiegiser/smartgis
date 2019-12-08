import 'src/index.css'
function component() {
  const element = document.createElement('div')
  element.innerHTML = 'Hello World'
  setTimeout(() => {
    console.log('es6语法')
  }, 1000)
  return element
}
document.body.appendChild(component())
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration)
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}
