import "./style.css";
import "./contact-styles.css";
import "./menu-styles.css";
import "./font-family.css";

import {initialPage} from "./home.js"
import {createRecipes} from "./menu.js";
import {contactUs} from "./contact.js";

const content = document.getElementById("content");
const navBar = document.querySelector(".navbar");

initialPage(content);

function selectPage(e) {
    content.innerHTML = "";
    if(e.target.tagName === "BUTTON") {
        const buttonId = e.target.id;
        switch(buttonId) {
            case "home-btn":
                initialPage(content);
                break;
            case "menu-btn":
                createRecipes(content);
                break;
            case "contact-btn":
                contactUs(content);
                break;
        }
    }
}


navBar.addEventListener("click", selectPage);




