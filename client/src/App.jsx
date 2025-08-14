import React from 'react';
import HiteshPersona from './Components/HiteshPersona';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navigation from './Components/Navigation';

function App() {
	return (
		<div>
			{/* <Navigation /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/chatHC" element={<HiteshPersona />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
