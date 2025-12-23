$(document).ready(() => {
    let status = (getDarkModeStatus() === "ON" ? true : false)
    darkMode(status)
});

const openDialogDiv = () => {
    document.getElementById("MyButtonsDiv").style.height = "100%"
    document.getElementById("MyButtonsDiv").style.marginTop = "0%"
    document.getElementById("MyButtonsDiv").style.opacity = "1"
}

const closeDialogDiv = () => {
    document.getElementById("MyButtonsDiv").style.height = "0%"
    document.getElementById("MyButtonsDiv").style.marginTop = "100%"
    document.getElementById("MyButtonsDiv").style.opacity = "0.3"
}

const setDialogContent = (titleText, pageUrl) => {
    openDialogDiv()
    document.getElementById("title").innerHTML = titleText
    document.getElementById("contentFrame").src = pageUrl
}