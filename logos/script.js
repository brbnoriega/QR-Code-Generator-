//selecciono los elementos del DOM
const customPicker = document.querySelectorAll(".custom-picker")
const colorPicker = document.querySelectorAll(".color-picker")

customPicker.forEach((item) => {
//iterar elementos con clase customPicker + evento al click para cada uno, activando el control de seleccion de color
    item.addEventListener("click", ()=> {
         item.querySelector(".color-picker").click()
        });
});

//iteracion sobre elemento colorPicker + evento para cada uno 
colorPicker.forEach((item) => {
    //se activa cuando el valor del elemento cambia
    item.addEventListener("change", (e) => { 
      color = e.target.value; //color seleccionado
      span = item.parentElement.querySelector("span"); //se actualiza el span
      input = item.parentElement.querySelector("input[type=text]"); //se actualiza el input txt 
      span.style.backgroundColor = color;
      input.value = color;
    });
  });

  const customDropdown = document.querySelectorAll(".custom-dropdown");

customDropdown.forEach((item) => {
    //seleccionamos todas las opciones del customdropdown
    options = item.querySelectorAll(".option");

    options.forEach((option) => {
        //evento para todas las opciones
      option.addEventListener("click", () => {
        //seleccionamos todas las opciones del elemento padre para remover la clase activa
        allOptions = option.parentElement.querySelectorAll(".option");
        allOptions.forEach((item) => {
          item.classList.remove("active");
        });
        option.classList.add("active");
        //refresh con el texto seleccionado
        item.querySelector(".selected").innerHTML = option.innerHTML;
        generateQRCode();
      });
    });
  });
  