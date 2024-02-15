const movebtn = document.querySelector('.movebtn')
const user = document.querySelector('.user')
const per = document.querySelector('.per')
const slidebtn = document.querySelector('.slidebtn')


movebtn.addEventListener('click', () =>{
    
        user.classList.add('open')
    
})


slidebtn.addEventListener('click', () =>{
    
    per.classList.add('open')

})