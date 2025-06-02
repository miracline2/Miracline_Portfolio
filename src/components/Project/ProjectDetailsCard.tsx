import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { projects } from '../../common';
import ProjectData from './ProjectData';
import { useState, useEffect, useRef } from 'react';
import type { IprojectDetails } from '../../interface/interface';

const ProjectDetailsCard = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const getHighlightedIndex = () => {
    if (windowWidth < 768) return selectedIndex;
    if (windowWidth < 1024) return Math.floor(selectedIndex + 1);
    return Math.floor(selectedIndex + 1);
  };

  const highlightedIndex = getHighlightedIndex();

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="w-full p-4 mt-[10em]">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center ">My Projects</h2>
      <div className="mt-10 sm:px-8 md:px-0">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          grabCursor={true}
          breakpoints={{
              280: {
              slidesPerView: 1.03,
              spaceBetween: 1,
            },
              320: {
              slidesPerView: 1.05,
              spaceBetween: 15
            },
            375: {
              slidesPerView: 1.1,
              spaceBetween: 20
            },
            425: {
              slidesPerView: 1.2,
              spaceBetween: 20
            },
          
            430: {
              slidesPerView: 1.5,
              spaceBetween: 4,
            },
            500: {
              slidesPerView: 1.6,
              spaceBetween: 4,
            },
            550: {
              slidesPerView: 1.7,
              spaceBetween: 4,
            },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2.5, spaceBetween: 24 },
            1200: { slidesPerView: 3, spaceBetween: 24 },
            1400: { slidesPerView: 3.2, spaceBetween: 28 },
          }}
        >
          {projects.map((project: IprojectDetails, index: number) => (
            <SwiperSlide key={index} className="pb-12">
              <div
                onClick={() => handleCardClick(index)}
                className={`
                  shadow-xl rounded-xl p-6 
                  flex flex-col h-[400px] w-full justify-between
                  transition-all duration-300 ease-in-out
                  cursor-grabbing
                  ${
                    index === highlightedIndex
                      ? 'ring-2 ring-purple-500 scale-[1.02] shadow-purple-500/30'
                      : 'hover:scale-[1.01] hover:shadow-2xl'
                  }
                `}
              >
                <ProjectData {...project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
