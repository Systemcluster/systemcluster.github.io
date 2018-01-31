import React from 'react'
import Helmet from 'react-helmet'
import Fragment from '../components/fragment'


export default ({data}) => (
	<Fragment>
		<Helmet title='About | Systemcluster' />
		<h1>About</h1>
		<p>
			Website and content © 2018 Christian Sdunek.
			<br />
			Chaika face illustration provided by <a href="https://switchdraw.deviantart.com/art/CHAIKA-s-Face-456893291">Switchdraw</a>.
		</p>
		<hr />

	</Fragment>
)
