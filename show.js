console.log('fgfg');

const button = document.querySelector('#button');
const content = document.querySelector('#content');

button.addEventListener("click", function(){
    console.log('fgfg');
    if(content.classList.toggle('content-hidden')){
        button.textContent = 'Сlick!';
    }else button.textContent = 'Thanks!';
   

});
