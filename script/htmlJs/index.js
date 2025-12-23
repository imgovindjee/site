$(document).ready(() => {
    initNav()
    isProfilePage = true
    let status = (getDarkModeStatus() === "ON" ? true : false)
    document.getElementById("darkModeSwitch").src = status ? "assets/images/nav/on.png" : "assets/images/nav/off.png"
    darkMode(status)
    try {
        document.getElementById("profile_image").style.transition = "transform 2s"
        document.getElementById("profile_image").style.transform = "scale(1.1)"
    } catch (e) { }
    showNotificaionAccordingToMode(status)
    initializeHighlights()

    window.addEventListener("orientationchange", function () {
        setTimeout(() => {
            initializeHighlights()
        }, 1000);
    }, false);
    setKeyListener()
    validateTheParams()
    cleanUpBeforeClosingSearch()
    fillHelpInfo()
    document.getElementById('loc').innerHTML = Math.round(loc).toLocaleString("en-IN")
})

const validateTheParams = () => {
    let highlightName = location.search.slice(1)
    if (highlightName.trim() != "") {
        try {
            if (highlights[highlightName] != null) {
                openHighlight(highlightName)
                history.replaceState({}, null, 'index.html')
            }
        } catch (e) { }
    }
}

$.mobile.loading().hide()

const initializeHighlights = () => {
    let ringsHTMLText = ""
    let namesHTMLText = ""
    let counter = 0
    for (let [key, value] of Object.entries(highlights)) {
        counter++
        ringsHTMLText += '<td id="StoryItem"><div id="outerStoryRing" onclick=\'openHighlight("' + key + '")\'><div id="middleStory"><img src="assets/images/highlights/highlightscover/' + value.highlightCoverImage + '" style="height: 57px;width: 57px;border-radius: 100px;" /></div></div></td>'
        namesHTMLText += '<td id="StoryItem" class="my_text">' + value.highlightName + '</td>'
    }

    let highlightsHTMLText = "<tr>" + ringsHTMLText + "</tr><tr>" + namesHTMLText + "</tr>"
    document.getElementById("StoryTable").style.width = (counter * 95) + "px"
    document.getElementById('StoryTable').innerHTML = highlightsHTMLText
    if (!isMobile()) {
        document.getElementById("nextImageBtn").style.marginRight = "10px"
        document.getElementById("prevImageBtn").style.marginLeft = "10px"
    }
}


let storyCounter = 0
let currentHighlightObj = null
let hightlightTimeout = null
let currentHightlightLocation = null
let currentHighlightName = null
const openHighlight = highlightId => {
    currentHighlightName = highlightId
    currentHighlightObj = highlights[highlightId]
    validateLocationVisibilty(true)
    showHighlightTitle(currentHighlightObj.highlightName, true)
    hightlightTimeout = setTimeout(() => {
        showHighlightTitle("", false)
    }, 5000)
    openImageDiv()
    validateForHighlightNavButtons()
    setImageOrVideo(currentHighlightObj.stories[storyCounter])
    isStoryOpen = true
}

const validateLocationVisibilty = isFirstTimeLoad => {
    currentHightlightLocation = currentHighlightObj.location
    document.getElementById("locationBtn").style.visibility = "hidden"
    if (currentHightlightLocation != null) {
        let delayTime = isFirstTimeLoad ? 0 : 500
        setTimeout(() => {
            document.getElementById("locationBtn").style.visibility = "visible"
            document.getElementById("locationText").innerHTML = currentHightlightLocation.locationText
        }, delayTime);
        return
    }
    document.getElementById("locationBtn").style.visibility = "hidden"
}

const setImageOrVideo = story => {
    if (story.type == "img") {
        document.getElementById("ImageVideoConatainer").innerHTML = '<img id="StoryImage" src="assets/images/highlights/stories/' + story.src + '" loading="lazy" />'
        document.getElementById("StoryImage").style.height = "100vh"
    } else {
        document.getElementById("ImageVideoConatainer").innerHTML = '<video id="StoryImage" src="assets/images/highlights/stories/' + story.src + '" controls loop autoplay>This browser does not support video.</video>'
    }

    if (isMobile()) {
        if (!isPortrait()) {
            document.getElementById("StoryImage").style.height = "100vh"
            document.getElementById("HighlightTitle").style.fontSize = "12px"
        } else {
            let storyImageObj = document.getElementById("StoryImage").style
            storyImageObj.height = "100vh"
            storyImageObj.width = "100vw"
            storyImageObj.objectFit = "cover"
        }
    } else {
        document.getElementById("StoryImage").style.height = "100vh"
    }
}

const openImageDiv = () => {
    const imageDivStyle = document.getElementById("ImageDiv").style
    imageDivStyle.height = "100vh"
    imageDivStyle.width = "100vw"
    imageDivStyle.marginTop = "0vh"
    imageDivStyle.marginBottom = "0vh"
    imageDivStyle.marginRight = "0vw"
    imageDivStyle.marginLeft = "0vw"
    imageDivStyle.opacity = "1.0"
}

const closeImageDiv = () => {
    storyCounter = 0
    currentHighlightObj = null
    currentHighlightName = null
    clearTimeout(hightlightTimeout)
    const imageDivStyle = document.getElementById("ImageDiv").style
    imageDivStyle.height = "0vh"
    imageDivStyle.width = "0vw"
    imageDivStyle.marginTop = "50vh"
    imageDivStyle.marginBottom = "50vh"
    imageDivStyle.marginRight = "50vw"
    imageDivStyle.marginLeft = "50vw"
    imageDivStyle.opacity = "0.3"
    setTimeout(() => {
        document.getElementById("ImageVideoConatainer").innerHTML = ""
    }, 300)
    isStoryOpen = false
}

const next = () => {
    storyCounter++
    validateForHighlightNavButtons()
    if (storyCounter > currentHighlightObj.stories.length - 1) {
        storyCounter = 0
        currentHighlightName = currentHighlightObj.nextHighlightID
        currentHighlightObj = highlights[currentHighlightObj.nextHighlightID]
        showHighlightTitle("", false)
        clearTimeout(hightlightTimeout)
        nextHighlightAnim()
        validateLocationVisibilty(false)
        showHighlightTitle(currentHighlightObj.highlightName, true)
        hightlightTimeout = setTimeout(() => {
            showHighlightTitle("", false)
        }, 5000)
    }
    setImageOrVideo(currentHighlightObj.stories[storyCounter])
}

const previous = () => {
    storyCounter--
    validateForHighlightNavButtons()
    if (storyCounter < 0) {
        currentHighlightName = currentHighlightObj.previousHighlightID
        currentHighlightObj = highlights[currentHighlightObj.previousHighlightID]
        storyCounter = currentHighlightObj.stories.length - 1
        showHighlightTitle("", false)
        clearTimeout(hightlightTimeout)
        prevHighlightAnim()
        validateLocationVisibilty(false)
    }
    setImageOrVideo(currentHighlightObj.stories[storyCounter])
}

const validateForHighlightNavButtons = () => {
    if (currentHighlightObj.nextHighlightID == null && storyCounter >= (currentHighlightObj.stories.length - 1)) {
        document.getElementById("nextBtn").style.display = "none"
    } else {
        document.getElementById("nextBtn").style.display = "block"
    }
    
    if (currentHighlightObj.previousHighlightID == null && storyCounter <= 0) {
        document.getElementById("previousBtn").style.display = "none"
    } else {
        document.getElementById("previousBtn").style.display = "block"
    }
}

const nextHighlightAnim = () => {
    const imageDivStyle = document.getElementById("ImageDiv").style
    imageDivStyle.width = "0vw"
    setTimeout(() => {
        imageDivStyle.right = "0"
        imageDivStyle.width = "100vw"
        setTimeout(() => { imageDivStyle.right = "auto" }, 500)
    }, 200)
}

const prevHighlightAnim = () => {
    const imageDivStyle = document.getElementById("ImageDiv").style
    imageDivStyle.right = "0"
    imageDivStyle.width = "0vw"
    setTimeout(() => {
        imageDivStyle.right = "auto"
        imageDivStyle.width = "100vw"
    }, 200)
}

const showHighlightTitle = (titleText, show) => {
    let highlighttitleObj = document.getElementById("HighlightTitle")
    highlighttitleObj.innerHTML = titleText
    if (show) {
        highlighttitleObj.style.display = "block"
        highlighttitleObj.style.opacity = "1"
    } else {
        highlighttitleObj.style.opacity = "0"
        highlighttitleObj.style.display = "none"
    }
}

if (isMobile()) {
    $(document).on("pagecreate", "#pageone", () => {
        $("#ImageVideoConatainer").on("swiperight", previousStoryViaTouchOrKey)
        $("#ImageVideoConatainer").on("swipeleft", nextStoryViaTouchOrKey)
        $("#ImageVideoConatainer").on("swipedown", closeImageDiv)
    })
}

const showLocationOnMap = () => {
    document.getElementById('locationDialog').style.visibility = "visible"
    if (isSafari() && isMobile()) {
        document.getElementById('locationInnerDialog').style.height = "80vh"
        document.getElementById('locationInnerDialog').style.marginTop = "10vh"
        document.getElementById('locationInnerDialog').style.marginBottom = "10vh"
    } else {
        document.getElementById('locationInnerDialog').style.height = "90vh"
        document.getElementById('locationInnerDialog').style.marginTop = "5vh"
        document.getElementById('locationInnerDialog').style.marginBottom = "5vh"
    }
    document.getElementById('locationInnerDialog').style.width = "90vw"
    document.getElementById('locationInnerDialog').style.marginLeft = "5vw"
    document.getElementById('locationInnerDialog').style.marginRight = "5vw"
    setTimeout(() => {
        if (isMapOpen) {
            document.getElementById('locationMap').src = currentHightlightLocation.locationLink
            const collection = document.getElementsByClassName("locationDialogButton")
            collection[0].style.visibility = "visible"
            collection[1].style.visibility = "visible"
            collection[2].style.visibility = "visible"
            collection[3].style.visibility = "visible"
        }
    }, 800);
    isMapOpen = true
}

const closeLocationOnMap = () => {
    isMapOpen = false
    document.getElementById('locationDialog').style.visibility = "visible"
    document.getElementById('locationInnerDialog').style.height = "0vh"
    document.getElementById('locationInnerDialog').style.width = "0vw"
    document.getElementById('locationInnerDialog').style.marginLeft = "50vw"
    document.getElementById('locationInnerDialog').style.marginRight = "50vw"
    document.getElementById('locationInnerDialog').style.marginTop = "50vh"
    document.getElementById('locationInnerDialog').style.marginBottom = "50vh"
    document.getElementById('locationMap').src = 'about:blank'
    document.getElementById('locationDialog').style.visibility = "hidden"
    const collection = document.getElementsByClassName("locationDialogButton")
    collection[0].style.visibility = "hidden"
    collection[1].style.visibility = "hidden"
    collection[2].style.visibility = "hidden"
    collection[3].style.visibility = "hidden"
}

const shareMapLink = () => {
    let txt = 'Shree Govind Jee | Here is the link to the ' + currentHighlightObj.highlightName + ' location'
    shareLink(txt, currentHightlightLocation.locationDetailsLink, 'Map location has been copied', 'Unable to copy map location')
}

const shareHighlight = () => {
    let txt = 'Check out Shree Govind Jee\'s highlight - ' + currentHighlightObj.highlightName
    shareLink(txt, 'https://imgovindjee.github.io/site?' + currentHighlightName, 'Highlight link has been copied', 'Unable to copy highlight link')
}