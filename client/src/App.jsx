import React from 'react';
import HiteshPersona from './Components/HiteshPersona';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Error from './Components/Error';

function App() {
	return (
		<div>
			{/* <Navigation /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/chat/hitesh" element={<HiteshPersona />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
