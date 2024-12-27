const button = document.getElementById('colorButton');
const heading = document.getElementById('heading');


button.addEventListener('click', function() {

    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    heading.style.color = randomColor;
});
