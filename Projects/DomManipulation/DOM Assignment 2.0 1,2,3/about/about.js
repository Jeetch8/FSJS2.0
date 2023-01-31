let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

const AccorPara = document.querySelectorAll(".accordian p")[3];
AccorPara.innerText =
  "I poses a very good command over Full Stack Development Technologies like MERN which can be seen in my work over Github.";

// #dadaf8
