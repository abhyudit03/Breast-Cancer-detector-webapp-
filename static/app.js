function mainApp() {
  const arrows = document.querySelectorAll(".fa-arrow-right");
  var counter = 0;
  data:{

  }
  arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      //  Check for validation
      if (validateInput(input)) {
        // console.log("Okay");
        if(counter.value==0){
          data["mean_radius"]=user.value;
        }
        if(counter.value==1){
          data["mean_texture"]=user.value;
        }
        if(counter.value==2){
          data["mean_perimeter"]=user.value;
        }
        if(counter.value==3){
          data["mean_area"]=user.value;
        }
        if(counter.value==4){
          data["concave_points"]=user.value;
        }
        counter++;
        next_form(parent, nextForm);
        // } else if(){
      } else {
        console.log("in");
        parent.style.animation = "shake 0.5s ease";
      }
      // to remove animation
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  })
  $.ajax({
    data,
    type:"POST",
    url : "/process"
  });
}

function next_form(parent, nextForm) {
  parent.classList.add("innactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}

function validateInput(user) {
  // console.log(user.classList);
  if (user.value == "") {
    console.log("Number cannot be negative");
    error("rgb(189,87,87");
    return false;
  }
  if (
    user.classList.contains("field-one") &&
    (user.value < 6.981 || user.value > 28.11)
  ) {
    error("rgb(189,87,87)");
    return false;
  }
  if (
    user.classList.contains("field-two") &&
    (user.value < 9.71 || user.value > 39.28)
  ) {
    console.log("in");
    error("rgb(189,87,87");
    return false;
  }
  if (
    user.classList.contains("field-three") &&
    (user.value < 43.79 || user.value > 188.5)
  ) {
    error("rgb(189,87,87");
    return false;
  }
  if (
    user.classList.contains("field-four") &&
    (user.value < 143.5 || user.value > 2501.0)
  ) {
    error("rgb(189,87,87");
    return false;
  }
  if (
    user.classList.contains("field-five") &&
    (user.value < 0.0 || user.value > 0.201)
  ) {
    error("rgb(189,87,87");
    return false;
  }
  error("rgb(87,189,130)");
  return true;
}

function error(color) {
  document.body.style.backgroundColor = color;
}

mainApp();
