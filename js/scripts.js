jQuery(document).ready(function() {
  jQuery('.toggle-nav').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('.menu ul').toggleClass('active');

    e.preventDefault();
  });
});
  
function validateName() {
  let x = document.forms["newFashionform"]["form_title"].value;
  if (/[a-zA-Z]+[a-zA-Z]+$/.test(x) == false) {
    alert("Name must be string and at least one space");
    return false;
  }
}

document.getElementById("plus-img").addEventListener("click",element=>{
      
  document.getElementById("plus-img").src="images/step_dress1.jpg"
  console.log("it worked")
})

document.getElementById("plus-img2").addEventListener("click",element=>{
      
  document.getElementById("plus-img2").src="images/step_dress2.jpg"
  console.log("it worked")
})