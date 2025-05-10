import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <h1>My projects</h1>
  <div>
    <a href="post.html" target="_blank" class="logo"> 
      POST
    </a>
  </div>
  <br/>
    <div>
    <a href="eventos.html" target="_blank" class="logo"> 
      EVENTOS
    </a>
  </div>
    <br/>
     <div>
    <a href="eventCorreo.html" target="_blank" class="logo"> 
      EVENTO CORREO
    </a>
  </div>
`

setupCounter(document.querySelector('#counter'))
