
const Event = (props) => {

    return(
        <div className="flex gap-6 w-full items-center ">
            <div className="w-[68px] h-[80px] bg-[#A5B4FC] rounded-md px-1 flex items-center justify-center ">
                <p className="text-[32px] leading-5 font-extrabold text-center ">
                    12 <br /> <span className="font-medium text-sm " >Jul</span>                
                </p>
            </div>
            <div className="flex flex-col gap-2 w-full  ">
                <h5 className=" text-[20px] font-semibold " >
                    Progressive Study Methods
                </h5>
                <p className="flex justify-between text-lg " > 
                    <span>July 4, 2023</span>        
                    <span>9AM - 3PM</span>
                </p>
            </div>
        </div>                                
    )
}

export default Event;