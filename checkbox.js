function getCheckedValues(fieldset) {
  const fs = document.querySelector(fieldset);
  const checkBoxes = document.querySelectorAll('[type="checkbox"]');
  let checkedValues = [];
  checkBoxes.forEach((item) => {
    if (item.checked === true) {
      checkedValues.push(item.value);
    }
  });
  console.log(checkedValues);
  return checkedValues;
}

// Use checkboxes with an "other" option:

const otherCheckbox = document.querySelector("#other");
const otherText = document.querySelector("#otherValue");
otherText.style.visibility = "hidden";

otherCheckbox.addEventListener("change", () => {
  if (otherCheckbox.checked) {
    otherText.style.visibility = "visible";
    otherText.value = "";
  } else {
    otherText.style.visibility = "hidden";
  }
});
