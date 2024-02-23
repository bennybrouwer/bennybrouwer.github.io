const switcher = document.querySelector('#theme-switcher');
// const doc = document.firstElementChild;
const doc = document.getElementById("theme-switcher");
// const doc = document.html;
console.log(doc);

switcher.addEventListener('input', e =>
  setTheme(e.target.value));

const setTheme = theme =>
  doc.setAttribute('color-scheme', theme);  
  // document.setAttribute('body', theme);



// 