
const info = document.querySelector('.info');
const optionbtn =document.getElementById("optionbtn");
const option = document.getElementById("option");
const krest = document.getElementById("krest");
const night = document.getElementById("night");
const day = document.getElementById("day");
const zagolovok = document.getElementById("zagolovok");
const fish = document.getElementById("fish");
const proz = document.getElementById("proz");
const cod = document.querySelector(".cod");
optionbtn.addEventListener("click", function(){
    option.style.visibility = 'visible';
    option.style.transition="all"

});
krest.addEventListener("click", function(){
    option.style.visibility = 'hidden';
});

window.addEventListener('scroll', function(){
    var scroll = this.document.querySelector('.uptop');
    scroll.classList.toggle("active", this.window.scrollY>500)
})
    function scrollTopTop(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
window.addEventListener('scroll', function(){
    var scroll =this.document.querySelector('.a')
    scroll.classList.toggle('active', this.window.scrollY>20)
})
window.addEventListener('scroll', function(){
    var scroll =this.document.querySelector('.b')
    scroll.classList.toggle('active', this.window.scrollY>600)
})
window.addEventListener('scroll', function(){
    var scroll =this.document.querySelector('.c')
    scroll.classList.toggle('active', this.window.scrollY>1400)
})
window.addEventListener('scroll', function(){
    var scroll =this.document.querySelector('.d')
    scroll.classList.toggle('active', this.window.scrollY>2200)
})
window.addEventListener('scroll', function(){
    var scroll =this.document.querySelector('.e')
    scroll.classList.toggle('active', this.window.scrollY>3000)
})
window.addEventListener('scroll', function(){
    var scroll =this.document.querySelector('.f')
    scroll.classList.toggle('active', this.window.scrollY>3700)
})
window.addEventListener('scroll', function(){
    var scroll =this.document.querySelector('.g')
    scroll.classList.toggle('active', this.window.scrollY>4700)
})