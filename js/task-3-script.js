
// ****************** GRADE **********************

function calculate() {
    let sname = document.getElementById('sname').value;
    let mark_1 = document.getElementById('mark_1').value;
    mark_1 = Number(mark_1);
    let grade;

    
    if (isNaN(mark_1)) {
        alert(`${sname}! enter your mark in numbers`);
    } else if (mark_1 > 100) {
        alert(`${sname}! enter your mark for 100`) ;
    } else if (mark_1 > 95) {
       grade = 'O+';
    } else if (mark_1 > 90) {
        grade = 'O';
    } else if (mark_1 > 85) {
        grade = 'A+';
    } else if (mark_1 > 80) {
        grade = 'A';
    } else if (mark_1 > 70) {
        grade = 'B';
    } else if (mark_1 > 60) {
        grade = 'C';
    } else if (mark_1 >= 50) {
        grade = 'D';
    } else {
        grade = 'Fail';
    } 

    document.getElementById('grade').value = grade;
}
