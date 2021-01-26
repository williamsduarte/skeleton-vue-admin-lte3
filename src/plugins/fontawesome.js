import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
import { faComments } from "@fortawesome/free-solid-svg-icons/faComments";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faBell, faComments, faThLarge);

Vue.component("font-awesome-icon", FontAwesomeIcon);
