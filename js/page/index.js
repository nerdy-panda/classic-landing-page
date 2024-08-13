import {bootHeroSlider} from "../Lib/functions.js";
import ActiveLinkSwitcher from "../Services/ActiveLinkSwitcher.js";
import ActiveLinkByScrolling from "../Services/ActiveLinkByScrolling.js";
import LinkSmoothScroll from "../Services/LinkSmoothScroll.js";

bootHeroSlider();
AOS.init({once: true });


const navLinks = window.document.body.querySelectorAll("nav>ul>li>a");
const sections = window.document.body.querySelectorAll(".section");

const activeLinkSwitcher = new ActiveLinkSwitcher(navLinks,"active");
activeLinkSwitcher.init();

const sectionData = [];
let counter = 0 ; 
for (const section of sections) {
    const object = {
        element : section , 
        link : navLinks[counter++] , 
        startAt : section.offsetTop , 
        endAt : section.offsetTop + section.offsetHeight 
    };
    sectionData.push(object);
}
const activeLinkByScrolling = new ActiveLinkByScrolling(sectionData,"active");
activeLinkByScrolling.init();



////////////
for (const navLink of navLinks) {
    const linkSmoothScroll = new LinkSmoothScroll(
        navLink,10,15,
        [
            ()=>{
                activeLinkByScrolling.disable = true ;
            }
        ],
        [
            ()=>{
                activeLinkByScrolling.disable = false ;
            }
        ],
    );
    linkSmoothScroll.init();
}


