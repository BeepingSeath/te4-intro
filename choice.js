import choices from './choice.json'

export function run (element, position = 0) {
  element.innerHTML = "";

  let choice = choices[position]

  const img = document.createElement("img");
  img.src = "./SlimeHealer.png"
  element.appendChild(img);
  
  let buttonlist = document.createElement("buttonlist");

  choice.options.forEach((option) =>{
    let button = document.createElement("button");
    button.innerText = option.text;
    button.addEventListener("click", () => {
      run(element, option.target)
    })
    buttonlist.appendChild(button);
  })
  element.appendChild(buttonlist);

  let p = document.createElement("p");
  p.innerText = choice.description;
  element.appendChild(p);

}