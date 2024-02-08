const Click1 = document.getElementById("click");
const Click2 = document.getElementById("click2");
const Click3 = document.getElementById("click3");
const boxes = document.getElementById("boxes");

console.log(Click1);

Click1.addEventListener("click", () => {
  const HtmltoShow = `<div class="left1">
    <h1 class="invest">Investigative Services</h1>
    <p class="para6">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    <button class="btn3">Read More</button>
</div>
<div class="right1">
    <img src="material/hero.jpg" alt="" class="pic">
</div>`;

boxes.innerHTML = HtmltoShow
});
Click2.addEventListener("click", () => {
  const HtmltoShow = `<div class="left1">
  <h1 class="invest">Security Consultations</h1>
  <p class="para6">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
  <button class="btn3">Read More</button>
</div>
<div class="right1">
  <img src="material/hero2.jpg" alt="" class="pic">
</div>`;

boxes.innerHTML = HtmltoShow
});
Click3.addEventListener("click", () => {
  const HtmltoShow = ` <div class="left1">
  <h1 class="invest">Criminal Defense Investigations</h1>
  <p class="para6">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
  <button class="btn3">Read More</button>
</div>
<div class="right1">
  <img src="material/hero_3.jpg" alt="" class="pic">
</div>`;

boxes.innerHTML = HtmltoShow
});
