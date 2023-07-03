import HomeBtn from "@/components/HomeBtn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="landing text-white">
      <div className="col-span-12 text-center container-custom">
        <div className="md:hidden flex items-center justify-between">
          <img src="assets/images/logo.png" width={"71px"} />
          <img src="assets/images/ic_round-menu.png" width={"24px"} />
        </div>
        <div className="mt-[20px] md:mt-[80px] text-[32px] md:text-[50px] text-white">
          How we work
        </div>
        <div className="mt-[12px] md:mt-[24px] text-[12px] md:text-[24px]">
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry.
        </div>
        <div className="timeline-badge mt-[50px] flex mx-[100px]">
          <div className="w-1/3 md:w-1/5 h-[138px]">
            <div className="badge-circle w-[60px] h-[60px] m-auto rounded-full flex justify-center items-center text-white text-[40px]">
              <span>1</span>
            </div>
            <div className="text-[20px] mt-[20px] text-center">
              Calculate style
            </div>
          </div>
          <div className="badge-line mt-[30px] w-1/5 h-[3px] "></div>
          <div className="w-1/5 h-[138px]">
            <div className="badge-circle w-[60px] h-[60px] m-auto rounded-full flex justify-center items-center text-white text-[40px]">
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
            <div className="text-[20px] float-left ml-[20px]">
              Original Home
            </div>
            <img
              src="assets/images/work/original.png"
              className="rounded-custom"
            />
          </div>
          <div className="basis-1/2 p-[20px] pt-0">
            <div className="text-[20px] float-left ml-[20px]">
              Generated Home
            </div>
            <img
              src="assets/images/work/generated.png"
              className="rounded-custom"
            />
          </div>
        </div>

        <div className="flex flex-row w-[80%] mx-auto">
          <div className="basis-1/2 p-[20px] pt-0">
            <div className="text-[20px] float-left ml-[20px]">
              Original Home
            </div>
            <img
              src="assets/images/work/original.png"
              className="rounded-custom"
            />
          </div>
          <div className="basis-1/2 p-[20px] pt-0">
            <div className="text-[20px] float-left ml-[20px]">
              Generated Home
            </div>
            <img
              src="assets/images/work/generated.png"
              className="rounded-custom"
            />
          </div>
        </div>
        <div className="text-center">
          <HomeBtn className="text-white text-[26px] my-[50px]">
            Get Started
          </HomeBtn>
        </div>
      </div>
    </main>
  );
}
