let button = document.getElementById('theboxes');
button.addEventListener('click', myfunction);
var oldvalue = 0;
var i = 1

function myfunction() {
    let n = document.getElementById('number').value;
    n = parseInt(oldvalue) + parseInt(n);
    for (; i <= n; i++) {

        var box = document.createElement('div');
        box.classList.add('myDiv');
        document.getElementById('box').appendChild(box);
        box.innerHTML = i;

        oldvalue = document.getElementById('box').lastElementChild.innerHTML;

    }
}