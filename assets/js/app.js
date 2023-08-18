backToTopBtn = document.querySelector("#back-to-top");

window.addEventListener('scroll', function(){
    const scrolltop = document.documentElement.scrollTop

    if(scrolltop > 500){
        backToTopBtn.style.display='block';
    }else{
        backToTopBtn.style.display = 'none';
    }
})


backToTopBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    window.scrollTo({
        top:0,
        behavior: "smooth",
    })
})