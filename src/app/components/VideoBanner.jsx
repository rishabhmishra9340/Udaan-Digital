// components/VideoBanner.js

const VideoBanner = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh]">
      {/* Embed YouTube video using iframe */}
      <video
        className="w-full h-full object-cover"
        src="/final render.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls
      />

      {/* Overlay for dark background */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Text content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">WELCOME TO UDAAN Studio
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Let’s build tomorrow, today.
        </p>
      </div>
    </div>
  );
};

export default VideoBanner;
