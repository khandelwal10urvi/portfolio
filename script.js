// script.js
function openTab(tabName) {
    const tabLinks = document.getElementsByClassName('tab-links');
    const tabContents = document.getElementsByClassName('tab-contents');

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active-link');
        tabContents[i].classList.remove('active-tab');
    }

    document.querySelector(`.tab-links[onclick*="${tabName}"]`).classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}
window.onload = function () {
  // Clear form fields
  const form = document.querySelector("form");
  if (form) {
    form.reset();
  }

  // Optionally clear any message display span
  const msgSpan = document.getElementById("msg");
  if (msgSpan) {
    msgSpan.innerText = "";
  }
};
