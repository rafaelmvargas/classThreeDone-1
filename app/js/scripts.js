var tabs = document.querySelectorAll('nav a')
contentPara = document.querySelector('.content')

function makeActive(event) {
  if (!event.target.matches('a')) return
  makeInactive()
  event.target.classList.add('active')
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove('active'))
}

function setContentAccordingToHash() {
  const type = window.location.hash.substring(1)
  contentPara.innerHTML = data[type]
}

function initializePage() {
  if (!window.location.hash) {
    window.location.hash = 'cuisines'
    document.querySelector('[href="#cuisines"]').classList.add('active')
  } else {
    document
      .querySelector(`[href="${windo.location.hash}]"`)
      .classList.add('active')
  }
  setContentAccordingToHash()
}

document.addEventListener('click', makeActive)
window.addEventListener('hashchange', setContentAccordingToHash)

initializePage()

const name = 'Yorik'
const age = 2
const oldSchool =
  "My dog's name is " + name + ' and he is ' + age * 7 + ' years old.'

const newSchool = `My dog's name is ${name} and he is ${age * 7} years old.`
console.log('oldschool ', oldSchool)
console.log('newschool ', newSchool)
