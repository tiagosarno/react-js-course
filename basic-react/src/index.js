import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'

ReactDOM.render(
	<div>
		<First />
		<WithParameter 
			title="Segundo Componente" 
			subtitle="Subtitulo do segundo componente" />
	</div>,
	document.getElementById('root')
)