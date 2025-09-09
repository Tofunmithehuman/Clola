import { useState } from "react";
import ScrollToTop from "../Components/ScrollToTop";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import CosmeticHero from "../assets/CosmeticHero.jpg";
import CosmeticOne from "../assets/CosmeticOne.jpg";
import CosmeticTwo from "../assets/CosmeticTwo.jpg";
import Navigation from "../Components/Navigation";
import ProductOne from "../assets/product.png";
import ProductTwo from "../assets/productTwo.png";
import Profile from "../assets/Profile.png";

function Home() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setCurrentReview(
      (prev) => (prev - 1 + reviewsData.length) % reviewsData.length
    );
  };

  const BestProducts = [
    {
      id: 1,
      name: "Face Scrub",
      price: "66.07",
      image: ProductOne,
      bgColor: "#faf6f5",
    },
    {
      id: 2,
      name: "Midnight Perfume",
      price: "71.52",
      image: ProductTwo,
      bgColor: "#faf6f5",
    },
    {
      id: 3,
      name: "Face Scrub",
      price: "66.07",
      image: ProductOne,
      bgColor: "#faf6f5",
    },
  ];
  const LatestProducts = [
    {
      id: 1,
      name: "Face Scrub",
      price: "66.07",
      image: ProductOne,
      bgColor: "#faf6f5",
    },
    {
      id: 2,
      name: "Midnight Perfume",
      price: "71.52",
      image: ProductTwo,
      bgColor: "#faf6f5",
    },
    {
      id: 3,
      name: "Face Scrub",
      price: "66.07",
      image: ProductOne,
      bgColor: "#faf6f5",
    },
    {
      id: 4,
      name: "Midnight Perfume",
      price: "71.52",
      image: ProductTwo,
      bgColor: "#faf6f5",
    },
    {
      id: 5,
      name: "Face Scrub",
      price: "66.07",
      image: ProductOne,
      bgColor: "#faf6f5",
    },
    {
      id: 6,
      name: "Midnight Perfume",
      price: "71.52",
      image: ProductTwo,
      bgColor: "#faf6f5",
    },
  ];

  const reviewsData = [
    {
      id: 1,
      text: "I absolutely love the products I purchased from this boutique! The quality is exceptional, and my skin has never looked better. The packaging is also beautiful, making it a luxurious experience every time I use them",
      author: "Cody Fisher",
      location: "New York, USA",
      profileImage: Profile,
    },
    {
      id: 2,
      text: "Amazing customer service and The face scrub has transformed my skincare routine completely. I've been using it for 3 months now and the results are incredible. Will definitely be ordering again",
      author: "Sarah Johnson",
      location: "Los Angeles, CA",
      profileImage: Profile,
    },
    {
      id: 3,
      text: "The midnight perfume is absolutely divine! It lasts all day and gets compliments everywhere I go. The boutique's attention to detail in packaging and product quality is unmatched. Five stars",
      author: "Emily Chen",
      location: "Miami, FL",
      profileImage: Profile,
    },
    {
      id: 4,
      text: "I was skeptical about online beauty shopping, but this boutique exceeded all my expectations. The personalized recommendations were spot-on, and my skin looks radiant. Thank you for the amazing experience",
      author: "Jessica Williams",
      location: "Chicago, IL",
      profileImage: Profile,
    },
    {
      id: 5,
      text: "This is the best beauty boutique I've ever shopped at and Their products are very organic, effective, and beautifully packaged. The vitamin C serum has become my holy grail. Couldn't be happier",
      author: "Maria Rodriguez",
      location: "Phoenix, AZ",
      profileImage: Profile,
    },
  ];

  return (
    <div>
      <Navigation />

      <section className="min-h-screen px-4 lg:px-0">
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
            Boutique believes in providing a personalized shopping experience
            and exceptional customer service, just like you would expect from a
            physical boutique.
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            <img
              src={CosmeticOne}
              alt="Cosmetics"
              className="lg:w-1/2 object-cover"
            />

            <div className="lg:w-1/2 flex flex-col gap-6 justify-between">
              <img src={CosmeticTwo} alt="Cosmetics" className="object-cover" />

              <p className="font-thin text-lg">
                Discover our exclusive range of boutique beauty products and
                experience the transformative power of beauty with us.
              </p>

              <button className="border hover:bg-black hover:text-white duration-200 py-4 px-8 flex items-center justify-center w-full lg:w-auto gap-2">
                Explore Now <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-16 lg:py-24 px-4">
        <div>
          <div className="text-center">
            <h2 className="bg-[#fecfd7] p-4 mb-8 font-light max-w-[200px] mx-auto">
              Glow Up With Us
            </h2>
            <p className="text-4xl font-thin">Best Selling Product</p>
          </div>

          <div className="flex flex-wrap items-center justify-evenly max-w-screen-2xl mx-auto gap-12 md:gap-4 mt-8 px-4">
            {BestProducts.map((product) => (
              <div key={product.id} className="max-w-sm">
                <div
                  className="bg-[#faf6f5]"
                  style={{ backgroundColor: product.bgColor }}
                >
                  <img src={product.image} alt="Product" />
                </div>
                <div className="text-center mt-4 pb-4">
                  <h1 className="mb-2">{product.name}</h1>
                  <p className="font-light">$ {product.price} USD</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen py-16 lg:py-24 px-4">
        <div>
          <div className="text-center">
            <h2 className="bg-[#fecfd7] p-4 mb-8 font-light max-w-[200px] mx-auto">
              New Arrivals
            </h2>
            <p className="text-4xl font-thin">Latest Collection</p>
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-wrap md:items-center md:justify-evenly max-w-screen-2xl mx-auto gap-4 md:gap-12 mt-8">
            {LatestProducts.map((product) => (
              <div key={product.id} className="max-w-sm">
                <div
                  className="bg-[#faf6f5]"
                  style={{ backgroundColor: product.bgColor }}
                >
                  <img src={product.image} alt="Product" />
                </div>
                <div className="text-center mt-4 pb-4">
                  <h1 className="mb-2 text-sm md:text-base">{product.name}</h1>
                  <p className="font-light text-sm md:text-base">
                    $ {product.price} USD
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-20">
            <button className="border hover:bg-black hover:text-white duration-200 py-4 px-8 flex items-center justify-center w-full lg:w-auto gap-2">
              View All Products <ArrowUpRight />
            </button>
          </div>
        </div>
      </section>

      <section className="min-h-[500px] py-16 lg:py-24 px-4 md:px-20 bg-[#f7f0e3]">
        <div className="max-w-5xl mx-auto">
          <blockquote className="font-thin text-xl sm:text-3xl max-w-5xl leading-relaxed transition-all duration-500 ease-in-out">
            "{reviewsData[currentReview].text}"
          </blockquote>

          <div className="flex items-center gap-4 mt-8">
            <img
              src={reviewsData[currentReview].profileImage}
              alt={`${reviewsData[currentReview].author} profile`}
              className="w-20 h-20 rounded-full object-cover transition-all duration-500 ease-in-out"
            />
            <div className="transition-all duration-500 ease-in-out">
              <h1 className="font-medium">
                {reviewsData[currentReview].author}
              </h1>
              <p className="text-gray-600">
                {reviewsData[currentReview].location}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-8 mt-4">
            <button
              onClick={prevReview}
              className="border hover:bg-black hover:text-white duration-200 p-4 rounded-full flex items-center justify-center w-full sm:w-auto gap-2 mt-8 disabled:opacity-50"
              aria-label="Previous review"
            >
              <ArrowLeft />
            </button>

            <button
              onClick={nextReview}
              className="border hover:bg-black hover:text-white duration-200 p-4 rounded-full flex items-center justify-center w-full sm:w-auto gap-2 mt-8 disabled:opacity-50"
              aria-label="Next review"
            >
              <ArrowRight />
            </button>
          </div>

          {/* Optional: Review indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {reviewsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentReview === index ? "bg-black" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* Optional: Review counter */}
          <div className="text-center mt-4 text-sm text-gray-500">
            {currentReview + 1} of {reviewsData.length}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

export default Home;
