import HomeBtn from "@/components/HomeBtn";
import ToggleSwitch from "@/components/ToggleSwitch";
import Image from "next/image";

export default function Home() {
  return (
    <main className="landing text-white mt-[15px]">
      <div className="col-span-12 text-center">
        <div className="text-[#3E849E] text-[16px] font-bold">
          PREMIUM PRICING PLANS
        </div>
        <div className="text-[24px] font-bold mb-[10px]">
          Choose the plan that fits
          <br />
          your needs!
        </div>
        <ToggleSwitch />
        <div className="text-[#3E849E] text-[16px] font-bold mt-[5px]">
          Get 3 Free Months
        </div>
      </div>

      <div className="w-[70%] mx-auto">
        <div className="flex flex-row mb-[20px] mt-[20px]">
          <div className="basis-1/3 card mx-[20px] mt-[40px]">
            <div className="container-custom flex flex-row items-center justify-between mt-3">
              <div className="basis-1/4">
                <img src="assets/images/pricing/1.png" alt="" width={"50px"} />
              </div>
              <div className="basis-3/4">
                <div className="text-[18px] font-bold">INDIVIDUAL</div>
                <div className="text-[#3E849E] text-[14px]">Special Offer</div>
              </div>
            </div>
            <div className="w-[80%] mx-auto">
              <div className="text-[14px] line-through">Regular Price $47</div>
              <div className="text-[18px] text-[#6F6C90]">
                <span className="text-[25px] text-white font-bold">$27</span>
                /month
              </div>
              <div className="text-[14px] text-[#3E849E]">Cancel anytime</div>
              <div className="text-[12px]">
                Get 3 months free with annual billing
              </div>
              <ul>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">100 Designs / month</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Standard AI Model</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Standard Quality Renders</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">All Modes Unlocked</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Limited Advanced Styles</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Download Renders (480p)</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Public Gallery</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Personal License</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">48 Hours Support</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Small Watermark</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Cancel anytime</span>
                </li>
              </ul>
              <div className="text-[14px] text-center mt-3">
                Early Bird Offer Expiring
              </div>
              <div className="text-[#51ACC5] text-[20px] text-center font-bold">
                52% Discount
              </div>
              <div className="text-center mt-3 mb-[20px] font-bold">
                <HomeBtn className="buy-now">Buy Now</HomeBtn>
              </div>
            </div>
          </div>
          <div className="basis-1/3 card mx-[20px]">
            <div className="container-custom flex flex-row items-center justify-between mt-3">
              <div className="basis-1/4">
                <img src="assets/images/pricing/2.png" alt="" width={"50px"} />
              </div>
              <div className="basis-3/4">
                <div className="text-[18px] font-bold">PRO</div>
                <div className="text-[#3E849E] text-[14px]">Special Offer</div>
              </div>
            </div>
            <div className="w-[80%] mx-auto">
              <div className="text-[14px] line-through">Regular Price $47</div>
              <div className="text-[18px] text-[#6F6C90]">
                <span className="text-[25px] text-white font-bold">$34</span>
                /month
              </div>
              <div className="text-[14px] text-[#3E849E]">Cancel anytime</div>
              <div className="text-[12px]">
                Get 3 months free with annual billing
              </div>
              <ul>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">100 Designs / month</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Standard AI Model</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Standard Quality Renders</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">All Modes Unlocked</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Limited Advanced Styles</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Download Renders (480p)</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Public Gallery</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Personal License</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">48 Hours Support</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Small Watermark</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Cancel anytime</span>
                </li>
              </ul>
              <div className="text-[14px] text-center mt-[50px]">
                Early Bird Offer Expiring
              </div>
              <div className="text-[#51ACC5] text-[20px] text-center font-bold">
                61% Discount
              </div>
              <div className="text-center mt-3 mb-[20px] font-bold">
                <HomeBtn>Buy Now</HomeBtn>
              </div>
            </div>
          </div>
          <div className="basis-1/3 card mx-[20px] mt-[40px]">
            <div className="container-custom flex flex-row items-center justify-between mt-3">
              <div className="basis-1/4">
                <img src="assets/images/pricing/1.png" alt="" width={"50px"} />
              </div>
              <div className="basis-3/4">
                <div className="text-[18px] font-bold">TEAM</div>
                <div className="text-[#3E849E] text-[14px]">Special Offer</div>
              </div>
            </div>
            <div className="w-[80%] mx-auto ">
              <div className="text-[14px] line-through">Regular Price $47</div>
              <div className="text-[18px] text-[#6F6C90]">
                <span className="text-[25px] text-white font-bold">$97</span>
                /month
              </div>
              <div className="text-[14px] text-[#3E849E]">Cancel anytime</div>
              <div className="text-[12px]">
                Get 3 months free with annual billing
              </div>
              <ul>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">100 Designs / month</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Standard AI Model</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Standard Quality Renders</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">All Modes Unlocked</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Limited Advanced Styles</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Download Renders (480p)</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Public Gallery</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Personal License</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">48 Hours Support</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Small Watermark</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[18px] h-[18px] rounded-full flex justify-center items-center mt-1 mr-2">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[14px]">Cancel anytime</span>
                </li>
              </ul>
              <div className="text-[14px] text-center mt-3">
                Early Bird Offer Expiring
              </div>
              <div className="text-[#51ACC5] text-[20px] text-center font-bold">
                52% Discount
              </div>
              <div className="text-center mt-3 mb-[20px] font-bold">
                <HomeBtn className="buy-now">Buy Now</HomeBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
