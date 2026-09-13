$(document).ready(() => {
    initNav()
    let status = (getDarkModeStatus() === "ON" ? true : false)
    document.getElementById("darkModeSwitch").src = status ? "assets/images/nav/on.png" : "assets/images/nav/off.png"
    darkMode(status)
    document.getElementById("filtersDiv").innerHTML = `<div class="dropdown my_fade_in"><button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Repositories</button><div class="dropdown-menu" aria-labelledby="dropdownMenu2" id="optionsDiv"></div></div><div style="flex:1;"><input class="form-control my_fade_in" type="search" placeholder="Search GitHub Repositories..." aria-label="Search" onkeyup="onKeyPress(this)" onblur="blurListener()" onfocus="focusListener()" id="searchBox"></div>`
    darkMode(status) // re-apply after filtersDiv is rendered so search input gets correct styles
    let q = document.getElementById('searchBox').value.trim()
    if (q === "") {
        setRepos(repos)
    } else {
        document.getElementById('dropdownMenu2').innerHTML = "Custom Search"
        setRepos(repos.filter(item => item.repoName.toUpperCase().includes(q.toUpperCase())))
    }
    darkMode(status)
    // let m = window.innerWidth < 992 ? "0px" : "8px"
    // document.getElementById("SearchBoxItem").style.marginLeft = m
    // document.getElementById("SearchBoxItem").style.marginRight = m
    setTimeout(() => {
        bs4pop.notice('Note these repositories are excluding Apps', {
            type: 'warning',
            position: 'bottomright',
            appendType: 'append',
            closeBtn: 'true',
            className: ''
        })
        setTimeout(() => {
            bs4pop.notice('Tap or Click to go to repository', {
                type: status ? 'dark' : 'primary',
                position: 'bottomright',
                appendType: 'append',
                closeBtn: 'true',
                className: ''
            })
        }, 5000)
        setTimeout(() => {
            bs4pop.notice('Use dropdown to filter', {
                type: status ? 'dark' : 'primary',
                position: 'bottomright',
                appendType: 'append',
                closeBtn: 'true',
                className: ''
            })
        }, 12000)
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


    let techs = []
    repos.forEach(r => {
        if (!(techs.some(e => e.toLowerCase() == r.tech.toLowerCase()))) {
            techs.push(r.tech.trim())
        }
    })

    
    techs.sort(Intl.Collator().compare)
    let options = `<button class="dropdown-item my_text" type="button" onclick="filter('All Repositories')">All
            Repositories</button>`
    techs.forEach(t => options += `<button class="dropdown-item my_text" type="button" onclick="filter('${t}')">${t}</button>`)
    document.getElementById("optionsDiv").innerHTML = options
    setKeyListener()
    cleanUpBeforeClosingSearch()
    fillHelpInfo()
    let fullHeight = window.innerHeight
    let fixedPortionHeight = document.getElementById("fixedElementsDiv").clientHeight
    let scrollablePortionHeight = fullHeight - fixedPortionHeight
    document.getElementById("myRepos").style.height = `${scrollablePortionHeight}px`
})


const onKeyPress = id => {
    let query = id.value.trim()
    if (query === "") {
        id.value = ""
        filter('All Repositories')
    } else {
        document.getElementById('dropdownMenu2').innerHTML = "Custom Search"
        let localReposList = repos
        if (query.trim() != "") {
            let fuse = new Fuse(repos, {
                keys: ['repoName'],
                threshold,
                useExtendedSearch,
            })
            let resultList = fuse.search(query)
            localReposList = resultList.map(si => si.item)
        }
        setRepos(localReposList)
    }
}


const setRepos = repoList => {
    let text = ""
    let darkModeStatus = (getDarkModeStatus() === "ON" ? true : false)
    const githubIcon = `assets/images/icons/${darkModeStatus ? 'github_white_icon.png' : 'github_icon.png'}`
    repoList.forEach((item) => {
        text += `<div class="repoItem" onclick="window.location.href = '${item.repoUrl}'">
          <div class="repo-icon"><img class="mgithub-icon" src="${githubIcon}" /></div>
          <div class="repo-info">
            <p class="repo-name">${item.repoName}</p>
            <span class="repo-tech">${item.tech}</span>
          </div>
          <svg class="repo-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><polyline points="12 5 19 12 12 19"/></svg>
        </div>`
    })
    document.getElementById('myRepos').innerHTML = text
}


const filter = value => {
    if (value === "All Repositories") {
        setRepos(repos)
    } else {
        setRepos(repos.filter(item => item.tech === value))
    }
    document.getElementById('dropdownMenu2').innerHTML = value + ' '
    document.getElementById('searchBox').value = ""
}