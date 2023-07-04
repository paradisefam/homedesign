import HomeBtn from "@/components/HomeBtn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="landing text-white">
      <div className="col-span-12 text-center container-custom">
        <div className="timeline-badge mt-[60px] flex mx-[100px]">
          <div className="w-1/5">
            <div className="bg-[#164555] w-[40px] h-[40px] m-auto rounded-full flex justify-center items-center text-white text-[30px]">
              <span>1</span>
            </div>
            <div className="text-[18px] mt-[5px] text-center">
              Calculate style
            </div>
          </div>
          <div className="badge-line mt-[20px] w-1/5 h-[3px] "></div>
          <div className="w-1/5">
            <div className="bg-[#164555] w-[40px] h-[40px] m-auto rounded-full flex justify-center items-center text-white text-[30px]">
              <span>2</span>
            </div>
            <div className="text-[18px] mt-[5px] text-center">Upload image</div>
          </div>
          <div className="badge-line mt-[20px] w-1/5 h-[3px] "></div>
          <div className="w-1/5">
            <div className="badge-circle w-[40px] h-[40px] m-auto rounded-full flex justify-center items-center text-white text-[30px]">
              <span>3</span>
            </div>
            <div className="text-[18px] mt-[5px] text-center">
              Generate design
            </div>
          </div>
        </div>
        <div className="w-[65%] mx-auto flex items-center justify-center py-10 relative">
          <img src="assets/images/home1.png" className="w-1/2" />
          <img src="assets/images/home2.png" className="w-1/2" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white  change-home-btn">
            <img
              src="assets/images/Code_light.png"
              className="w-[15px] md:w-[50px] m-[8px] md:m-[25px] bg-transparent"
            />
          </div>
        </div>

        <div className="flex mx-auto items-center justify-between w-[60%]">
          <div>
            <HomeBtn className="text-white text-[20px] my-[30px] failed-btn">
              Try again
            </HomeBtn>
          </div>
          <div>
            <HomeBtn className="text-white text-[20px] my-[30px]">
              Share
            </HomeBtn>
          </div>
          <div>
            <HomeBtn className="text-white text-[20px] my-[30px] preview-btn">
              Preview
            </HomeBtn>
          </div>
        </div>
      </div>
    </main>
  );
}
