import HomeBtn from "@/components/HomeBtn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="landing text-white">
      <div className="grid">
        <div className="mx-[135px]">
          <div className="timeline-badge mt-[230px] flex mx-[217.5px]">
            <div className="w-1/5 h-[138px]">
              <div className="badge-circle w-[80px] h-[80px] m-auto rounded-full flex justify-center items-center text-white text-[48px]">
                <span>1</span>
              </div>
              <div className="text-[26px] mt-[20px] text-center">
                Calculate style
              </div>
            </div>
            <div className="badge-line mt-[40px] w-1/5 h-[3px] "></div>
            <div className="w-1/5 h-[138px]">
              <div className="badge-circle w-[80px] h-[80px] m-auto rounded-full flex justify-center items-center text-white text-[48px]">
                <span>2</span>
              </div>
              <div className="text-[26px] mt-[20px] text-center">
                Upload image
              </div>
            </div>
            <div className="badge-line mt-[40px] w-1/5 h-[3px] "></div>
            <div className="w-1/5 h-[138px]">
              <div className="bg-[#164555] w-[80px] h-[80px] m-auto rounded-full flex justify-center items-center text-white text-[48px]">
                <span>3</span>
              </div>
              <div className="text-[26px] mt-[20px] text-center">
                Generate design
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mx-[65px] mt-[34px]">
            <div className="w-full text-[32px]">
              1. Which couch would you prefer to snuggle up on ?
            </div>
            <div className="w-full text-[24px] mt-[8px]">
              You almost done. Upload the image and make your own home.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 h-[825px]">
            <div className="w-full grid grid-cols-3 gap-4 bg-scroll">
              <div className="bg-[url('/assets/images/step1/home1.png')] bg-contain h-full mb-[40px]"></div>
              <div className="bg-[url('/assets/images/step1/home2.png')] bg-contain h-full mb-[40px]"></div>
              <div className="bg-[url('/assets/images/step1/home1.png')] bg-contain h-full mb-[40px]"></div>
            </div>
          </div>
          <div className="w-[568px] gap-[128px] flex mx-auto">
            <HomeBtn className="text-white text-[26px] my-[50px] failed">
              Try again
            </HomeBtn>
            <HomeBtn className="text-white text-[26px] my-[50px]">
              Get Started
            </HomeBtn>
          </div>
          <div className="text-[20px] text-white text-center mb-[30px]">
            You have remaining 4 credits now. Please click here to buy credit.
          </div>
        </div>
      </div>
    </main>
  );
}
