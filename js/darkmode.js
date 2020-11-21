function toggleDarkMode() {
    let button = document.getElementById("darkmode");
    
    if(button.innerHTML === "Dark Mode") {
        button.innerHTML = "Light Mode";
        document.head.innerHTML += "<link rel=\"stylesheet\" id=\"css-dark\" href=\"css/darkmode.css\">";
    }else{
        button.innerHTML = "Dark Mode";
        document.getElementById("css-dark").remove();
    }

    

    if(getCookie("consent")) {
        if(button.innerHTML === "Light Mode")
            document.cookie = "darkmode=true;";
        else document.cookie = "darkmode=false;";
    }

    
}