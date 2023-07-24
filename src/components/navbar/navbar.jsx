import logo from "../../images/logo.svg"
import arrowdown from "../../images/cheveron-down.svg"

function Navbar(props){
    
    return(
        <div className="flex flex-col lg:flex-row py-[24px] item-center justify-between text-[#171717]" >
            <div className="flex gap-[10px] items-center ">
                <img src={logo} alt="Uhere logo" className="w-[35px] h-[40px] " />
                <div className="text-center ">
                    <p className=" text-xl font-bold " >UHERE</p>
                    <hr className="border-[1px] border-[#176DFF]" />
                    <p className=" text-[10px] font-medium " >STUDY CENTRE</p>
                </div>
            </div>

            <nav className="hidden md:flex flex-col lg:flex-row gap-[24px] ">
                <div className="flex items-center gap-[6px]" >
                    <span className="text-base font-medium leading-6" >About Us</span>
                    <img src={arrowdown} alt="Down arrow icon" className="w-5" />  
                </div>

                <div className="flex items-center gap-[6px]" >
                    <span className="text-base font-medium leading-6" >Prospective Students</span>
                    <img src={arrowdown} alt="Down arrow icon" className="w-5" />  
                </div>

                <div className="flex items-center gap-[6px]" >
                    <span className="text-base font-medium leading-6" >Activities</span>
                    <img src={arrowdown} alt="Down arrow icon" className="w-5" />  
                </div>

                <div className="flex items-center gap-[6px]" >
                    <span className="text-base font-medium leading-6" >Donate</span>
                </div>

                <div className="flex items-center gap-[6px]" >
                    <span className="text-base font-medium leading-6" >Contact</span>                    
                </div>

                <div className="flex items-center gap-[6px]" >
                    <span className="text-base font-medium leading-6" >News and Events</span>
                    <img src={arrowdown} alt="Down arrow icon" className="w-5" />  
                </div>
            </nav>

            <button className="hidden md:block w-[115px] h-[40px] px-5 py-2 bg-[#6366F1] text-white rounded-[6px]  " >
                Join Us
            </button>

        </div>
    )
}

export default Navbar