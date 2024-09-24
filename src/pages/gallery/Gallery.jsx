import React, { useState } from "react";
import RGallery from "react-photo-gallery";
import { photos } from "../../assets/wildlifeWeek/photos";
import { photos as photos2 } from "../../assets/newspaperCuttings/photos";
import Photo from "./Photo";
import { useGallery } from "../../context/GalleryContext";

const Gallery = () => {
  const { openImage } = useGallery();
  const [seeMoreWildlife, setSeeMoreWildlife] = useState(false);
  const [seeMoreNewspaper, setSeeMoreNewspaper] = useState(false);

  return (
    <main className="my-[65px]">
      <section className="max-w-[1140px] mx-auto p-2.5 mt-20 mb-8 text-[18px] text-center text-black font-raleway min-h-[90vh]">
        <h2 className="font-bebas text-[45px] tracking-[1px] font-bold mb-8">
          Gallery
        </h2>
        <div className="relative">
          <div
            className={`relative overflow-hidden transition-all duration-500 ${
              seeMoreWildlife ? "max-h-[100%]" : "max-h-[400px]"
            }`}
          >
            <RGallery
              photos={photos}
              onClick={(event, atr) =>
                openImage(
                  atr.photo.src,
                  photos.map((p) => p.src)
                )
              }
              renderImage={(props) => <Photo {...props} />}
            />
          </div>

          {/* Gradient Overlay */}
          {!seeMoreWildlife && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
          )}

          {/* See More Button */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => setSeeMoreWildlife(!seeMoreWildlife)}
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300"
            >
              {seeMoreWildlife ? "See Less" : "See More"}
            </button>
          </div>
        </div>

        {/* Newspaper Cuttings Section */}
        <h2 className="font-bebas text-[45px] tracking-[1px] font-bold mb-8">
          Newspaper Cuttings
        </h2>
        <div className="relative">
          {/* Gallery with gradient overlay */}
          <div
            className={`relative overflow-hidden transition-all duration-500 ${
              seeMoreNewspaper ? "max-h-[100%]" : "max-h-[400px]"
            }`}
          >
            <RGallery
              photos={photos2}
              onClick={(event, atr) =>
                openImage(
                  atr.photo.src,
                  photos2.map((p) => p.src)
                )
              }
              renderImage={(props) => <Photo {...props} />}
            />
          </div>

          {/* Gradient Overlay */}
          {!seeMoreNewspaper && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
          )}

          {/* See More Button */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => setSeeMoreNewspaper(!seeMoreNewspaper)}
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300"
            >
              {seeMoreNewspaper ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
