//OPEN MENU IN PHONE
const button = document.getElementById('menu');

button.addEventListener('click', function () {
    const menu = document.getElementById('navbar__menu');
    menu.classList.toggle('isopen')

    if (menu.classList.contains("isopen")) {
        console.log('contain')

        document.querySelector("html").style.overflowY = "hidden";
        document.querySelector(".aboutme").style.overflowY = "scroll";

    } else {
        document.querySelector("html").style.overflowY = "scroll";
        document.querySelector(".aboutme").style.overflowY = "hidden";
    }
})

//NO SCROLL ON COMPUTER
const buttonAboutMe = document.getElementById('aboutme');
buttonAboutMe.addEventListener('click', function () {
    document.querySelector("html").style.overflowY = "hidden";
})


//CHANGE URL LANG
const select = document.querySelector("select")


select.addEventListener("change", changeURLlang)

function changeURLlang() {
    let lang = select.value;

    location.href = `${window.location.pathname}#${lang}`;

    location.reload();
}

// CHANGE LANG
const allLang = ["en", "he", "ru"]

function changelang() {
    let hash = window.location.hash;
    hash = hash.substr(1) //remove the # symbol
    console.log(hash)
    if (!allLang.includes(hash)) {
        location.href = `${window.location.pathname}#en`;
    }

    if (hash == "he") {
        const body = document.querySelector("body")
        body.setAttribute("dir", "rtl")
        body.style.fontFamily = "font-family: 'M PLUS Rounded 1c', sans-serif;"
    }

    select.value = hash;

    //-----TRANSLATE ALL-----//
    for (let key in langArr) {
        let elem = document.querySelector(`.lng-${key}`)
        let trs = langArr[key][hash]

        if (elem && trs) {
            elem.innerHTML = trs;
        }
    }

    //------VISIT BTN------//
    const visitBtn = document.querySelectorAll(".lng-visit")
    for (const visit of visitBtn) {
        if (elem) {
            visit.innerHTML = langArr["visit"][hash]
        }
    }

    //-----SKILLS BTN-------//
    const skills = document.querySelectorAll(".lng-skill")
    for (const skill of skills) {
        if (elem) {
            skill.innerHTML = langArr["skill"][hash]
        }
    }

    //----CONTACTS----//
    const contact = document.querySelectorAll(".lng-contact")
    console.log(contact)
    for (const cont of contact) {
        if (elem) {
            cont.innerHTML = langArr["contact"][hash]
        }
    }

    //TITLE
    document.querySelector("title").innerHTML = langArr["title"][hash];
}

changelang()