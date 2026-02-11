export default function ParallaxSection() {
  return (
    <section 
      className="relative h-[500px] md:h-[600px] bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Experience Luxury Living at
            <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mt-2">
              Gaur Yamuna City
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Premium studio apartments just 24km from Jewar International Airport
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const form = document.getElementById("lead-form");
                if (form) form.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Schedule Site Visit
            </button>
            <button 
              onClick={() => {
                const form = document.getElementById("lead-form");
                if (form) form.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
    </section>
  );
}
