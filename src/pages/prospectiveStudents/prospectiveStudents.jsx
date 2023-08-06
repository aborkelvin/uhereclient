import Faq from "../../components/faq/faq";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import placeholder from  "../../images/Content.png"
import videoPlaceholder from "../../images/prospectiveStudents/content.png"
import singleRoomimg from "../../images/prospectiveStudents/singleRoom.png"
import threeManRoomimg from "../../images/prospectiveStudents/threeManRoom.png"

function ProspectiveStudents(){

    return(
        <div className="px-4 md:px-[50px] 2xl:px-[112px]" >
            <header>
                <Navbar />
            </header>
            <main className="text-[#171717]" >
                
                <div className="pt-16 pb-[104px] md:px-[104px] flex flex-col items-center ">
                    <h2 className=" text-[40px] leading-[48px] text-[#171717] font-bold text-center mb-3" >
                        How we accomodate you
                    </h2>
                    <hr className="border-1 border-[#6366F1] w-[220px] mb-[24px] " />
                    <p className="text-lg text-[#404040] ">
                        Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quameget quisque interdum dictumst eleifend venenatis cras feugiat. Nunc diam risus sagittis in adipiscing nunc. Pharetra aliquam gravida bibendum orci diam nisi sem id. Id commodo volutpat platea nisi, nec venenatis pulvinar neque, ac. Odio dolor id potenti aliquam mi in nunc at sollicitudin. Magna felis, leo sed nec.
                    </p>
                </div>

                <div className=" py-[104px]" >
                    <p className=" text-4xl font-semibold mb-10" >
                        Watch a video taking you around Uhere
                    </p>                  
                    <img src = {videoPlaceholder} alt='placeholder' className="w-full" />
                </div>    

                <div className="py-16" >
                    <h2 className="text-4xl font-semibold mb-5" >
                        Bedrooms
                    </h2>
                    <div className="flex gap-6 mb-6" >
                        <section className="flex-1 md:pt-3 " >
                            <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus.
                            </p>
                        </section>
                        <section className="flex-1" >
                            <Faq title = 'Single Room' />
                            <Faq title = 'Three-man Room' />
                        </section>
                    </div>
                    <div className="flex gap-8 ">
                        <img src={singleRoomimg} alt="single room" className="flex-1" />
                        <img src={threeManRoomimg} alt="three man room" className="flex-1" />
                    </div>
                </div>  

                <div className="py-16" >
                    <div className="flex items-center gap-6 mb-5 ">
                        <h2 className="text-4xl font-semibold" >
                            Seamfix Library
                        </h2>
                        <hr className="border-1 border-[#6366F1] w-[108px]" />
                    </div>
                    <div className="flex justify-between md:gap-[92px] mb-10 " >
                        <section className="max-w-[728px] 2xl:max-w-[850px] " >
                            <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                                <br />
                                <br />
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                            </p>
                        </section>
                        <section>
                            <img src={placeholder} alt="" className="max-w-[416px] md:min-h-[208px] mb-4 " />
                            <p className="text-[#737373]">
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus.
                            </p>
                        </section>
                    </div>
                    <img src={placeholder} alt="" className="w-full" />
                </div>  

                <div className="py-16 flex justify-between gap-[72px] ">
                    <section className="max-w-[630px] 2xl:max-w-[680px] flex-1 md:pt-6 " >
                        <div className="flex items-center gap-6 mb-5 ">
                            <h2 className="text-4xl font-semibold" >
                                Study Rooms
                            </h2>
                            <hr className="border-1 border-[#6366F1] w-[108px]" />
                        </div>
                        <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                        </p>
                    </section>
                    <section className="flex-1 max-w-[520px] md:min-h-[352px] mb-4 " >
                        <img src={placeholder} alt="" className="w-full h-full " />
                    </section>                    
                </div>        

                <div className="py-16 flex justify-between gap-[72px] ">
                    <section className="flex-1 max-w-[520px] md:min-h-[352px] mb-4 " >
                        <img src={placeholder} alt="" className="w-full h-full " />
                    </section>
                    <section className="max-w-[630px] 2xl:max-w-[680px] flex-1 md:pt-6 " >
                        <div className="flex items-center gap-6 mb-5 ">
                            <h2 className="text-4xl font-semibold" >
                                Computer Room
                            </h2>
                            <hr className="border-1 border-[#6366F1] w-[108px]" />
                        </div>
                        <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                        </p>
                    </section>                                    
                </div>                

                <div className="py-16 flex flex-col gap-10 ">
                    <section className="max-w-[800px] 2xl:max-w-[1000px] flex-1 md:pt-6 " >
                        <div className="flex items-center gap-6 mb-5 ">
                            <h2 className="text-4xl font-semibold" >
                                Oratory
                            </h2>
                            <hr className="border-1 border-[#6366F1] w-[108px]" />
                        </div>
                        <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                        </p>
                    </section>
                    <section className="flex-1 w-full md:min-h-[352px] max-h-[520px] mb-4 " >
                        <img src={placeholder} alt="" className="w-full h-full " />
                    </section>                    
                </div>

                <div className="py-16 flex justify-between gap-[72px] ">
                    <section className="max-w-[630px] 2xl:max-w-[680px] flex-1 md:pt-6 " >
                        <div className="flex items-center gap-6 mb-5 ">
                            <h2 className="text-4xl font-semibold" >
                                Main Sitting Room
                            </h2>
                            <hr className="border-1 border-[#6366F1] w-[108px]" />
                        </div>
                        <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                        </p>
                    </section>
                    <section className="flex-1 max-w-[520px] md:min-h-[352px] mb-4 " >
                        <img src={placeholder} alt="" className="w-full h-full " />
                    </section>                    
                </div>   

                <div className="py-16 flex justify-between gap-[72px] ">
                    <section className="flex-1 max-w-[520px] md:min-h-[352px] mb-4 " >
                        <img src={placeholder} alt="" className="w-full h-full " />
                    </section>
                    <section className="max-w-[630px] 2xl:max-w-[680px] flex-1 md:pt-6 " >
                        <div className="flex items-center gap-6 mb-5 ">
                            <h2 className="text-4xl font-semibold" >
                                Chat Rooms
                            </h2>
                            <hr className="border-1 border-[#6366F1] w-[108px]" />
                        </div>
                        <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                        </p>
                    </section>                                    
                </div>     

                <div className="py-16 flex justify-between gap-[72px] ">
                    <section className="max-w-[630px] 2xl:max-w-[680px] flex-1 md:pt-6 " >
                        <div className="flex items-center gap-6 mb-5 ">
                            <h2 className="text-4xl font-semibold" >
                               Terrace
                            </h2>
                            <hr className="border-1 border-[#6366F1] w-[108px]" />
                        </div>
                        <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                        </p>
                    </section>
                    <section className="flex-1 max-w-[520px] md:min-h-[352px] mb-4 " >
                        <img src={placeholder} alt="" className="w-full h-full " />
                    </section>                    
                </div>     

                <div className="py-16 flex justify-between gap-[72px] ">
                    <section className="flex-1 max-w-[520px] md:min-h-[352px] mb-4 " >
                        <img src={placeholder} alt="" className="w-full h-full " />
                    </section>
                    <section className="max-w-[630px] 2xl:max-w-[680px] flex-1 md:pt-6 " >
                        <div className="flex items-center gap-6 mb-5 ">
                            <h2 className="text-4xl font-semibold" >
                                Dining Room
                            </h2>
                            <hr className="border-1 border-[#6366F1] w-[108px]" />
                        </div>
                        <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                        </p>
                    </section>                                    
                </div>

                <div className="py-16 flex flex-col gap-10 ">
                    <section className="max-w-[800px] 2xl:max-w-[1000px] flex-1 md:pt-6 " >
                        <div className="flex items-center gap-6 mb-5 ">
                            <h2 className="text-4xl font-semibold" >
                                Sports Pitch
                            </h2>
                            <hr className="border-1 border-[#6366F1] w-[108px]" />
                        </div>
                        <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                        </p>
                    </section>
                    <section className="flex-1 w-full md:min-h-[352px] max-h-[520px] mb-4 " >
                        <img src={placeholder} alt="" className="w-full h-full " />
                    </section>                    
                </div>      

                <div className="py-16 ">
                    <div className="flex items-center gap-6 mb-5 ">
                        <h2 className="text-4xl font-semibold" >
                            Other Facilities
                        </h2>
                        <hr className="border-1 border-[#6366F1] w-[108px]" />
                    </div>
                    <ul className=" list-disc pl-5 flex flex-col gap-3 max-w-[800px] 2xl:max-w-[1000px] " >
                        <li>
                            <span className="text-[#171717] font-medium " >Laundry:</span> The quam dignissim nisi gravida pellentesque porta. Scelerisque porta ipsum non mattis nisi.
                        </li>
                        <li>
                            <span className="text-[#171717] font-medium " >Kitchen:</span> The quam dignissim nisi gravida pellentesque porta. Scelerisque porta ipsum non mattis nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </li>
                    </ul>
                </div>                                

            </main>

            <footer className="bg-[#E5E5E5] -mx-4 md:-mx-[50px] 2xl:-mx-[112px] px-4 md:px-[50px] 2xl:px-[112px] " >
                <Footer />
            </footer>
            

        </div>
    )
}

export default ProspectiveStudents;