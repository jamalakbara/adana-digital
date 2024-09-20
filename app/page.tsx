// import Image from "next/image";
import { MoveDown } from "lucide-react";
import MotionWrapper from "@/components/client/motion-wrapper";
import { EnterExitViewOpacityContainer } from "@/components/client/enter-exit-view-opacity-container";
import { NavbarMobile } from "@/components/client/navbar-mobile";

export default function Home() {
  return (
    <MotionWrapper className="relative">
      <NavbarMobile className="absolute top-2 h-0"/>
      <HeroSection />
      <WhySection />
    </MotionWrapper>
  )
}

function HeroSection() {
  return (
    <EnterExitViewOpacityContainer className="bg-[#D9D9D9] h-screen flex flex-col justify-evenly align-middle text-center relative lg:text-left">
      <div className="lg:absolute lg:top-[50%] lg:left-20 text-4xl">
        Collaborative Growth<br />Through Impactful Digital Strategies
      </div>
      <div className="lg:absolute lg:bottom-20 lg:right-20 text-2xl">
        Let&apos;s Discuss
      </div>
      <div className="flex flex-row align-middle justify-center lg:absolute lg:bottom-20 left-20">
        <MoveDown className="h-10 w-8"/>
      </div>
    </EnterExitViewOpacityContainer>
  )
}

function WhySection() {
  return (
    <EnterExitViewOpacityContainer className="bg-[#D9D9D9] h-screen flex flex-col justify-evenly align-middle text-center relative lg:text-left">
      <div className="flex flex-col lg:flex-row mt-10 lg:mx-20">
        <div className="flex-grow w-[300px] mx-auto lg:mx-0 lg:w-auto">
          <div className="flex flex-col lg:mx-20">
            <div className="flex flex-row">
              <div className="h-[150px] w-[150px] bg-[#334E4D] rounded-md relative">
                <div className="text-white font-semibold absolute top-12 left-6">Transparent</div>
              </div>
              <div className="h-[150px] w-[150px] bg-[#EEFF01] rounded-full relative">
                <div className="text-[#334E4D] font-semibold absolute top-12 left-8">Excellent<br />Deliverables</div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="h-[150px] w-[150px] bg-[#EEFF01] rounded-full relative">
                <div className="text-[#334E4D] font-semibold absolute top-16 left-4">Growth Minded</div>
              </div>
              <div className="right-triangle-lt bg-[#6E8798] w-[170px] relative">
                <div className="text-white font-semibold absolute top-4 left-4">Teamwork</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex flex-col justify-center">
          <div className="">
            <h2 className="text-2xl font-bold mt-5 lg:mt-0">Why Adana?</h2>
            <div className="mt-5 font-semibold">
              <span className="text-[#527D38]">Adana Digital</span> focus to craft performance marketing strategy and digital media to achieve <span className="text-[#527D38]">measurable impact</span> in order to <span className="text-[#527D38]">accelerate business growth</span>
            </div>
            <div className="mt-5 font-semibold">
              Recognizing that every <span className="text-[#527D38]">company is unique</span>, we aim to provide excellence strategies by taking a <span className="text-[#527D38]">customized approach</span> for each of our partner
            </div>
          </div>
        </div>
      </div>
    </EnterExitViewOpacityContainer>
  )
}