// components/VideoBanner.js

const VideoBanner = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh]">
      {/* Embed YouTube video using iframe */}
      <iframe 
    class="w-full h-full" 
    src="https://www.youtube.com/embed/KO3VhTsDwDM?autoplay=1&mute=1&loop=1&playlist=KO3VhTsDwDM" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
      
      {/* Overlay for dark background */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      {/* Text content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Website</h1>
        <p className="mt-4 text-lg md:text-2xl">
          Explore the amazing world of web development.
        </p>
      </div>
    </div>
  );
};

export default VideoBanner;
