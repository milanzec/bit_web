

document.getElementById('one').className = 'red';
var arr = document.getElementsByTagName('li')
for (var i = 0; i < arr.length; i += 2) {
    arr[i].className = 'zelena';
}

var array = []
array = document.querySelectorAll('.three li');

for (var i = 0; i < array.length; i++) {
    array[i].className = 'blue'

}

function buu() {
    alert(document.querySelector('.five').firstElementChild.textContent);

}
buu();
function svit(str) {
    document.querySelector('.five').lastElementChild.textContent = '' + str

}

svit(54);

