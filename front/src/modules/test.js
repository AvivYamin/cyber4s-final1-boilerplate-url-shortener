export function logOut(){
    localStorage.clear();
    setUpLogin(); //Sets the login option
    location.reload(); //Refresh the DOM
}

