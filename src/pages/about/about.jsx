import placeholder from "../../images/Content.png"
import placeholder2 from "../../images/Content3.png"
import theSheild from "../../images/about/shield.svg"
import massImage from "../../images/mass_service.png"
import massImage2 from "../../images/mass_service2.png"
import swimImage from "../../images/swimming.png"

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const About = (props) => {

    return(
        <div className="px-4 md:px-[50px] 2xl:px-[112px]" >
            <header>
                <Navbar />
            </header>
            <main className="text-[#171717]" >
                
                <div className="-mx-4 md:-mx-[50px] 2xl:-mx-[112px] py-8 ">                    
                    <img src={placeholder} alt="" className="min-w-full min-h-[300px] left-0 " />
                </div>

                <div className="pt-16 pb-[104px] md:px-[104px]">
                    <h2 className=" text-[40px] leading-[48px] text-[#171717] font-bold text-center mb-2" >
                        Who we are
                    </h2>
                    <div className="text-[28px] text-[#404040] ">
                        Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quam eget quisque interdum dictumst eleifend venenatis cras feugiat. Nunc diam risus sagittis in adipiscing nunc. Pharetra aliquam gravida bibendum orci diam nisi sem id. Id commodo volutpat platea nisi, nec venenatis pulvinar neque, ac. Odio dolor id potenti aliquam mi in nunc at sollicitudin. Magna felis, leo sed nec.
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between md:px-[104px] py-[104px] ">
                    <section className="" >
                        <h3 className=" text-4xl leading-[44px] font-semibold text-[#171717] mb-5 " >
                            Our Story and Mission
                        </h3>
                        <p className="max-w-[510px] text-lg text-[#404040] mb-10 ">
                            Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                            <br />
                            <br />
                            Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                            <br />
                            <br />
                            Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                            <br />
                            <br />
                            Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                        </p>
                        <img src={placeholder} alt="" className="max-w-full md:max-w-[520px] h-[264px]" />
                    </section>
                    <section>
                        <img src={theSheild} alt="The Uhere logo" className="w-[416px] h-[470px] mb-10" />
                        <h3 className=" text-4xl leading-[44px] font-semibold text-[#171717] mb-5 " >
                            The Shield
                        </h3>
                        <p className="max-w-[416px] text-lg text-[#404040] mb-10 ">
                            Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu.                                                         
                            <br />
                            <br />
                            Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                            <br />
                            <br />
                            Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. 
                        </p>
                    </section>
                </div>
                
                <div className="max-w-[800px] 2xl:max-w-[900px] mx-auto py-[104px] ">                    
                    <h4 className="text-[32px] leading-10 font-bold text-[#171717] mb-5 " >
                        Building the foundations
                    </h4>
                    <div className="text-base text-[#404040]">
                        <p className="mb-5">
                            Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quam eget quisque interdum dictumst eleifend venenatis cras feugiat. Nunc diam risus sagittis in adipiscing nunc. Pharetra aliquam gravida bibendum orci diam nisi sem id. Id commodo volutpat platea nisi, nec venenatis pulvinar neque, ac. Odio dolor id potenti aliquam mi in nunc at sollicitudin. Magna felis, leo sed nec.
                        </p>
                        <p className="text-base mb-5">
                            Here’s what dolor id potenti aliquam mi in nunc at sollicitudin:
                        </p>
                        <ul className=" list-disc pl-5 flex flex-col gap-3 mb-5 " >
                            <li>
                                <span className="text-[#171717] font-medium " >Sit mauris proin:</span> The quam dignissim nisi gravida pellentesque porta. Scelerisque porta ipsum non mattis nisi.
                            </li>
                            <li>
                                <span className="text-[#171717] font-medium " >Sit mauris proin:</span> The quam dignissim nisi gravida pellentesque porta. Scelerisque porta ipsum non mattis nisi. The quam dignissim nisi gravida pellentesque porta.
                            </li>
                            <li>
                                <span className="text-[#171717] font-medium " >Sit mauris proin:</span> Sit mauris proin: The quam dignissim nisi gravida pellentesque porta. Scelerisque porta ipsum non mattis nisi. Scelerisque porta ipsum non mattis nisi. The quam dignissim nisi gravida pellentesque porta. Scelerisque porta ipsum non mattis nisi.
                            </li>
                        </ul>
                        <p className="text-base mb-5">
                            Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quam eget quisque interdum dictumst eleifend venenatis cras feugiat. Nunc diam risus sagittis in adipiscing nunc.
                        </p>
                    </div>
                </div>

                <div className="py-[104px] flex flex-col md:flex-row justify-between gap-[72px] ">
                    <section className="flex-1" >
                        <div className="flex items-center gap-6">
                            <h3 className=" text-4xl leading-[44px] font-semibold text-[#171717] mb-5 " >
                                Our Story and Mission
                            </h3>
                            <hr className="border-1 border-[#6366F1] w-[112px] mb-[24px] " />
                        </div>
                        <p className="max-w-[700px] text-lg text-[#404040] mb-10 ">
                            Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu. 
                            <br />
                            <br />
                            Pretium, at molestie lectus feugiat egestas vestibulum malesuada lacus. Vel faucibus tempor tortor lectus eu.
                        </p>
                    </section>
                    <img src={placeholder} alt="" className="max-w-[600px] min-h-[220px] max-h-[450px] flex-1 " />
                </div>
                
                <div className="max-w-[800px] 2xl:max-w-[900px] mx-auto py-[104px] ">
                    <h5 className="text-2xl font-bold mb-4 " >
                        How we managed to create a dark mode    
                    </h5>
                    <p className="text-lg text-[#404040] mb-5 ">
                        Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quam eget quisque interdum dictumst eleifend venenatis cras feugiat. Nunc diam risus sagittis in adipiscing nunc.
                    </p>
                    <div className="flex gap-4 item min-h-fit ">                        
                        <div className="w-2 items-stretch bg-[#C7D2FE] " ></div>
                        <div>
                            <p className="text-lg text-[#171717] italic mb-4 ">
                                “Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quam eget quisque interdum dictumst eleifend venenatis cras feugiat. Nunc diam risus sagittis in adipiscing nunc.”
                            </p>
                            <p className="text-lg text-[#737373] ">
                                –– By Loki Bright    
                            </p>        
                        </div>
                    </div>
                </div>

                <div className="py-[104px] flex flex-col gap-10 items-center ">
                    <h3 className="text-4xl text-center " >
                        Memories
                    </h3>
                    {/* <div className="flex flex-col md:flex-row ">
                        {
                            galleryImages.map((item,i) => (
                                <div className="">
                                    <img src= {item} key = {i} alt = 'Gallery pics and will be changed to item.alt later' className="min-w-[176px] max-w-[405px] h-[248px] " />
                                    <img src= {galleryImages[i+1] ? galleryImages[i + 1] : galleryImages[i-2] } key = {i} alt = 'Gallery pics and will be changed to item.alt later' className="min-w-[176px] max-w-[405px] h-[248px] " />
                                </div>
                            ))
                        }
                    </div> */}
                    <div className="flex flex-wrap justify-center ">
                        <img src= {swimImage} alt = 'Gallery pics and will be changed to item.alt later' className="min-w-[176px] max-w-[405px] h-[248px] " />
                        <img src= {massImage2} alt = 'Gallery pics and will be changed to item.alt later' className="min-w-[176px] max-w-[405px] h-[248px] " />
                        <img src= {massImage} alt = 'Gallery pics and will be changed to item.alt later' className="min-w-[176px] max-w-[405px] h-[248px] " />
                        <img src= {massImage} alt = 'Gallery pics and will be changed to item.alt later' className="min-w-[176px] max-w-[405px] h-[248px] " />
                        <img src= {swimImage} alt = 'Gallery pics and will be changed to item.alt later' className="min-w-[176px] max-w-[405px] h-[248px] " />
                        <img src= {massImage2} alt = 'Gallery pics and will be changed to item.alt later' className="min-w-[176px] max-w-[405px] h-[248px] " />                        
                        <img src= {massImage2} alt = 'Gallery pics and will be changed to item.alt later' className="min-w-[176px] max-w-[405px] h-[248px] " />
                        <img src= {massImage} alt = 'Gallery pics and will be changed to item.alt later' className="min-w-[176px] max-w-[405px] h-[248px] " />
                        <img src= {swimImage} alt = 'Gallery pics and will be changed to item.alt later' className="min-w-[176px] max-w-[405px] h-[248px] " />
                    </div>
                    <button className=" px-8 py-[10px] border-[1px] rounded-md border-[#D4D4D4] text-lg font-medium text-[#404040] text-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" >
                        View more photos from the archives
                    </button>
                </div>

                <div className="max-w-[800px] 2xl:max-w-[900px] mx-auto py-[104px] ">
                    <h6 className="text-xl font-semibold mb-4">
                        Creating well documented color tokens
                    </h6>
                    <div className="text-[#404040] text-lg flex flex-col gap-5 ">
                        <p className="px-3">
                            🔥 Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quam eget quisque interdum dictumst eleifend venenatis cras feugiat.
                        </p>
                        <p className="" >
                            Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quam eget quisque interdum dictumst eleifend venenatis cras feugiat.
                        </p> 
                        <ul className=" list-decimal pl-5 flex flex-col gap-3 mb-5 " >
                            <li>
                                <span className="text-[#171717] font-medium " >Sit mauris proin:</span> The quam dignissim nisi gravida pellentesque porta. Scelerisque porta ipsum non mattis nisi.
                            </li>
                            <li>
                                <span className="text-[#171717] font-medium " >Sit mauris proin:</span> The quam dignissim nisi gravida pellentesque porta. Scelerisque porta ipsum non mattis nisi. The quam dignissim nisi gravida pellentesque porta.
                            </li>
                            <li>
                                <span className="text-[#171717] font-medium " >Sit mauris proin:</span> Sit mauris proin: The quam dignissim nisi gravida pellentesque porta. Scelerisque porta ipsum non mattis nisi. Scelerisque porta ipsum non mattis nisi. The quam dignissim nisi gravida pellentesque porta. Scelerisque porta ipsum non mattis nisi.
                            </li>
                        </ul>
                    </div>
                </div>

            </main>
            
            <footer className="bg-[#E5E5E5] -mx-4 md:-mx-[50px] 2xl:-mx-[112px] px-4 md:px-[50px] 2xl:px-[112px] " >
                <Footer />
            </footer>
        </div>
    )
}

export default About;


let galleryImages = [swimImage, massImage2, massImage]