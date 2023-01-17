let brand = document.querySelectorAll(".letter").length;

for (var i = 0; i<brand; i++){


document.querySelectorAll(".letter")[i].addEventListener("click", function () {
  
   this.classList.toggle("clicked");
   this.removeAttribute('id');

   // document.querySelector("img").setAttribute("src", "images/the top G.jpg")
});

}

let dot = document.querySelector(".dot");

dot.addEventListener("click", () => {

      console.log("hello world");
      dot.classList.toggle("moving-dot");
   });