import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './main_styling.css'
import App from './App.jsx'

import Form from './components/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <section>
		{/* descriptions and title container */}
		<div className="column" id="title">
			<div id="description">
				<h1>Learn to code by watching others</h1>
				<p>
					See how experienced developers solve problems in real-time. Watching 
					scripted tutorials is great, but understanding how developers think 
					is invaluable.
				</p>
			</div>
		</div>
		{/* <!--form container--> */}
		<div className="column">
			<div id="form-column">
				<div id="trial-offer" className="corners whitetext">
					<p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
				</div>
				<Form />
			</div>
		</div>
	</section>   
  
  <footer>
    <p className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Philip Davide - phil0452@yahoo.com</a>.
    </p>
  </footer>
  </StrictMode>,
)
