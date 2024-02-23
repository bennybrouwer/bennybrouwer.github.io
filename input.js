class Input {
  constructor(id, name, value, label) {
    // id may not start with a hashtag!
    if (!id) {
      console.error('Every input element requires an ID!: ', name, ' - ', label)
    }
    if (id.subst(0,1) == '#') {
      this.id = id.slice(1);
    } else {
      this.id = id;
    }
    this.name = name;
    this.value = value;
    this.label = label;
    this.element = document.getElementById(this.id);
    // this.element.addEventListener('change', () => {
    //   console.error('change event is not defined in class Input');
    // });
  }
  onChange(event) {
    // fires after user confirms
    // or clicks a radio or checkbox ??
    this.element.addEventListener('change', event);
  }
  onInput(event) {
    // fires after each change
    this.element.addEventListener('input', event);
  }
}