import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	MessageCircle,
	Sparkles,
	Users,
	ArrowRight,
	Brain,
	Heart,
} from 'lucide-react';

const Home = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const navigate = useNavigate();

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({
				x: (e.clientX / window.innerWidth) * 100,
				y: (e.clientY / window.innerHeight) * 100,
			});
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	const handleNavigation = (path) => {
		navigate(path);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
			{/* Animated Background */}
			<div
				className="absolute inset-0 opacity-30"
				style={{
					background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.15), transparent 40%)`,
				}}
			/>

			{/* Floating Particles */}
			<div className="absolute inset-0">
				{[...Array(20)].map((_, i) => (
					<div
						key={i}
						className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 3}s`,
							animationDuration: `${2 + Math.random() * 2}s`,
						}}
					/>
				))}
			</div>

			{/* Main Content */}
			<div className="relative z-10 container mx-auto px-6 py-12">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
						<Sparkles className="w-4 h-4 text-purple-400" />
						<span className="text-purple-300 text-sm font-medium">
							AI Persona Experience
						</span>
					</div>

					<h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-6 animate-pulse">
						Connect & Learn
					</h1>

					<p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
						Experience personalized AI conversations with industry experts.
						Choose your mentor and dive into meaningful discussions.
					</p>
				</div>

				{/* Persona Cards */}
				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
					{/* Hitesh Sir Card */}
					<div className="group relative">
						<div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
						<div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 h-full">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
									<Brain className="w-8 h-8 text-white" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-white">Hitesh Sir</h3>
									<p className="text-purple-400">Tech Mentor & Guide</p>
								</div>
							</div>

							<p className="text-slate-300 mb-6 leading-relaxed">
								Get expert insights on programming, development, and technology.
								Perfect for technical guidance and career advice.
							</p>

							<div className="flex flex-wrap gap-2 mb-6">
								{['Programming', 'Web Dev', 'Career', 'Tech'].map((tag) => (
									<span
										key={tag}
										className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm"
									>
										{tag}
									</span>
								))}
							</div>

							<button
								onClick={() => handleNavigation('/chat/hitesh')}
								className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 cursor-pointer"
							>
								<MessageCircle className="w-5 h-5" />
								Start Conversation
								<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
							</button>
						</div>
					</div>

					{/* Piyush Sir Card */}
					<div className="group relative">
						<div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
						<div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 h-full">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
									<Heart className="w-8 h-8 text-white" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-white">Piyush Sir</h3>
									<p className="text-cyan-400">Wisdom & Life Coach</p>
								</div>
							</div>

							<p className="text-slate-300 mb-6 leading-relaxed">
								Discover life insights, personal growth strategies, and
								meaningful conversations about success and fulfillment.
							</p>

							<div className="flex flex-wrap gap-2 mb-6">
								{['Life Advice', 'Growth', 'Success', 'Wisdom'].map((tag) => (
									<span
										key={tag}
										className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm"
									>
										{tag}
									</span>
								))}
							</div>

							<button
								onClick={() => handleNavigation('/chat/piyush')}
								className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
							>
								<MessageCircle className="w-5 h-5" />
								Start Conversation
								<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
							</button>
						</div>
					</div>
				</div>

				{/* Stats Section */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
					{[
						{ icon: Users, label: 'AI Personas', value: '2+' },
						{ icon: MessageCircle, label: 'Conversations', value: '∞' },
						{ icon: Sparkles, label: 'Insights', value: 'Unlimited' },
					].map((stat, index) => (
						<div
							key={index}
							className="text-center p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-2xl hover:border-purple-500/50 transition-all duration-300"
						>
							<stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
							<div className="text-2xl font-bold text-white mb-1">
								{stat.value}
							</div>
							<div className="text-slate-400 text-sm">{stat.label}</div>
						</div>
					))}
				</div>

				{/* CTA Section */}
				<div className="text-center">
					<div className="inline-flex items-center gap-2 text-slate-400 mb-4">
						<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
						<span>Available 24/7</span>
					</div>
					<p className="text-slate-300 max-w-md mx-auto">
						Choose your AI mentor and start an engaging conversation that could
						change your perspective.
					</p>
				</div>
			</div>

			{/* Custom Animation Styles */}
			<style jsx>{`
				@keyframes tilt {
					0%,
					50%,
					100% {
						transform: rotate(0deg);
					}
					25% {
						transform: rotate(1deg);
					}
					75% {
						transform: rotate(-1deg);
					}
				}
				.animate-tilt {
					animation: tilt 10s infinite linear;
				}
			`}</style>
		</div>
	);
};

export default Home;
