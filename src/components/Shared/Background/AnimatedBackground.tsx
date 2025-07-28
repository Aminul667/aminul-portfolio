const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-32 h-32 bg-sage-200/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-60 right-20 w-24 h-24 bg-mint-200/20 rounded-full blur-lg animate-float-delayed"></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-eucalyptus-200/15 rounded-full blur-2xl animate-float-slow"></div>

      {/* Generative Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-sage-400"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
