
function getRadioValue()  {
  // https://www.youtube.com/watch?v=_jJFiqkb4uY
  const radio = document.getElementsByName('text-alignment');
  for (let i=0; i < radio.length; i++) {
    if (radio[i].checked) {
      const p = document.getElementById('radio-example');
      if (p) {
        const s = 10 * i + 10;
        // p.style.fontSize = `{$s}px`;
        p.style.fontSize = '60px';
      }
          // alert(radio[i].value);
    }
  }
}