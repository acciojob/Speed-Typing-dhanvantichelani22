//your JS code here. If required.
const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
function getRandomQuote() {
  return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}
// Creating an  `async function` to return a promise
async function renderNewQuote() {
  const quote = await getRandomQuote()
}
const quoteDisplayElement = document.getElementById('quoteDisplay')

async function renderNewQuote() {
  const quote = await getRandomQuote()
  quoteDisplayElement.innerText=quote
}
const quoteInputElement = document.getElementById('quoteInput')
quoteInputElement.value = null

quote.split('').forEach(character => {
  const characterSpan = document.createElement('span')
  characterSpan.innerText = character
  quoteDisplayElement.appendChild(characterSpan)
}
const timerElement = document.getElementById('timer')
function startTimer() {
  timerElement.innerText = 0					
	setInterval(() => {
    timer.innerText = getTimerTime()
  }, 1000)
	let startTime
function startTimer() {
  timerElement.innerText = 0
  startTime = new Date()
  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 1000)
}
 
function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000) // For the timer to work accurately in seconds
}
	