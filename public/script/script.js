const count = document.querySelectorAll('.top');
const sum  = 1

for (let i = 0; i < count.length; i++) {
    count[i].innerHTML = i + 1
}

const navSelect = document.querySelector('.click_btn');
const hover = document.querySelector('.click_nav ul');

navSelect.addEventListener('click', () => {
    if(hover.style.display === 'none'){
        hover.style.display = 'block'
    }else{
        hover.style.display = 'none'
    }
})