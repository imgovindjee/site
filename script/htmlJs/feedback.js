let rate = 5
function Star(starValue) {
    for (let i = 1; i <= 5; i++) {
        if (i <= starValue) {
            document.getElementById("S" + i).className = "fa fa-star mystar checked"
        } else {
            document.getElementById("S" + i).className = "fa fa-star mystar unchecked"
        }
    }
    rate = starValue
}


$('#feedback').submit((e) => {
    var field1 = $("#FN").val()
    var field2 = $("#EC").val()
    var field3 = $("#Profile").val()
    var field4 = $("#EDU").val()
    var field5 = $("#Work").val()
    var field6 = $("#Skill").val()
    var field7 = $("#App").val()
    var field8 = $("#Git").val()
    var field9 = $("#Web").val()
    e.preventDefault()

    $.ajax({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSePrhEgHmkQt9VMIAd_nSQnSNKREzPL2jmBlmYCOMq-_UONew/formResponse',
        data: {
            "entry.808102757": field1,
            "entry.154392152": field2,
            "entry.1748589774": field3,
            "entry.247154678": field4,
            "entry.1405795768": field5,
            "entry.321198704": field6,
            "entry.728597847": field7,
            "entry.1808698425": field8,
            "entry.2130691235": field9,
            "entry.2129668705": rate
        },
        type: 'POST',
        dataType: "json",
        statusCode: {
            0: (data) => {

                bs4pop.notice("Feedback submitted. Thank you!", {
                    type: 'success',
                    position: 'bottomright',
                    appendType: 'append',
                    closeBtn: 'true',
                    className: ''
                })
                setTimeout(() => {
                    re()
                }, 3000);
            },
            200: (data) => {

                bs4pop.notice("Feedback submitted. Thank you!", {
                    type: 'success',
                    position: 'bottomright',
                    appendType: 'append',
                    closeBtn: 'true',
                    className: ''
                })
                setTimeout(() => {
                    re()
                }, 3000)
            },
            403: (data) => {
                bs4pop.notice("Error in submitting the feedback. Please try again later.", {
                    type: 'danger',
                    position: 'bottomright',
                    appendType: 'append',
                    closeBtn: 'true',
                    className: ''
                })
                setTimeout(() => {
                    re()
                }, 3000)
            }
        }
    })
})