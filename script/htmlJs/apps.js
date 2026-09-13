$(document).ready(() => {
    initNav()
    let status = (getDarkModeStatus() === "ON" ? true : false)
    document.getElementById("darkModeSwitch").src = status ? "assets/images/nav/on.png" : "assets/images/nav/off.png"
    darkMode(status)
    document.getElementById("filtersDiv").innerHTML = `<div class="dropdown my_fade_in"><button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Apps</button><div class="dropdown-menu" aria-labelledby="dropdownMenu2" id="techsFilterDiv"></div></div><div class="dropdown my_fade_in"><button class="btn dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories</button><div class="dropdown-menu" aria-labelledby="dropdownMenu3"><button class="dropdown-item" type="button" onclick="filterByType('All Categories')">All Categories</button><button class="dropdown-item" type="button" onclick="filterByType('Demo Project')">Demo Project</button><button class="dropdown-item" type="button" onclick="filterByType('Live Project')">Live Project</button><button class="dropdown-item" type="button" onclick="filterByType('Mini Project')">Mini Project</button></div></div><div style="flex:1;"><input class="form-control my_fade_in" type="search" placeholder="Search Apps..." aria-label="Search" onkeyup="onKeyPress(this)" onblur="blurListener()" onfocus="focusListener()" id="searchBox"></div>`
    darkMode(status) // re-apply after filtersDiv rendered so search input gets correct styles
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


const typeTagStyle = {
    'Live Project':  'background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.35);color:#10B981',
    'Demo Project':  'background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.35);color:#818CF8',
    'Mini Project':  'background:rgba(6,182,212,0.15);border:1px solid rgba(6,182,212,0.35);color:#67E8F9'
}

const setApps = appsList => {
    let text = `<div class="apps-grid">`
    appsList.forEach((item) => {
        const tagStyle = typeTagStyle[item.project_type] || typeTagStyle['Demo Project']
        text += `<div class="app-card">
          <div class="app-card-media">
            <img src="assets/images/apps/${item.media}" alt="${item.appName}" loading="lazy" />
          </div>
          <div class="app-card-body">
            <h4 class="app-card-title">${item.appName}</h4>
            <div class="app-card-tags">
              <span class="app-tag" style="${tagStyle}">${item.project_type}</span>
              <span class="app-tag app-tag-tech">${item.tech}</span>
            </div>
            <div class="app-card-actions">
              <button class="btn-app-primary" onclick="event.stopPropagation();window.location.href='pages/${item.redirect_url}'">Know More</button>
              <button class="btn-app-ghost" onclick="event.stopPropagation();window.location.href='${item.app_url}'">${item.button_text}</button>
            </div>
          </div>
        </div>`
    })
    text += `</div>`
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