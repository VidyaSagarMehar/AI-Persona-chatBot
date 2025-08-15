import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { OpenAI } from 'openai';
import { hiteshSirPersona } from './persona/hiteshSirPersona.js';
import { piyushSirPersona } from './persona/piyushSirPersona.js';

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.post('/chat/hitesh', async (req, res) => {
	let { messages } = req.body;
	const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

	// Validate incoming messages array
	if (!Array.isArray(messages)) {
		return res.status(400).json({ error: 'messages must be an array' });
	}

	try {
		const response = await client.chat.completions.create({
			model: 'gpt-4.1-mini',
			messages: [
				{
					role: 'system',
					content: hiteshSirPersona,
				},
				...messages, // Full conversation history
			],
		});

		res.json({ reply: response.choices[0].message.content });
	} catch (error) {
		console.error('Error in /chat/hitesh:', error);
		res.status(500).json({ error: 'Something went wrong' });
	}
});
app.post('/chat/piyush', async (req, res) => {
	let { messages, apiKey } = req.body;
	const client = new OpenAI({ apiKey: apiKey });

	// Validate incoming messages array
	if (!Array.isArray(messages)) {
		return res.status(400).json({ error: 'messages must be an array' });
	}

	try {
		const response = await client.chat.completions.create({
			model: 'gpt-4.1-mini',
			messages: [
				{
					role: 'system',
					content: piyushSirPersona,
				},
				...messages, // Full conversation history
			],
		});

		res.json({ reply: response.choices[0].message.content });
	} catch (error) {
		console.error('Error in /chat/piyush:', error);
		res.status(500).json({ error: 'Something went wrong' });
	}
});

app.listen(PORT, () => {
	console.log(`✅ Server running on http://localhost:${PORT}`);
});
