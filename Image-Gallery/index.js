 var images = document.querySelectorAll(".image img");
 var btnLeft = document.querySelector(".control-left");
 var btnRight = document.querySelector(".control-right");
 var close = document.querySelector(".close");
 var galleryImage = document.querySelector(".gallery-inner img");
 var gallery = document.querySelector(".gallery");

 var currentIndex = 0;

 images.forEach((coures, index) => {
     coures.addEventListener("click", function() {
         ZoomImg(coures, index);
     });
 });

 function showGallary() {
     // if (currentIndex == 0) {
     //     btnLeft.classList.add("hide");
     // } else {
     //     btnLeft.classList.remove("hide");
     // }
     galleryImage.src = images[currentIndex].src;
     gallery.classList.add("is-show");
 }

 function ZoomImg(coures, index) {
     currentIndex = index;
     showGallary();
 };

 close.addEventListener("click", function() {
     gallery.classList.remove("is-show");
 });

 document.addEventListener("keydown", function(e) {
     if (e.keyCode == 27) {
         gallery.classList.remove("is-show");
     }
 });

 btnLeft.addEventListener("click", function() {
     if (currentIndex > 0) {
         currentIndex--;
         showGallary();
     } else if (currentIndex == 0) {
         currentIndex = images.length - 1;
         showGallary();
     }
 });
 btnRight.addEventListener("click", function() {
     if (currentIndex < images.length - 1) {
         currentIndex++;
         showGallary();
     } else {
         currentIndex = 0;
         showGallary();
     }
 })