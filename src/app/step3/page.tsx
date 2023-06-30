import HomeBtn from "@/components/HomeBtn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="landing text-white">
      <div className="grid">
        <div className="mx-[353px]">
          <div className="timeline-badge mt-[202px] flex">
            <div className="w-[270px] h-[138px]">
              <div className="bg-[#164555] w-[80px] h-[80px] m-auto rounded-full flex justify-center items-center text-white text-[48px]">
                <span>1</span>
              </div>
              <div className="text-[26px] mt-[20px] text-center">
                Calculate style
              </div>
            </div>
            <div className="badge-line mt-[40px] w-[250px] h-[3px] "></div>
            <div className="w-[270px] h-[138px]">
              <div className="bg-[#164555] w-[80px] h-[80px] m-auto rounded-full flex justify-center items-center text-white text-[48px]">
                <span>2</span>
              </div>
              <div className="text-[26px] mt-[20px] text-center">
                Upload image
              </div>
            </div>
            <div className="badge-line mt-[40px] w-[250px] h-[3px] "></div>
            <div className="w-[270px] h-[138px]">
              <div className="badge-circle w-[80px] h-[80px] m-auto rounded-full flex justify-center items-center text-white text-[48px]">
                <span>3</span>
              </div>
              <div className="text-[26px] mt-[20px] text-center">
                Generate design
              </div>
            </div>
          </div>
          <div className="home-image-container mt-[80px] mx-[107px]">
            <div className="flex gap-[16px]">
              <div>
                <img
                  src="assets/images/original.png"
                  className="rounded-custom"
                />
              </div>
              <div>
                <img
                  src="assets/images/generated.png"
                  className="rounded-custom"
                />
              </div>
            </div>
            <div className="flex gap-[16px] mt-[24px]">
              <div>
                <img
                  src="assets/images/original.png"
                  className="rounded-custom"
                />
              </div>
              <div>
                <img
                  src="assets/images/generated.png"
                  className="rounded-custom"
                />
              </div>
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
