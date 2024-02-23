const slider = document.getElementById("RangeSlider");
let sliderValue = 33;

slider.value = sliderValue;

let sliderText = document.getElementById("sliderText");
sliderText.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  sliderValue = this.value;
  sliderText.innerHTML = sliderValue;
}

function valueSender() {
  // https://www.youtube.com/watch?v=mq6vlYmh_AE
  localStorage.setItem("sliderValue", sliderValue);
  // window.location.href = "index.html";
  console.log("Value stored in Local Storage: ", localStorage.getItem("sliderValue"));
}

// -----------------------------------------








// -----------------------------------------