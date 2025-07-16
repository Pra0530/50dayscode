
let a=document.getElementById('hello');
a.addEventListener('click', function() {

let counter=0;
document.getElementById('hello').addEventListener('click', function() {
    counter--;
    document.getElementById('hello').textContent = 'Count: ' + counter;
});
document.getElementById('bye').addEventListener('click', function() {
    counter++;
    document.getElementById('hello').textContent = 'Count: ' + counter;
});
