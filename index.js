const board = document.querySelector('#board')
const colors = ['#FF0000', '#EE204D', '#E32636', '#FF2400', '#B00000', '#480607', '#5E2129',
    '#F49D0E', '#F5A623', '#F6AF38']

const squaresNumber = 750
for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square, 'set'))
    square.addEventListener('mouseleave', () => setColor(square, 'clear'))

    board.append(square)

}
const setColor = (square, color)=>{
    if (color === 'set') {
        const color = colors.at(Math.floor(Math.random() * colors.length))
        square.style.backgroundColor = color
        square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }else if (color === 'clear') {
        square.style.backgroundColor = '#1d1d1d'
        square.style.boxShadow = '0 0 2px #000'
    }
}