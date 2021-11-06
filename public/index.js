//Initial setting to header (username)
const mainHead = document.getElementById("main-head");
const openButton = document.getElementById("openButton");
openButton.addEventListener("click", openForm);
const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", closeForm);
const userStatistics = document.getElementById("user-statistics")

let userName = localStorage.getItem("username");
setUpLogin(userName);


//<---------------- Main functionallity ------------------->
const baseUrl = "http://localhost:3000"; //API "GET" URL
const submitBtn = document.getElementById("submit-btn");
const inputElement = document.getElementById("url_input");
const responseDiv = document.getElementById("response");

submitBtn.addEventListener("click", postUrl);

async function postUrl(e){
    e.preventDefault();
    const originalUrl = inputElement.value;
    try {
        let userName = localStorage.getItem("username");
        let response;
        if(userName){
            console.log("logged in");
            response = await axios.post(`${baseUrl}/shortmyurl/${userName}`, {url: originalUrl});
        }else{
            console.log("not logged");
            response = await axios.post(`${baseUrl}/shortmyurl/`, {url: originalUrl});
        }
        createResponseElement(response.data); 
    } catch (error) {
        alert(error);
    }
}

function createResponseElement(shortUrl){
    const message = document.createElement("p");
    message.textContent = "Here's your new shorter URL";
    const responseInput = document.createElement("input");
    responseInput.className = "response-text";
    responseInput.value = shortUrl;
    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-btn";
    copyBtn.textContent = "Copy URL";
    copyBtn.addEventListener("click", (e) => {
        responseInput.select(); //Select the text field
        responseInput.setSelectionRange(0, 99999) // For mobile devices
        navigator.clipboard.writeText(responseInput.value); //Copy the text inside the text field
        //alert("Copied the text: " + responseInput.value); //Alert the copied text
    })
    responseDiv.appendChild(message);
    responseDiv.appendChild(responseInput);
    responseDiv.appendChild(copyBtn);
}












async function getUserStatistics(){ 
        const response = await axios.get(`${baseUrl}/info/${userName}`);
        const data = response.data;
        console.log(data);
        const dataDiv = document.createElement("div");
        dataDiv.textContent = data;
        userStatistics.appendChild(dataDiv);
};


//<---------------- Pop Up Login Form ------------------->
const submitLogin = document.getElementById("login-button");
const loginInput = document.getElementById("username-input");
submitLogin.addEventListener("click", handleLogin);

//Login function
function setUpLogin(userName){
    if(userName){
        createUserLink(userName); //Changes the main head to include username indication link
        if(userName){
            openButton.style.display = "none"; //Once the username is set - login button disappears
        }
    }else{
        openButton.style.display = "block"; //In first initialization username is null - so display login option
    }
}

function handleLogin(e){
    e.preventDefault();
    if(loginInput.value === ""){ //Validates the username input
        alert("Invalid Username")
    }else{
        const userName = loginInput.value; //Assigns the userName with the new input
        userLogin(userName);
        closeForm();
    }
}
function userLogin(userName){
    localStorage.setItem("username", userName); //Saves user value to local storage
    openButton.style.display = "none"; //Login button disappears
    createUserLink(userName); //Changes the main head
    //postUserName(); //Activate the post username request to the server
}

function createUserLink(userName){
    const userLinkElement = document.createElement("button");
    userLinkElement.textContent = userName;
    userLinkElement.addEventListener("click", getUserStatistics);
    mainHead.innerText += " - ";
    userLinkElement.textContent = userName;
    mainHead.append(userLinkElement);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }