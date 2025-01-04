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
  const slidesPerView = isTabletOrMobile ? 1 : 1.75;
  return (
    <div className=''>
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        // effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        loop={true}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        pagination={{ clickable: true }}
      >
        {Object.entries(skills).map(([skillName, skillItems], index) => (
          <SwiperSlide key={index}>
            <GroupedSkills groupName={skillName} skills={skillItems} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsCarousel;