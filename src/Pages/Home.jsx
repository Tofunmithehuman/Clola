import React from "react";
import { ArrowUpRight } from "lucide-react";
import CosmeticHero from "../assets/CosmeticHero.jpg";
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
              <h1 className="text-5xl md:text-6xl leading-14 md:leading-16">Unleash Your Inner Glow</h1>
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
    </div>
  );
}

export default Home;
