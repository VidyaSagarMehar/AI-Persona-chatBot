import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Error from './Components/Error';
import { AppWithApiKey } from './Components/ApiKeyModal';
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
							endpoint="https://ai-persona-chatbot.onrender.com/chat/hitesh"
							src="https://avatars.githubusercontent.com/u/11613311?v=4"
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
							endpoint="https://ai-persona-chatbot.onrender.com/chat/piyush"
							src="https://www.piyushgarg.dev/_next/image?url=%2Fimages%2Favatar.png&w=1080&q=75"
						/>
					}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
		</AppWithApiKey>
	);
}

export default App;
