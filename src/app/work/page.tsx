import HomeBtn from "@/components/HomeBtn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="landing text-white mb-3">
      <div className="col-span-12 text-center container-custom">
        <div className="md:hidden flex items-center justify-between">
          <img src="assets/images/logo.png" width={"71px"} />
          <img src="assets/images/ic_round-menu.png" width={"24px"} />
        </div>
        <div className="mt-[20px] md:mt-[10px] text-[20px] md:text-[32px] text-white">
          How we work
        </div>
        <div className="mt-[12px] md:mt-[5px] text-[12px] md:text-[18px]">
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry.
        </div>
        <div className="timeline-badge mt-[20px] flex mx-[200px]">
          <div className="md:w-1/5">
            <div className="badge-circle w-[30px] md:w-[40px] h-[30px] md:h-[40px] m-auto rounded-full flex justify-center items-center text-white text-[20px] md:text-[30px]">
              <span>1</span>
            </div>
            <div className="text-[12px] md:text-[18px] mt-[5px] text-center">
              Calculate style
            </div>
          </div>
          <div className="badge-line mt-[20px] w-1/5 h-[3px] "></div>
          <div className="w-1/5">
            <div className="badge-circle w-[30px] md:w-[40px] h-[30px] md:h-[40px] m-auto rounded-full flex justify-center items-center text-white text-[20px] md:text-[30px]">
              <span>2</span>
            </div>
            <div className="text-[12px] md:text-[18px] mt-[5px] text-center">
              Upload image
            </div>
          </div>
          <div className="badge-line mt-[20px] w-1/5 h-[3px] "></div>
          <div className="w-1/5">
            <div className="badge-circle w-[30px] md:w-[40px] h-[30px] md:h-[40px] m-auto rounded-full flex justify-center items-center text-white text-[20px] md:text-[30px]">
              <span>3</span>
            </div>
            <div className="text-[12px] md:text-[18px] mt-[5px] text-center">
              Generate design
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[60%] mx-auto">
          <div className="basis-1/2 px-[40px]">
            <div className="text-[18px] float-left ml-[20px]">
              Original Home
            </div>
            <img
              src="assets/images/work/original.png"
              className="rounded-custom"
            />
          </div>
          <div className="basis-1/2 px-[40px]">
            <div className="text-[18px] float-left ml-[20px]">
              Generated Home
            </div>
            <img
              src="assets/images/work/generated.png"
              className="rounded-custom"
            />
          </div>
        </div>

        <div className="flex flex-row w-[60%] mx-auto">
          <div className="basis-1/2 px-[40px]">
            <div className="text-[18px] float-left ml-[20px]">
              Original Home
            </div>
            <img
              src="assets/images/work/original.png"
              className="rounded-custom"
            />
          </div>
          <div className="basis-1/2 px-[40px]">
            <div className="text-[18px] float-left ml-[20px]">
              Generated Home
            </div>
            <img
              src="assets/images/work/generated.png"
              className="rounded-custom"
            />
          </div>
        </div>
        <div className="text-center">
          <HomeBtn className="text-white text-[20px] mt-[30px]">
            Get Started
          </HomeBtn>
        </div>
      </div>
    </main>
  );
}
