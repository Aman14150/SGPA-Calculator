let gradeEl = document.getElementById('gradePoint');
let totalPercentageEl = document.getElementById('percentage');
let alertMessageEl = document.getElementById('error');

function calculate() {
    let gradePoint = parseFloat(gradeEl.value);
    console.log(gradePoint)
    let totalPercentage = (gradePoint-0.75)*10;
    console.log(totalPercentageEl)
    totalPercentageEl.value = totalPercentage;

    if (isNaN(gradePoint) || gradeEl.value === "" || gradePoint < 0 || gradePoint > 10) {
        alertMessageEl.textContent = "Please enter a valid input between 0 and 10";
        alertMessageEl.style.color = 'red';
        totalPercentageEl.value = "";
    } else {
        totalPercentageEl.value = totalPercentage + "%";
        alertMessageEl.innerText = "";
    }    

}
function clearInputs() {
    gradeEl.value = "";
    totalPercentageEl.value = "";
    alertMessageEl.innerText = "";
}