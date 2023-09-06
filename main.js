import './style.css'
import {choice} from './choice.js'


document.querySelector('#app').innerHTML = `
          Name: Seth
          Occupation: Healer
          Address: Crystal Depths, Aqualoria
          Water Crystal Number: +1-789-555-9917
          Email: seth.waterhealer@aqualoria.com

          This is a site for my cv so people know who I am

          I am Seth, a dedicated and compassionate water slime Healer with a profound connection to the element of water. In the enchanting realm of Aqualoria, I have honed my unique magical abilities to bring healing and solace to those in need. With a deep understanding of aquatic magic and a commitment to the well-being of all, I have established myself as a trusted and skilled healer in our mystical world.

          Education, Work Experience, Skills, Interests, Project, About Me
          
          <button id="education">Education</button>
          <button id="work experience">Work Experience</button>
          <p id="education"></p>
          `

choice(document.querySelector('#app'))
