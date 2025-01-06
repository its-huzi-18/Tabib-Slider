import ImageCarousel from "./ImageCarousel";

interface LayoutSectionProps {
  onCategoryClick: (category: string) => void;
}

const HeroSection  = () =>{


  return (
    <div className='w-full  flex justify-center  items-center my-1'>
    <div className='  w-full  lg:h-[600px] relative'>
      <ImageCarousel />
    </div>

    </div>
  )
}

export default HeroSection