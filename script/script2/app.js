let isAppSearchFocused = false

const focusListener = () => {
    isAppSearchFocused = true
}

const blurListener = () => {
    isAppSearchFocused = false
}

const appsUnload = () => {
    isHelpOpen = false
    isSearchOpen = false
    closeSearchDialog()
}
const setKeyListener = () => {
    document.addEventListener("keypress", e => {
        if (!isAppSearchFocused) {
            if (!isSearchOpen) {
                navigateToProfileTab(e)
                navigateToEdcuationTab(e)
                navigateToWorkExperienceTab(e)
                navigateToSkillsTab(e)
                navigateToGitTab(e)
                navigateToFeedbackPage(e)
                refresh(e)
                if (e.key == 'h' || e.key == 'H' || e.key == 'Q' || e.key == 'q' || e.key == '?') {
                    openHelpDialog()
                }
                if (e.key == 'Enter') {
                    setDarkModeStatus()
                }
            }
        }
    })
    document.addEventListener("keydown", e => escapeAndArrowKeyListnerAndCombinations(e))
}

const escapeAndArrowKeyListnerAndCombinations = e => {
    if (!isAppSearchFocused) {
        if (!isSearchOpen) {
            combinations(e)
        }
        escapeAndArrowKeyListner(e)
    }
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
    }
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
            }
        }
    }
    if (!isSearchOpen) {
        if (e.key == 'ArrowRight') {
            window.location.href = 'github_repos.html'
        }
        if (e.key == 'ArrowLeft') {
            window.location.href = 'skills.html'
        }
    }
}