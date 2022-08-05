const wedData = document.querySelector('.wed-data');
const thuData = document.querySelector('.thu-data');
const thursdayChart = document.querySelector('.fourth-chart');
const wedChart = document.querySelector('.third-chart');


thursdayChart.addEventListener('mouseover',  () => {
    thuData.style.display = "block";
});

thursdayChart.addEventListener('mouseout',  () => {
    thuData.style.display = "none";
});

wedChart.addEventListener('mouseover',  () => {
    wedData.style.display = "block";
});

wedChart.addEventListener('mouseout',  () => {
    wedData.style.display = "none";
});
