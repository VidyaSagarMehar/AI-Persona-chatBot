import React from 'react';
import HiteshPersona from './Components/HiteshPersona';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Error from './Components/Error';
import { AppWithApiKey } from './Components/ApiKeyModal';
import PiyushPersona from './Components/PiyushPersona';
import MentorPersona from './Components/MentorPersona';

function App() {
	return (
		<AppWithApiKey>
			{/* <Navigation /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/chat/hitesh"
					element={
						<MentorPersona
							name="Hitesh"
							title="Tech Mentor & Guide"
							initialMessage="Hanjii kaise hai aap? mai aapki aaj kis tarike se madad kar skta hun"
							endpoint="http://localhost:5000/chat/hitesh"
						/>
					}
				/>
				<Route
					path="/chat/piyush"
					element={
						<MentorPersona
							name="Piyush"
							title="Tech Mentor & Guide"
							initialMessage="Hello, to aaj hmlog kis topic par bat karne wale hai?"
							endpoint="http://localhost:5000/chat/piyush"
						/>
					}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
		</AppWithApiKey>
	);
}

export default App;
