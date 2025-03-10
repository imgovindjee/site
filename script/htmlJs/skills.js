$(document).ready(() => {
    initNav()
    let status = (getDarkModeStatus() === "ON" ? true : false)
    document.getElementById("darkModeSwitch").src = status ? "../assets/img/nav/on.png" : "../assets/img/nav/off.png"
    darkMode(status)
    setSkills()
    setTimeout(() => {
        bs4pop.notice('Tap or Click on skill to view its details', {
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
    setKeyListener()
    cleanUpBeforeClosingSearch()
    fillHelpInfo()
})

const getParamsIfAny = () => {
    let listName = location.search.slice(1)
    let paramValue = ""
    if (listName.trim() != "") {
        try {
            paramValue = listName.trim()
            history.replaceState({}, null, 'skills.html')
        } catch (e) {
            history.replaceState({}, null, 'skills.html')
        }
    }
    return paramValue
}


let skillsDetailsDisplayPropertyArray = null
function setSkills() {
    let colorsArray = ["#00c853", "#ffd600", "#00b0ff", "#ff9800", "#00E5FF", "#7E57C2", "#D4E157", "#EC407A", "#F44336", "#BCAAA4", "#EA80FC"].sort(() => .5 - Math.random())
    let colorIndex = 0
    let paramValue = getParamsIfAny()
    let gotParam = false
    skillsDetailsDisplayPropertyArray = new Array(skills.length).fill(false)
    let skillsHTML = ""
    skills.forEach((item, index) => {
        let unique_key = generateSkillKey(item.title)
        if (colorIndex == 11) {
            colorIndex = 0
        }
        if (paramValue != "" && !gotParam) {
            if (unique_key == paramValue) {
                skillsDetailsDisplayPropertyArray[index] = true
                gotParam = true
                skillsHTML += `<div class="col-lg-4" id="${unique_key}" style="padding-left: 10px;padding-right: 10px;margin-top:15px;"><div class="skill" onclick="toggleSkillDetail(${index})"><table><tr><td id="skillColor${index}" style="transition: border-bottom-left-radius 1s;background-color:${colorsArray[colorIndex]};width: 6px;border-top-left-radius: 5px;border-bottom-left-radius: 0px;"></td><td style="padding:7px;"><h5 class="my_text" style="margin: 0px">${item.title}</h5></td></tr></table><div style="font-size: 14px;margin-top: 4px;padding-left: 13px;padding-right: 13px;padding-bottom:7px;height: auto;opacity: 1;transform: scaleY(1);transform-origin: top;transition: opacity 1s,font-size 0.5s,margin-top 0.8s,transform 1s" id="skillDetail${index}" class="my_text">${item.description}</div></div></div>`
                return
            }
        }
        skillsHTML += `<div class="col-lg-4" id="${unique_key}" style="padding-left: 10px;padding-right: 10px;margin-top:15px;"><div class="skill" onclick="toggleSkillDetail(${index})"><table><tr><td id="skillColor${index}" style="transition: border-bottom-left-radius 1s;background-color:${colorsArray[colorIndex]};width: 6px;border-top-left-radius: 5px;border-bottom-left-radius: 5px;"></td><td style="padding:7px;"><h5 class="my_text" style="margin: 0px">${item.title}</h5></td></tr></table><div style="font-size: 0px;margin-top: 0px;padding-left: 13px;padding-right: 13px;padding-bottom:0px;height: auto;opacity: 0;transform: scaleY(0);transform-origin: top;transition: opacity 1s,font-size 0.5s,margin-top 0.8s,transform 1s" id="skillDetail${index}" class="my_text">${item.description}</div></div></div>`
        colorIndex++
    })
    document.getElementById('myskills').innerHTML = skillsHTML
    colorIndex = 0
    let text = ""
    handsOns.forEach((item, index) => {
        if (colorIndex == 11) {
            colorIndex = 0
        }
        text += `<div class="col-xl-6" id='${generateSkillKey(item)}'style="padding-left: 10px;padding-right: 10px;margin-top:10px"><h5 class="my_text"><span style="color:${colorsArray[colorIndex]};">✦ </span> ${item}</h5></div>`
        colorIndex++
    })
    document.getElementById('myhandsOn').innerHTML = text
    try {
        let focusID = document.getElementById(paramValue)
        focusID.scrollIntoView(false)
    } catch (error) { }
}

const toggleSkillDetail = skillIndex => {
    if (skillsDetailsDisplayPropertyArray[skillIndex]) {
        skillsDetailsDisplayPropertyArray[skillIndex] = false
        document.getElementById(`skillDetail${skillIndex}`).style.fontSize = "0px"
        document.getElementById(`skillDetail${skillIndex}`).style.opacity = "0"
        document.getElementById(`skillDetail${skillIndex}`).style.marginTop = "0px"
        document.getElementById(`skillDetail${skillIndex}`).style.paddingBottom = "0px"
        document.getElementById(`skillDetail${skillIndex}`).style.transform = "scaleY(0)"
        document.getElementById(`skillColor${skillIndex}`).style.borderBottomLeftRadius = "5px"
    } else {
        skillsDetailsDisplayPropertyArray[skillIndex] = true
        document.getElementById(`skillDetail${skillIndex}`).style.fontSize = "14px"
        document.getElementById(`skillDetail${skillIndex}`).style.opacity = "1"
        document.getElementById(`skillDetail${skillIndex}`).style.marginTop = "4px"
        document.getElementById(`skillDetail${skillIndex}`).style.paddingBottom = "7px"
        document.getElementById(`skillDetail${skillIndex}`).style.transform = "scaleY(1)"
        document.getElementById(`skillColor${skillIndex}`).style.borderBottomLeftRadius = "0px"
    }
}