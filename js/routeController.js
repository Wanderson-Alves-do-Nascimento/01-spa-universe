import * as theme from "./theme.js";
import * as elements from './elements.js';

export class Router {
  routes = {};
  add(location, path){
    this.routes[location] = path;
  };
  handle(event){
    event.preventDefault();
    const pathName = event.target.pathname;
    const route = this.routes[pathName] || this.routes['/not-found'];
    theme.bolder(event.target)
    theme.changeBG(this.routes[pathName]);
    fetch(route).then(data => data.text())
    .then(html => elements.app.innerHTML = html);
  }
}