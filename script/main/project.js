import { projets } from "./projets.js"

const oneProject = document.querySelector(".oneProject")

// ctl page
if (oneProject != null) {

    // ---------- recuperation id
    const str = window.location.href
    const url = new URL(str);
    const id = url.searchParams.get("_id")

    if (id == null) {
        window.location = "../../index.html"
    }

    // ---------- insert project

    const hero = document.querySelector(".hero");
    hero.style = `background-image: url(${projets[id].imageURL});`;

    let title = document.createElement("h1");
    title.className = "title astro-YJY46LTV";
    title.textContent = projets[id].title;
    hero.appendChild(title)

    // ---------- insert tag
    const tag = document.querySelector('.tag')
    tag.textContent = "Tag :";

    for (let index = 0; index < projets[id].tag.length; index++) {

        let div = document.createElement("div");
        div.textContent = `${projets[id].tag[index]}`
        div.className = "_tag_mrvio_76"
        tag.appendChild(div);

    }

    const h3 = document.querySelector("h3");
    h3.textContent = projets[id].desicription;
    console.log(h3);
    console.log(projets[id].desicription);

    const content = document.querySelector(".content")
    let article = document.createElement("article");
    article.innerHTML = `${projets[id].article}`
    content.appendChild(article);

    // ---------- insert tag Array objectif

    const objectifList = document.querySelector('.objectifList')

    for (let index = 0; index < projets[id].objectif.length; index++) {

        let li = document.createElement("li");
        li.textContent = `${projets[id].objectif[index]}`
        // _tag_mrvio_76.className = "_tag_mrvio_76"
        objectifList.appendChild(li);

    }

    // ---------- insert lien 'si un lien existe en reponce boolein

    const lienProject = document.querySelector(".lienProject")

    if (!!projets[id].gitHub || !!projets[id].site) {
        lienProject.textContent = "lien :"

        if (!!projets[id].gitHub.length) {

            let a1 = document.createElement("a");
            a1.textContent = `lien vers le site gitHub`
            a1.href = projets[id].gitHub
            a1.target = "blank"
            lienProject.appendChild(a1);
        }

        if (!!projets[id].site) {

            let a2 = document.createElement("a");
            a2.textContent = `lien vers le site internet`
            a2.href = projets[id].site
            a2.target = "blank"
            lienProject.appendChild(a2);
        }
    }
}

