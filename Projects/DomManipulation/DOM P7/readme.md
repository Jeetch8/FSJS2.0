1. **Task One**

![Task one image](./ass7.1-after.png)
**Solution** - 
```JavaScript
const allLinks = document.querySelectorAll("a");
const allLinksArr = [...allLinks];
allLinksArr.forEach((el) => {
  if (el.innerText.endsWith("2.0")) {
    el.style.display = "none";
  }
});
```

2. **Task Two**

![Task two image](./ass7.2-after.png)
**Solution** - 
```JavaScript
const mainFormInput = document.querySelector(".main__form-input");
mainFormInput.placeholder = "INeuron";
```