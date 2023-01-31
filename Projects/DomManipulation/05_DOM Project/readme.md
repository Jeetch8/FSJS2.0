**Output Image**

![Task one image](./Output/DOM%20P2%20SS.png)


**Solution** - 

```JavaScript
const navCenter = document.querySelector(".nav-center").children;
const recipeText = document.querySelectorAll(".recipe-text");
const recipeTextArr = [...recipeText];
let x = document.createElement("a");
x.classList.add("btn");
x.textContent = "Pro Subscription";
("Recipes 2");
navCenter[2].append(x);
recipeText.forEach((el) => {
  el.style.color = "purple";
});
```