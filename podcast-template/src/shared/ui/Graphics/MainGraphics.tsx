const MainGraphics = () => {
    return (
        <div className="container p-6">
            <div className="grid grid-cols-3 gap-5">
                <div className="rounded relative after:w-[100%] 
                after:content-['s'] after:absolute after:h-[100%] 
                after:bg-pewterBlue after:top-2 after:left-2
                after:rounded-md" >
                    <img
                        src={"src/assets/pictures/cover.png"}
                        alt="covid pandemic"
                        className="object-cover w-full rounded-lg relative z-40"
                    />
                    <div className="w-full h-full absolute top-0 left-0 z-50">
                        <h2 className="text-pewterBlue bottom-[10%] left-[10%] absolute 
                        font-bold text-center text-sm lg:text-2xl">COVID-19 Endemic</h2>
                    </div>
                </div>
                <div className="grid-cols-4 gap-1 ">
                    <img
                        src={"src/assets/pictures/self_confidence.png"}
                        alt="covid pandemic"
                        className="object-cover w-full rounded-lg"
                    />
                </div>
                <div className="grid-cols-4 gap-1 ">
                    <img
                        src={"src/assets/pictures/perplexed_mind.png"}
                        alt="covid pandemic"
                        className="object-cover w-full rounded-lg"
                    />
                </div>
                <div className="rounded">
                    <img
                        src={"src/assets/pictures/cover.png"}
                        alt="covid pandemic"
                        className="object-cover w-full rounded-lg"
                    />
                </div>
                <div className="grid-cols-4 gap-1 ">
                    <img
                        src={"src/assets/pictures/self_confidence.png"}
                        alt="covid pandemic"
                        className="object-cover w-full rounded-lg"
                    />
                </div>
                <div className="grid-cols-4 gap-1 ">
                    <img
                        src={"src/assets/pictures/perplexed_mind.png"}
                        alt="covid pandemic"
                        className="object-cover w-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default MainGraphics;
