import HomeBtn from "@/components/HomeBtn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="landing text-white">
      <div className="grid">
        <div className="mx-[353px]">
          <div className="mt-[118px] text-[64px] text-white">How we work</div>
          <div className="mt-[24px] text-[24px]">
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry.
          </div>
          <div className="timeline-badge mt-[56px] flex justify-items-stretch">
            <div className="w-[223px] h-[138px]">
              <div className="badge-circle w-[80px] h-[80px] m-auto rounded-full flex justify-center items-center text-white text-[48px]">
                <span>1</span>
              </div>
              <div className="text-[26px] mt-[20px] text-center">
                Calculate style
              </div>
            </div>
            <div className="badge-line mt-[40px] w-[230px] h-[3px] "></div>
            <div className="w-[223px] h-[138px]">
              <div className="badge-circle w-[80px] h-[80px] m-auto rounded-full flex justify-center items-center text-white text-[48px]">
                <span>2</span>
              </div>
              <div className="text-[26px] mt-[20px] text-center">
                Upload image
              </div>
            </div>
            <div className="badge-line mt-[40px] w-[230px] h-[3px] "></div>
            <div className="w-[223px] h-[138px]">
              <div className="badge-circle w-[80px] h-[80px] m-auto rounded-full flex justify-center items-center text-white text-[48px]">
                <span>3</span>
              </div>
              <div className="text-[26px] mt-[20px] text-center">
                Generate design
              </div>
            </div>
          </div>
          <div className="home-image-container mt-[48px] justify-items-stretch">
            <div className="flex gap-[70px]">
              <div>
                <div className="text-[26px] w-[220px] text-center">
                  Original Home
                </div>
                <img
                  src="assets/images/original.png"
                  className="rounded-custom"
                />
              </div>
              <div>
                <div className="text-[26px] w-[260px] text-center">
                  Generated Home
                </div>
                <img
                  src="assets/images/generated.png"
                  className="rounded-custom"
                />
              </div>
            </div>
            <div className="flex gap-[70px] mt-[24px]">
              <div>
                <div className="text-[26px] w-[220px] text-center">
                  Original Home
                </div>
                <img
                  src="assets/images/original.png"
                  className="rounded-custom"
                />
              </div>
              <div>
                <div className="text-[26px] w-[260px] text-center">
                  Generated Home
                </div>
                <img
                  src="assets/images/generated.png"
                  className="rounded-custom"
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <HomeBtn className="text-white text-[26px] my-[50px]">
              Get Started
            </HomeBtn>
          </div>
          {/* <div className="timeline-badge w-[991px] mt-[56px] grid-cols-5">
            <div className="badge w-[80px] h-[80px] rounded-full flex justify-center items-center text-white text-[48px]">
              <span>1</span>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
}
