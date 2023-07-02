import HomeBtn from "@/components/HomeBtn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="landing text-white">
      <div className="grid">
        <div className="mx-[135px]">
          <div className="timeline-badge mt-[100px] flex mx-[100px]">
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

          <div className="flex flex-row mb-[30px] mt-[30px] ml-[30px]">
            <div className="basis-1/2 h-[300px] overflow-auto">
              <div className="text-[25px] pl-[30px]">
                1. Which couch would you prefer to snuggle up on ?
              </div>
              <div className="flex flex-row">
                <div className="basis-1/3 p-[10px]">
                  <img src="assets/images/step1/home1.png" alt="" />
                </div>
                <div className="basis-1/3 p-[10px]">
                  <img src="assets/images/step1/home1.png" alt="" />
                </div>
                <div className="basis-1/3 p-[10px]">
                  <img src="assets/images/step1/home1.png" alt="" />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="basis-1/3 p-[10px]">
                  <img src="assets/images/step1/home1.png" alt="" />
                </div>
                <div className="basis-1/3 p-[10px]">
                  <img src="assets/images/step1/home1.png" alt="" />
                </div>
                <div className="basis-1/3 p-[10px]">
                  <img src="assets/images/step1/home1.png" alt="" />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="basis-1/3 p-[10px]">
                  <img src="assets/images/step1/home1.png" alt="" />
                </div>
                <div className="basis-1/3 p-[10px]">
                  <img src="assets/images/step1/home1.png" alt="" />
                </div>
                <div className="basis-1/3 p-[10px]">
                  <img src="assets/images/step1/home1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="basis-1/2">asdfsda</div>
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
