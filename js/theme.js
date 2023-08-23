import * as elements from './elements.js'

export function bolder(element){
  elements.links.forEach(link => link.classList.remove('bold'))
  element.classList.add('bold');
}

export function changeBG(targetTheme){
  const currentTheme = elements.body.classList.value;
  targetTheme = String(targetTheme).split('/')[2].replace('.html', '')
  elements.body.classList.remove(currentTheme);
  elements.body.classList.add(targetTheme);
}