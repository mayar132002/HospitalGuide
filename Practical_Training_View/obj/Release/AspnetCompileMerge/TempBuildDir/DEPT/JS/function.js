function swab1() {
    var v = document.getElementsByClassName('hhh1');
    if (v.className == 'fa-solid fa-angle-down icons' || v.className == 'fa-solid fa-angle-down icons collapsed') {
        v.classList.remove();
        v.className = 'fa-solid fa-angle-up icons';
        v2 = document.getElementsByClassName('hhh2');
        v3 = document.getElementsByClassName('hhh3');
        v2.className = 'fa-solid fa-angle-down icons';
        v3.className = 'fa-solid fa-angle-down icons';
    }
    else {
        v.classList.remove();
        v.className = 'fa-solid fa-angle-down icons';
    }
}

function swab2() {
    var v = document.getElementsByClassName('hhh2');
    if (v.className == 'fa-solid fa-angle-down icons' || v.className == 'fa-solid fa-angle-down icons collapsed') {
        v.classList.remove();
        v.className = 'fa-solid fa-angle-up icons';
        v1 = document.getElementsByClassName('hhh1');
        v3 = document.getElementsByClassName('hhh3');
        v1.className = 'fa-solid fa-angle-down icons';
        v3.className = 'fa-solid fa-angle-down icons';

    }
    else {
        v.classList.remove();
        v.className = 'fa-solid fa-angle-down icons';
    }
}

function swab3() {
    var v = document.getElementsByClassName('hhh3');
    if (v.className == 'fa-solid fa-angle-down icons' || v.className == 'fa-solid fa-angle-down icons collapsed') {
        v.classList.remove();
        v.className = 'fa-solid fa-angle-up icons';
        v1 = document.getElementsByClassName('hhh1');
        v2 = document.getElementsByClassName('hhh2');
        v1.className = 'fa-solid fa-angle-down icons';
        v2.className = 'fa-solid fa-angle-down icons';
    }
    else {
        v.classList.remove();
        v.className = 'fa-solid fa-angle-down icons';
    }
}