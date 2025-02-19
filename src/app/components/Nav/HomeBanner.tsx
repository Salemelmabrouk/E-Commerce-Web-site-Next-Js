import Image from "next/image";

const HomeBanner = () => {
    return ( 
        <div className=" relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8">
            <div className=" mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
                <div className="mb-8 md:mb-0 text-center ">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Summer Sales!</h1>
                    <p className="text-lg md:text-2xl text-white mb-2 ">Enjoy discouts on selected items</p>
                    <h1  className="text-2xl md:text-5xl font-bold text-yellow-400 mb-4">GET 50% OFF</h1>
                </div>
                <div className="w-1/3 relative aspect-video">
                   
                    <Image
                     src="/img/pngwing.com.png"
                     alt="Description of the image"
                     width={900}  
                     
                     height={900} 
                    ></Image>
  
                </div>

            </div>
        </div>
     );
}
 
export default HomeBanner;