$(document).ready(() => {
    initNav()
    let status = (getDarkModeStatus() === "ON" ? true : false)
    document.getElementById("darkModeSwitch").src = status ? "assets/images/nav/on.png" : "assets/images/nav/off.png"
    darkMode(status)
    setTimeout(() => {
        bs4pop.notice('Tap or Click to know about the company', {
            type: status ? 'dark' : 'primary',
            position: 'bottomright',
            appendType: 'append',
            closeBtn: 'true',
            className: ''
        })
    }, 2000)
    setTimeout(() => {
        bs4pop.notice('Got any feedback & suggestions? <a href="feedback.html">Click Here</a>', {
            type: 'info',
            position: 'bottomright',
            appendType: 'append',
            closeBtn: 'true',
            className: '',
            autoClose: '10000'
        })
    }, 20000)
    document.getElementById('mainDiv').style.paddingLeft = isMobile() ? "auto" : "20px"
    setWorkExperience()
    setAwards()
    setKeyListener()
    cleanUpBeforeClosingSearch()
    fillHelpInfo()
})

const setAwards = () => {
    let isM = isMobile()
    let awardsInnerHTML = ''
    awards.forEach(a => awardsInnerHTML += `<table style="margin-top: 20px"><tr><td rowspan="2" style="width: 55px"><img src="assets/images/icons/award_icon.png" class="my_fade_in" style="border-radius:5px" width="55px" height="55px"></td><td style="padding-left: 10px"><span class="my_text my_fade_in" style="font-size: ${isM ? '24px' : '26px'}">${a.awardname}</span></td></tr><tr><td style="padding-left: 10px;vertical-align: middle;"><span class="my_text my_fade_in" style="font-size: ${isM ? '14px' : '15px'}">${moment(a.awardDate, 'MM/DD/YYYY').format('MMMM YYYY')}</span></td></tr>${a.awardNote == 'NA' ? '' : `<tr><td colspan="2" style="vertical-align: middle;"><span class="my_text my_fade_in" style="font-size: 12px;">${a.awardNote}</span></td></tr>`}</table>`)
    document.getElementById('awards').innerHTML = awardsInnerHTML
}


const setWorkExperience = () => {
    let isM = isMobile()
    let workExperiencesInnerHTML = ''
    work.forEach(c => {
        workExperiencesInnerHTML += isM ? `<table class="my_text" style="cursor:pointer;margin-top:20px;margin-bottom:5px" onclick="location.href='${c.companyOfficialWebsite}'"><tr><td style="vertical-align: middle"><img src="assets/images/icons/${c.companyLogo}" class="my_fade_in" style="border-radius:5px" width="50px" height="50px"></td><td style="vertical-align:middle;padding-left:15px"><span class="my_text my_fade_in" style="font-size: 24px">${c.companyName}</span></td></tr><tr><td colspan="2" style="vertical-align: middle;padding-top: 3px;padding-bottom: 3px;"><span class="my_text my_fade_in" style="font-size:14px">${moment(c.companyJoiningDate, 'MM/DD/YYYY').format('MMM YYYY')} - ${c.companyLeavingDate == 'Present' ? `Present  <i>(${calculateTime(new Date(c.companyJoiningDate), new Date())})</i>` : `${moment(c.companyLeavingDate, 'MM/DD/YYYY').format('MMM YYYY')} <i>(${calculateTime(new Date(c.companyJoiningDate), new Date(c.companyLeavingDate))})</i>`}</span></td></tr><tr><td colspan="2" style="font-size: 15px" class="my_text my_fade_in">${c.role}</td></tr></table>` : `<table class="my_text" style="cursor:pointer;margin-top:20px;margin-bottom:8px" onclick="location.href='${c.companyOfficialWebsite}'"><tr><td rowspan="2" style="vertical-align: middle"><img src="assets/images/icons/${c.companyLogo}" class="my_fade_in" style="border-radius:5px"width="50px" height="50px"></td><td style="vertical-align: middle;padding-left: 15px"><span class="my_text my_fade_in" style="font-size: 26px">${c.companyName}</span></td></tr><tr><td style="vertical-align: middle;padding-left: 15px;"><span class="my_text my_fade_in" style="font-size: 15px">${moment(c.companyJoiningDate, 'MM/DD/YYYY').format('MMM YYYY')} - ${c.companyLeavingDate == 'Present' ? `Present  <i>(${calculateTime(new Date(c.companyJoiningDate), new Date())})</i>` : `${moment(c.companyLeavingDate, 'MM/DD/YYYY').format('MMM YYYY')} <i>(${calculateTime(new Date(c.companyJoiningDate), new Date(c.companyLeavingDate))})</i>`}</span></td></tr><tr><td colspan="2" style="font-size: 16px" class="my_text my_fade_in">${c.role}</td></tr></table>`
        if (c.projects.length > 0) {
            workExperiencesInnerHTML += `<div style="display:flex"><div class="my_text my_fade_in" style="background-color:var(--text_color);width: 1.5px"></div><div class="my_text my_fade_in" style="padding-left:15px"><span style="font-size: 18px;font-weight: 500">Projects</span>`
            c.projects.forEach(p => workExperiencesInnerHTML += `<div style="margin-top: 12px;"><table style="cursor: pointer" onclick="location.href='${p.clientWebsite}'"><tr><td><img src="assets/images/icons/${p.clientLogo}" style="border-radius: 5px" width="30px" height="30px"></td><td style="align-content: center"><span class="my_text my_fade_in" style="padding-left: 7px; font-size: 20px">${p.client}</span></td></tr></table><div class="my_text my_fade_in" style="font-size: ${isM ? '13px' : '14px'};margin-top: 5px">${p.projectRoleDesc}</div><div class="my_text my_fade_in" style="font-size: ${isM ? '13px' : '14px'}">${moment(p.projectJoiningDate, 'MM/DD/YYYY').format('MMM YYYY')} - ${p.projectEndDate == 'Present' ? `Present  <i>(${calculateTime(new Date(p.projectJoiningDate), new Date())})</i>` : `${moment(p.projectEndDate, 'MM/DD/YYYY').format('MMM YYYY')} <i>(${calculateTime(new Date(p.projectJoiningDate), new Date(p.projectEndDate))})</i>`}</div></div>`)
            workExperiencesInnerHTML += `</div></div>`
        }
    })
    document.getElementById('workExperiences').innerHTML = workExperiencesInnerHTML
}