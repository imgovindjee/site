let text = ""
let suggestedSection = ""
let itsMobile = isMobile()
let currentDropDownValue = "Search in All"
let arrayForSuggestionsOperations = [
    { 
        suggestedSection: "APPS",
        dropDownValue: "Search in Apps", 
        suggestionInnerHTML: "Apps" 
    }, 
    { 
        suggestedSection: "EDUCATION", 
        dropDownValue: "Search in Education", 
        suggestionInnerHTML: "Education" 
    },
    { 
        suggestedSection: "GIT", 
        dropDownValue: "Search in GitHub Repositories", 
        suggestionInnerHTML: "GitHub Repositories" 
    }, 
    { 
        suggestedSection: "HIGHLIGHTS", 
        dropDownValue: "Search in Highlights",
        suggestionInnerHTML: "Highlights" 
    }, 
    { 
        suggestedSection: "PROFESSIONAL_C", 
        dropDownValue: "Search in Professional Certification", 
        suggestionInnerHTML: "Professional Certification" 
    }, 
    { 
        suggestedSection: "INSTITUTE_C", 
        dropDownValue: "Search in Institute Certification", 
        suggestionInnerHTML: "Institute Certificatio" 
    }, 
    { 
        suggestedSection: "ONLINE_C", 
        dropDownValue: "Search in Online Certification", 
        suggestionInnerHTML: "Online Certification"
    },
    { 
        suggestedSection: "OTHER_C", 
        dropDownValue: "Search in Other Certification", 
        suggestionInnerHTML: "Other Certification" 
    },
    { 
        suggestedSection: "SKILLS", 
        dropDownValue: "Search in Skills", 
        suggestionInnerHTML: "Skills" 
    }, 
    { 
        suggestedSection: "SOCIAL", 
        dropDownValue: "Search in Socials & Other Accounts", 
        suggestionInnerHTML: "Socials & Other Accounts" 
    }, 
    { 
        suggestedSection: "WORK", 
        dropDownValue: "Search in Work Experience", 
        suggestionInnerHTML: "Work Experience" 
    }, 
    { 
        suggestedSection: "AWARD", 
        dropDownValue: "Search in Awards", 
        suggestionInnerHTML: "Awards" 
    }
]
let threshold = 0.4
let useExtendedSearch = false

const setSSFilter = dropDownValue => {
    currentDropDownValue = dropDownValue.trim()
    document.getElementById("dropDownValue").innerHTML = "▼ " + currentDropDownValue
    getSearchResults(document.getElementById("searchTermTB"))
    checkIfSuggestionStillRequire()
}

const getSearchResults = id => {
    let searchText = id.value.trim()
    suggestedSection = searchForKeyWords(searchText)
    if (suggestedSection != "NaN") {
        let searchSuggestionSection = document.getElementById("searchSuggestionSection")
        let searchSuggestion = document.getElementById("searchSuggestion")
        arrayForSuggestionsOperations.forEach(item => {
            if (suggestedSection == item.suggestedSection && currentDropDownValue != item.dropDownValue) {
                searchSuggestionSection.innerHTML = item.suggestionInnerHTML
                searchSuggestion.style.display = "block"
                return
            }
        })
    } else {
        searchSuggestion.style.display = "none"
    }
    if (currentDropDownValue == "Search in All") {
        text = ""
        searchForApps(searchText)
        searchForGitHubRepo(searchText)
        searchForWorkExperience(searchText)
        searchForAwards(searchText)
        searchForSkills(searchText)
        searchForEducationAndCertifications(searchText, educationList, "Education")
        searchForEducationAndCertifications(searchText, professionalCertificateList, "Professional Certification")
        searchForEducationAndCertifications(searchText, instituteCertificateList, "Institute Certification")
        searchForEducationAndCertifications(searchText, onlineCertificateList, "Online Certification")
        searchForEducationAndCertifications(searchText, otherCertificateList, "Other Certification")
        searchForHighlights(searchText)
        searchForSocials(searchText)
        if (text.trim() == "") {
            document.getElementById('searchResultArea').innerHTML = itsMobile ? "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 18px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(</i></div>" : "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 21px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br></i></div>"
        } else {
            document.getElementById('searchResultArea').innerHTML = text
        }
        return
    }
    if (currentDropDownValue == "Search in Apps") {
        text = ""
        searchForApps(searchText)
        if (text.trim() == "") {
            document.getElementById('searchResultArea').innerHTML = itsMobile ? "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 18px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>" : "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 21px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>"
        } else {
            document.getElementById('searchResultArea').innerHTML = text
        }
        return
    }
    if (currentDropDownValue == "Search in Education") {
        text = ""
        searchForEducationAndCertifications(searchText, educationList, "Education")
        if (text.trim() == "") {
            document.getElementById('searchResultArea').innerHTML = itsMobile ? "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 18px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>" : "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 21px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>"
        } else {
            document.getElementById('searchResultArea').innerHTML = text
        }
        return
    }
    if (currentDropDownValue == "Search in GitHub Repositories") {
        text = ""
        searchForGitHubRepo(searchText)
        if (text.trim() == "") {
            document.getElementById('searchResultArea').innerHTML = itsMobile ? "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 18px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>" : "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 21px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>"
        } else {
            document.getElementById('searchResultArea').innerHTML = text
        }
        return
    }
    if (currentDropDownValue == "Search in Highlights") {
        text = ""
        searchForHighlights(searchText)
        if (text.trim() == "") {
            document.getElementById('searchResultArea').innerHTML = itsMobile ? "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 18px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>" : "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 21px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>"
        } else {
            document.getElementById('searchResultArea').innerHTML = text
        }
        return
    }
    if (currentDropDownValue == "Search in Professional Certification") {
        text = ""
        searchForEducationAndCertifications(searchText, professionalCertificateList, "Professional Certification")
        if (text.trim() == "") {
            document.getElementById('searchResultArea').innerHTML = itsMobile ? "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 18px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>" : "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 21px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>"
        } else {
            document.getElementById('searchResultArea').innerHTML = text
        }
        return
    }
    if (currentDropDownValue == "Search in Institute Certification") {
        text = ""
        searchForEducationAndCertifications(searchText, instituteCertificateList, "Institute Certification")
        if (text.trim() == "") {
            document.getElementById('searchResultArea').innerHTML = itsMobile ? "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 18px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>" : "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 21px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>"
        } else {
            document.getElementById('searchResultArea').innerHTML = text
        }
        return
    }
    if (currentDropDownValue == "Search in Online Certification") {
        text = ""
        searchForEducationAndCertifications(searchText, onlineCertificateList, "Online Certification")
        if (text.trim() == "") {
            document.getElementById('searchResultArea').innerHTML = itsMobile ? "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 18px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>" : "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 21px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>"
        } else {
            document.getElementById('searchResultArea').innerHTML = text
        }
        return
    }
    if (currentDropDownValue == "Search in Other Certification") {
        text = ""
        searchForEducationAndCertifications(searchText, otherCertificateList, "Other Certification")
        if (text.trim() == "") {
            document.getElementById('searchResultArea').innerHTML = itsMobile ? "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 18px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>" : "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 21px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>"
        } else {
            document.getElementById('searchResultArea').innerHTML = text
        }
        return
    }
    if (currentDropDownValue == "Search in Skills") {
        text = ""
        searchForSkills(searchText)
        if (text.trim() == "") {
            document.getElementById('searchResultArea').innerHTML = itsMobile ? "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 18px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>" : "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 21px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>"
        } else {
            document.getElementById('searchResultArea').innerHTML = text
        }
        return
    }
    if (currentDropDownValue == "Search in Socials & Other Accounts") {
        text = ""
        searchForSocials(searchText)
        if (text.trim() == "") {
            document.getElementById('searchResultArea').innerHTML = itsMobile ? "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 18px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>" : "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 21px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>"
        } else {
            document.getElementById('searchResultArea').innerHTML = text
        }
        return
    }
    if (currentDropDownValue == "Search in Work Experience") {
        text = ""
        searchForWorkExperience(searchText)
        if (text.trim() == "") {
            document.getElementById('searchResultArea').innerHTML = itsMobile ? "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 18px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>" : "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 21px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>"
        } else {
            document.getElementById('searchResultArea').innerHTML = text
        }
        return
    }
    if (currentDropDownValue == "Search in Work Experience") {
        text = ""
        searchForWorkExperience(searchText)
        if (text.trim() == "") {
            document.getElementById('searchResultArea').innerHTML = itsMobile ? "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 18px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>" : "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 21px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>"
        } else {
            document.getElementById('searchResultArea').innerHTML = text
        }
        return
    }
    if (currentDropDownValue == "Search in Awards") {
        text = ""
        searchForAwards(searchText)
        if (text.trim() == "") {
            document.getElementById('searchResultArea').innerHTML = itsMobile ? "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 18px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>" : "<div style='width: 100%;text-align: center;color: #9f9f9f; padding-top: 50px;font-size: 21px'><i>Sorry no results found for <span style='color: #9C7CDA'>" + searchText + "</span> :(<br>Try to search using '▼ Search in All' filter!</i></div>"
        } else {
            document.getElementById('searchResultArea').innerHTML = text
        }
        return
    }
}

const searchForApps = searchTerms => {
    let appSearchItemText = ""
    let localAppsList = apps
    if (searchTerms.trim() != "") {
        let fuse = new Fuse(apps, {
            keys: ['appName', 'tech', 'project_type'],
            threshold,
            useExtendedSearch,
        })
        let resultList = fuse.search(searchTerms)
        localAppsList = resultList.map(si => si.item)
    }
    localAppsList.forEach(item => {
        appSearchItemText += itsMobile ? '<div class="search_item" onclick="window.location.href = \'pages/apps/' + item.redirect_url + '\';"><table><tr><td><img src="assets/img/apps/' + item.media + '" style = "width: 128px;height: 72px;border-radius: 5px;" /></td ><td style="padding-left: 8px;"><span style="color: #DEE4E7;font-size: 18px;">' + item.appName + '</span></td></tr></table></div>' :
            '<div class="search_item" onclick="window.location.href = \'pages/apps/' + item.redirect_url + '\';"> <table style="width: 100%;"><tr><td rowspan="2" style="width: 144px;"><img src="assets/img/apps/' + item.media + '" style = "width: 144px;height: 81px;border-radius: 5px;" /></td><td style="padding-left: 12px;"><span style="color: #DEE4E7;font-size: 26px;">' + item.appName + '</span ></td ></tr ><tr><td style="padding-left: 12px;"><span style="color: #DEE4E7;font-size: 16px;">' + item.project_type + ' &nbsp;|&nbsp; ' + item.tech + '</span ></td ></tr ></table ></div >'
    })
    text += appSearchItemText.trim() != "" ? '<h4 style="color: #DEE4E7;margin-bottom: 15px;margin-top: 15px;">Apps</h4>' + appSearchItemText.trim() : ""
}

const searchForGitHubRepo = searchTerms => {
    let gitRepoSearchItemText = ""
    let localGitHubRepoList = repos
    if (searchTerms.trim() != "") {
        let fuse = new Fuse(repos, {
            keys: ['repoName'],
            threshold,
            useExtendedSearch,
        })
        let resultList = fuse.search(searchTerms)
        localGitHubRepoList = resultList.map(si => si.item)
    }

    localGitHubRepoList.forEach(item => {
        gitRepoSearchItemText += itsMobile ? '<div class="search_item" onclick="window.location.href =  \'' + item.repoUrl + '\'"><table style="width: 100%;"><tr><td style = "width: 72px;" > <img src="assets/img/icons/github_white_icon.png" style = "width: 72px;height: 72px;border-radius: 5px;" /></td><td style="padding-left: 12px;" > <span style="color: #DEE4E7;font-size: 18px;">' + item.repoName + '</span ></td ></tr ></table></div> '
            : '<div class="search_item" onclick = "window.location.href = \'' + item.repoUrl + '\'" > <table style="width: 100%;"><tr><td rowspan="2" style="width: 81px;"><img src="assets/img/icons/github_white_icon.png" style="width: 69px;height: 69px;border-radius: 5px;margin: 6px;" /></td><td style="padding-left: 12px;"><span style="color: #DEE4E7;font-size: 26px;">' + item.repoName + '</span ></td></tr><tr><td style="padding-left: 12px;"><span style="color: #DEE4E7;font-size: 16px;">' + item.tech + '</span></td></tr></table></div>'
    })
    text += gitRepoSearchItemText.trim() != "" ? '<h4 style="color: #DEE4E7;margin-bottom: 15px;margin-top: 15px;">GitHub Repositories</h4>' + gitRepoSearchItemText.trim() : ""
}

const searchForWorkExperience = searchTerms => {
    let workSearchItemText = ""
    let localWorkList = work
    if (searchTerms.trim() != "") {
        let fuse = new Fuse(work, {
            keys: ['companyName', 'role', 'projects.client', 'projects.projectRoleDesc'],
            threshold,
            useExtendedSearch,
        })
        let resultList = fuse.search(searchTerms)
        localWorkList = resultList.map(si => si.item)
    }
    localWorkList.forEach(item => {
        workSearchItemText += itsMobile ? '<div class="search_item"  onclick="window.location.href=\' work_exp.html \'" style="padding-bottom: 9px;"> <table style="width: 100%;"><tr><td style="width:50px;"><img src="assets/img/icons/' + item.companyLogo + '" style="width:50px;height:50px;border-radius: 5px" /></td> <td style="padding-left: 12px;"><span style="color: #DEE4E7;font-size: 20px;">' + item.companyName + '</span> </td> </tr> <tr> <td style="width:50px;"></td><td style="padding-left: 12px;padding-bottom: 1px;"> <span style="color: #DEE4E7;font-size: 16px;"> Projects </span> </td> </tr>'
            : '<div class="search_item" onclick="window.location.href=\' work_exp.html \'" style="padding-bottom: 12px;"> <table style="width: 100%;"><tr><td style="width:60px;"><img src="assets/img/icons/' + item.companyLogo + '" style="width:60px;height:60px;border-radius:5px" /></td> <td style="padding-left:12px"><span style="color:#DEE4E7;font-size:26px">' + item.companyName + '</span></td></tr><tr><td style="width:60px"></td><td style="padding-left:12px;padding-bottom:2px"><span style="color:#DEE4E7;font-size:18px;">Projects</span></td></tr>'
        item.projects.forEach(pr => {
            workSearchItemText += itsMobile ? '<tr> <td style="width:50px;"></td> <td style="padding-left:12px;padding-top:3px"> <table> <tr> <td><img src="assets/img/icons//' + pr.clientLogo + '" style="width: 20px;height: 20px;border-radius:5px"></td><td style="padding-left: 7px;"><span style="color: #DEE4E7;font-size:13px">' + pr.client + '</span></td></tr></table></td></tr>'
                : '<tr><td style="width:60px;"></td><td style="padding-left:12px;padding-top:4px"><table><tr><td><img src="assets/img/icons/' + pr.clientLogo + '" style="width:22px;height:22px;border-radius:5px"></td><td style="padding-left:7px;"><span style="color:#DEE4E7;font-size:15px">' + pr.client + '</span></td></tr></table></td></tr>'
        })
        workSearchItemText += '</table></div>'
    })
    text += workSearchItemText.trim() != "" ? '<h4 style="color: #DEE4E7;margin-bottom: 15px;margin-top: 15px;">Work Experience</h4>' + workSearchItemText : ''
}

const searchForAwards = searchTerms => {
    let awardSearchItemText = ""
    let localAwardsList = awards
    if (searchTerms.trim() != "") {
        let fuse = new Fuse(awards, {
            keys: ['awardname'],
            threshold,
            useExtendedSearch,
        })
        let resultList = fuse.search(searchTerms)
        localAwardsList = resultList.map(si => si.item)
    }
    localAwardsList.forEach(item => awardSearchItemText += `<div class="search_item" onclick="window.location.href =  'work_exp.html'"><table style="width: 100%;"><tr><td style="width: 40px;"> <img src="assets/img/icons/award_icon.png" style="width: 40px;height: 40px;border-radius: 5px;" /></td><td style="padding-left: 10px;"> <span style="color: #DEE4E7;font-size: 18px;">${item.awardname}</span></td></tr></table></div>`)
    text += awardSearchItemText.trim() != "" ? '<h4 style="color: #DEE4E7;margin-bottom: 15px;margin-top: 15px;">Awards</h4>' + awardSearchItemText : ''
}

const searchForSkills = searchTerms => {
    let skillSearchItemText = ""
    let localSkillsList = skills
    let localHandsOnsList = handsOns

    if (searchTerms.trim() != "") {
        let fuse = new Fuse(skills, {
            keys: ['title'],
            threshold,
            useExtendedSearch,
        })
        let resultList = fuse.search(searchTerms)
        localSkillsList = resultList.map(si => si.item)

        fuse = new Fuse(handsOns, {
            keys: [''],
            threshold,
            useExtendedSearch,
        })
        resultList = fuse.search(searchTerms)
        localHandsOnsList = resultList.map(si => si.item)
    }

    localSkillsList.forEach(item => {
        skillSearchItemText += itsMobile ? '<div class="search_item" onclick="window.location.href=\'skills.html?' + (generateSkillKey(item.title)) + '\'" style="padding: 10px;"><span style="color: #DEE4E7;font-size: 15px">' + item.description + '</span></div>'
            : '<div class="search_item" onclick="window.location.href=\'skills.html?' + (generateSkillKey(item.title)) + '\'" style="padding: 10px;"><span style="color: #DEE4E7;font-size: 18px">' + item.description + '</span></div>'
    })
    localHandsOnsList.forEach(item => {
        skillSearchItemText += itsMobile ? '<div class="search_item" onclick="window.location.href=\'skills.html?' + (generateSkillKey(item)) + '\'" style="padding: 10px;"><span style="color: #DEE4E7;font-size: 15px">' + item + '</span></div>'
            : '<div class="search_item" onclick="window.location.href=\'skills.html?' + (generateSkillKey(item)) + '\'" style="padding: 10px;"><span style="color: #DEE4E7;font-size: 18px">' + item + '</span></div>'
    })

    text += skillSearchItemText.trim() != "" ? '<h4 style="color: #DEE4E7;margin-bottom: 15px;margin-top: 15px;">Skills</h4>' + skillSearchItemText : ''
}

const searchForEducationAndCertifications = (searchTerms, eclist, ecTitle) => {
    let certificateType = ""
    switch (ecTitle) {
        case "Education":
            certificateType = "EDUCATION"
            break
        case "Professional Certification":
            certificateType = "PROFESSIONAL"
            break
        case "Institute Certification":
            certificateType = "INSTITUTE"
            break
        case "Online Certification":
            certificateType = "ONLINE"
            break
        case "Other Certification":
            certificateType = "OTHER"
            break
    }

    let educationAndCertificationsSearchItemText = ""
    let localEcList = eclist
    if (searchTerms.trim() != "") {
        let fuse = new Fuse(eclist, {
            keys: ['certificateName', 'instituteName', 'keywords'],
            threshold,
            useExtendedSearch,
        })
        let resultList = fuse.search(searchTerms)
        localEcList = resultList.map(si => si.item)
    }
    localEcList.forEach(item => {
        educationAndCertificationsSearchItemText += itsMobile ? '<div class="search_item" onclick="window.location.href=\'education_certifications.html?certID=' + item.certificateId + '&certType=' + certificateType + '\'"> <table style="width: 100%;"> <tr> <td style="width: 60px;"><img src="' + item.instituteIcon + '" style="width: 60px;height: 60px;border-radius: 5px;" /></td> <td style="padding-left: 12px;"><span style="color: #DEE4E7;font-size: 20px;">' + item.certificateName + '</span></td></tr><tr><td style="padding-top: 4px;" colspan="2"><span style="color: #DEE4E7;font-size: 13px;">' + item.instituteName + '</span> </td></tr></table></div>'
            : '<div class="search_item" onclick="window.location.href=\'education_certifications.html?certID=' + item.certificateId + '&certType=' + certificateType + '\'"><table style="width:100%"> <tr> <td style="width:70px" rowspan="2"><img src="' + item.instituteIcon + '" style="width: 70px;height: 70px;border-radius: 5px;" /></td> <td style="padding-left: 12px;"><span style="color: #DEE4E7;font-size: 26px;">' + item.certificateName + '</span></td> </tr> <tr> <td style="padding-left: 12px;"><span style="color: #DEE4E7;font-size: 16px;">' + item.instituteName + '</span> </td> </tr> </table></div>'
    })
    text += educationAndCertificationsSearchItemText.trim() != "" ? '<h4 style="color: #DEE4E7;margin-bottom: 15px;margin-top: 15px;">' + ecTitle + '</h4>' + educationAndCertificationsSearchItemText : ''
}

const searchForSocials = searchTerms => {
    let socialsSearchItemText = ""
    let localSocialList = socialAndIds
    if (searchTerms.trim() != "") {
        let fuse = new Fuse(socialAndIds, {
            keys: ['idName'],
            threshold,
            useExtendedSearch,
        })
        let resultList = fuse.search(searchTerms)
        localSocialList = resultList.map(si => si.item)
    }
    localSocialList.forEach(item => {
        socialsSearchItemText += itsMobile ? '<div class="search_item" onclick="window.location.href =  \'' + item.platformUrl + '\'"> <table style="width:100%"><tr><td style="width:45px;"><img src="assets/img/socialsandotheridsforsearch/' + item.idIcon + '" style="width:45px;height:45px;border-radius:5px;" /></td><td style="padding-left: 12px;"> <span style="color: #DEE4E7;font-size: 24px;">' + item.idName + '</span></td></tr></table></div>'
            : '<div class="search_item" onclick="window.location.href =  \'' + item.platformUrl + '\'"> <table style="width: 100%"> <tr><td style="width: 40px"><img src="assets/img/socialsandotheridsforsearch/' + item.idIcon + '" style="width:40px;height:40px;border-radius:5px;"/></td><td style="padding-left:10px;"><span style="color:#DEE4E7;font-size:20px">' + item.idName + '</span> </td> </tr> </table> </div>'
    })
    text += socialsSearchItemText.trim() != "" ? '<h4 style="color: #DEE4E7;margin-bottom: 15px;margin-top: 15px;">Socials & Other Accounts</h4>' + socialsSearchItemText : ''
}

const searchForHighlights = searchTerms => {
    let highlightsSearchItemText = ""
    let localHighlights = highlights

    if (searchTerms.trim() != "") {
        let fuse = new Fuse(Object.values(highlights), {
            keys: ['highlightName'],
            threshold,
            useExtendedSearch,
        })
        localHighlights = {}
        fuse.search(searchTerms).forEach(result => {
            const key = Object.keys(highlights).find(key => highlights[key] === result.item)
            localHighlights[key] = result.item
        })
        console.log(localHighlights)
    }

    for (let [key, value] of Object.entries(localHighlights)) {
        highlightsSearchItemText += itsMobile ? '<div class="search_item" onclick="window.location.href=\'index.html?' + key + '\'"> <table style="width:100%"> <tr> <td style="width:70px"><img src="assets/img/highlights/highlightscover/' + value.highlightCoverImage + '" style="width: 70px;height: 70px;border-radius: 5px;" /></td> <td style="padding-left: 12px;"><span style="color: #DEE4E7;font-size: 20px;">' + value.highlightName + '</span></td> </tr> <tr> <td colspan="2" style="padding-top: 3px;"><span style="color: #DEE4E7;font-size: 14px;">' + getHighlightDetails(value.stories, value.location) + '</span></td></tr></table></div>'
            : '<div class="search_item" onclick="window.location.href=\'index.html?' + key + '\'"> <table style="width:100%"> <tr> <td style="width:75px" rowspan="2"><img src="assets/img/highlights/highlightscover/' + value.highlightCoverImage + '" style="width: 75px;height: 75px;border-radius: 5px;" /></td> <td style="padding-left: 12px;"><span style="color: #DEE4E7;font-size: 26px;">' + value.highlightName + '</span></td> </tr> <tr> <td style="padding-left: 12px;"><span style="color: #DEE4E7;font-size: 15px;">' + getHighlightDetails(value.stories, value.location) + '</span></td> </tr> </table> </div>'
    }
    text += highlightsSearchItemText.trim() != "" ? '<h4 style="color: #DEE4E7;margin-bottom: 15px;margin-top: 15px;">Highlights</h4>' + highlightsSearchItemText : ''
}

const generateSkillKey = skillTitle => skillTitle.replace(/\s/g, "").replace(/\%/g, "").replace(/\'/g, "").trim().toLowerCase()

const getHighlightDetails = (mediaArray, locationValue) => {
    let totalCount = mediaArray.length
    let imageCount = mediaArray.filter(it => it.type == "img").length
    let videocount = totalCount - imageCount
    let locationDetails = locationValue != null ? "Location available" : "Location unavailable"

    if (imageCount != 0 && videocount != 0) {
        if (imageCount == 1 && videocount != 1) {
            return `${totalCount} Stories • ${imageCount} Photo & ${videocount} Videos • ${locationDetails}`
        }
        if (imageCount != 1 && videocount == 1) {
            return `${totalCount} Stories • ${imageCount} Photos & ${videocount} Video • ${locationDetails}`
        }
        if (imageCount == 1 && videocount == 1) {
            return `${totalCount} Stories • ${imageCount} Photo & ${videocount} Video • ${locationDetails}`
        }
        return highlightDetails = `${totalCount} Stories • ${imageCount} Photos & ${videocount} Videos • ${locationDetails}`
    }
    if (imageCount != 0 && videocount == 0) {
        if (imageCount == 1) {
            return `${totalCount} Stories • ${imageCount} Photo • ${locationDetails}`
        }
        return `${totalCount} Stories • ${imageCount} Photos • ${locationDetails}`
    }
    if (imageCount == 0 && videocount != 0) {
        if (videocount == 1) {
            return `${totalCount} Stories • ${videocount} Video • ${locationDetails}`
        }
        return `${totalCount} Stories • ${videocount} Videos • ${locationDetails}`
    }
}

const searchForKeyWords = searchTerm => {
    if (["app", "apps", "applications", "application", "software", "developments"].includes(searchTerm.toLowerCase().trim())) {
        return "APPS"
    }
    if (["edu", "educ", "educa", "educat", "educati", "educatio", "education", "qualification", "graduation", "schooling", "school", "college", "degree", "degree college", "junior college"].includes(searchTerm.toLowerCase().trim())) {
        return "EDUCATION"
    }
    if (["git", "git repo", "repo", "repository", "repositories", "github", "github repositories"].includes(searchTerm.toLowerCase().trim())) {
        return "GIT"
    }
    if (["high", "highlight", "highlights", "story", "stories"].includes(searchTerm.toLowerCase().trim())) {
        return "HIGHLIGHTS"
    }
    if (["prof", "profe", "profess", "professional", "professional certification", "certification"].includes(searchTerm.toLowerCase().trim())) {
        return "PROFESSIONAL_C"
    }
    if (["institute", "insti", "institute certification"].includes(searchTerm.toLowerCase().trim())) {
        return "INSTITUTE_C"
    }
    if (["online", "onli", "online certification"].includes(searchTerm.toLowerCase().trim())) {
        return "ONLINE_C"
    }
    if (["othe", "other", "other certification"].includes(searchTerm.toLowerCase().trim())) {
        return "OTHER_C"
    }
    if (["skil", "skill", "skills"].includes(searchTerm.toLowerCase().trim())) {
        return "SKILLS"
    }
    if (["socia", "social", "accounts", "social media", "social media account"].includes(searchTerm.toLowerCase().trim())) {
        return "SOCIAL"
    }
    if (["work", "work exp", "work experience", "job", "jobs"].includes(searchTerm.toLowerCase().trim())) {
        return "WORK"
    }
    if (["aw", "aww", "awa", "awar", "award", "awards", "ach", "achi", "achie", "achiev", "achieve", "achievem", "achieveme", "achievemen", "achievement", "achievements"].includes(searchTerm.toLowerCase().trim())) {
        return "AWARD"
    }
    return "NaN"
}

const onSearchSuggestionClick = () => {
    document.getElementById("searchTermTB").value = ""
    arrayForSuggestionsOperations.forEach(item => {
        if (suggestedSection == item.suggestedSection) {
            setSSFilter(item.dropDownValue)
            return
        }
    })
}

const checkIfSuggestionStillRequire = () => {
    arrayForSuggestionsOperations.forEach(item => {
        if (currentDropDownValue == item.dropDownValue && suggestedSection == item.suggestedSection) {
            document.getElementById("searchSuggestion").style.display = "none"
            return
        }
    })
}