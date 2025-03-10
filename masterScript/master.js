const BASE_URL = "https://imgovindjee.github.io/site";
const DEVELOPER_NAME = "Shree Govind Jee";
const DARK_THEME_LOCAL_STORAGE = "shreegovindjeeDarkMode";
const DARK_THEME_ON = "T";
const DARK_THEME_OFF = "F";
const controller = new AbortController();
const signal = controller.signal;
const DELAY = 0;
const MEDIA_TYPE_CERTIFICATE = "cert";
const MEDIA_TYPE_AWARD = "awd";
const MEDIA_TYPE_WORK = "wrk";
const IS_ROADMAPS_TERMS_AGREED = "IsRoadmapsTermsAgreed";
const ROADMAPS_TERMS_AGREED = "1";




const API_URLS = {
    QUALIFICATION: `${BASE_URL}/db/qualifications.json`,
    QUALIFICATION_MEDIA: (imageName) => `${BASE_URL}/assets/qualificationsicons/${imageName}`,
    QUALIFICATION_DETAILS: (eduCertId) => `${BASE_URL}/db/qualifications/${eduCertId}.json`,
    WORK_EXPERIENCE_AND_AWARDS: `${BASE_URL}/db/workexpandawards.json`,
    WORK_EXPERIENCE_MEDIA: (imageName) => `${BASE_URL}/assets/work/${imageName}`,
    AWARDS_MEDIA: (imageName) => `${BASE_URL}/assets/awards/${imageName}`,
    CERTIFICATES_MEDIA: (imageName) => `${BASE_URL}/assets/certificates/${imageName}`,
    SKILLS: `${BASE_URL}/db/skills.json`,
    APPS: `${BASE_URL}/db/apps.json`,
    APP_DETAILS: (appId) => `${BASE_URL}/db/apps/${appId}.json`,
    APPS_MEDIA: (imageName) => `${BASE_URL}/assets/apps/${imageName}`,
    GITHUB_REPOS: `${BASE_URL}/db/githubrepos.json`,
    ROADMAPS: `${BASE_URL}/db/roadmaps.json`,
    ROADMAPS_DETAILS: (roadmapId) => `${BASE_URL}/db/roadmaps/${roadmapId}.json`
};


function onNavBarBurgerClick() {
    let burgerClickElement = getId('burgerClick');
    burgerClickElement.checked = !burgerClickElement.checked;
    getId('bugger-id').classList.toggle('toggle');
    setHeaderTitle();
}

function setResizeListenerForStaticNav(onResize = function () { }) {
    calculateMainContentHeightForStaticNav()
    window.addEventListener('resize', function () {
        calculateMainContentHeightForStaticNav();
        onResize();
    });
}



function calculateMainContentHeightForStaticNav() {
    //For Large Screen
    const screenWidth = window.innerWidth;
    if (screenWidth >= 2048) {
        let zoomFactor = getZoomFactorForBigScreen(screenWidth);
        document.body.style.zoom = zoomFactor;
        const mainContent = document.querySelector('.main-content');
        const navHeight = 70;
        mainContent.style.height = `calc(${window.innerHeight / zoomFactor}px - ${navHeight}px)`;
        return;
    }

    // if (screenWidth <= 370) {
    //     let zoomFactor = getZoomFactorForMiniScreen(screenWidth);
    //     document.body.style.zoom = zoomFactor;
    //     const mainContent = document.querySelector('.main-content');
    //     const navHeight = 70;
    //     mainContent.style.height = `calc(${window.innerHeight / zoomFactor}px - ${navHeight}px)`;
    //     return;
    // }


    //For Normal Screen
    document.body.style.zoom = 1;
    const mainContent = document.querySelector('.main-content');
    const navHeight = 70;
    mainContent.style.height = `calc(${window.innerHeight}px - ${navHeight}px)`;
}

function setResizeListenerForDynamicNav(onResize = function () { }) {
    calculateMainContentHeightForDynamicNav();
    window.addEventListener('resize', function () {
        calculateMainContentHeightForDynamicNav();
        onResize();
    });
}

function calculateMainContentHeightForDynamicNav() {
    //For Large Screen
    const screenWidth = window.innerWidth;
    if (screenWidth >= 2048) {
        let zoomFactor = getZoomFactorForBigScreen(screenWidth);
        document.body.style.zoom = zoomFactor;
        const mainContent = document.querySelector('.main-content');
        const navHeight = document.querySelector('.navbar-container').offsetHeight;
        mainContent.style.height = `calc(${window.innerHeight / zoomFactor}px - ${navHeight}px)`;
        return;
    }

    //For Normal Screen
    document.body.style.zoom = 1;
    const mainContent = document.querySelector('.main-content');
    const navHeight = document.querySelector('.navbar-container').offsetHeight;
    mainContent.style.height = `calc(${window.innerHeight}px - ${navHeight}px)`;
}

function getZoomFactorForBigScreen(width) {
    return (width * 1.4) / 2048;
}

function getZoomFactorForMiniScreen(width) {
    return (width * 0.9) / 370;
}

function getId(documentIDkey) {
    return document.getElementById(documentIDkey);
}

function setTheme(onLightTheme = function () { }, onDarkTheme = function () { }) {
    if (isDarkTheme()) {
        setColorsWhenDarkTheme();
        setThemeIconWhenDarkTheme();
        onDarkTheme();
    } else {
        setColorsWhenLightTheme();
        setThemeIconWhenLightTheme();
        onLightTheme();
    }
}

function setColorsWhenDarkTheme() {
    let r = document.querySelector(':root');
    r.style.setProperty('--background-color', '#000000');
    r.style.setProperty('--text-color', '#FFFFFF');
    r.style.setProperty('--light-text-color', '#8D8D93');
    r.style.setProperty('--card-color', '#1C1C1E');
    r.style.setProperty('--card-text-color', '#FFFFFF');
    r.style.setProperty('--card-light-text-color', '#8F8F8F');
    r.style.setProperty('--card-divider-color', '#3D3D41');
    r.style.setProperty('--skeleton-color', '#2C2C2C');
    r.style.setProperty('--dialog-background-color', '#2C2C2CCC');
    r.style.setProperty('--dialog-highlight-text-color', '#333333');
    r.style.setProperty('--dialog-highlight-text-border-color', '#555555');
    r.style.setProperty('--dialog-divider-color', '#5A5A5A');
    r.style.setProperty('--certificate-viewer-background', '#1A1A1A');
    r.style.setProperty('--expand-vertical-line-color', '#808080');
    r.style.setProperty('--text-box-background-color', '#1C1C1E');
    r.style.setProperty('--text-box-placeholder-background-color', '#98989F');
    r.style.setProperty('--bottomsheet-background-color', '#1C1C1E');
}

function setColorsWhenLightTheme() {
    let r = document.querySelector(':root');
    r.style.setProperty('--background-color', '#F2F2F7');
    r.style.setProperty('--text-color', '#000000');
    r.style.setProperty('--light-text-color', '#939399');
    r.style.setProperty('--card-color', '#FFFFFF');
    r.style.setProperty('--card-text-color', '#272727');
    r.style.setProperty('--card-light-text-color', '#8F8F8F');
    r.style.setProperty('--card-divider-color', '#D4D4D5');
    r.style.setProperty('--skeleton-color', '#E0E0E0');
    r.style.setProperty('--dialog-background-color', '#F1F1F1CC');
    r.style.setProperty('--dialog-highlight-text-color', '#E9E9E9');
    r.style.setProperty('--dialog-highlight-text-border-color', '#E1E1E8');
    r.style.setProperty('--dialog-divider-color', '#808080');
    r.style.setProperty('--certificate-viewer-background', '#D3D3D3');
    r.style.setProperty('--expand-vertical-line-color', '#D3D3D3');
    r.style.setProperty('--text-box-background-color', '#E3E3E8');
    r.style.setProperty('--text-box-placeholder-background-color', '#7F7F85');
    r.style.setProperty('--bottomsheet-background-color', '#F1F1F1');
}

function toggleTheme(onChangedToLightTheme = function () { }, onChangedToDarkTheme = function () { }) {
    if (isDarkTheme()) {
        saveTheme(DARK_THEME_OFF, function () {
            setColorsWhenLightTheme();
            setThemeIconWhenLightTheme();
            onChangedToLightTheme();
        })
    } else {
        saveTheme(DARK_THEME_ON, function () {
            setColorsWhenDarkTheme();
            setThemeIconWhenDarkTheme();
            onChangedToDarkTheme();
        })
    }
}

function setThemeIconWhenLightTheme() {
    try {
        const maskUrl = "../assets/icons/ic_dark_mode.svg";
        const themeIcon = getId('theme-icon');
        themeIcon.style.mask = `url('${maskUrl}') no-repeat center / contain`;
        themeIcon.style.webkitMask = `url('${maskUrl}') no-repeat center / contain`;
        getId("mobile-view-theme-text").innerHTML = "Switch to dark mode";
    } catch (error) { }
}

function setThemeIconWhenDarkTheme() {
    try {
        const maskUrl = "../assets/icons/ic_light_mode.svg";
        const themeIcon = getId('theme-icon');
        themeIcon.style.mask = `url('${maskUrl}') no-repeat center / contain`;
        themeIcon.style.webkitMask = `url('${maskUrl}') no-repeat center / contain`;
        getId("mobile-view-theme-text").innerHTML = "Switch to light mode";
    } catch (error) { }
}

function saveTheme(newThemeValue = DARK_THEME_OFF, onSuccess = function () { }) {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(DARK_THEME_LOCAL_STORAGE, newThemeValue);
        onSuccess()
    } else {
        alert("Sorry Dark Mode not supported.");
    }
}

function isDarkTheme() {
    if (typeof (Storage) !== "undefined") {
        let darkMode = localStorage.getItem(DARK_THEME_LOCAL_STORAGE)
        if (darkMode === null) {
            return false;
        } else {
            return darkMode === DARK_THEME_ON;
        }
    } else {
        return false;
    }
}

function setOnUnload(onUnload = function () { }) {
    window.addEventListener('beforeunload', () => {
        onUnload();
        controller.abort();
    });
}

function setAnimation() {
    const fadeInFloatWithScaleBlocks = document.querySelectorAll(".fade-in-float-with-scale");

    const fadeInFloatWithScaleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0) scale(1)";
            }
        });
    }, { threshold: 0.1 });

    fadeInFloatWithScaleBlocks.forEach(block => {
        fadeInFloatWithScaleObserver.observe(block);
    });

    setTimeout(() => {
        document.querySelectorAll(".fade-in").forEach(el => el.style.opacity = "1");
    }, 100);
}

function goBack(previousPageHtml) {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.replace(`${BASE_URL}/${previousPageHtml}`);
    }
}

function closeDrawerBeforeUnload() {
    try {
        let burgerClickElement = getId('burgerClick');
        burgerClickElement.checked = false
        let burgerDivElement = getId('bugger-id');
        if (burgerDivElement.classList.contains('toggle')) {
            burgerDivElement.classList.remove('toggle')
        }
    } catch (error) { }
    setHeaderTitle();
}

function openIA() {
    alert("IA feature to be implemented");
}

function openUniversalSearch() {
    window.location.href = 'universalsearch.html';
}

function handleEnterEquivalent(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        event.target.blur();
    }
}

function setShortcuts(backListner = function () { }) {
    document.addEventListener("keydown", event => {
        if (isGivenKeyPressedWithCtrl(event, 'U')) {
            event.preventDefault();
            openUniversalSearch();
            return;
        }
        if (isCtrlEnterPressed(event)) {
            event.preventDefault();
            toggleTheme();
            return;
        }
        if (isEscapeKey(event)) {
            backListner();
            event.preventDefault();
            return;
        }
        if (isGivenKeyPressedWithCtrl(event, 'I')) {
            event.preventDefault();
            openIA();
            return;
        }
    });
}



function isGivenKeyPressedWithCtrl(event, key) {
    const isMac = isMacPlatform();
    const cmdOrCtrl = isMac ? event.metaKey : event.ctrlKey;
    if (cmdOrCtrl && (event.key === key.toUpperCase() || event.key === key.toLowerCase())) {
        return true;
    }
    return false;
}

function isCtrlEnterPressed(event) {
    const isMac = isMacPlatform();
    const cmdOrCtrl = isMac ? event.metaKey : event.ctrlKey;
    if (cmdOrCtrl && event.key === "Enter") {
        return true;
    }
    return false;
}

function isEscapeKey(event) {
    const isMac = isMacPlatform();
    const cmdOrCtrl = isMac ? event.metaKey : event.ctrlKey;
    if (cmdOrCtrl && (event.key === 'Escape' || event.key === 'Esc')) {
        return true;
    }
    return false;
}

function isMacPlatform() {
    if (navigator.userAgentData) {
        return navigator.userAgentData.platform === 'macOS';
    }
    return navigator.userAgent.includes('Mac');
}

window.addEventListener('pageshow', function () {
    setTheme();
}, false)

function setHeaderTitle() {
    try {
        const screenWidth = window.innerWidth;
        if (screenWidth < 370) {
            getId('header-title').innerHTML = DEVELOPER_NAME;
            return;
        }
        let burgerClickElement = getId('burgerClick');
        if (burgerClickElement.checked) {
            getId('header-title').innerHTML = DEVELOPER_NAME;
            return;
        }
        if (screenWidth < 1334) {
            getId('header-title').innerHTML = headerTitle
            return;
        }
        getId('header-title').innerHTML = DEVELOPER_NAME
    } catch (error) { }
}

function setPreLoader() {
    const websiteIcons = [
        "ic_open_in_tab.svg",
        "ic_back.svg",
        "ic_close_clear.svg",
        "ic_certificate.svg",
        "ic_dark_mode.svg",
        "ic_filter_filled.svg",
        "ic_filter_outlined.svg",
        "ic_github.svg",
        "ic_info.svg",
        "ic_instant_assist.svg",
        "ic_light_mode.svg",
        "ic_open_in_tab.svg",
        "ic_roadmap.svg",
        "ic_search.svg",
        "ic_tag.svg"
    ];
    const websiteScripts = [
        "startusingfeature.js"
    ];
    const iconPromises = websiteIcons.map(icon => fetch(`${BASE_URL}/assets/icons/${icon}`).then(response => response.blob()));
    const scriptPromises = websiteScripts.map(scriptName => {
        try {
            const script = document.createElement("script");
            script.src = `${BASE_URL}/js/${scriptName}`;
            script.async = true;
            document.head.appendChild(script);
        } catch (error) { }
        return Promise.resolve();
    });
    Promise.all([...iconPromises, ...scriptPromises]).then(() => { });
}