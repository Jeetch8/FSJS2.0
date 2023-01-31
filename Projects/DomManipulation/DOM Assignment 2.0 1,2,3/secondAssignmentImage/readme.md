1. **Task one**

![task one image](./task1Output.png)
**Solution** - 
```JavaScript
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((el) => {
  el.style.backgroundColor = "#dadaf8";
});
```

2. Task two

![Task two image](./task2Output.png)
```JavaScript
const AccorPara = document.querySelectorAll(".accordian p")[3];
AccorPara.innerText =
  "I poses a very good command over Full Stack Development Technologies like MERN which can be seen in my work over Github.";
```