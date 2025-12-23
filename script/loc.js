// const loc = 2026

const formatDate = () => {
    document.getElementById("loc").innerText = new Date().getFullYear();
} 

document.addEventListener("DOMContentLoaded", formatDate)