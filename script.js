
const body = document.querySelector('body');

const div = document.createElement('div');
const p = document.createElement('p');
const input = document.createElement('input');


div.append(p);
div.append(input);

body.append(div);

const setText = (txt) => {
    const p = document.querySelector('p');
    p.textContent = txt;
};

const inputControl = (input) => {
    input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            target = e.target;
            let txt = target.value;
            setTimeout(() => {
            }, 1000, setText(txt))
        } else {
            setText('');
        }
    });

};

inputControl(input);
console.log('hehe')



