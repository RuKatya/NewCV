const button = document.getElementById('menu');

        button.addEventListener('click', function (event) {
            event.preventDefault();

            const menu = document.getElementById('navbar__menu');
            menu.classList.toggle('isopen')
        })

const select = document.querySelector("select")
const allLang = ["en","he","ru"]
 
select.addEventListener("change", changeURLlang)

function changeURLlang() {
    let lang = select.value;

    location.href = `${window.location.pathname}#${lang}`;

    location.reload();
}

function changelang () {
    let hash = window.location.hash;
    hash = hash.substr(1) //remove the # symbole
    console.log(hash)
    if(!allLang.includes(hash)) {
        location.href = `${window.location.pathname}#en`;
        location.reload();
    }

    select.value = hash;
}

changelang()