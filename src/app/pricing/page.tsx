import HomeBtn from "@/components/HomeBtn";
import ToggleSwitch from "@/components/ToggleSwitch";
import Image from "next/image";

export default function Home() {
  return (
    <main className="landing text-white mt-[50px]">
      <div className="col-span-12 text-center">
        <div className="text-[#3E849E] text-[19px] font-bold">
          PREMIUM PRICING PLANS
        </div>
        <div className="text-[48px] font-bold mb-[20px]">
          Choose the plan that fits
          <br />
          your needs!
        </div>
        <ToggleSwitch />
        <div className="text-[#3E849E] text-[16px] font-bold mt-[20px]">
          Get 3 Free Months
        </div>
      </div>

      <div className="container-custom mx-auto">
        <div className="flex flex-row mb-[30px] mt-[50px]">
          <div className="basis-1/3 card mx-[20px] pt-[30px] mt-[70px]">
            <div className="container-custom flex flex-row">
              <div className="basis-1/4">
                <img src="assets/images/pricing/1.png" alt="" />
              </div>
              <div className="basis-3/4">
                <div className="text-[32px]">INDIVIDUAL</div>
                <div className="text-[#3E849E] text-[18px]">Special Offer</div>
              </div>
            </div>
            <div className="container-custom">
              <div className="text-[20px] line-through">Regular Price $47</div>
              <div className="text-[24px] text-[#6F6C90]">
                <span className="text-[60px] text-white font-bold">$27</span>
                /month
              </div>
              <div className="text-[20px] text-[#3E849E]">Cancel anytime</div>
              <div className="text-[16px]">
                Get 3 months free with annual billing
              </div>
              <ul>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">100 Designs / month</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Standard AI Model</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Standard Quality Renders</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">All Modes Unlocked</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Limited Advanced Styles</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Download Renders (480p)</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Public Gallery</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Personal License</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">48 Hours Support</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Small Watermark</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Cancel anytime</span>
                </li>
              </ul>
              <div className="text-[16px] text-center mt-7">
                Early Bird Offer Expiring
              </div>
              <div className="text-[#51ACC5] text-[30px] text-center font-bold">
                52% Discount
              </div>
              <div className="text-center mt-3 mb-[50px] font-bold">
                <HomeBtn className="buy-now">Buy Now</HomeBtn>
              </div>
            </div>
          </div>
          <div className="basis-1/3 card mx-[20px] pt-[30px]">
            <div className="container-custom flex flex-row">
              <div className="basis-1/4">
                <img src="assets/images/pricing/2.png" alt="" />
              </div>
              <div className="basis-3/4">
                <div className="text-[32px]">PRO</div>
                <div className="text-[#3E849E] text-[18px]">Special Offer</div>
              </div>
            </div>
            <div className="container-custom">
              <div className="text-[20px] line-through">Regular Price $47</div>
              <div className="text-[24px] text-[#6F6C90]">
                <span className="text-[60px] text-[#66D7EB] font-bold">
                  $34
                </span>
                /month
              </div>
              <div className="text-[20px] text-[#3E849E]">Cancel anytime</div>
              <div className="text-[16px]">
                Get 3 months free with annual billing
              </div>
              <ul>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">100 Designs / month</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Standard AI Model</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Standard Quality Renders</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">All Modes Unlocked</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Limited Advanced Styles</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Download Renders (480p)</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Public Gallery</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Personal License</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">48 Hours Support</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Small Watermark</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Cancel anytime</span>
                </li>
              </ul>
              <div className="text-[16px] text-center mt-7">
                Early Bird Offer Expiring
              </div>
              <div className="text-[#51ACC5] text-[30px] text-center font-bold">
                61% Discount
              </div>
              <div className="text-center mt-3 mb-[50px] font-bold">
                <HomeBtn>Buy Now</HomeBtn>
              </div>
            </div>
          </div>
          <div className="basis-1/3 card mx-[20px] pt-[30px] mt-[60px]">
            <div className="container-custom flex flex-row">
              <div className="basis-1/4">
                <img src="assets/images/pricing/1.png" alt="" />
              </div>
              <div className="basis-3/4">
                <div className="text-[32px]">TEAM</div>
                <div className="text-[#3E849E] text-[18px]">Special Offer</div>
              </div>
            </div>
            <div className="container-custom">
              <div className="text-[20px] line-through">Regular Price $47</div>
              <div className="text-[24px] text-[#6F6C90]">
                <span className="text-[60px] text-white font-bold">$97</span>
                /month
              </div>
              <div className="text-[20px] text-[#3E849E]">Cancel anytime</div>
              <div className="text-[16px]">
                Get 3 months free with annual billing
              </div>
              <ul>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">100 Designs / month</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Standard AI Model</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Standard Quality Renders</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">All Modes Unlocked</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Limited Advanced Styles</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Download Renders (480p)</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Public Gallery</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Personal License</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">48 Hours Support</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Small Watermark</span>
                </li>
                <li className="flex flex-row">
                  <div className="bg-[#51ACC5] w-[26px] h-[26px] rounded-full flex justify-center items-center mt-2 mr-4">
                    <img src="assets/images/pricing/price-check.png" alt="" />
                  </div>
                  <span className="text-[24px]">Cancel anytime</span>
                </li>
              </ul>
              <div className="text-[16px] text-center mt-7">
                Early Bird Offer Expiring
              </div>
              <div className="text-[#51ACC5] text-[30px] text-center font-bold">
                52% Discount
              </div>
              <div className="text-center mt-3 mb-[50px] font-bold">
                <HomeBtn className="buy-now">Buy Now</HomeBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
