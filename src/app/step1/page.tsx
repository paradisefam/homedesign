import HomeBtn from "@/components/HomeBtn";
import FileUpload from "@/components/FileUpload";
import FormSelect from "@/components/FormSelect";
import MessageInput from "@/components/MessageInput";
import Image from "next/image";
import Checkbox from "@/components/Checkbox";
import Amount from "@/components/Amount";

export default function Home() {
  return (
    <main className="landing text-white">
      <div className="grid">
        <div className="w-[70%] mx-auto">
          <div className="timeline-badge mt-[20px] flex mx-[100px]">
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
              <div className="text-[18px] mt-[5px] text-center">
                Upload image
              </div>
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

          <div className="flex flex-row ml-[30px] items-center">
            <div className="basis-1/2">
              <div className="text-[20px] pl-[20px]">
                1. Which couch would you prefer to snuggle up on ?
              </div>
            </div>
            <div className="basis-1/2">
              <div className="text-[16px] pl-[30px]">
                You almost done. Upload the image and make your own home.
              </div>
            </div>
          </div>
          <div className="flex flex-row mb-[30px] ml-[30px]">
            <div className="basis-1/2">
              <div className="h-[550px] overflow-auto">
                <div className="flex flex-row">
                  <div className="basis-1/3 p-[10px] pt-0 relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                  <div className="basis-1/3 p-[10px] pt-0 relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                  <div className="basis-1/3 p-[10px] pt-0 relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="basis-1/3 p-[10px]  relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                  <div className="basis-1/3 p-[10px]  relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                  <div className="basis-1/3 p-[10px]  relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="basis-1/3 p-[10px]  relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                  <div className="basis-1/3 p-[10px]  relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                  <div className="basis-1/3 p-[10px]  relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="basis-1/3 p-[10px]  relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                  <div className="basis-1/3 p-[10px]  relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                  <div className="basis-1/3 p-[10px]  relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="basis-1/3 p-[10px]  relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                  <div className="basis-1/3 p-[10px]  relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                  <div className="basis-1/3 p-[10px]  relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="basis-1/3 p-[10px]  relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                  <div className="basis-1/3 p-[10px]  relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                  <div className="basis-1/3 p-[10px]  relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <HomeBtn className="text-white back-button float-left ml-[20px]">
                  Back
                </HomeBtn>
                <HomeBtn className="text-white float-right mr-[20px]">
                  Next
                </HomeBtn>
              </div>
            </div>
            <div className="basis-1/2 ml-[20px]">
              <div className="relative">
                <FileUpload></FileUpload>
              </div>
              <div className="flex flex-row gap-4 mt-[20px]">
                <div className="basis-1/2">
                  <FormSelect />
                </div>
                <div className="basis-1/2">
                  <FormSelect />
                </div>
              </div>
              <div className="mt-[20px] mb-1">
                <MessageInput
                  id="message"
                  rows={4}
                  placeholder="Type your prompt here..."
                />
              </div>
              <div className="flex items-center mb-1">
                <Checkbox />
                <span className="pl-2">
                  Design can be published publicly (Pro)
                </span>
              </div>
              <div className="flex items-center mb-1">
                <Checkbox />
                <span className="pl-2">Design recommendation (Pro)</span>
              </div>
              <div className="flex items-center mb-1 justify-between">
                <div className="flex items-center">
                  <Checkbox />
                  <span className="pl-2">
                    How much you consider to spend on renovation ?
                  </span>
                </div>
                <Amount />
              </div>
              <div className="flex items-center justify-between pr-[70px]">
                <div>What we can change?</div>
                <div>
                  <Checkbox />
                  <span className="pl-2">Walls</span>
                </div>
                <div>
                  <Checkbox />
                  <span className="pl-2">Furniture</span>
                </div>
                <div>
                  <Checkbox />
                  <span className="pl-2">Lighting</span>
                </div>
              </div>
              <div className="mt-[40px]">
                <HomeBtn className="generate-btn text-white w-full">
                  Generate Your Home
                </HomeBtn>
              </div>
            </div>
          </div>

          <div className="text-[16px] text-white text-center">
            You have remaining 4 credits now. Please click here to buy credit.
          </div>
        </div>
      </div>
    </main>
  );
}
