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
