export default function BallsSuspendEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="floating-element absolute top-20 left-10 w-3 h-3 bg-primary-500 rounded-full opacity-50"></div>
      <div className="floating-element absolute top-35 left-10 w-3 h-3 bg-yellow-200 rounded-full opacity-50"></div>
      <div className="floating-element absolute top-40 right-20 w-2 h-2 bg-yellow-500 rounded-full opacity-40"></div>
      <div className="floating-element absolute top-40 right-20 w-2 h-2 bg-yellow-500 rounded-full opacity-40"></div>
      <div className="floating-element absolute top-60 left-160 w-4 h-4 bg-purple-500 rounded-full opacity-30"></div>
      <div className="floating-element absolute top-20 right-60 w-4 h-4 bg-purple-300 rounded-full opacity-30"></div>
      <div className="floating-element absolute top-40 right-80 w-6 h-6 bg-green-500 rounded opacity-50"></div>
      <div className="floating-element absolute bottom-8 right-8 w-6 h-6 bg-purple-500 rounded shadow-lg secondary-element glow-purple"></div>
      <div className="floating-element absolute bottom-25 rotate-45 right-120 w-6 h-6 bg-yellow-500 rounded shadow-lg secondary-element glow-purple"></div>
      <div className="floating-element absolute top-25 rotate-45 left-140 w-6 h-6 bg-red-500 rounded shadow-lg secondary-element glow-purple"></div>
      <div className="floating-element absolute bottom-40 right-10 w-3 h-3 bg-green-500 rounded-full opacity-50"></div>
      <div className="floating-element absolute bottom-20 left-20 w-2 h-2 bg-red-500 rounded-full opacity-40"></div>
      <div className="floating-element absolute top-40 left-200 w-4 h-4 bg-red-500 rounded-full opacity-40"></div>
    </div>
  );
}
