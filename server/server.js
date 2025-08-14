import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { OpenAI } from 'openai';
import { hiteshSirPersona } from './persona/hiteshSirPersona.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/chat/hitesh', async (req, res) => {
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
					content: hiteshSirPersona,
				},
				...messages, // Full conversation history
			],
		});

		res.json({ reply: response.choices[0].message.content });
	} catch (error) {
		console.error('Error in /chatHC:', error);
		res.status(500).json({ error: 'Something went wrong' });
	}
});

app.listen(5000, () =>
	console.log('✅ Server running on http://localhost:5000'),
);
