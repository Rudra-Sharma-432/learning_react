import { createRoot } from 'react-dom/client'
import reactLogo from './assets/react-logo.png';
import './index.css'


const mainDIV = document.getElementById('root')
const root = createRoot(mainDIV)


function CreateHeader() {
  return (
    <header>
      <img src={reactLogo} />
      <h1 className='webpage-name'>ReactFacts</h1>
    </header>
  )
}

function CreateMain() {
  return (
    <main>
      <h1 className='heading'>Fun Facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
        <li>easy to understand.</li>
        <li>not that hard for me.</li>
      </ul>
    </main>
  )
}



root.render(
  <div className='card'>
    <CreateHeader />
    <CreateMain />
  </div>
)
