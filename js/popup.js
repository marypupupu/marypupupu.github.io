setTimeout(function(){
    if (window.location.hash!=="#modal" && window.location.hash!=="#form") {
    document.getElementById("openpopup").click();
    } else {

    }
}, 30000);

document.querySelector('.popup').addEventListener('click', () => {
    document.querySelector(".popup").setAttribute('style', "display: none");
    document.querySelector(".close").click();
  });


