import 'src/index.css'
import img from './logo.png'
function createImg() {
  const element = document.createElement('img')
  element.src = img
  return element
}
const pr = new Promise((resolve, reject) => {
  resolve('success')
})
pr.then(result => {
  console.log('promise', result)
})
document.body.appendChild(createImg())
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
