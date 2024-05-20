setTimeout(function(e){
if (sessionStorage.getItem('popup_was_pressed') !== "true") {
    if (window.location.hash!=="#modal" && window.location.hash!=="#form") {
        document.getElementById("openpopup").click();
        sessionStorage.setItem('popup_was_pressed', 'true');
    } 
}
}, 3000);

document.querySelector('.popup').addEventListener('click', (e) => {
    console.log(e.target.className);
    if (e.target.className !== "popup-body" && e.target.className !== "popup-content"&&  e.target.className !== "popup__header"
     && e.target.className !== "popup__href"
    ) {
    document.querySelector(".popup").setAttribute('style', "display: none");
    document.querySelector(".close").click();
    }
});
