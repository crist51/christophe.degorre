
import { projets } from "./projets.js"



const index = document.querySelector(".index")

// ctl page index
if (index != null) {
    console.log("nombre de projets");
    console.log(projets.length);
    
    const _card_mrvio_1 = document.querySelector("._card_mrvio_1")

    // ---------- function nombre alaeatoir
    function random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const randomProject = projets[random(projets.length, 0)];
    console.log("projet aléaoire");
    console.log(randomProject);


    // ---------- insert projet
    _card_mrvio_1.innerHTML = `
            <div class="_titleCard_mrvio_25" style="background-image: url(${randomProject.imageURL});">
                <h3 class="_title_mrvio_8">${randomProject.title}</h3>
            </div>
            <div class="pa3">
                <p class="_desc_mrvio_32 mt0 mb2">${randomProject.desicription}</p>
                <div class="_tags_mrvio_76 tag"></div>
               <a href="./pages/project.html?_id=${randomProject._id}" class="_link_mrvio_37" title="lien vers project: ${randomProject.title}">
               <span class="_linkInner_mrvio_59">voir</span></a> 
            </div>
                `;

    // ----------insert tag
    const tag = document.querySelector('._tags_mrvio_76')
    tag.textContent = "tag";

    // boucle sur tag
    for (let index = 0; index < randomProject.tag.length; index++) {

        let div = document.createElement("div");
        div.textContent = `${randomProject.tag[index]}`
        div.className = "_tag_mrvio_76"
        tag.appendChild(div);
        
    }
    
    // ---------------- title typewriter --------------- \\

    const title = document.querySelector(".desc");
    const txt = "Passionez de la digitalisation du monde moderne, je souhaite accompagner les association ainsi que les sociétées dans cette transition .";

    function typewriter(text, index) {
        if (index < text.length) {
            setTimeout(() => {
                title.innerHTML += `<span>${text[index]}</span>`;
                typewriter(text, index + 1);
            }, 50);
        }
    }
    setTimeout(() => {
        typewriter(txt, 0);
    }, 300);


}