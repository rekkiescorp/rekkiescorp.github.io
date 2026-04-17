import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Film, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * REKKIES Official Website - Home Page
 * Design: Neon Cyberpunk Minimalism
 * 
 * Color Palette:
 * - Black (#000000): Primary background
 * - White (#FFFFFF): Primary text
 * - Cyan (#00F7FF): Primary accent, interactive elements
 * - Magenta (#FA00FF): Secondary accent, emphasis
 * 
 * Typography: Fredoka (all weights)
 * Layout: Asymmetric sections with diagonal dividers
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" style={{ fontFamily: "'Fredoka', sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-rekkies-cyan/30">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold neon-text">REKKIES</div>
          <div className="flex gap-8 items-center">
            <a href="#club" className="hover:text-rekkies-cyan transition-colors">Club</a>
            <a href="#records" className="hover:text-rekkies-cyan transition-colors">Records</a>
            <a href="#corp" className="hover:text-rekkies-cyan transition-colors">Corp</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://d36hbw14aib5lz.cloudfront.net/310519663120768155/gVa28wTQM49ARY26E9tHkp/rekkies-hero-main-6ofrAUnkKGhwwAA28SeQUJ.webp?Expires=1807950573&Signature=j1tQkFAJjYYoU09Oqkmwq6oLDJcHYQt-VoP4HPdtp6mYXgKs-wuqteYja8HAJ1uUTRb3~HFvbRBws0TW3lU6mqivZwoooa89GANN1wT0RpOnI3XxkQKX6JqbQGTJ5MUhus-HRNPC3NwcRoZz~~00Vi40kAAtQ~uVUd8eOoQjVJ1LWjMPM0GAPzZJ9aBTYwqofYYNh1jTggyg7EPYzJIJxxl-qd4Z8fghVMw6buyhDa-sElbZIZ96MyX6jaujqWbWNCdzG7RXFsxlS1UWB7P-amO8Yvk-19r-kEMDy7w8jB8nNwhZoAtj1648Dph8r3powI2sskXjnyuaRGvL6rL8Kg__&Key-Pair-Id=K1MP89RTKNH4J')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container text-center">
          <div className="mb-6 inline-block px-6 py-2 border border-rekkies-cyan/50 rounded-full">
            <span className="text-rekkies-cyan text-sm font-semibold">WELCOME TO THE FUTURE</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="neon-text">REKKIES</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-normal">
            Money. Music. Movies.
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            A community of excellence for entrepreneurs, media producers, and musicians.
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <a href="https://upgrade.chat/rekkies" target="_blank" rel="noopener noreferrer">
              <Button className="bg-rekkies-cyan text-black hover:bg-rekkies-magenta font-bold px-8 py-6 text-lg neon-glow">
                Join the REKKIES <ArrowRight className="ml-2" />
              </Button>
            </a>
            <Button variant="outline" className="border-rekkies-magenta text-rekkies-magenta hover:bg-rekkies-magenta/10 font-bold px-8 py-6 text-lg">
              Explore More
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-rekkies-cyan rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-rekkies-cyan rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* REKKIES Club Section - MAIN FOCUS */}
      <section id="club" className="relative py-32 bg-black border-t-2 border-rekkies-cyan/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="mb-6 inline-block px-4 py-2 bg-rekkies-magenta/10 border border-rekkies-magenta/50 rounded">
                <span className="text-rekkies-magenta text-sm font-semibold">THE COMMUNITY</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="neon-text-magenta">REKKIES</span>
                <br />
                <span className="text-white">Club</span>
              </h2>

              <p className="text-xl text-gray-300 mb-6 font-normal leading-relaxed">
                Join an exclusive community of excellence where entrepreneurs, media producers, and musicians converge to create, collaborate, and elevate their craft.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rekkies-cyan/20 border border-rekkies-cyan flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-rekkies-cyan" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Money</h3>
                    <p className="text-gray-400 font-normal">Financial opportunities and investment connections</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rekkies-cyan/20 border border-rekkies-cyan flex items-center justify-center flex-shrink-0">
                    <Music className="w-6 h-6 text-rekkies-cyan" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Music</h3>
                    <p className="text-gray-400 font-normal">Production, collaboration, and distribution</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rekkies-cyan/20 border border-rekkies-cyan flex items-center justify-center flex-shrink-0">
                    <Film className="w-6 h-6 text-rekkies-cyan" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Movies</h3>
                    <p className="text-gray-400 font-normal">Content creation and media production</p>
                  </div>
                </div>
              </div>

              <a href="https://upgrade.chat/rekkies" target="_blank" rel="noopener noreferrer">
                <Button className="bg-rekkies-magenta text-white hover:bg-rekkies-cyan hover:text-black font-bold px-8 py-6 text-lg neon-glow-magenta">
                  Join the REKKIES <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-96 md:h-full min-h-96">
              <div className="absolute inset-0 neon-border rounded-lg overflow-hidden">
                <img
                  src="https://d36hbw14aib5lz.cloudfront.net/310519663120768155/gVa28wTQM49ARY26E9tHkp/rekkies-club-hero-MtxqrtohLNmksNfkUYkH2T.webp?Expires=1807950575&Signature=xSa2k1Zv8e~F3EuMc-zEvskK61JJca-i1DnVuqaS-2YE1WWGE0E7kmSO23sdFwV0ef6BJ4IZ~TNIO06xrYbv0PrIF7Us0ZF8MQ6Jw5s9zkKmnCJjQUOvAhEOCLjbYZFG~dj1GwbcUiI5nhOfkUX6PXdvrJaT6X-h3Mar2HS5lKLr4SodMN5ATXDOHZ7GjX0X3W5Vg1znC7ipxk-txejp92o-Dl8zXjc743mZQ8xsi6aO7k8dHLZmthd86fvLZtG52xSRAxtfzUxnxW7fjfiZZ0IJMKRlX6pA6bEKQjK~N4Rz3gJQ1z-FsoXT~Ucuhv-ySkWxUIGi-fAy34MbY3Z28w__&Key-Pair-Id=K1MP89RTKNH4J"
                  alt="REKKIES Club"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REKKIES Records Section */}
      <section id="records" className="relative py-32 bg-black border-t-2 border-rekkies-magenta/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Hero Image */}
            <div className="relative h-96 md:h-full min-h-96 order-2 md:order-1">
              <div className="absolute inset-0 neon-border-magenta rounded-lg overflow-hidden">
                <img
                  src="https://d36hbw14aib5lz.cloudfront.net/310519663120768155/gVa28wTQM49ARY26E9tHkp/rekkies-records-hero-NED5gdYmkffyRFmaSzmJuv.webp?Expires=1807950576&Signature=TFmViaqDKeBenxPzTy2tODVIF9K2FVbQgQbf6k3eG7BaNI-Y-0zV5JOBYFpaWsEEpxW0EM4aaGYaeFTh4DL-tUI4ZvCvipImSraSAOOaJOrkB3RqX6PPmdSJEm-LI-kSFUCHDM-ZsL26bkwdtLfwP4-EPR5eLRI6mf0pPRjAbrMyrBi73w2O0LjkfsMx-qwiPdlzCh83YMAKZx8luRcRUcbSCRKRS~C4bstnFHdm-dCucotmUY26ftCWYM-K4ZR9ObZCkRyViC~uwfIkI5CQLMSeOQYVTz4I-IcOBifs1rD-Cz12~ZAQh5eXBw8RgH5LBqHuPmhQNkyJ43EOSD5r0g__&Key-Pair-Id=K1MP89RTKNH4J"
                  alt="REKKIES Records"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 md:order-2">
              <div className="mb-6 inline-block px-4 py-2 bg-rekkies-cyan/10 border border-rekkies-cyan/50 rounded">
                <span className="text-rekkies-cyan text-sm font-semibold">MUSIC PRODUCTION</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="text-white">REKKIES</span>
                <br />
                <span className="neon-text">Records</span>
              </h2>

              <p className="text-xl text-gray-300 mb-6 font-normal leading-relaxed">
                Our music production division is dedicated to discovering, developing, and distributing world-class music. From production to mastering, we handle every aspect of your sonic journey.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-lg font-normal">
                  <span className="w-2 h-2 bg-rekkies-magenta rounded-full"></span>
                  Professional production and mixing
                </li>
                <li className="flex items-center gap-3 text-lg font-normal">
                  <span className="w-2 h-2 bg-rekkies-magenta rounded-full"></span>
                  Artist development and mentorship
                </li>
                <li className="flex items-center gap-3 text-lg font-normal">
                  <span className="w-2 h-2 bg-rekkies-magenta rounded-full"></span>
                  Distribution across all platforms
                </li>
                <li className="flex items-center gap-3 text-lg font-normal">
                  <span className="w-2 h-2 bg-rekkies-magenta rounded-full"></span>
                  Marketing and promotion strategies
                </li>
              </ul>

              <Button className="bg-rekkies-cyan text-black hover:bg-rekkies-magenta font-bold px-8 py-6 text-lg neon-glow">
                Explore Records
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* REKKIES Corp Section */}
      <section id="corp" className="relative py-32 bg-black border-t-2 border-rekkies-cyan/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="mb-6 inline-block px-4 py-2 bg-rekkies-magenta/10 border border-rekkies-magenta/50 rounded">
                <span className="text-rekkies-magenta text-sm font-semibold">HEADQUARTERS</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="neon-text-magenta">REKKIES</span>
                <br />
                <span className="text-white">Corp</span>
              </h2>

              <p className="text-xl text-gray-300 mb-6 font-normal leading-relaxed">
                REKKIES Corp serves as the main headquarters and media production hub, orchestrating all operations across our ecosystem. We produce high-quality content, manage strategic initiatives, and drive innovation across the REKKIES family.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-gray-900/50 border border-gray-800 rounded">
                  <h3 className="font-bold text-rekkies-cyan mb-2">Media Production</h3>
                  <p className="text-sm text-gray-400 font-normal">Broadcast, digital, and content creation</p>
                </div>
                <div className="p-4 bg-gray-900/50 border border-gray-800 rounded">
                  <h3 className="font-bold text-rekkies-magenta mb-2">Strategic Operations</h3>
                  <p className="text-sm text-gray-400 font-normal">Planning, coordination, and execution</p>
                </div>
              </div>

              <Button className="bg-rekkies-magenta text-white hover:bg-rekkies-cyan hover:text-black font-bold px-8 py-6 text-lg neon-glow-magenta">
                Learn More
              </Button>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-96 md:h-full min-h-96">
              <div className="absolute inset-0 neon-border-magenta rounded-lg overflow-hidden">
                <img
                  src="https://d36hbw14aib5lz.cloudfront.net/310519663120768155/gVa28wTQM49ARY26E9tHkp/rekkies-corp-hero-42oCbRQQCmA8VgQuDojNMg.webp?Expires=1807950577&Signature=w0lJR~2hh3HblSWYJhYANBdDkEGvVcN~QqcvwtDPuXsl-UF6d7qSPSf4EVq5hK6zDA6RVTojWSAWeSVadSQ7fMKAsrpnMSXay9kWzrf2Yx3G9HCX2T6R0GHOc-daM50i30snawp9lKt8w6t74fOCBRzGMZoXlFv8v459DkgQV6y5XKGv~eIAQZn3Q8MFg91lQJfd9XSQjhmcxUwS5S9xFgHrpXzrwetIjZFo0GbPpSH7EtBG6olMPMJ9UhjUPVvYgxLEw8AaQ5FaPk15moCk5Lf3I7SqC7Od43YRWEzL-6WiG5UBm61jfleMGavajjjJKBu-LaYwEJXRZD4poLAVvQ__&Key-Pair-Id=K1MP89RTKNH4J"
                  alt="REKKIES Corp"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-b from-black to-gray-900 border-t-2 border-rekkies-cyan/30">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Join the <span className="neon-text">REKKIES</span>?
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-normal">
            Become part of an exclusive community of excellence. Connect with entrepreneurs, media producers, and musicians shaping the future.
          </p>

          <a href="https://upgrade.chat/rekkies" target="_blank" rel="noopener noreferrer">
            <Button className="bg-rekkies-magenta text-white hover:bg-rekkies-cyan hover:text-black font-bold px-12 py-8 text-xl neon-glow-magenta">
              Join Now <ArrowRight className="ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-rekkies-cyan/30 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4 neon-text">REKKIES</h3>
              <p className="text-gray-400 font-normal text-sm">Money. Music. Movies.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Divisions</h4>
              <ul className="space-y-2 text-gray-400 font-normal text-sm">
                <li><a href="#club" className="hover:text-rekkies-cyan transition-colors">REKKIES Club</a></li>
                <li><a href="#records" className="hover:text-rekkies-cyan transition-colors">REKKIES Records</a></li>
                <li><a href="#corp" className="hover:text-rekkies-cyan transition-colors">REKKIES Corp</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400 font-normal text-sm">
                <li><a href="https://upgrade.chat/rekkies" target="_blank" rel="noopener noreferrer" className="hover:text-rekkies-cyan transition-colors">Join</a></li>
                <li><a href="#" className="hover:text-rekkies-cyan transition-colors">About</a></li>
                <li><a href="#" className="hover:text-rekkies-cyan transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 font-normal text-sm">
                <li><a href="#" className="hover:text-rekkies-magenta transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-rekkies-magenta transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-rekkies-magenta transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 font-normal text-sm">© 2026 REKKIES. All rights reserved.</p>
            <p className="text-gray-500 font-normal text-sm">Community of Excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
