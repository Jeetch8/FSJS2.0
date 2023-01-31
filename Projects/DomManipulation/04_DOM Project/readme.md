**Output image**

![Task one image](./Output/DOM%20P1%20SS.png)

**Solution** - 

```JavaScript
const clashCardUnitStats = document.getElementsByClassName(
  "clash-card__unit-stats"
);
const oneThird = document.querySelectorAll(".one-third");
const arr = [...oneThird];
arr.forEach((el) => {
  el.style.color = "white";
});
clashCardUnitStats[0].style.backgroundColor = "#ec9b3b";
clashCardUnitStats[1].style.backgroundColor = "#ee5487";
clashCardUnitStats[2].style.backgroundColor = "#f6901a";
clashCardUnitStats[3].style.backgroundColor = "#82bb30";
clashCardUnitStats[4].style.backgroundColor = "#4facff";
```