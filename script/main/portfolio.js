
import { projets } from "./projets.js"

const portfolio = document.querySelector(".portfolio")

// ctl page index
if (portfolio != null) {


    for (let b = projets.length; 0 < b; b--) {
        const i = b-1
        console.log(projets[i]);
        
    //}

console.log(projets);
    



    //for (let i = 0; i < projets.length; i++) {
        // ---------- insert projet

        let _card_mrvio_1 = document.createElement("div");
        _card_mrvio_1.className= "_card_mrvio_1";
        portfolio.appendChild(_card_mrvio_1);

        let _titleCard_mrvio_25 = document.createElement("div");
        _titleCard_mrvio_25.className= "_titleCard_mrvio_25";
        _titleCard_mrvio_25.style=`background-image: url(${projets[i].imageURL});`;
        _card_mrvio_1.appendChild(_titleCard_mrvio_25)
        
        let _title_mrvio_8 = document.createElement("h2");
        _title_mrvio_8.className= "_title_mrvio_8";
        _title_mrvio_8.textContent = projets[i].title;
        _card_mrvio_1.appendChild(_titleCard_mrvio_25);
        
        let pa3 = document.createElement("div");
        pa3.className= "pa3";
        pa3.style= "padding:1.5rem"
        _card_mrvio_1.appendChild(pa3)

        // ---------- insert tag Array boucle

        let _tags_mrvio_76 = document.createElement("div");
        pa3.appendChild(_tags_mrvio_76);
        _tags_mrvio_76.textContent = "Tag :"

        for (let index = 0; index < projets[i].tag.length; index++) {

            let div = document.createElement("div");
            div.textContent = `${projets[i].tag[index]}`
            div.className = "_tag_mrvio_76"
            _tags_mrvio_76.appendChild(div);
            
        }

        let _desc_mrvio_32 = document.createElement("p");
        _desc_mrvio_32.className= "_desc_mrvio_32 mt0 mb2";
        _desc_mrvio_32.textContent = projets[i].desicription;
        pa3.appendChild(_desc_mrvio_32);

        let _link_mrvio_37 = document.createElement("a");
        _link_mrvio_37.href = "./project.html?_id=" + projets[i]._id;
        _link_mrvio_37.title = `"lien vers project: ${projets[i].title}"`;
        _link_mrvio_37.className= "_link_mrvio_37";
        pa3.appendChild(_link_mrvio_37);


        let _linkInner_mrvio_59 = document.createElement("span");
        _linkInner_mrvio_59.className= "_linkInner_mrvio_59";
        _linkInner_mrvio_59.textContent = projets[i].title
        _link_mrvio_37.appendChild(_linkInner_mrvio_59);
        



    }

}