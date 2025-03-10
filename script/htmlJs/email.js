$(document).ready(() => {
    let status = (getDarkModeStatus() === "ON" ? true : false)
    darkMode(status)
})

const copyToClipBoard = txt => {
    if (!navigator.clipboard) {
        bs4pop.notice('Unable to copy to clipboard', {
            type: 'danger',
            position: 'bottomright',
            appendType: 'append',
            closeBtn: 'true',
            className: ''
        })
    } else {
        navigator.clipboard.writeText(txt)
            .then(() => {
                bs4pop.notice('Copied to Clipboard', {
                    type: 'success',
                    position: 'bottomright',
                    appendType: 'append',
                    closeBtn: 'true',
                    className: ''
                })
            })
            .catch(err => {
                bs4pop.notice('Unable to copy to clipboard', {
                    type: 'danger',
                    position: 'bottomright',
                    appendType: 'append',
                    closeBtn: 'true',
                    className: ''
                })
            })
    }
}