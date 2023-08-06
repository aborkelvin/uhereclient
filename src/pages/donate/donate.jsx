import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import placeholder from "../../images/Content.png"

function Donate(props){

    return(
        <div className="px-4 md:px-[50px] 2xl:px-[112px]" >
            <header>
                <Navbar />
            </header>
            <main className="text-[#171717]" >
                
                <div className="pt-16 pb-[104px] md:px-[104px] flex flex-col items-center ">
                    <h1 className=" text-[40px] leading-[48px] text-[#171717] font-bold text-center mb-3" >
                        We need your help
                    </h1>
                    <hr className="border-1 border-[#6366F1] w-[220px] mb-6 " />
                    <p className="text-lg text-[#404040] mb-6 ">
                        Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quameget quisque interdum dictumst eleifend venenatis cras feugiat. Nunc diam risus sagittis in adipiscing nunc. Pharetra aliquam gravida bibendum orci diam nisi sem id. Id commodo volutpat platea nisi, nec venenatis pulvinar neque, ac. Odio dolor id potenti aliquam mi in nunc at sollicitudin. Magna felis, leo sed nec.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, temporibus.
                    </p>
                    <button className="py-2 px-8 rounded-md border-[1px] border-[#818CF8] text-[#6366F1] text-sm font-medium " >
                        Learn more
                    </button>
                </div>

                <div className="py-[104px]" >                    
                    <h2 className="mb-10 text-4xl text-center font-medium " >
                        Here's how you can help
                    </h2>
                    <div className="mb-10 flex flex-col md:flex-row md:flex-wrap md:justify-between gap-8" >
                        <div className="flex flex-col gap-5 md:max-w-[48%] " >
                            <img src={placeholder} alt="" className="max-w-full min-h-[170px] " />
                            <div className="flex items-center gap-6">
                                <h3 className="text-[32px] font-medium" >
                                    Home Administration
                                </h3>
                                <hr className="border-1 border-[#6366F1] w-[108px]" />
                            </div>
                            <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                            </p>
                            <button className="py-2 px-8 w-fit rounded-md border-[1px] border-[#818CF8] text-[#6366F1] text-sm font-medium " >
                                Donate
                            </button>
                        </div>
                        <div className="flex flex-col gap-5 md:max-w-[48%] " >
                            <img src={placeholder} alt="" className="max-w-full min-h-[170px] " />
                            <div className="flex items-center gap-6">
                                <h3 className="text-[32px] font-medium" >
                                    Power Supply Project
                                </h3>
                                <hr className="border-1 border-[#6366F1] w-[108px]" />
                            </div>
                            <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                            </p>
                            <button className="py-2 px-8 w-fit rounded-md border-[1px] border-[#818CF8] text-[#6366F1] text-sm font-medium " >
                                Donate
                            </button>
                        </div>
                        <div className="flex flex-col gap-5 md:max-w-[48%] " >
                            <img src={placeholder} alt="" className="max-w-full min-h-[170px] " />
                            <div className="flex items-center gap-6">
                                <h3 className="text-[32px] font-medium" >
                                    Scholarship Sponsorship
                                </h3>
                                <hr className="border-1 border-[#6366F1] w-[108px]" />
                            </div>
                            <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                            </p>
                            <button className="py-2 px-8 w-fit rounded-md border-[1px] border-[#818CF8] text-[#6366F1] text-sm font-medium " >
                                Donate
                            </button>
                        </div>
                        <div className="flex flex-col gap-5 md:max-w-[48%] " >
                            <img src={placeholder} alt="" className="max-w-full min-h-[170px] " />
                            <div className="flex items-center gap-6">
                                <h3 className="text-[32px] font-medium" >
                                    Retreat Sponsorship
                                </h3>
                                <hr className="border-1 border-[#6366F1] w-[108px]" />
                            </div>
                            <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                            </p>
                            <button className="py-2 px-8 w-fit rounded-md border-[1px] border-[#818CF8] text-[#6366F1] text-sm font-medium " >
                                Donate
                            </button>
                        </div>
                        
                    </div>
                </div>

                <div className="py-[104px]" >                    
                    <h2 className="mb-10 text-4xl text-center font-medium " >
                        Other ways of helping
                    </h2>
                    <div className="mb-10 flex flex-col md:flex-row gap-8" >
                        <div className="flex flex-col gap-5" >
                            <img src={placeholder} alt="" className="w-full min-h-[170px] " />
                            <div className="flex items-center gap-6">
                                <h3 className="text-[32px] font-medium" >
                                    Gifts
                                </h3>
                                <hr className="border-1 border-[#6366F1] w-[108px]" />
                            </div>
                            <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                            </p>
                            <button className="py-2 px-8 w-fit rounded-md border-[1px] border-[#818CF8] text-[#6366F1] text-sm font-medium " >
                                Contact
                            </button>
                        </div>
                        <div className="flex flex-col gap-5" >
                            <img src={placeholder} alt="" className="w-full min-h-[170px] " />
                            <div className="flex items-center gap-6">
                                <h3 className="text-[32px] font-medium" >
                                    Leaving a bequest
                                </h3>
                                <hr className="border-1 border-[#6366F1] w-[108px]" />
                            </div>
                            <p className="text-[#404040] text-lg " >
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                                Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                            </p>
                            <button className="py-2 px-8 w-fit rounded-md border-[1px] border-[#818CF8] text-[#6366F1] text-sm font-medium " >
                                Contact
                            </button>
                        </div>
                    </div>
                    <img src={placeholder} alt="" className="mb-6 w-full max-h-[280px] min-h-[170px] " />
                    <h4 className="mb-[10px] text-center text-[32px] font-medium " >
                        Volunteering
                    </h4>
                    <hr className="border-1 border-[#6366F1] w-[108px] mb-5 mx-auto " />
                    <div className="mb-6 max-w-[800px] 2xl:max-w-[900px] mx-auto text-[#404040] text-lg flex flex-col gap-5 ">                        
                        <p className="" >
                            Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, a?
                        </p> 
                        <ul className=" list-disc pl-5 flex flex-col gap-3 mb-5 " >
                            <li>
                                <span className=" " >Sit mauris proin:</span> The quam dignissim nisi gravida pellentesque porta. Scelerisque porta ipsum non mattis nisi.
                            </li>
                            <li>
                                <span className=" " >Sit mauris proin:</span> The quam dignissim nisi gravida pellentesque porta. Scelerisque porta ipsum non mattis nisi. The quam dignissim nisi gravida pellentesque porta.
                            </li>
                            <li>
                                <span className=" " >Sit mauris proin:</span> Sit mauris proin: The quam dignissim nisi gravida pellentesque porta. Scelerisque porta ipsum non mattis nisi. Scelerisque porta ipsum non mattis nisi. The quam dignissim nisi gravida pellentesque porta. Scelerisque porta ipsum non mattis nisi.
                            </li>
                        </ul>
                    </div>
                    <button className="py-2 px-8 mx-auto block rounded-md border-[1px] border-[#818CF8] text-[#6366F1] text-sm font-medium " >
                        Contact
                    </button>
                </div>

            </main>
            <footer className="bg-[#E5E5E5] -mx-4 md:-mx-[50px] 2xl:-mx-[112px] px-4 md:px-[50px] 2xl:px-[112px] " >
                <Footer />
            </footer>
        </div>
    )
}

export default Donate;