const dot = document.querySelector('.dot');
const nav = document.querySelector('.nav-links');

dot.addEventListener('click',  () => {
    nav.classList.toggle('nav-action')
});


function send() {
    let num = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;


    let box = "Number: " + num + "<br/> Email: " + email + "<br/> Message: " + message;
    console.log(box)
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "bansalshanu704@gmail.com",
        Password: "A04ED1E975D3ED6252D139234D13D26E19D9",
        To: 'bansalshanu704@gmail.com',
        From: "bansalshanu704@gmail.com",
        Subject: "This is the subject",
        Body: box
    }).then(
        message => alert(message)
    );

}
