const submitBtn = document.getElementById("submit-btn");
const inputElement = document.getElementById("url_input");
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(inputElement.value);
});
console.log("hey0y")