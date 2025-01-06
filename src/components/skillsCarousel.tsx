import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import GroupedSkills from './groupedSkills';
import { useMediaQuery } from 'react-responsive';

interface CarouselProps {
  skills: {
    [key: string]: { name: string; icon: string; alt: string }[];
  };
}

const SkillsCarousel = ({ skills }: CarouselProps) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const slidesPerView = isTabletOrMobile ? 1 : 2.5;
  return (
    <div className='mx-auto lg:w-screen lg:-mx-[50vw] lg:left-1/2 lg:relative'>
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        loop={true}
        pagination={{ clickable: true }}
        className='xl:pt-20 lg:pt-8'
      >
        {Object.entries(skills).map(([skillName, skillItems], index) => (
          <SwiperSlide key={index} className='bg-gradient-to-r from-gradientDarkBlue to-gradientLightBlue text-lightBlue p-8 mb-10 lg:mb-16'>
            <GroupedSkills groupName={skillName} skills={skillItems} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsCarousel;