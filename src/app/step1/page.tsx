import HomeBtn from "@/components/HomeBtn";
import FileUpload from "@/components/FileUpload";
import FormSelect from "@/components/FormSelect";
import MessageInput from "@/components/MessageInput";
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
            <div className="basis-1/2">
              <div className="text-[25px] pl-[30px]">
                1. Which couch would you prefer to snuggle up on ?
              </div>
              <div className="h-[580px] overflow-auto">
                <div className="flex flex-row">
                  <div className="basis-1/3 p-[10px] relative inline-block">
                    <input
                      type="checkbox"
                      className="absolute top-5 left-5"
                      id="checkbox"
                    ></input>
                    <img src="assets/images/step1/home1.png" alt="" />
                  </div>
                  <div className="basis-1/3 p-[10px] relative inline-block">
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
              <div className="mt-[30px]">
                <HomeBtn className="text-white back-button float-left">
                  Back
                </HomeBtn>
                <HomeBtn className="text-white float-right">Next</HomeBtn>
              </div>
            </div>
            <div className="basis-1/2 ml-[20px]">
              <div className="text-[20px]">
                You almost done. Upload the image and make your own home.
              </div>
              <div className="relative mt-5">
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
              <div className="mt-[20px]">
                <MessageInput
                  id="message"
                  rows="6"
                  placeholder="Type your prompt here..."
                />
              </div>
              {/* <div className="">
                <input
                  type="checkbox"
                  id="my-checkbox"
                  value=""
                  className="w-6 h-6 border custom-checkbox"
                  required
                />
                <label htmlFor="my-checkbox"></label>
                <span>
                  <div className="isolate">
                    Design can be published publicly (Pro)
                  </div>
                </span>
              </div> */}
              <div className="mt-[10px]">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 checked:bg-white checked:border-transparent myinput"
                    name="checkbox"
                  />
                  <div className="mydisplay"></div>
                  <span className="ml-2 text-white">
                    Design can be published publicly (Pro)
                  </span>
                </label>
              </div>

              <div className="mt-[10px]">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 checked:bg-white checked:border-transparent"
                  />
                  <span className="ml-2 text-white">
                    Design recommendation (Pro)
                  </span>
                </label>
              </div>
              <div className="mt-[10px]">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 checked:bg-white checked:border-transparent"
                  />
                  <span className="ml-2 text-white">
                    How much you consider to spend on renovation ?
                  </span>
                </label>
                {/* <form>
                  <div className="flex items-center border-b border-blue-500 py-2">
                    <div className="bg-[#66d7eb] px-3">
                      <span className="text-blue-500">@</span>
                    </div>
                    <input
                      type="text"
                      className="outline-none bg-transparent placeholder-gray-500 text-gray-700"
                      placeholder="Username"
                    />
                  </div>
                </form> */}
                <FormSelect />
              </div>
            </div>
          </div>

          <div className="text-[20px] text-white text-center mb-[30px]">
            You have remaining 4 credits now. Please click here to buy credit.
          </div>
        </div>
      </div>
    </main>
  );
}
