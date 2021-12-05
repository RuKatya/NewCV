const button = document.getElementById('menu');

button.addEventListener('click', function (event) {
    event.preventDefault();

    const menu = document.getElementById('navbar__menu');
    menu.classList.toggle('isopen')
})

//CHANGE LANG
const select = document.querySelector("select")
const allLang = ["en", "he", "ru"]

select.addEventListener("change", changeURLlang)

function changeURLlang() {
    let lang = select.value;

    location.href = `${window.location.pathname}#${lang}`;

    location.reload();
}

function changelang() {
    let hash = window.location.hash;
    hash = hash.substr(1) //remove the # symbole
    console.log(hash)
    if (!allLang.includes(hash)) {
        location.href = `${window.location.pathname}#en`;
        // location.reload();
    }

    if (hash == "he") {
        const he = document.querySelector("body")
        he.setAttribute("dir", "rtl")
    }

    select.value = hash;

    // TITLE
    document.querySelector("title").innerHTML = langArr["title"][hash];

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
        visit.innerHTML = langArr["visit"][hash]
    }

    //-----SKILLS BTN-------//
    const skills = document.querySelectorAll(".lng-skill")
    for (const skill of skills) {
        skill.innerHTML = langArr["skill"][hash]
    }

    //----CONTACTS----//
    const contact = document.querySelectorAll(".lng-contact")
    console.log(contact)
    for (const cont of contact) {
        cont.innerHTML = langArr["contact"][hash]
    }

    // //------HOBBIES----//
    // const hobbies = document.querySelector(".tooltip")
    // console.log(hobbies)
    // hobbies.innerHTML = `<div class="tooltip lng-hoobies">${langArr["hoobies"][hash]} 
    //                         <span class="tooltiptext">
    //                             <ul>
    //                                 <li class="lang-list-item1">${langArr["lang-list-item1"][hash]}</li>
    //                                 <li class="lang-list-item2">${langArr["lang-list-item2"][hash]}</li>
    //                                 <li class="lang-list-item3">${langArr["lang-list-item3"][hash]}</li>
    //                                 <li class="lang-list-item4">${langArr["lang-list-item4"][hash]}</li>
    //                                 <li class="lang-list-item5">${langArr["lang-list-item5"][hash]}</li>
    //                                 <li class="lang-list-item6">${langArr["lang-list-item6"][hash]}</li>
    //                             </ul>
    //                         </span>
    //                     </div>`
}

changelang()