import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBoltLightning, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import SmoothScroll from 'smooth-scroll';

library.add(faBoltLightning);
library.add(faLaptopCode);
var scroll = new SmoothScroll('a[href*="#"]');



createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
