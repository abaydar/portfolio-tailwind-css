import { useState } from 'react';
import GroupedSkills from './groupedSkills';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface CarouselProps {
  skills: {
    [key: string]: { name: string; icon: string; alt: string }[];
  };
}

const Carousel = ({ skills }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const skillsLength = Object.keys(skills).length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsLength);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skillsLength) % skillsLength);
  };



  return (
    <div className="relative w-full max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>

    <div className="relative overflow-hidden h-64">
      {Object.entries(skills).map(([skillName, skillItems], index) => (
        <div
          key={skillName}
          className={`absolute inset-0 transition-transform transform ${
            index === currentIndex
              ? 'translate-x-0'
              : index < currentIndex
              ? '-translate-x-full'
              : 'translate-x-full'
          }`}
        >
          <GroupedSkills groupName={skillName} skills={skillItems} />
        </div>
      ))}
    </div>

    <button
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-transparent px-4 py-2 rounded text-3xl"
      onClick={prevSlide}
    >
      <IoIosArrowBack />
    </button>
    <button
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent px-4 py-2 rounded text-3xl"
      onClick={nextSlide}
    >
      <IoIosArrowForward />
    </button>
  </div>
  );
};

export default Carousel;