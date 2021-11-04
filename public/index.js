const submitBtn = document.getElementById("submit-btn");
const inputElement = document.getElementById("url_input");

submitBtn.addEventListener("click", postUrl);

async function postUrl(e){
    e.preventDefault();
    const originalUrl = inputElement.value;
    try {
        const response = await axios.post(`http://localhost:3000/shortmyurl/`, {url: originalUrl});
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}