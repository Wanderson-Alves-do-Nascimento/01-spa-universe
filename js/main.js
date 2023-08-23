import {Router} from './routeController.js';
import * as elements from './elements.js';


const route = new Router();

route.add("/", "/pages/home.html");
route.add("/universe", "/pages/universe.html");
route.add("/explore", "/pages/explore.html");
route.add("not-found", "/pages/not-found.html");

elements.links.forEach((link)=>{
  link.addEventListener('click', event => route.handle(event))
});