import React from "react";
import ScrollToTop from "../Components/ScrollToTop";
import { ArrowUpRight } from "lucide-react";
import CosmeticHero from "../assets/CosmeticHero.jpg";
import CosmeticOne from "../assets/CosmeticOne.jpg";
import CosmeticTwo from "../assets/CosmeticTwo.jpg";
import Navigation from "../Components/Navigation";

function Home() {
  return (
    <div>
      <Navigation />

      <section className="h-screen px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center bg-[#f6f1e3]">
          <div className="w-full lg:w-1/2 p-8">
            <div className="text-center">
              <h3 className="font-light text-lg leading-16 tracking-widest">
                ENHANCE YOUR GLOW!
              </h3>
              <h1 className="text-5xl md:text-6xl leading-14 md:leading-16">
                Unleash Your Inner Glow
              </h1>
              <h4 className="text-sm leading-16 mb-8 md:mb-16">
                Unlock Your Skin's Radiance
              </h4>

              <div className="flex items-center justify-center">
                <button className="border hover:bg-black hover:text-white duration-200 py-4 px-8 flex items-center justify-center w-full lg:w-auto gap-2">
                  Shop Now <ArrowUpRight />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={CosmeticHero} alt="Cosmetic" />
          </div>
        </div>
      </section>

       <section className="min-h-screen py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-center text-3xl md:text-4xl font-thin leading-relaxed mb-16">
            Boutique believes in providing a personalized shopping
            experience and exceptional customer service, just like you would
            expect from a physical boutique.
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            <img src={CosmeticOne} alt="Cosmetics" className="lg:w-1/2 object-cover" />

            <div className="lg:w-1/2 flex flex-col gap-6 justify-between">
              <img src={CosmeticTwo} alt="Cosmetics" className="object-cover" />

              <p className="font-thin text-lg">
                Discover our exclusive range of boutique beauty products and experience the transformative power of beauty with us.
              </p>

              <button className="border hover:bg-black hover:text-white duration-200 py-4 px-8 flex items-center justify-center w-full lg:w-auto gap-2">
                Explore Now <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

export default Home;
