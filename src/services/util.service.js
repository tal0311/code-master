function makeId(length = 6) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}

function makeLorem(size = 100) {
  var words = [
    'The sky',
    'above',
    'the port',
    'was',
    'the color of television',
    'tuned',
    'to',
    'a dead channel',
    '.',
    'All',
    'this happened',
    'more or less',
    '.',
    'I',
    'had',
    'the story',
    'bit by bit',
    'from various people',
    'and',
    'as generally',
    'happens',
    'in such cases',
    'each time',
    'it',
    'was',
    'a different story',
    '.',
    'It',
    'was',
    'a pleasure',
    'to',
    'burn'
  ]
  var txt = ''
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)] + ' '
  }
  return txt
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}

function getDayName(date, locale) {
  date = new Date(date)
  return date.toLocaleDateString(locale, { weekday: 'long' })
}

function getFormattedDate(ts) {
  const date = new Date(ts).toDateString().split(' ')
  return { month: date[1], day: date[2] }
}
function getFormattedTime(ts) {
  const time = new Date(ts).toLocaleTimeString()
  const date = new Date(ts).toDateString()
  return { date, time }
}
function getVidFormattedDate(ts) {
  return new Date(ts).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

function getMonthName(date) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  return monthNames[date.getMonth()]
}
function animateCSS(el, animation) {
  return new Promise((resolve) => {
    const animationName = `animate__${animation}`
    el.classList.add(`animate__animated`, animationName)
    el.addEventListener('animationend', handleAnimationEnd, { once: true })

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation()
      el.classList.remove(`${prefix}animated`, animationName)
      resolve('Animation ended')
    }
  })
}

function getDomainName(url) {
  const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/.]+)/
  const match = url.match(regex)
  return match ? match[1] : null
}

const debounce = (func, wait) => {
  console.debug('debounce');
  let timeout
  return (...args) => {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function setConsoleData(isCode, isLI, isColab) {
  var strOps = {
    isCode: 'https://github.com/tal0311/google-apps',
    isLI: 'Contact me At https://www.linkedin.com/in/tal-amit/'
  }
  console.log(
    `%c ${strOps['isCode']} \n ${strOps['isLI']}`,
    'color:#35495e; background:#42b883; font-size:1rem; padding:0 0.4rem; border-radius:4px'
  )
}

function isMobile() {
  if (navigator.userAgentData.mobile || navigator.maxTouchPoints > 1) {
    return true
  }
  return false
}

function getImg(url) {
  return new URL(url, import.meta.url).href
}

function openPopUp(url) {
  const width = window.innerWidth
  const height = window.innerHeight
  const windowOptions = {
    width: width,
    height: height,
    top: 50,
    left: width / 2,
    resizable: true,
    scrollbars: true,
    toolbar: false,
    location: false,
    status: false,
    menubar: false
  }
  window.open(url, '_blank', _getWindowOptionsString(windowOptions))
}
function _getWindowOptionsString(options) {
  return Object.keys(options)
    .map((key) => `${key}=${options[key]}`)
    .join(',')
}

function getAsCSV(items) {
  const [h1, h2, h3, h4, h5] = Object.keys(items[0])
  let csvStr = `${h2},${h3},${h4}`
  items.forEach(({ name, icon, group }) => {
      const csvLine = `\n${name},${icon},${group}`
      csvStr += csvLine
  })

  return csvStr
}



export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  loadFromStorage,
  saveToStorage,
  getDayName,
  getMonthName,
  animateCSS,
  getFormattedDate,
  debounce,
  getFormattedTime,
  getVidFormattedDate,
  setConsoleData,
  isMobile,
  getImg,
  getDomainName,
  openPopUp
}



window.$utils = utilService
