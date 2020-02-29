import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './views/Home'
import Login from './views/Login';
import Registration from './views/Registeration';
function App() {
  return <div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/signin" exact component={Login} />
					<Route path="/signup" exact component={Registration} />
				</Switch>
			</Router>
		</div>;
}

export default App;
