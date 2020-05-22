(()=>{  
    console.log('fired!');
    let numbers = document.getElementById("product-images");

function loggin(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  
    var x = event.clientX
 
    var newX = x/16
    var roundedX = Math.min(90,Math.floor(newX))
 
    
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


function preloader() {
	if (document.getElementById) {
        let i = 0;
        while (i<=90){
            
        document.getElementById("preload").style.background = `url(./public/images/MainComp/MainComp_000${i}.png) no-repeat -9999px -9999px`;
    i=i+1}
        
		
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader);
