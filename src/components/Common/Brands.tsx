
import { Link } from 'react-router-dom';

// Images
import whiteWave from '@/assets/images/shapes/white-wave.svg';
import desktop1 from '@/assets/images/hero/desktop1.png';
import textureblack from '@/assets/images/hero/textureblack.png';
import uae from '@/assets/images/brands/uae.png';
import saudi from '@/assets/images/brands/saudi.png';
import oman from '@/assets/images/brands/oman.png';
import bahrin from '@/assets/images/brands/bahrin.png';
import qatar from '@/assets/images/brands/qatar.png';
import pakistan from '@/assets/images/brands/pakistan.png';
import sweden from '@/assets/images/brands/sweden.png';
import uk from '@/assets/images/brands/uk.png';
import singapore from '@/assets/images/brands/singapore.png';

const brands = [uae, saudi, oman, bahrin, qatar, pakistan, sweden, uk, singapore];

const Brands = () => {
  return (
    <section className="main_section">
      <section
        className="relative py-16 sm:py-24 md:py-44"
        style={{
          backgroundImage: `url(${textureblack})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
            {/* Left Section */}
            <div className="text-center lg:text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold  leading-tight mb-5 uppercase">
                Your Trusted <br /> Gateway
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gold mb-7 uppercase">
                Into the GCC Market
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-7">
                Over 35 years of creating partnerships that <br />
				drive sustainable growth.
              </p>
              <div className="mt-5">
                <Link
                  to=""
                  className="inline-block py-3 px-8 bg-gold text-black text-lg font-medium rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-yellow-600 hover:shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative flex justify-center">
              <img
                src={desktop1}
                alt="World Map"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          {/* Flag Section */}
          <div className="flex flex-wrap justify-center gap-6 mt-14">
            {brands.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`brand-${idx}`}
                className="w-14 sm:w-18 md:w-20 lg:w-24 hover:opacity-90 transition-opacity duration-200"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 inset-x-0 hidden sm:block">
        <img
          src={whiteWave}
          alt="Wave Shape"
          className="w-full -scale-x-100 -scale-y-100"
        />
      </div>
    </section>
  );
};

export default Brands;


