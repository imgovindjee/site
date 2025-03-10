$(document).ready(() => {
    initNav()
    let status = (getDarkModeStatus() === "ON" ? true : false)
    document.getElementById("darkModeSwitch").src = status ? "assets/images/nav/on.png" : "assets/images/nav/off.png"
    darkMode(status)
    document.getElementById("filtersDiv").innerHTML = isMobile() ? `<div style="align-items: center!important;display: flex;flex: 1;margin-bottom: 10px;margin-right: 15px;"><input class="form-control mr-sm-2 my_fade_in" type="search" placeholder="Search Apps..." style="height: 35px" aria-label="Search" onkeyup="onKeyPress(this)" onblur="blurListener()" onfocus="focusListener()" id="searchBox"></div><div style="display: flex"><div class="dropdown  my_fade_in"><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Apps</button><div class="dropdown-menu my_text" aria-labelledby="dropdownMenu2" style="background-color: var(--card_bg)" id="techsFilterDiv"></div></div><div class="dropdown  my_fade_in" style="margin-left: 10px"><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories</button><div class="dropdown-menu my_text" aria-labelledby="dropdownMenu3" style="background-color: var(--card_bg)"><button class="dropdown-item my_text" type="button" onclick="filterByType('All Categories')">All Categories</button><button class="dropdown-item my_text" type="button" onclick="filterByType('Demo Project')">Demo Project</button><button class="dropdown-item my_text" type="button" onclick="filterByType('Live Project')">Live Project</button><button class="dropdown-item my_text" type="button" onclick="filterByType('Mini Project')">Mini Project</button></div></div></div>` : `<div style="display: flex"><div class="dropdown  my_fade_in"><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Apps</button><div class="dropdown-menu my_text" aria-labelledby="dropdownMenu2" style="background-color: var(--card_bg)" id="techsFilterDiv"></div></div><div class="dropdown  my_fade_in" style="margin-left: 10px"><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories</button><div class="dropdown-menu my_text" aria-labelledby="dropdownMenu3" style="background-color: var(--card_bg)"><button class="dropdown-item my_text" type="button" onclick="filterByType('All Categories')">All Categories</button><button class="dropdown-item my_text" type="button" onclick="filterByType('Demo Project')">Demo Project</button><button class="dropdown-item my_text" type="button" onclick="filterByType('Live Project')">Live Project</button><button class="dropdown-item my_text" type="button" onclick="filterByType('Mini Project')">Mini Project</button></div></div><div style="align-items: center!important;display: flex;flex: 1;padding-left: 10px;padding-right: 10px;"><input class="form-control mr-sm-2 my_fade_in" type="search" placeholder="Search Apps..." style="height: 35px;" aria-label="Search" onkeyup="onKeyPress(this)" onblur="blurListener()" onfocus="focusListener()" id="searchBox"></div></div>`
    let q = document.getElementById('searchBox').value.trim()
    if (q === "") {
        setApps(apps)
    } else {
        document.getElementById('dropdownMenu2').innerHTML = "Custom Search"
        document.getElementById('dropdownMenu3').innerHTML = "Custom Search"
        setApps(apps.filter(item => item.appName.toUpperCase().includes(q.toUpperCase())))
    }

    setTimeout(() => {
        bs4pop.notice('Use dropdown to filter', {
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

    let techs = []
    apps.forEach(a => {
        if (!(techs.some(e => e.toLowerCase() == a.tech.toLowerCase().trim()))) {
            techs.push(a.tech.trim())
        }
    })
    techs.sort(Intl.Collator().compare)
    let techsInnerHTML = `<button class="dropdown-item my_text" type="button" onclick="filter('All Apps')">All Apps </button>`
    techs.forEach(t => techsInnerHTML += `<button class="dropdown-item my_text" type="button" onclick="filter('${t}')">${t} </button>`)
    document.getElementById("techsFilterDiv").innerHTML = techsInnerHTML
    let fullHeight = window.innerHeight
    let fixedPortionHeight = document.getElementById("fixedElementsDiv").clientHeight
    let scrollablePortionHeight = fullHeight - fixedPortionHeight
    document.getElementById("scrollableDiv").style.height = `${scrollablePortionHeight}px`
})


const onKeyPress = id => {
    let query = id.value.trim()
    if (query === "") {
        id.value = ""
        filter('All Apps')
        filterByType('All Categories')
    } else {
        document.getElementById('dropdownMenu2').innerHTML = "Custom Search"
        document.getElementById('dropdownMenu3').innerHTML = "Custom Search"
        let fuse = new Fuse(apps, {
            keys: ['appName'],
            threshold,
            useExtendedSearch,
        })
        let resultList = fuse.search(query)
        let localAppsList = resultList.map(si => si.item)
        setApps(localAppsList)
    }
}


const setApps = appsList => {
    let text = ""
    appsList.forEach((item) => {
        text += `<div class="col-lg-4" style="padding-left: 10px;padding-right: 10px;margin-top:10px;margin-bottom:5px"><div class="card"><img src="assets/images/apps/${item.media}" alt="Shree Govind Jee" loading="lazy" style="border-top-right-radius:5px;border-top-left-radius:5px;" width="100%" height="auto" /><h4 style="margin-left: 15px;margin-right: 15px;margin-top: 20px;" class="my_text">${item.appName}</h4><div><div class="badge badge-pill badge-${item.project_type === 'Mini Project' ? 'info' : (item.project_type === 'Demo Project' ? 'primary' : 'success')}" style="width:fit-content;height:fit-content;margin-bottom:5px;margin-top:5px;display:inline-flex;align-items:center;padding-left:12px;padding-right:12px;margin-left:15px;margin-right:5px">${item.project_type}</div><div class="badge badge-pill badge-warning" style="width:fit-content;height:fit-content;margin-bottom:5px;margin-top:5px;display:inline-flex;align-items:center;padding-left:12px;padding-right:12px;">${item.tech}</div></div><div style="margin-left: 15px;display: inline-block;margin-top: 8px;margin-bottom: 20px;"><button class="btn btn-sm my_button" onclick="window.location.href = 'pages/apps/${item.redirect_url}'">Know More</button><button class="btn my_button btn-sm" style="margin-left: 10px" onclick="window.location.href = '${item.app_url}'">${item.button_text}</button></div></div></div>`
    })
    document.getElementById('myApps').innerHTML = text
}


const filter = value => {
    if (document.getElementById('searchBox').value.trim() != "") {
        document.getElementById('dropdownMenu3').innerHTML = "All Categories"
    }

    let filtertedList = null
    if (value === "All Apps") {
        filtertedList = [...apps]
    } else {
        filtertedList = apps.filter(item => item.tech === value)
    }

    let projectType = document.getElementById('dropdownMenu3').innerHTML.trim()
    if (projectType.trim() === "All Categories") {
        setApps(filtertedList)
    } else {
        setApps(filtertedList.filter(item => item.project_type === projectType))
    }

    console.log(filtertedList)
    document.getElementById('dropdownMenu2').innerHTML = value + ' '
    document.getElementById('searchBox').value = ""
}



const filterByType = value => {
    if (document.getElementById('searchBox').value.trim() != "") {
        document.getElementById('dropdownMenu2').innerHTML = "All Apps"
    }

    let filtertedList = null
    if (value === "All Categories") {
        filtertedList = apps
    } else {
        filtertedList = apps.filter(item => item.project_type === value)
    }

    let Tech = document.getElementById('dropdownMenu2').innerHTML.trim()
    if (Tech.trim() === "All Apps") {
        setApps(filtertedList)
    } else {
        setApps(filtertedList.filter(item => item.tech === Tech))
    }
    document.getElementById('dropdownMenu3').innerHTML = value + ' '
    document.getElementById('searchBox').value = ""
}