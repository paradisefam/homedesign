import HomeBtn from "@/components/HomeBtn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="landing text-white">
      <div className="my-[18px] md:pt-24 mx-[48px] md:mx-[236px]">
        <div className="md:hidden flex items-center justify-between">
          <img src="assets/images/logo.png" width={"71px"} />
          <img src="assets/images/ic_round-menu.png" width={"24px"} />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="mt-[20px] md:mt-0">
            <div className="hidden md:block mb-4">
              <img src="assets/images/logo.png" width={"186px"} />
            </div>
            <div className="text-[32px] break-words md:text-[54px] text-white font-bold">
              Imagine Design
              <br />
              Feel Good
            </div>
            <div className="text-[12px] md:text-[22px] break-words text-white mb-[48px] mt-[24px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </div>
            <HomeBtn className="text-white text-[14px] md:text-[26px]">
              Get Started
            </HomeBtn>
          </div>
          <div className="py-[32px] px-[23px] md:py-[64px] md:px-[56px] rounded-[10px] md:rounded-[20px] bg-[#0E1E2B] border border-[#FFF5F5] text-[12px] md:text-[22px] md:w-3/4 my-[29px] md:mt-10 md:ml-auto">
            <div>
              <div className="mb-[16px]">
                Start your home interior design with rendro.ai
              </div>
              <div className="mb-[18px]">
                <div className="mb-[8px]">Email:</div>
                <input className="w-full h-[30px] md:h-[60px] rounded-[5px] md:rounded-[10px] bg-transparent border"></input>
              </div>
              <div className="mb-[16px]">
                <div className="mb-[8px]">Password:</div>
                <input className="w-full h-[30px] md:h-[60px] rounded-[5px] md:rounded-[10px] bg-transparent border"></input>
              </div>
              <HomeBtn className="text-black w-full">Sign In</HomeBtn>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-16 relative">
          <img src="assets/images/home1.png" className="w-1/2" />
          <img src="assets/images/home2.png" className="w-1/2" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white  change-home-btn">
            <img
              src="assets/images/Code_light.png"
              className="w-[15px] md:w-[50px] m-[8px] md:m-[25px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}