const navigateToProfileTab = event => {
    if (event.key == 'P' || event.key == 'p' || event.key == '1') {
        window.location.href = 'index.html'
    }
}

const navigateToEdcuationTab = event => {
    if (event.key == 'E' || event.key == 'e' || event.key == '2') {
        window.location.href = 'education_certifications.html'
    }
}

const navigateToWorkExperienceTab = event => {
    if (event.key == 'W' || event.key == 'w' || event.key == '3') {
        window.location.href = 'work_exp.html'
    }
}

const navigateToSkillsTab = event => {
    if (event.key == 'S' || event.key == 's' || event.key == '4') {
        window.location.href = 'skills.html'
    }
}

const navigateToAppsTab = event => {
    if (event.key == 'A' || event.key == 'a' || event.key == '5') {
        window.location.href = 'apps.html'
    }
}

const navigateToGitTab = event => {
    if (event.key == 'G' || event.key == 'g' || event.key == '6') {
        window.location.href = 'github_repos.html'
    }
}

const navigateToFeedbackPage = event => {
    if (event.key == 'F' || event.key == 'f' || event.key == '7') {
        window.location.href = 'feedback.html'
    }
}

const refresh = event => {
    if (event.key == 'R' || event.key == 'r' || event.key == '0') {
        re()
    }
}

let isHelpOpen = false, isSearchOpen = false

const closeSearchDialog = () => {
    isSearchOpen = false
    document.getElementById("searchDialog").style.visibility = "hidden"
    document.getElementById("searchDialog").style.opacity = "0"
    document.body.style.overflowY = "overlay"
    cleanUpBeforeClosingSearch()
}

const openSearchDialog = () => {
    isSearchOpen = true
    document.getElementById("searchDialog").style.visibility = "visible"
    document.getElementById("searchDialog").style.opacity = "1"
    document.body.style.overflowY = "hidden"
}


const closeHelphDialog = () => {
    isHelpOpen = false
    document.getElementById("helpDialog").style.visibility = "hidden"
    document.getElementById("helpDialog").style.opacity = "0"
}

const openHelpDialog = () => {
    isHelpOpen = true
    document.getElementById("helpDialog").style.visibility = "visible"
    document.getElementById("helpDialog").style.opacity = "1"
}

const cleanUpBeforeClosingSearch = () => {
    currentDropDownValue = "Search in All"
    document.getElementById("dropDownValue").innerHTML = "▼ " + currentDropDownValue
    document.getElementById("searchTermTB").value = ""
    document.getElementById('searchResultArea').innerHTML = isMobile() ? "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;padding-left: 10px;padding-right: 10px;font-size: 18px;'> <i>Welcome! Using this smart search, you can search for anything from this website such as highlights, education & certifications, apps, github repositories, work experiences, skills etc. Just tap on the result to view in detail. Also you can apply filter to search in specific :) </i> </div>" : "<div style='width: 100%;text-align: center;color: #9f9f9f; padding: 50px;font-size: 21px;'> <i>Welcome! Using this smart search, you can search for anything from this website such as highlights, education & certifications, apps, github repositories, work experiences, skills etc. Just tap on the result to view in detail. Also you can apply filter to search in specific :)</i> </div>"
    suggestedSection = ""
    document.getElementById("searchSuggestion").style.display = "none"
    let searchDropDowns = `<button class="dropdown-item my_search_dropdown" type="button" onclick="setSSFilter('Search in All')">Search in All</button>`
    let temp = arrayForSuggestionsOperations
    temp = temp.sort((a, b) => a.dropDownValue.localeCompare(b.dropDownValue))
    temp.forEach(dv => searchDropDowns += `<button class="dropdown-item my_search_dropdown" type="button" onclick="setSSFilter('${dv.dropDownValue}')">${dv.dropDownValue}</button>`)
    document.getElementById('searchDropDownId').innerHTML = searchDropDowns
}

const fillHelpInfo = () => {
    document.getElementById("helpInfoText").innerHTML = '<div class="container" style="padding: 20px;"> <h2>SHORTCUTS</h2> <br> <p style="font-size: 20px;">THINGS TO CONSIDER BEFORE TAKING SHORTCUTS</p> <p style="font-size: 16px;">• Keyboard shortcuts are designed for desktop/PC enabling easy access, however on mobile the view is concise and can be used with single handed via touch and taps. Nevertheless, the same keyboard shortcuts can work on a mobile phone only if the mobile phone is connected to an external keyboard with ctrl keys.</p> <p style="font-size: 16px;">• Similarly, the swipe left or right option is available for mobile but not for PC/Desktop (for viewing highlights).</p> <p style="font-size: 16px;">• All the shortcuts work only in the main tabs (Profile, Education & Certifications, Work Experience, Skills, Apps, GitHub Repositories).</p> <p style="font-size: 16px;">• And very importantly, none of the shortcuts except the Escape key will work while using Smart Search.</p> <p style="font-size: 16px;">• Lastly, CAPITAL as well as small keys will work for shortcuts.</p> <br> <h4 style="margin-bottom: 25px;">DESKTOP SHORTCUTS</h4> <h5 style="margin-bottom: 20px;">Common SHORTCUTS</h5> <div style="margin-bottom: 20px;" class="row"> <div class="col-lg-6"> <p style="font-size: 16px;">• Enter key to switch between dark/light mode.</p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• H key, Q Key, ? Key to open current help window.</p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• Use initial letter key for navigating the that tab like A for Apps, P for Profile etc.</p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• R key to refresh the Page.</p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• Right/Left Arrow Key to navigate to right and left tab of current tab like if current tab is Apps then right arrow key will navigate to GitHub Repositories and left arrow key will navigate to Skills Tab. </p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• CTRL+S , CTRL+F (Non-Mac OS) or Command+S , Command+F (Mac OS) to open Smart Search. Also can be openned by clicking/tapping on Vaibhav Mojidra in top-left corner. </p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• Escape key, Down Arrow key, C key to close any dialog/window like highlights window, location window, smart search etc. </p> </div> </div> <h5 style="margin-bottom: 20px;">PROFILE TAB SHORTCUTS</h5> <div style="margin-bottom: 20px;" class="row"> <div class="col-lg-6"> <p style="font-size: 16px;">• L Key , M Key to open map while highlight is open an location is available. </p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• Right/Left Arrow Keys to move between stories(next/previous). </p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• CTRL+1 (Non-Mac OS) , Command+1 (Mac OS) redirects to Instagram. </p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• CTRL+2 (Non-Mac OS) , Command+2 (Mac OS) redirects to Facebook. </p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• CTRL+3 (Non-Mac OS) , Command+3 (Mac OS) redirects to Twitter. </p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• CTRL+4 (Non-Mac OS) , Command+4 (Mac OS) redirects to LinkedIn. </p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• CTRL+5 (Non-Mac OS) , Command+5 (Mac OS) redirects to Snapchat. </p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• CTRL+6 (Non-Mac OS) , Command+6 (Mac OS) redirects to Playstore Account. </p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• CTRL+7 (Non-Mac OS) , Command+7 (Mac OS) redirects to YouTube Channel. </p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• CTRL+8 (Non-Mac OS) , Command+8 (Mac OS) redirects to GitHub. </p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• CTRL+9 (Non-Mac OS) , Command+9 (Mac OS) redirects to Email IDs Page. </p> </div> <div class="col-lg-6"> <p style="font-size: 16px;">• CTRL+0 (Non-Mac OS) , Command+0 (Mac OS) redirects to Stack Overflow profile. </p> </div> </div> <h4 style="margin-bottom: 25px;">Mobile SHORTCUTS</h4> <div style="margin-bottom: 20px;" class="row"> <div class="col-lg-6"> <p style="font-size: 16px;">• Swipe left and Swipe right to move between stories (next/previous). </p> </div> </div> </div>'
}