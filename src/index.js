import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import './index.css'
import App from './components/App'

ReactDOM.render(
	<Provider store={store}>
		<div className="app">
			<App />
		</div>
	</Provider>,
	document.getElementById('root')
)
