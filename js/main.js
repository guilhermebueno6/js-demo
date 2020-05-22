(()=>{  
    console.log('fired!');
    let numbers = document.getElementById("product-images");

function loggin(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    console.log(w)
    var x = event.clientX
    console.log(x)
    var newX = x/16
    var roundedX = Math.min(90,Math.floor(newX))
    console.log(roundedX);
    
    // if (roundedX>90){
    //     return
    // }

    numbers.src = `../public/images/MainComp/MainComp_000${roundedX}.png`;

}
    addEventListener("mousemove", loggin);

})();

function toggle() {
    document.getElementById("nav-toggler").classList.toggle("fa-times");
    document.getElementById("nav-toggler").classList.toggle("fa-bars");
    document.getElementById("sidebar").classList.toggle("active");
}

var openMenu = document.getElementById('nav-toggler');
openMenu.addEventListener("click", toggle);
