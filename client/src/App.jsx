import React from 'react';
import HiteshPersona from './Components/HiteshPersona';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Error from './Components/Error';
import { AppWithApiKey } from './Components/ApiKeyModal';

function App() {
	return (
		<AppWithApiKey>
			{/* <Navigation /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/chat/hitesh" element={<HiteshPersona />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</AppWithApiKey>
	);
}

export default App;
