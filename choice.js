import choices from './choice.json'

export function run (element, position = 0) {
  element.innerHTML = "";

  let choice = choices[position];

  let p = document.createElement("p");
  p.innerText = choice.description;
  element.appendChild(p);

  choice.options.forEach((option) =>{
    let button = document.createElement("button");
    button.innerText = option.text;
    button.addEventListener("click", () => {
      run(element, option.target)
    })
    element.appendChild(button);
  })

}