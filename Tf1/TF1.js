

window.onscroll = function () {

  if(this.document.documentElement.scrollTop >= 588.7999877929688){
   this.document.getElementById("head").style.background = "#fff";
   this.document.getElementById("ret").style.color = "black";
   this.document.getElementById("reta").style.color = "black";
   this.document.getElementById("retc").style.color = "black";
   this.document.querySelector("#Mytf").src = "365.svg"
   this.document.getElementById("Ris").classList.remove('pousse')
   this.document.getElementById("tv").style.display = "block"
 
     
  }else{
     this.document.getElementById("head").style.background = "rgba(0, 0, 0, 0.45)";
     this.document.getElementById("ret").style.color = "white";
     this.document.getElementById("reta").style.color = "white";
     this.document.getElementById("retc").style.color = "white";
     this.document.getElementById("tf").style.display = "none";
     this.document.querySelector("#Mytf").src = "00000000005bbeb7.svg";
     this.document.getElementById("Ris").classList.add('pousse')
     this.document.getElementById("tv").style.display = "none"


       
  }


}
