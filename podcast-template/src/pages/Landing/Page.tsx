import ButtonCustom from "@src/shared/ui/ButtonCustom/ButtonCustom"
import HeaderLayout from "@src/widgets/Header/HeaderLayout"

import GooglePodcast from '@src/assets/icons/GooglePodcast.svg'
import Spotify from '@src/assets/icons/Spotify.svg'
import Youtube from '@src/assets/icons/Youtube.svg'

import Scrrible2 from '@src/assets/icons/Scrrible2.svg'


const LandingPage = () => {
  return (
    <HeaderLayout>
      
      {/* Header Content  */}
      <div className="w-fit mx-auto max-w-[500px] text-center">
        <h1 className="font-bold capitalize mt-20">
          Your Daily <span className="text-vermillion">Podcast</span>
        </h1>
        <p className="max-w-[300px] mx-auto my-[60px]">
          We cover all kinds of categories and
          a weekly special guest.
        </p>
        <div className="mx-auto w-fit">
        <ButtonCustom label={"Subscribe"} shadow shadowColor="grayShadow"/>
        </div>
      </div>
      <div className="min-h-48 my-20"> 
         
      </div>

      {/* Header Footer  */}
      <div className="flex justify-between items-center mx-[140px] mt-20 mb-36 border-y-2 py-6">
          <h4  className="font-bold leading-10">Supported By:</h4>
          <div className="w-[80%] flex items-center justify-around h-[34px] space-x-5">
             <img src={Spotify} alt="spotify"className="h-[34px] ml-2"/>
             <img src={GooglePodcast} alt="google podcast"className="h-[36px] ml-2"/>
             <img src={Youtube} alt="youtube"className="h-[28px] ml-2"/>
          </div>
      </div>

      {/* Footer Icon  */}
      <img src={Scrrible2} alt="Scribble" className="absolute left-1/2 right-1/2 -bottom-16 -translate-x-1/2 h-36" />
    </HeaderLayout>
  )
}

export default LandingPage