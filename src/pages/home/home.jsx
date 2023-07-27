import placeholder from "../../images/Content.png"
import placeholder2 from "../../images/Content1.png"
import placeholder3 from "../../images/Content3.png"
import rightarrow from "../../images/right.svg"


import Navbar from "../../components/navbar/navbar";
import Faq from "../../components/faq/faq";
import Event from "../../components/event/event";
import { useMediaQuery } from "react-responsive";
import NewsAndStories from "../../components/newsAndStories/newsAndStories";
import Footer from "../../components/footer/footer";

function Home(props){

    const isMobile = useMediaQuery({
        query:'(max-width:640px)'
    })
    
    const numNewsToShow = isMobile ? 2 : 4
    const numEventsToShow = isMobile ? 3 : 5

    return(
        <div className="px-4 md:px-[50px] 2xl:px-[112px]" >
            <header>
                <Navbar />
            </header>
            <main className="" >
                
                <div className="pt-4 md:pt-[40px] pb-16 md:pb-[104px] text-[#171717] " >
                    <img src={placeholder} alt="placeholder" className="w-full min-h-[240px] mb-8 md:mb-16 rounded-lg " />
                    <div className="flex flex-col text-center items-center ">
                        <p className="text-[14px] font-semibold leading-5 text-[#404040] " >
                            JOIN THE TRIBE
                        </p>
                        <h4 className=" text-[32px] md:text-[52px] text-[#171717] font-bold lading-10 md:leading-[56px] mb-2 md:mb-4 " >
                            Home away from home.
                        </h4>
                        <p className="text-[#404040] text-base mb-4 md:mb-8 " >
                            A subheading that addresses the what, the why we should care and <br className="hidden md:block " /> hopefully some social proof.
                        </p>
                        <button className="w-[172px] md:w-[250px] h-10 md:h-[48px] font-medium px-5 py-2 bg-[#6366F1] text-white rounded-[6px]  " >
                            Join Us!
                        </button>
                    </div>
                </div>

                <div className="py-16 md:py-[104px] flex flex-col lg:flex-row gao-6 lg:gap-[138px] ">
                    <div className=" flex-1 shrink-0 py-3 order-2 md:order-1 ">
                        <h4 className="text-3xl md:text-4xl font-semibold mb-3 md:mb-6 " >
                            Our Story and Mission
                        </h4>
                        <p className=" text-base md:text-lg text-[#404040] mb-6 md:mb-10 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis explicabo recusandae
                             inventore hic omnis iure eum cumque vero eius! Lorem ipsum dolor sit amet consectetur 
                             adipisicing elit. Libero, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, consequuntur?
                        </p>

                        <button className="px-8 py-2 border-[1px] border-[#D4D4D4] rounded-[6px] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]  " >
                            About Us
                        </button>
                    </div>
                    <img src={placeholder} alt="placeholder" className="order-1 md:order-2 flex-1 min-h-[180px] md:h-[380px] w-full max-w-[620px] rounded-lg " />
                </div>

                <div className="py-16 md:py-[104px] flex flex-row flex-wrap md:flex-row justify-center md:justify-between gap-8  ">
                    <div className="flex flex-col justify-start w-full sm:w-[270px] md:h-[376px] ">
                        <img src={placeholder2} alt="placeholder" className=" w-full h-[180px] mb-3 md:mb-6 " />
                        <h5 className="text-[28px] leading-9 font-medium mb-1 md:mb-4 "> 
                            Study & work
                        </h5>
                        <p className="text-base md:leading-7 text-[#171717] " >
                            Meditations offered by the dif hs  of the gio dkiu aygayb  uhug ughuvu uyygeinueuyeth tttg fijfiuuuhbuubub.
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>

                    <div className="flex flex-col justify-start w-full sm:w-[270px] md:h-[376px] ">
                        <img src={placeholder2} alt="placeholder" className=" w-full h-[180px] mb-3 md:mb-6 " />
                        <h5 className="text-[28px] leading-9 font-medium mb-1 md:mb-4 "> 
                            Culture
                        </h5>
                        <p className="text-base md:leading-7 text-[#171717] " >
                            Meditations offered by the dif hs  of the gio dkiu aygayb  uhug ughuvu uyygeinueuyeth tttg fijfiuuuhbuubub.
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>

                    <div className="flex flex-col justify-start w-full sm:w-[270px] md:h-[376px] ">
                        <img src={placeholder2} alt="placeholder" className=" w-full h-[180px] mb-3 md:mb-6 " />
                        <h5 className="text-[28px] leading-9 font-medium mb-1 md:mb-4 "> 
                            Friendship
                        </h5>
                        <p className="text-base md:leading-7 text-[#171717] " >
                            Meditations offered by the dif hs  of the gio dkiu aygayb  uhug ughuvu uyygeinueuyeth tttg fijfiuuuhbuubub.
                        </p>
                    </div>

                    <div className="flex flex-col justify-start w-full sm:w-[270px] md:h-[376px] ">
                        <img src={placeholder2} alt="placeholder" className=" w-full h-[180px] mb-3 md:mb-6 " />
                        <h5 className="text-[28px] leading-9 font-medium mb-1 md:mb-4 "> 
                            Spirit of service
                        </h5>
                        <p className="text-base md:leading-7 text-[#171717] " >
                            Meditations offered by the dif hs  of the gio dkiu aygayb  uhug ughuvu uyygeinueuyeth tttg fijfiuuuhbuubub.
                        </p>
                    </div>
                </div>

                <div className=" py-16 md:py-[104px] bg-gray-100 -mx-4 md:-mx-[50px] 2xl:-mx-[112px] px-4 md:px-[50px] 2xl:px-[112px] ">
                    <div className="flex justify-between mb-10" >
                        <span className=" text-[28px] sm:text-[36px] font-semibold leading-9 sm:leading-[44px] text-[#171717] " >
                            For University Boys
                        </span>

                        <div className="flex gap-2 min-w-fit items-center cursor-pointer ">
                            <span className="text-sm md:text-lg font-medium leading-7 text-[#4F46E5] " >
                                See all
                            </span>
                            <img src={rightarrow} alt="Right arrow" className="w-[14px] md:w-[18px] h-[10px] md:h-[14px] " />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8  ">
                        
                        <div className="flex flex-col gap-6 flex-1 bg-white p-4 md:p-6 rounded-xl shadow-[0px_4px_6px_-1px_rgba(16,24,40,0.10)] ">
                            <h5 className=" text-2xl md:text-[28px] md:leading-9 font-medium"> 
                                Leadership Talks
                            </h5>
                            <img src={placeholder3} alt="placeholder" className="min-h-[180px] md:h-[320px] rounded-t-lg " />
                            <p className="text-base md:leading-7 text-[#171717] " >
                                Meditations offered by the dif hs  of the gio dkiu aygayb  uhug ughuvu uyygeinueuyeth tttg fijfiuuuhbuubub 
                                uh uuugf udijiu uh fhuy uuuuh uyehtn ygyg hytftvc tvstc vtvtdj iwokk uytvecb hjksiiunuy bsygy ygsygygy 
                                ytfevdgtcv cdvcgvcgvcg dvcgvcy.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 flex-1 bg-white p-4 md:p-6 rounded-xl shadow-[0px_4px_6px_-1px_rgba(16,24,40,0.10)] ">
                            <h5 className=" text-2xl md:text-[28px] md:leading-9 font-medium"> 
                                Sports
                            </h5>
                            <img src={placeholder3} alt="placeholder" className="min-h-[180px] md:h-[320px] rounded-t-lg " />
                            <p className="text-base md:leading-7 text-[#171717] " >
                                Meditations offered by the dif hs  of the gio dkiu aygayb  uhug ughuvu uyygeinueuyeth tttg fijfiuuuhbuubub 
                                uh uuugf udijiu uh fhuy uuuuh uyehtn ygyg hytftvc tvstc vtvtdj iwokk uytvecb hjksiiunuy bsygy ygsygygy 
                                ytfevdgtcv cdvcgvcgvcg dvcgvcy.
                            </p>
                        </div>

                    </div>
                </div>

                <div className=" py-16 md:py-[104px] flex flex-col lg:flex-row justify-between gap-6 lg:gap-[138px]  ">
                    <img src={placeholder2} alt="placeholder" className="w-full flex-1 h-[350px] " />
                    <div className="flex flex-col py-2 gap-3 md:gap-6 flex-1 ">
                        <h5 className="text-3xl md:text-4xl font-semibold md:font-bold">
                            Target Audience
                        </h5>
                        <p className="text-base md:text-lg text-[#404040] mb-3 ">
                            Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu.
                             Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, magni?
                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis minima, non dignissimos sunt hic fuga odit ad illum modi molestiae?
                        </p>
                        <button className="px-8 py-2 border-[1px] w-fit border-[#D4D4D4] rounded-[6px] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]  " >
                            About Us
                        </button>
                    </div>
                </div>

                <div className="py-16 md:py-[104px] bg-gray-100 -mx-4 md:-mx-[50px] 2xl:-mx-[112px] px-4 md:px-[50px] 2xl:px-[112px] ">
                    <div className="flex justify-between mb-10" >
                        <span className=" text-[28px] sm:text-[36px] font-semibold sm:leading-[44px] text-[#171717] " >
                            {isMobile ? 'For Sec. School Boys' :'For Secondary School Boys'}
                        </span>

                        <div className="flex gap-2 min-w-fit items-center cursor-pointer ">
                            <span className="text-sm md:text-lg font-medium leading-7 text-[#4F46E5] " >
                                See all
                            </span>
                            <img src={rightarrow} alt="Right arrow" className="w-[14px] md:w-[18px] h-[10px] md:h-[14px] " />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8  ">
                        
                        <div className="flex flex-col gap-6 flex-1 bg-white p-4 md:p-6 rounded-xl shadow-[0px_4px_6px_-1px_rgba(16,24,40,0.10)] ">
                            <h5 className=" text-2xl md:text-[28px] md:leading-9 font-medium"> 
                                Guided Study Program (GSP)
                            </h5>
                            <img src={placeholder3} alt="placeholder" className="min-h-[180px] md:h-[320px] rounded-t-lg " />
                            <p className="text-base md:leading-7 text-[#171717] " >
                                Meditations offered by the dif hs  of the gio dkiu aygayb  uhug ughuvu uyygeinueuyeth tttg fijfiuuuhbuubub 
                                uh uuugf udijiu uh fhuy uuuuh uyehtn ygyg hytftvc tvstc vtvtdj iwokk uytvecb hjksiiunuy bsygy ygsygygy 
                                ytfevdgtcv cdvcgvcgvcg dvcgvcy.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 flex-1 bg-white p-4 md:p-6 rounded-xl shadow-[0px_4px_6px_-1px_rgba(16,24,40,0.10)] ">
                            <h5 className=" text-2xl md:text-[28px] md:leading-9 font-medium"> 
                                Sports
                            </h5>
                            <img src={placeholder3} alt="placeholder" className="min-h-[180px] md:h-[320px] rounded-t-lg " />
                            <p className="text-base md:leading-7 text-[#171717] " >
                                Meditations offered by the dif hs  of the gio dkiu aygayb  uhug ughuvu uyygeinueuyeth tttg fijfiuuuhbuubub 
                                uh uuugf udijiu uh fhuy uuuuh uyehtn ygyg hytftvc tvstc vtvtdj iwokk uytvecb hjksiiunuy bsygy ygsygygy 
                                ytfevdgtcv cdvcgvcgvcg dvcgvcy.
                            </p>
                        </div>

                    </div>

                </div>
                
                <div className=" h-[370px] md:h-[600px] bg-blue-100 -mx-4 md:-mx-[50px] 2xl:-mx-[112px] 
                        bg-[url('images/home/bgimg.png')] md:bg-cover flex" >
                    <div className="bg-[rgba(23,23,23,0.80)] w-full md:w-1/2 text-center px-5 md:px-8 lg:px-16 flex flex-col items-center justify-center text-white ">
                        <p className="font-medium text-lg md:text-3xl mb-[23px]">
                            Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                        </p>
                        <hr className="border border-1 border-[#6366F1] w-[200px] mb-[24px] " />
                        <p className=" text-2xl font-bold mb-2 "> 
                            Olisa Udeh-Nrji
                        </p>
                        <p className="text-xl font-medium" >
                            Computer Science, First Year
                        </p>
                    </div>
                </div>

                <div className="py-16 md:py-[104px]">
                    <div className="flex justify-between mb-10" >
                        <span className=" text-[28px] sm:text-[36px] font-semibold sm:leading-[44px] text-[#171717] " >
                            Explore our facilities
                        </span>

                        <div className="flex gap-2 min-w-fit items-center cursor-pointer ">
                            <span className="text-sm md:text-lg font-medium leading-7 text-[#4F46E5] " >
                                See all
                            </span>
                            <img src={rightarrow} alt="Right arrow" className="w-[14px] md:w-[18px] h-[10px] md:h-[14px] " />
                        </div>
                    </div>

                    <div className=" flex flex-row flex-wrap lg:flex-row justify-between gap-8  ">                    
                        <div className="flex flex-col gap-4 md:gap-6 justify-start w-[380px]">
                            <img src={placeholder2} alt="placeholder" className="w-3/4 md:w-full h-[240px] md:h-[253px]" />
                            <h5 className=" text-2xl md:text-[28px] md:leading-9 font-medium">
                                Library
                            </h5>                            
                        </div>
                        <div className="flex flex-col gap-4 md:gap-6 justify-start w-[380px]">
                            <img src={placeholder2} alt="placeholder" className="w-3/4 md:w-full h-[240px] md:h-[253px]" />
                            <h5 className=" text-2xl md:text-[28px] md:leading-9 font-medium">
                                Computer Room
                            </h5>                            
                        </div>
                        <div className="flex flex-col gap-4 md:gap-6 justify-start w-[380px]">
                            <img src={placeholder2} alt="placeholder" className="w-3/4 md:w-full h-[240px] md:h-[253px]" />
                            <h5 className=" text-2xl md:text-[28px] md:leading-9 font-medium">
                                Serviced Bedrooms
                            </h5>                            
                        </div>
                    </div>
                </div>

                <div className="py-16 md:py-[104px] flex flex-col items-center gap-10 ">
                    <h4 className=" text-3xl md:text-4xl font-semibold text-center " >
                        Memories
                    </h4>
                    <div className="flex flex-col lg:flex-row md:h-[340px] text-white w-full ">
                        <div className="bg-[url('images/mass_service.png')] bg-cover flex-1 rounded-t-md md:rounded-tr-none md:rounded-l-md ">
                            <div className="py-10 flex flex-col items-center justify-center h-full bg-[rgba(23,23,23,0.80)] rounded-t-md md:rounded-tr-none md:rounded-l-md ">
                                <p className="font-semibold text-xl text-center mb-2">
                                    Mass of St.<br className="hidden md:block" /> Josemaria,<br className="hidden md:block" /> 2023
                                </p>
                                <hr className="border border-1 border-[#818CF8] w-[100px] mb-2 " />
                                <p className="mb-6 text-center ">
                                    Special <br className="hidden md:block" />Masses
                                </p>
                                <button className="px-8 py-2 border-[1px] border-[#D4D4D4] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]  " >
                                    View
                                </button>
                                
                            </div>
                        </div>
                        <div className="bg-[url('images/swimming.png')] bg-cover flex-1">
                            <div className="py-10 flex flex-col items-center justify-center h-full bg-[rgba(23,23,23,0.80)] ">
                                <p className="font-semibold text-xl text-center mb-2">
                                    Went<br className="hidden md:block" /> Swimming
                                </p>
                                <hr className="border border-1 border-[#818CF8] w-[100px] mb-2 " />
                                <p className="mb-6 text-center ">
                                    Outdoor <br className="hidden md:block" />Activities
                                </p>
                                <button className="px-8 py-2 border-[1px] border-[#D4D4D4] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]  " >
                                    View
                                </button>
                                
                            </div>
                        </div>
                        <div className="bg-[url('images/mass_service2.png')] bg-cover flex-1 rounded-b-md md:rounded-b-none md:rounded-r-md ">
                            <div className="py-10 flex flex-col items-center justify-center h-full bg-[rgba(23,23,23,0.80)] rounded-b-md md:rounded-b-none md:rounded-r-md ">
                                <p className="font-semibold text-xl text-center mb-2">
                                    Mass of St.<br className="hidden md:block" />Josemaria,<br className="hidden md:block" /> 2023
                                </p>
                                <hr className="border border-1 border-[#818CF8] w-[100px] mb-2 " />
                                <p className="mb-6 text-center ">
                                    Special <br/>Masses
                                </p>
                                <button className="px-8 py-2 border-[1px] border-[#D4D4D4] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]  " >
                                    View
                                </button>                                
                            </div>
                        </div>                        
                    </div>
                    <button className="px-8 py-2 w-fit border-[1px] border-[#D4D4D4] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]  " >
                        View All
                    </button>
                </div>

                <div className="py-16 md:py-[104px] flex flex-col items-center ">
                    <h4 className="text-xl md:text-4xl font-extrabold text-center text-[#171717] mb-5 md:mb-8 ">
                        Frequently Asked Questions
                    </h4>
                    <div className="px-3 md:px-0 w-full md:w-3/4 max-w-[800px] 2xl:max-w-[1200px] ">
                        <Faq />
                        <Faq />
                        <Faq />
                        <Faq />
                        <Faq />
                    </div>
                </div>

                <div className="py-16 md:py-[104px]">                    
                    <div className="flex gap-1 justify-between mb-10" >
                        <span className=" text-[28px] sm:text-[36px] font-semibold leading-9 sm:leading-[44px] text-[#171717] " >
                            What’s happening at Uhere
                        </span>

                        <div className="flex gap-2 min-w-fit items-center cursor-pointer ">
                            <span className="text-sm md:text-lg font-medium leading-7 text-[#4F46E5] " >
                                Visit blog
                            </span>
                            <img src={rightarrow} alt="Right arrow" className="w-[14px] md:w-[18px] h-[10px] md:h-[14px] " />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 md:gap-10 ">                        
                        <section className="flex-1 flex flex-col gap-6 ">
                            <h5 className="text-xl md:text-[28px] font-medium md:leading-9 " >
                                News & Stories
                            </h5>                            
                            <div className="flex gap-8 flex-wrap ">
                                {
                                    // Change the 1234 to news item array later
                                    [1,2,3,4].slice(0, numNewsToShow).map((item,i)=>(
                                        <NewsAndStories key={i} />                                        
                                    ))
                                }
                            </div>
                            <button className="px-8 w-[598px] max-w-full py-2 border-[1px] border-[#D4D4D4] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]  " >
                                View all news
                            </button>
                        </section>

                        <section className="flex-1 flex flex-col gap-6 ">
                            <h5 className=" text-xl md:text-[28px] font-medium lmd:leading-9 " >
                                Events
                            </h5>
                            <div className="flex flex-col justify-between gap-6 md:h-[604px] ">
                                {
                                    // Change the 1234 to events item array later
                                    [1,2,3,4,5].slice(0, numEventsToShow).map((item,i)=>(
                                        <Event key={i} />                                        
                                    ))
                                }
                            </div>

                            <button className="px-8 py-2 border-[1px] border-[#D4D4D4] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]  " >
                                View all events
                            </button>

                        </section>                    
                    </div>
                </div>

                <div className="py-16 md:py-[104px]">
                    <div className="flex flex-col text-center items-center ">
                        <p className="text-[14px] text-[#404040] font-semibold leading-5 " >
                            JOIN THE TRIBE
                        </p>
                        <h4 className="text-[32px] md:text-[52px] font-bold md:leading-[56px] mb-4 -tracking-[0.64px] " >
                            { isMobile ? 'Home away from home.':'Frequent Uhere'}
                        </h4>
                        <p className="text-[#404040] text-base md:text-lg mb-4 md:mb-8 " >
                            Apply to become a library user, a resident or a boys club member. Or <br className="hidden md:block" /> 
                            perhaps you want to sign up for the vacation program; the button is below.
                        </p>
                        <button className="w-[250px] h-[48px] px-5 py-2 bg-[#6366F1] text-white rounded-[6px]  " >
                            Join Us!
                        </button>
                    </div>
                </div>               
            </main>
            
            <footer className="bg-[#E5E5E5] -mx-4 md:-mx-[50px] 2xl:-mx-[112px] px-4 md:px-[50px] 2xl:px-[112px] " >
                <Footer />
            </footer>
        </div>
    )
}

export default Home