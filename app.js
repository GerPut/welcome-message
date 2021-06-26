const button = document.querySelector(".button")
const message = document.querySelector(".message")


button.addEventListener("click", showMessage)


function showMessage() {
    const date = new Date();
    let current = date.getHours();
    let boxmsg;

    if (current > 17 && current <= 23) {
        boxmsg = "Good Evening"
        document.body.style.backgroundColor = "black"
    } else if (current > 12 && current <= 16) {
        boxmsg = "Good Afternoon"
        document.body.backgroundColor = "powderblue"
    } else if (current > 0 && current <= 11) {
        boxmsg = "Good Morning"
        document.body.baackgroundColor = "yellow"
    } else {
        boxmsg = "Something is not working correctly"
    }

    message.innerHTML = `<h1>${boxmsg}</h1>`


}