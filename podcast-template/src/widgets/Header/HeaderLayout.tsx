import Navbar from "./Navbar";
import HeroShape from '@src/assets/icons/HeroShape.svg'
import Sinkle from '@src/assets/icons/ShiningStart.svg'

const HeaderLayout = ({children}: {children?:React.ReactNode}) => {
  return <div className="bg-champagne pb-6 relative min-h-[556px]">
    <div className="mx-[140px] pt-6">
        <Navbar/>
    </div>
        <img className="absolute top-24" src={HeroShape} alt="Hero Shape Icons" />
        <img className="absolute right-3 top-[250px]" src={Sinkle} alt="Hero Shape Icons" width={200} />
    {children}
  </div>;
};

export default HeaderLayout;
