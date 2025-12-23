isProfilePage = false

const darkMode = (isDarkModeOn) => {
    let root = document.querySelector(':root')
    if (isDarkModeOn) {
        root.style.setProperty('--nav_bg', '#000000')
        root.style.setProperty('--page_bg', '#121217')
        root.style.setProperty('--text_color', '#E5E5E5')
        root.style.setProperty('--card_bg', '#262626')
        root.style.setProperty('--tile_bg', '#262626')
        root.style.setProperty('--button_color', '#E5E5E5')
        root.style.setProperty('--button_text_color', '#333333')
        root.style.setProperty('--dim_rev_page_bg', '#ECEFF1')
        root.style.setProperty('--dim_rev_text_color', '#1F1A24')
        root.style.setProperty('--translucent_page_bg', '#1212124D')
        root.style.setProperty('--dropdown_hover_bg', '#F5F5F5')
        root.style.setProperty('--dropdown_hover_text_color', '#121217')

        try {
            document.getElementById("modeInfoText").innerHTML = "Switch to light mode"
        } catch (error) { }

        if (isProfilePage) {
            try {
                document.getElementById("insta").src = "assets/images/socials/dark/instagram.png"
                document.getElementById("facebook").src = "assets/images/socials/dark/facebook.png"
                document.getElementById("twitter").src = "assets/images/socials/dark/twitter.png"
                document.getElementById("linkedin").src = "assets/images/socials/dark/linkedin.png"
                document.getElementById("snapchat").src = "assets/images/socials/dark/snapchat.png"
                document.getElementById("youtube").src = "assets/images/socials/dark/youtube.png"
                document.getElementById("mail").src = "assets/images/socials/dark/mail.png"
                document.getElementById("github").src = "assets/images/socials/dark/github.png"
                document.getElementById("stackoverflow").src = "assets/images/socials/dark/stackoverflow.png"
            } catch (error) { }

            try {
                document.getElementById("closeImageBtn").src = "assets/images/highlights/icons/dark/close.png"
                document.getElementById("prevImageBtn").src = "assets/images/highlights/icons/dark/prev.png"
                document.getElementById("nextImageBtn").src = "assets/images/highlights/icons/dark/next.png"
                document.getElementById("shareImageBtn").src = "assets/images/highlights/icons/dark/share.png"
            }
            catch (error) { }
        } else {
            try {
                document.getElementById("closeImageBtn").src = "assets/images/highlights/icons/dark/close.png"
            } catch (error) { }
        }

        try {
            $(".mgithub-icon").attr("src", "assets/images/icons/github_white_icon.png")
        }
        catch (error) { }
    } else {
        root.style.setProperty('--nav_bg', '#4A148C')
        root.style.setProperty('--page_bg', '#F5F5F5')
        root.style.setProperty('--text_color', '#1A1A1A')
        root.style.setProperty('--card_bg', '#F5F5F5')
        root.style.setProperty('--tile_bg', '#E8EAF6')
        root.style.setProperty('--button_color', '#4A148C')
        root.style.setProperty('--button_text_color', '#F5F5F5')
        root.style.setProperty('--dim_rev_page_bg', '#1F1A24')
        root.style.setProperty('--dim_rev_text_color', '#ECEFF1')
        root.style.setProperty('--translucent_page_bg', '#FDFDFD1A')
        root.style.setProperty('--dropdown_hover_bg', '#4A148C')
        root.style.setProperty('--dropdown_hover_text_color', '#F5F5F5')

        try {
            document.getElementById("modeInfoText").innerHTML = "Switch to light mode"
        } catch (error) { }

        if (isProfilePage) {
            try {
                document.getElementById("insta").src = "assets/images/socials/light/instagram.png"
                document.getElementById("facebook").src = "assets/images/socials/light/facebook.png"
                document.getElementById("twitter").src = "assets/images/socials/light/twitter.png"
                document.getElementById("linkedin").src = "assets/images/socials/light/linkedin.png"
                document.getElementById("snapchat").src = "assets/images/socials/light/snapchat.png"
                document.getElementById("youtube").src = "assets/images/socials/light/youtube.png"
                document.getElementById("github").src = "assets/images/socials/light/github.png"
                document.getElementById("mail").src = "assets/images/socials/light/mail.png"
                document.getElementById("stackoverflow").src = "assets/images/socials/light/stackoverflow.png"
            } catch (error) { }

            try {
                document.getElementById("closeImageBtn").src = "assets/images/highlights/icons/light/close.png"
                document.getElementById("prevImageBtn").src = "assets/images/highlights/icons/light/prev.png"
                document.getElementById("nextImageBtn").src = "assets/images/highlights/icons/light/next.png"
                document.getElementById("shareImageBtn").src = "assets/images/highlights/icons/light/share.png"
            }
            catch (error) { }
        } else {
            try {
                document.getElementById("closeImageBtn").src = "assets/images/highlights/icons/light/close.png"
            } catch (error) { }
        }

        try {
            $(".mgithub-icon").attr("src", "assets/images/icons/github_icon.png")
        }
        catch (error) { }
    }
}



const setViewDarkModeAndHelpOption = () => {
    if (window.innerWidth <= 991) {
        document.getElementById("darkModeLabel").innerHTML = '<a class="nav-link"><span id="modeInfoText">Switch to dark mode</span> <img src="assets/images/nav/off.png" style="margin-left: 5px" width="20" height="20" class="d-inline-block align-center" alt="Shree Govind Jee" id="darkModeSwitch" onclick="setDarkModeStatus()" /><span class="sr-only">(current)</span></a>'
        document.getElementById("helpLabel").innerHTML = '<a class="nav-link" onclick="openHelpDialog()" style="cursor: pointer;">Help & Shortcuts <img src="assets/images/nav/help.png" height="19" width="19" style="margin-left: 4px" /> </a>'
    } else {
        document.getElementById("darkModeLabel").innerHTML = '<img src="assets/images/nav/off.png" width="25" height="25" class="align-center" alt="Shree Govind Jee" id="darkModeSwitch" onclick="setDarkModeStatus()" />'
        document.getElementById("helpLabel").innerHTML = '<a class="nav-link" onclick="openHelpDialog()" style="cursor: pointer;"><img src="assets/images/nav/help.png" height="23" width="23" /></a>'
    }
}



const isMobile = () => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ]

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem)
    })
}


const getDarkModeStatus = () => {
    let status = "OFF"
    if (typeof (Storage) !== "undefined") {
        status = localStorage.getItem("ShreeGovindJeeDarkMode") === null ? "OFF" : localStorage.getItem("ShreeGovindJeeDarkMode")
    } else {
        status = "OFF"
    }
    return status
}

const setDarkModeStatus = () => {
    if (typeof (Storage) !== "undefined") {
        if (getDarkModeStatus() === "ON") {
            localStorage.setItem("ShreeGovindJeeDarkMode", "OFF")
        } else {
            localStorage.setItem("ShreeGovindJeeDarkMode", "ON")
        }
        let status = (getDarkModeStatus() === "ON" ? true : false)
        document.getElementById("darkModeSwitch").src = status ? "assets/images/nav/on.png" : "assets/images/nav/off.png"
        darkMode(status)
    } else {
        alert("Sorry Dark Mode not supported.")
    }
}


const initNav = () => {
    document.getElementById('apps').innerHTML = "Apps (" + apps.length + ")"
    document.getElementById('github_repo').innerHTML = "GitHub Repositories (" + repos.length + ")"
    setViewDarkModeAndHelpOption()
}

const re = () => {
    window.location.reload()
}


const isPortrait = () => {
    switch (window.orientation) {
        case 0:
            return true;
            break;
        case 90:
            return false;
            break;
        case -90:
            return false;
            break;
        case 180:
            return true;
            break;
        default:
            return false;
            break;
    }
}



const calculateTime = (startDate, endDate) => {
    let startingDate = moment(startDate)
    let endingDate = moment(endDate)
    let monthsDiff = endingDate.diff(startingDate, 'months')
    let yearsDiff = endingDate.diff(startingDate, 'years')
    if (yearsDiff != 0) {
        let yearsDifferenceInMonths = yearsDiff * 12
        monthsDiff -= yearsDifferenceInMonths
    }

    if (monthsDiff == 0) {
        if (yearsDiff == 0) {
            return ""
        } else {
            if (yearsDiff == 1) {
                return yearsDiff + " year"
            } else {
                return yearsDiff + " years"
            }
        }
    } else {
        if (yearsDiff == 0) {
            if (monthsDiff == 1) {
                return monthsDiff + " month"
            } else {
                return monthsDiff + " months"
            }
        } else {
            if (yearsDiff == 1) {
                if (monthsDiff == 1) {
                    return yearsDiff + " year " + monthsDiff + " month"
                } else {
                    return yearsDiff + " year " + monthsDiff + " months"
                }
            } else {
                if (monthsDiff == 1) {
                    return yearsDiff + " years " + monthsDiff + " month"
                } else {
                    return yearsDiff + " years " + monthsDiff + " months"
                }
            }
        }
    }
}


const isSafari = () =>
    navigator.vendor &&
    navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent && navigator.userAgent.indexOf('CriOS') == -1
    && navigator.userAgent.indexOf('FxiOS') == -1