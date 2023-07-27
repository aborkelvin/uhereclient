import placeholder2 from "../../images/Content2.png"

const NewsAndStories = () => {
    

    return (
        <div className="flex flex-col gap-1 justify-start w-full md:w-[280px]">
            <img src={placeholder2} alt="placeholder" className="w-full h-[190px] mb-1 " />
            <h5 className="text-[18px] leading-7 font-semibold">
                Long Vacation Program for Secondary School Boys
            </h5>
            <p className="text-lg text-[#404040] " >
                July 31, 2023
            </p>
        </div>
    )
}

export default NewsAndStories
