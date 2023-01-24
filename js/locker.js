const div = document.querySelector('.refferens');
const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    if(div.style.display=='flex'){
        div.style.display='none'
        return;
    }
    else div.style.display='flex'
    return;
 })