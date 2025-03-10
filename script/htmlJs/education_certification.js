$(document).ready(() => {
    initNav()
    let status = (getDarkModeStatus() === "ON" ? true : false)
    document.getElementById("darkModeSwitch").src = status ? "assets/images/nav/on.png" : "assets/images/nav/off.png"
    darkMode(status)
    document.getElementById('mainDiv').style.paddingLeft = isMobile() ? "auto" : "20px"
    initEducation()
    initInstitute()
    initProfessional()
    initOnline()
    initOthers()
    setTimeout(() => {
        bs4pop.notice('Tap or Click on any to view its content', {
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
    validateTheParams()
    cleanUpBeforeClosingSearch()
    fillHelpInfo()
})

const validateTheParams = () => {
    const queryString = window.location.search
    const params = new URLSearchParams(queryString)
    let certID = params.get('certID')
    let certType = params.get('certType')
    if (certID != null && certType != null) {
        try {
            showContent(certType, certID)
            history.replaceState({}, null, 'education_certifications.html')
        } catch (e) {
            isContentListOpen = false
            history.replaceState({}, null, 'education_certifications.html')
        }
    }
}

const getBoilerPlate = (certificateType, certificateId, certificateName, instituteName, instituteIcon, courseContent) => (isMobile() ?
    `<div onclick="showContent('${certificateType}','${certificateId}')"><table style="margin-bottom:20px;cursor:pointer"><tr><td><img src="${instituteIcon}" class="my_fade_in" loading="lazy" style="margin-right:10px;border-radius:5px;" width="50px" height="50px"></td><td style="vertical-align:middle"><span style="font-size:22px" class="my_text my_fade_in">${certificateName}</span></td></tr><tr><td style="vertical-align:middle" colspan="2" style="padding-top:5px"><span style="font-size: 14px" class="my_text my_fade_in">${instituteName}</span></td></tr></table></div>`
    : `<div onclick="showContent('${certificateType}','${certificateId}')"><table style="margin-bottom:20px;cursor:pointer"> <tr><td rowspan="2"><img src="${instituteIcon}" class="my_fade_in" loading="lazy" style="margin-right:20px;border-radius:5px" width="50px" height="50px"></td><td style="vertical-align:middle"><span style="font-size:26px" class="my_text my_fade_in">${certificateName}</span></td></tr><tr><td style="vertical-align:middle"><span style="font-size:16px" class="my_text my_fade_in">${instituteName}</span></td></tr></table></div>`)

const initProfessional = () => {
    let text = ""
    professionalCertificateList.forEach(cert => {
        text += getBoilerPlate("PROFESSIONAL", cert.certificateId, cert.certificateName, cert.instituteName, cert.instituteIcon, cert.courseContent)
    })
    document.getElementById("professionalCertificationDiv").innerHTML = text
}

const initInstitute = () => {
    let text = ""
    instituteCertificateList.forEach(cert => {
        text += getBoilerPlate("INSTITUTE", cert.certificateId, cert.certificateName, cert.instituteName, cert.instituteIcon, cert.courseContent)
    })
    document.getElementById("instituteCertificationDiv").innerHTML = text
}

const initOthers = () => {
    let text = ""
    otherCertificateList.forEach(cert => {
        text += getBoilerPlate("OTHER", cert.certificateId, cert.certificateName, cert.instituteName, cert.instituteIcon, cert.courseContent)
    })
    document.getElementById("otherCertificationDiv").innerHTML = text
}


const initOnline = () => {
    let text = ""
    onlineCertificateList.forEach(cert => {
        text += getBoilerPlate("ONLINE", cert.certificateId, cert.certificateName, cert.instituteName, cert.instituteIcon, cert.courseContent)
    })
    document.getElementById("onlineCertificationDiv").innerHTML = text
}

const initEducation = () => {
    let text = ""
    educationList.forEach(cert => {
        text += getBoilerPlate("EDUCATION", cert.certificateId, cert.certificateName, cert.instituteName, cert.instituteIcon, cert.courseContent)
    })
    document.getElementById("education").innerHTML = text
}

const showContent = (certificateType, certificateId) => {
    let contentList = []
    switch (certificateType) {
        case "EDUCATION":
            contentList = educationList.find(item => item.certificateId === certificateId).courseContent
            break
        case "PROFESSIONAL":
            contentList = professionalCertificateList.find(item => item.certificateId === certificateId).courseContent
            break
        case "INSTITUTE":
            contentList = instituteCertificateList.find(item => item.certificateId === certificateId).courseContent
            break
        case "ONLINE":
            contentList = onlineCertificateList.find(item => item.certificateId === certificateId).courseContent
            break
        case "OTHER":
            contentList = otherCertificateList.find(item => item.certificateId === certificateId).courseContent
            break
    }
    setDialogContent(contentList)
    openDialogDiv()
}
const openDialogDiv = () => {
    document.getElementById("MyButtonsDiv").style.height = "100vh"
    document.getElementById("MyButtonsDiv").style.marginTop = "0vh"
    document.getElementById("MyButtonsDiv").style.opacity = "1"
    document.getElementById("MyButtonsDiv").style.borderRadius = "0px"
    isContentListOpen = true
}
const closeDialogDiv = () => {
    document.getElementById("MyButtonsDiv").style.height = "0vh"
    document.getElementById("MyButtonsDiv").style.marginTop = "100vh"
    document.getElementById("MyButtonsDiv").style.opacity = "0.3"
    document.getElementById("MyButtonsDiv").style.borderRadius = "10px"
    isContentListOpen = false
}
const setDialogContent = (stringList) => {
    let text = ""
    stringList.forEach((element, index) => {
        if (element.startsWith("<VMCSH>")) {
            if (index == 0) {
                text += '<h5 class="my_text" style="padding-left: 12px;margin-bottom:25px">' + element.toUpperCase() + '</h5>'
                return
            }
            text += '<h5 class="my_text" style="padding-left: 12px;margin-top:25px;margin-bottom:25px">' + element.toUpperCase() + '</h5>'
            return
        }
        text += '<p class="my_text" style="padding-left: 15px">✓ ' + element + '</p>'
    })
    document.getElementById("dialogContent").innerHTML = text
}