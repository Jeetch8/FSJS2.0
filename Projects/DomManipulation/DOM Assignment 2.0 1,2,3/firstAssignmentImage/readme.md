1. **Task one**

**Output image**

![Task 1 Output image](./task1Output.png)

**Solution** - 
```JavaScript
const navUl = document.querySelector("ul");
const newLi = document.createElement("li");
const newLink = document.createElement("a");
newLink.attributes.href = "#";
newLink.innerText = "Hire me";
newLi.appendChild(newLink);
navUl.appendChild(newLi);
```

2. **Task two**

**Output image**
![Task two image](./task2Output.png)

**Solution** - 

```JavaScript
const inputBox = document.querySelector(".search-field").firstElementChild;
inputBox.placeholder = "Search my projects";
```

3. **Task three**

**Output image**
![Task image three](./task3Output.png)

**Solution**
```JavaScript
const para = document.querySelector(".hero-left-section");
const freelancer = para.lastElementChild.children[2];
const inuron = para.lastElementChild.children[4];
freelancer.innerText = "an Employee";
inuron.innerText = "INeuron Intelligence Pvt Ltd";
```

4. **Task four**

**Output image**
![Task four image](./task4Output.png)

**Solution**
```JavaScript
const avatarImg = document.querySelector(".hero-right-section").children[0];
avatarImg.src =
    "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";
```

5. **Task five**

**Output image**
![task five image](./task5Output.png)
**Solution**
```JavaScript
const btnParent = document.querySelector(".hero-right-section-btns");
const newBtn = document.createElement("button");
newBtn.innerText = "Support Me";
btnParent.appendChild(newBtn);
```