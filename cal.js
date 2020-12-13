window.addEventListener('DOMContentLoaded', gfg);
const value = ['*', '/', '+', '-', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'];
const opeartor = ['*', '/', '+', '-'];

function gfg() {
    document.title = "  Calculator";
    //console.log('ready');
    let decrease = false;
    let incr1 = false;
    const contain = document.createElement('div');
    contain.classList.add('container');
    contain.style.maxWidth = '600px';
    contain.style.margin = 'auto';
    document.body.appendChild(contain);

    const output = document.createElement('input');
    output.setAttribute('type', 'text');
    output.classList.add('output');
    output.style.width = '100%';
    output.style.lineHeight = '50px';
    output.style.fontSize = '1em';
    output.style.textAlign = 'right';
    contain.appendChild(output);
    const main = document.createElement('div');
    main.classList.add('main');
    main.style.width = '100%';
    contain.appendChild(main);
    value.forEach(function (val) {
        console.log(val);
        btn1(val, addOutput);
    })
    btn1('=', evalOutput);
    btn1('c', clear);
    btn1('m+', memory);
    btn1('m-', memoryfree);
    btn1('ms', memoryshow);

    function evalOutput() {

        //        console.log('=');
        if (output.value === "") {
            output.style.border = 'red 1px solid';
        }
        else {
            output.value = (new Function('return ' + output.value))(); // used new function instead of eval, new function doest have the security issue which eval had
        }
    }
    function clear() {
        output.value = "";
    }
    function memory() {
        var arrayhistory = JSON.parse(localStorage.getItem("items")) || [];
        arrayhistory.push(output.value);
        localStorage.setItem("items", JSON.stringify(arrayhistory));
    }
    function memoryfree() {
        localStorage.clear();
    }
    function memoryshow() {
        console.log(localStorage);
    }
    function btn1(txt, myFunction) {
        let btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.style.width = '23%';
        btn.val = txt;
        btn.textContent = txt;
        btn.addEventListener('click', myFunction);
        main.appendChild(btn);
    }
    function addOutput(e) {
        output.style.border = 'black 1px solid';
        let char = e.target.val;
        if (char == '.') {
            if (decrease) {
                char = '';
            }
            else {
                decrease = true;
            }
        }
        incr1 = opeartor.includes(char)
        if (incr1) {
            decrease = false;
        }
        output.value += char;
    }
}
