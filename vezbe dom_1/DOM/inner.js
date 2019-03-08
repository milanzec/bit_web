var parentElement = document.querySelector('div');

var select = document.createElement('select');
var option1 = document.createElement('option');

var textOption = document.createTextNode('anci');


parentElement.appendChild(select);
select.appendChild(option1);
option1.appendChild(textOption);



var parentElement = document.querySelector('.list');
var unorderedList = document.createElement('ul');
var item1 = document.createElement('li');
// var item2 = document.createElement('li');
var items = document.createTextNode('a');
// var items2 = document.createTextNode('b');

parentElement.appendChild(unorderedList);
unorderedList.appendChild(item1);
// unorderedList.appendChild(item2);
item1.appendChild(items);
// item2.appendChild(items2);

// setInterval(function red() {
//     document.body.classList.toggle('red');
// }, 1000);

function validation() {
    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute('required') && !(inputs[i].value)) {
            inputs[i].setAttribute('class', 'borderred');
        }
    }
}

validation();

