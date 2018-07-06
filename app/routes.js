import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './containers/Main';
import About from './components/About';

export default (
	<Switch>
		<Route path="/" component={Main} />
		<Route path="/about" component={About} />
	</Switch>
);
