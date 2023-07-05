var i=0;
var j=0;
function change(){
    var divtag=document.getElementById('head');
    var bgcolor=["Buy Fresh Fruits!!","Buy Fresh Vegetables!!"];
    var txtcolor=["Black"];
    divtag.style.backgroundColor=bgcolor[i];
    divtag.innerText=bgcolor[i];
  divtag.style.color=txtcolor[j];
  i=(i+1)%bgcolor.length;
  j=(j+1)%txtcolor.length;

  
}
setInterval(change,2000);
const mybutton=()=>{

    var mybtn=prompt('enter your id');
   

    var showbtn=document.getElementById('showbtn');
    showbtn.innerHTML=`Name :${mybtn} `;
   
}



let navlist=document.getElementById("nav-list");
//  let navbar=document.getElementsByClassName("navbar");
//  let header=document.querySelector("header");
navlist.classList.toggle("Slide");


let Icon=document.getElementById('icon');

Icon.addEventListener("click",myFunction);

function myFunction(){
   if(navlist.style.width=="0%"){
   navlist.style.width="50%";
   // Icon.style.width="120px"
}
else{
       navlist.style.width="0%";
   }

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}
