let isStoryOpen = false, isMapOpen = false
const indexUnLoad = () => {
    closeLocationOnMap()
    isStoryOpen = false
    isMapOpen = false
    isHelpOpen = false
    isSearchOpen = false
    closeSearchDialog()
}
const setKeyListener = () => {
    document.addEventListener("keypress", e => {
        if (!isSearchOpen) {
            navigateToEdcuationTab(e)
            navigateToWorkExperienceTab(e)
            navigateToSkillsTab(e)
            navigateToAppsTab(e)
            navigateToGitTab(e)
            navigateToFeedbackPage(e)
            refresh(e)
            if (isStoryOpen && !isMapOpen) {
                if ((e.key == 'l' || e.key == 'l' || e.key == 'M' || e.key == 'm') && currentHighlightObj.location != null) {
                    showLocationOnMap()
                }
            }
            if (e.key == 'h' || e.key == 'H' || e.key == 'Q' || e.key == 'q' || e.key == '?') {
                openHelpDialog()
            }
            if (e.key == 'Enter') {
                setDarkModeStatus()
            }
        }
    })
    document.addEventListener("keydown", e => escapeAndArrowKeyListnerAndCombinations(e))
}

const combinations = e => {
    if (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) {
        if (e.key == 's' || e.key == 'S') {
            e.preventDefault()
            openSearchDialog()
        }
        if (e.key == 'f' || e.key == 'F') {
            e.preventDefault()
            openSearchDialog()
        }
        switch (e.key) {
            case '1': {
                e.preventDefault()
                window.location.href = 'https://www.instagram.com/imgovind_jee/'
            }
                break
            case '2': {
                e.preventDefault()
                window.location.href = 'https://www.facebook.com/govind.jee.3154/'
            }
                break
            case '3': {
                e.preventDefault()
                window.location.href = 'https://x.com/imgovind_jee'
            }
                break
            case '4': {
                e.preventDefault()
                window.location.href = 'https://www.linkedin.com/in/shreegovindjee/'
            }
                break
            case '5': {
                e.preventDefault()
                window.location.href = 'https://www.snapchat.com/add/imgovind_jee'
            }
                break
            case '6': {
                e.preventDefault()
                window.location.href = 'https://www.linkedin.com/in/shreegovindjee/'
            }
                break
            case '7': {
                e.preventDefault()
                window.location.href = 'https://www.instagram.com/imgovind_jee/'
            }
                break
            case '8': {
                e.preventDefault()
                window.location.href = 'https://github.com/imgovindjee'
            }
                break
            case '9': {
                e.preventDefault()
                window.location.href = 'emails.html'
            }
                break
            case '0': {
                e.preventDefault()
                window.location.href = 'https://stackoverflow.com/'
            }
                break
        }
    }
}

const escapeAndArrowKeyListnerAndCombinations = e => {
    if (!isSearchOpen) {
        combinations(e)
    }
    escapeAndArrowKeyListner(e)
}

const escapeAndArrowKeyListner = e => {

    if (e.key == 'Escape' || e.key == 'Esc' || e.key == 'ArrowDown' || e.key == 'C' || e.key == 'c') {
        if (isSearchOpen) {
            if (e.key == 'Escape' || e.key == 'Esc') {
                closeSearchDialog()
            }
        } else {
            if (isHelpOpen) {
                closeHelphDialog()
            } else {
                if (isStoryOpen) {
                    if (isMapOpen) {
                        closeLocationOnMap()
                    } else {
                        closeImageDiv()
                    }
                }
            }
        }
    }
    if (!isSearchOpen) {
        if (isStoryOpen && !isMapOpen) {
            if (e.key == 'ArrowRight') {
                nextStoryViaTouchOrKey()
            }
            if (e.key == 'ArrowLeft') {
                previousStoryViaTouchOrKey()
            }
        } else {
            if (!isStoryOpen && !isMapOpen) {
                if (e.key == 'ArrowRight') {
                    window.location.href = 'education_certifications.html'
                }
            }
        }
    }
}

const previousStoryViaTouchOrKey = () => {
    if (currentHighlightObj.previousHighlightID == null && storyCounter <= 0) {
        document.getElementById("previousBtn").style.display = "none"
    } else {
        previous()
    }
}

const nextStoryViaTouchOrKey = () => {
    if (currentHighlightObj.nextHighlightID == null && storyCounter >= (currentHighlightObj.stories.length - 1)) {
        document.getElementById("nextBtn").style.display = "none"
    } else {
        next()
    }
}

const showNotificaionAccordingToMode = status => {
    if (status === false) {
        setTimeout(() => {
            showNotificaion('You can use dark mode to reduce eye straining.')
            setTimeout(() => {
                closeNotificaion()
                setTimeout(() => {
                    showNotificaion('Do try <b>Smart Search</b> feature by clicking on <b>Shree Govind Jee</b> on the top-left of the page.')
                    setTimeout(() => {
                        closeNotificaion()
                        setTimeout(() => {
                            showNotificaion('For knowing shortcuts refer to (?) Help option.')
                            setTimeout(closeNotificaion, isMobile() ? 4000 : 6000)
                        }, 2000)
                    }, 6000)
                }, 2000)
            }, 4000)
        }, 4000)
    } else {
        setTimeout(() => {
            showNotificaion('Do try <b>Smart Search</b> feature by clicking on <b>Shree Govind Jee</b> on the top-left of the page.')
            setTimeout(() => {
                closeNotificaion()
                setTimeout(() => {
                    showNotificaion('For knowing shortcuts refer to (?) Help option.')
                    setTimeout(closeNotificaion, isMobile() ? 4000 : 6000)
                }, 2000)
            }, 6000)
        }, 4000)
    }
}


const closeNotificaion = () => {
    document.getElementById("notificaionArea").innerHTML = ""
}

const showNotificaion = message => {
    document.getElementById("notificaionArea").innerHTML = '<div style="background-color:#d4edda;position: fixed;z-index: 1000;bottom: 25px;right:10px; margin-left: 10px;border-radius: 5px;color: #155724;border-color: #c3e6cb;border-width: 1px;border-style: solid; -webkit-box-shadow: 0px 10px 22px -14px rgba(0,0,0,0.33);-moz-box-shadow: 0px 10px 22px -14px rgba(0,0,0,0.33);box-shadow: 0px 10px 22px -14px rgba(0,0,0,0.33);"> <table> <tr> <td style="padding: 10px;padding-left: 20px;">' + message + '</td> <td style=" vertical-align: top;padding-right: 20px;padding-left: 10px;padding-top: 7px;padding-bottom: 7px;cursor: pointer;font-size: 24px;color: #7aa280;" onclick="closeNotificaion()"> <b>&#215;</b> </td> </tr> </table> </div>'
}

const showToast = message => {
    document.getElementById("notificaionArea").innerHTML = '<div style="background-color:#d4edda;position: fixed;z-index: 2000;bottom: 25px;right:10px; margin-left: 10px;border-radius: 5px;color: #155724;border-color: #c3e6cb;border-width: 1px;border-style: solid; -webkit-box-shadow: 0px 10px 22px -14px rgba(0,0,0,0.33);-moz-box-shadow: 0px 10px 22px -14px rgba(0,0,0,0.33);box-shadow: 0px 10px 22px -14px rgba(0,0,0,0.33);"> <table> <tr> <td style="padding: 10px;padding-left: 20px;padding-right: 20px;">' + message + '</td> </tr> </table> </div>'
    setTimeout(closeNotificaion, 1200);
}

const shareLink = (titleText, url, toastSuccessMessage, toastErrorMessage) => {
    if (isMobile()) {
        if (navigator.share) {
            navigator.share({
                title: 'Shree Govind Jee',
                text: titleText,
                url
            }).then(() => navigator.clipboard.writeText(titleText + ' ' + url).catch(null))
                .catch(() => navigator.clipboard.writeText(titleText + ' ' + url).catch(null))
        } else {
            navigator.clipboard.writeText(titleText + ' ' + url)
                .then(() => {
                    showToast(toastSuccessMessage)
                })
                .catch(err => {
                    showToast(toastErrorMessage)
                })
        }
    } else {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(titleText + ' ' + url)
                .then(() => {
                    showToast(toastSuccessMessage)
                })
                .catch(err => {
                    showToast(toastErrorMessage)
                })
        }
    }
}