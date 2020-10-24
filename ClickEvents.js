//const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

const foo = document.getElementById("Foo");
const bar = document.getElementById("Bar");
const foobar = document.getElementById("FooBar");

foo.addEventListener('click', function() {
    const h3Tag = document.createElement('h3');
    h3Tag.textContent = "Foo";
    body.appendChild(h3Tag);
})

bar.addEventListener('click', function() {
    const h3Tag = document.createElement('h3');
    h3Tag.textContent = "Bar";
    body.appendChild(h3Tag);
})

foobar.addEventListener('click', function() {
    const h2Tag = document.createElement('h2');
    h2Tag.textContent = "FooBar";
    body.appendChild(h2Tag);
})

//for(let i = 0; i < buttons.length; i++) {
//    buttons[i].addEventListener('click', function(event) {
//        console.log(event.target.value);
//    })
//}

//buttons.addEventListener('click', function(event) {
//    console.log(event.target.value);
//});


//function responseToClick() {
//    const pTag = document.createElement('p');
//    pTag.textContent = "Get This stuff Working, Please";
//    body.appendChild(pTag);
//}