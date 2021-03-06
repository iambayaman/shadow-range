let vertical = document.querySelector('.vertical')
let horizontal = document.querySelector('.horizontal')
let blur = document.querySelector('.blur')
let spread = document.querySelector('.spread')
let color = document.querySelector('.color')
let box = document.querySelector('.box')
let boxShadowCode = document.querySelector('.box-shadow-code ')
let settingsRanges = document.querySelectorAll('.settings-block input')

settingsRanges.forEach(input => {
    input.addEventListener('input', () => {
        generateShadow()
    })
})

function generateShadow() {
    const property = `${horizontal.value}px ${vertical.value}px ${spread.value}px ${blur.value}px ${color.value}`
    box.style.boxShadow = property
    boxShadowCode.textContent = `box-shadow: ${property};`
}

generateShadow()

// click
//dblclick двойной клик
// mousemove запускает функцию при наведение
// mouseover запускает единожды при наведений курсора однократно
// input запускает функию сразу при наведение

