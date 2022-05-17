let lr,
numberCard,
carousel = 0
const cards = document.querySelector("#carrossel .cards"),
  card = document.querySelectorAll("#carrossel .card"),
  button = document.querySelectorAll("#carrossel .button")

function removeAction () {
button.forEach((slide) => {
    slide.classList.remove("active")
})
}

// // Scroll function
cards.addEventListener("wheel", event => {
// Impede o scroll vertical da página
window.addEventListener("wheel", e => {event.preventDefault()}, {passive: false})

// Detecta scroll left ou right
if (event.wheelDelta > 0) {lr = 1} else {lr = -1}

// Ajusta o scroll
carousel += card[0].scrollWidth * lr

// Limita o scroll
if (carousel < 0) {
    carousel = 0
} else if (carousel > (card.length - 1) * card[0].scrollWidth) {
    carousel = (card.length - 1) * card[0].scrollWidth * lr
}

// Executa o scroll
cards.scrollLeft = carousel

// Remove a classe active de todos os button
removeAction()

// Coloca a classe active no button
numberCard = carousel / card[0].scrollWidth
button[numberCard].classList.add("active")

// Coloca checked no input certo
document.querySelector("#carrossel #card-" + numberCard).checked = true
})

// // Coloca a classe active no button clicado
const areas = [].slice.call(document.querySelectorAll('#carrossel .card'))

if (window.PointerEvent) {
    areas.forEach(function(area) {
        area.addEventListener('pointerenter', logger)
    })
}

function logger(e) {
    const numberCard = areas.indexOf(e.target)
    removeAction()
    document.querySelector("#carrossel .button-" + numberCard).classList.add("active")

    // Coloca checked no input certo
    document.querySelector("#carrossel #card-" + numberCard).checked = true
}

// // Ação de clicar nos botões e executar o scroll
const labels = [].slice.call(document.querySelectorAll("#carrossel label[for^=card-]"))

button.forEach(function(b) {
    b.addEventListener("click", event => {
        // Remove a classe active de todos os button
        removeAction()

        // Coloca a classe active no button
        b.classList.add("active")

        // Executa o scroll
        cards.scrollTo(labels.indexOf(b) * card[0].scrollWidth, 0)
    })
})

// // Automatic carousel
const inputs = document.querySelectorAll('#carrossel input[name=cards]')

setInterval(function(){
let index = [].slice.call(inputs).indexOf(document.querySelector("#carrossel input[name=cards]:checked"))
index++
if (index >= inputs.length) {index = 0}

// Remove a classe active de todos os button
removeAction()

// Executa o scroll
cards.scrollTo(index * card[0].scrollWidth, 0)

// Coloca a classe active no button
labels[index].classList.add("active")

// Coloca o check no input
inputs[index].checked = true
}, 5000)