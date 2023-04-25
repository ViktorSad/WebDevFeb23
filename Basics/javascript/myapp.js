const welcomeMg = document.getElementById("welcome");
console.log(welcomeMg);
welcomeMg.innerText = "Vikttor was here";
// welcomeMg.remove();
// WelcomeMsg.innerText="Viktor was here!" // update content
// WelcomeMsg.remove() // remove
// const newMessage = document.createElement('h1');
// newMessage.innerText="This is cool";
// document.body.appendChild(newMessage);

function HandleClick(e) {
  console.log(e.target);
  console.log(e.target.getAttribute("data-drink"));
  console.log("hello world this is handling click event");
}

document.write("I turn coffee into code");
var result;

result = window;

result = window.btoa("hello world"); // to encode strings into base64 encryption
result = window.atob("aGVsbG8gd29ybGQ="); // to decrypt encoded string into plaintext
window.document.title = "This is intro tutorial";
// window.document.body.innerHTML="lllll"

// result = window.confirm('Do you agree?')
result = window;
result = window.document.head;
result = window.innerWidth;
result = window.innerHeight;
result = window.scrollY;
//result = window.prompt('what is your name?') // retrieve user input in javascript
result = window;
result = window.location;
// result = window.location.reload()// refresh the page method
console.log(result);
