import placeholder from "../../images/Content.png"
import placeholder2 from "../../images/Content1.png"
import rightarrow from "../../images/right.svg"

import Navbar from "../../components/navbar/navbar";

function Home(props){
    
    return(
        <div className="px-[50px] 2xl:px-[112px]" >
            <header>
                <Navbar />
            </header>
            <main className="" >
                
                <div className="pt-[40px] pb-[104px] text-[#171717] " >
                    <img src={placeholder} alt="placeholder" className="w-full mb-[64px] " />
                    <div className="flex flex-col text-center items-center ">
                        <p className="text-[14px] font-semibold leading-5 " >
                            JOIN THE TRIBE
                        </p>
                        <h4 className=" text-[52px] font-bold leading-[56px] mb-4 " >
                            Home away from home.
                        </h4>
                        <p className="text-[#404040] text-lg mb-8 " >
                            A subheading that addresses the what, the why we should care and <br/> hopefully some social proof.
                        </p>
                        <button className="w-[250px] h-[48px] px-5 py-2 bg-[#6366F1] text-white rounded-[6px]  " >
                            Join Us
                        </button>
                    </div>
                </div>

                <div className="py-[104px] flex flex-col lg:flex-row gap-[138px] ">
                    <div className=" flex-1 py-3 ">
                        <h4 className="text-4xl font-semibold leading-[44px] mb-6 " >
                            Our Story and Mission
                        </h4>
                        <p className=" text-lg text-[#404040] mb-10 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis explicabo recusandae
                             inventore hic omnis iure eum cumque vero eius! Lorem ipsum dolor sit amet consectetur 
                             adipisicing elit. Libero, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, consequuntur?
                        </p>

                        <button className="px-8 py-2 border-[1px] border-[#D4D4D4] rounded-[6px] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]  " >
                            About Us
                        </button>
                    </div>
                    <img src={placeholder2} alt="placeholder" className="flex-1 h-[380px] w-full " />
                </div>

                <div className="py-[104px] flex flex-col lg:flex-row justify-between  ">
                    <div className="flex flex-col gap-6 justify-start w-[270px] h-[376px] ">
                        <img src={placeholder2} alt="placeholder" className="w-[270px] h-[180px]" />
                        <h5 className="text-[28px] leading-9 font-medium"> 
                            Study & work
                        </h5>
                        <p className="text-base leading-7 text-[#171717] " >
                            Meditations offered by the dif hs  of the gio dkiu aygayb  uhug ughuvu uyygeinueuyeth tttg fijfiuuuhbuubub.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 justify-start w-[270px] h-[376px] ">
                        <img src={placeholder2} alt="placeholder" className="w-[270px] h-[180px]" />
                        <h5 className="text-[28px] leading-9 font-medium"> 
                            Culture
                        </h5>
                        <p className="text-base leading-7 text-[#171717] " >
                            Meditations offered by the dif hs  of the gio dkiu aygayb  uhug ughuvu uyygeinueuyeth tttg fijfiuuuhbuubub.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 justify-start w-[270px] h-[376px] ">
                        <img src={placeholder2} alt="placeholder" className="w-[270px] h-[180px]" />
                        <h5 className="text-[28px] leading-9 font-medium"> 
                            Friendship
                        </h5>
                        <p className="text-base leading-7 text-[#171717] " >
                            Meditations offered by the dif hs  of the gio dkiu aygayb  uhug ughuvu uyygeinueuyeth tttg fijfiuuuhbuubub.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 justify-start w-[270px] h-[376px] ">
                        <img src={placeholder2} alt="placeholder" className="w-[270px] h-[180px]" />
                        <h5 className="text-[28px] leading-9 font-medium"> 
                            Spirit of service
                        </h5>
                        <p className="text-base leading-7 text-[#171717] " >
                            Meditations offered by the dif hs  of the gio dkiu aygayb  uhug ughuvu uyygeinueuyeth tttg fijfiuuuhbuubub.
                        </p>
                    </div>
                </div>

                <div className="py-[104px]">
                    <div className="flex justify-between mb-10" >
                        <span className=" text-[36px] font-semibold leading-[44px] text-[#171717] " >
                            For University Boys
                        </span>

                        <div className="flex gap-2 min-w-fit items-center cursor-pointer ">
                            <span className="text-lg font-medium leading-7 text-[#4F46E5] " >
                                See all
                            </span>
                            <img src={rightarrow} alt="Right arrow" className="w-[18px] h-[14px] " />
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row gap-8">
                        
                        <div className="flex flex-col gap-6 flex-1 ">
                            <h5 className="text-[28px] leading-9 font-medium"> Leadership Talks</h5>
                            <img src={placeholder2} alt="placeholder" className="h-[350px] " />
                            <p className="text-base leading-7 text-[#171717] " >
                                Meditations offered by the dif hs  of the gio dkiu aygayb  uhug ughuvu uyygeinueuyeth tttg fijfiuuuhbuubub 
                                uh uuugf udijiu uh fhuy uuuuh uyehtn ygyg hytftvc tvstc vtvtdj iwokk uytvecb hjksiiunuy bsygy ygsygygy 
                                ytfevdgtcv cdvcgvcgvcg dvcgvcy.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 flex-1 ">
                            <h5 className="text-[28px] leading-9 font-medium"> 
                                Sports
                            </h5>
                            <img src={placeholder2} alt="placeholder" className="h-[350px] " />
                            <p className="text-base leading-7 text-[#171717] " >
                                Meditations offered by the dif hs  of the gio dkiu aygayb  uhug ughuvu uyygeinueuyeth tttg fijfiuuuhbuubub 
                                uh uuugf udijiu uh fhuy uuuuh uyehtn ygyg hytftvc tvstc vtvtdj iwokk uytvecb hjksiiunuy bsygy ygsygygy 
                                ytfevdgtcv cdvcgvcgvcg dvcgvcy.
                            </p>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    )
}

export default Home