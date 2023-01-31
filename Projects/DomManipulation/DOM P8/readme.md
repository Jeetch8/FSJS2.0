1. **Task one**

![Task one image](./ass8.1-after.png)

**Solution**
```JavaScript
const rightSideCol = document.querySelector(".col-lg-4");
const newPara = document.createElement("p");
rightSideCol.style.border = "3px solid red";
rightSideCol.style.overflowY = "scroll";
newPara.className = "new-p";
newPara.innerText = "This is my Custom heading";
rightSideCol.appendChild(newPara);
```

2. **Task two**
![Task two image](./ass8.2-after.png)
**Solution**
```JavaScript
const body = document.querySelector("body");
body.style.backgroundImage = "none";
```

3. **Task three**
![Task three image](./ass8.3-after.png)
**Solution**
```JavaScript
let isNavBarOPen = false;
const tooglerBtn = document.querySelector(".navbar-toggler");
const navbarToggle = document.querySelector("#navbarTogglerDemo01");
tooglerBtn.addEventListener("click", () => {
  if (isNavBarOPen) {
    isNavBarOPen = false;
    navbarToggle.classList = "collapse navbar-collapse";
  } else {
    isNavBarOPen = true;
    navbarToggle.classList = "navbar-collapse";
  }
});
```