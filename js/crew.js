function openTab(evt, tabName){

    let tabContent = document.getElementsByClassName("show");
    for (let i =0; i< tabContent.length; i++){
       tabContent[i].style.display ="none";
    }
    let tabLinks = document.getElementsByClassName("toggle-block");
    for (let i=0; i<tabLinks.length; i++){
       tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display ="block";
    evt.currentTarget.className += "active";
}
