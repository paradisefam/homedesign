import HomeBtn from "@/components/HomeBtn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="landing text-white">
      <div className="col-span-12 text-center container-custom">
        <div className="timeline-badge mt-[100px] flex mx-[100px]">
          <div className="w-1/5 h-[138px]">
            <div className="bg-[#164555] w-[60px] h-[60px] m-auto rounded-full flex justify-center items-center text-white text-[40px]">
              <span>1</span>
            </div>
            <div className="text-[20px] mt-[20px] text-center">
              Calculate style
            </div>
          </div>
          <div className="badge-line mt-[30px] w-1/5 h-[3px] "></div>
          <div className="w-1/5 h-[138px]">
            <div className="bg-[#164555] w-[60px] h-[60px] m-auto rounded-full flex justify-center items-center text-white text-[40px]">
              <span>2</span>
            </div>
            <div className="text-[20px] mt-[20px] text-center">
              Upload image
            </div>
          </div>
          <div className="badge-line mt-[30px] w-1/5 h-[3px] "></div>
          <div className="w-1/5 h-[138px]">
            <div className="badge-circle w-[60px] h-[60px] m-auto rounded-full flex justify-center items-center text-white text-[40px]">
              <span>3</span>
            </div>
            <div className="text-[20px] mt-[20px] text-center">
              Generate design
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[80%] mx-auto">
          <div className="basis-1/2 p-[20px] pt-0">
            <img
              src="assets/images/work/original.png"
              className="rounded-custom"
            />
          </div>
          <div className="basis-1/2 p-[20px] pt-0">
            <img
              src="assets/images/work/generated.png"
              className="rounded-custom"
            />
          </div>
        </div>

        <div className="flex flex-row w-[80%] mx-auto">
          <div className="basis-1/2 p-[20px] pt-0">
            <img
              src="assets/images/work/original.png"
              className="rounded-custom"
            />
          </div>
          <div className="basis-1/2 p-[20px] pt-0">
            <img
              src="assets/images/work/generated.png"
              className="rounded-custom"
            />
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
    </main>
  );
}
