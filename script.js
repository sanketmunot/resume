document.getElementById('name').innerHTML = PERSONAL_DATA.NAME

document.getElementById('summary').innerHTML = PERSONAL_DATA.SUMMARY

document.getElementById('education').innerHTML =
    document.getElementById('education').innerHTML +
    STUDY.map((item) => {
        return (
            `<tr>
            <td>`+ item.ROLE + `</td>
            <td>`+ item.ORGANISATION + `</td>
            <td>`+ item.SUMMARY + `</td>
            <td>`+ item.TIME + `</td>
        </tr>`
        )
    })

document.getElementById('projects').innerHTML =
    PROJECTS.map((item) => {
        return (
            `<tr>
            <th>`+ item.TITLE + `</th>
            <td>|</td>
            <td>`+ item.SUMMARY + `</td>
            
            </tr>`
        )
    })



    document.getElementById('work').innerHTML =
    document.getElementById('work').innerHTML +
    WORK.map((item) => {
        return (
            `<tr>
            <td>`+ item.TIME + `</td>
            <td>`+ item.ROLE + `</td>
            <td>`+ item.ORGANISATION + `</td>
            <td>`+ item.SUMMARY + `</td>
            
        </tr>`
        )
    })

    document.getElementById('tech').innerHTML =
    TECHNOLOGY.map((item) => {
        return (
            '<i class='+item+'></i>'
        )
    })


function toggle(){
    var element = document.body;
  element.classList.toggle("dark-mode");
}