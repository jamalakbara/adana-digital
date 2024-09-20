// import Image from "next/image";
import MotionWrapper from "@/components/client/motion-wrapper";
import { NavbarMobile } from "@/components/client/navbar-mobile";
import { services } from "@/lib/data";
import { ServiceCard } from "@/components/client/service-card";
import { Card } from "@/components/ui/card";
import InViewWrapper from "@/components/client/in-view-wrapper";
import { MoveDownArrow } from "@/components/client/move-down-arrow";
import { LetsDiscussText } from "@/components/client/lets-discuss-text";

export default function Home() {
  return (
    <MotionWrapper className="relative">
      <NavbarMobile className="absolute top-2 h-0"/>
      <HeroSection />
      <WhySection />
      <ServicesSection />
      <PerformanceMarketingSection />
      <MarketplaceManagementSection />
    </MotionWrapper>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#D9D9D9] h-screen flex flex-col justify-evenly align-middle text-center relative lg:text-left">
      <InViewWrapper>
        <div className="lg:absolute lg:top-[50%] lg:left-20 text-4xl">
          Collaborative Growth<br />Through Impactful Digital Strategies
        </div>
      </InViewWrapper>
      <InViewWrapper>
        <div className="lg:absolute lg:bottom-20 lg:right-20 text-2xl">
          <LetsDiscussText />
        </div>
      </InViewWrapper>
      <InViewWrapper>
        <div className="flex flex-row align-middle justify-center lg:absolute lg:bottom-20 left-20">
          <MoveDownArrow />
        </div>
      </InViewWrapper>
    </section>
  )
}

function WhySection() {
  return (
    <section className="bg-[#D9D9D9] h-screen flex flex-col justify-evenly align-middle text-center relative lg:text-left">
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
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="bg-[#D9D9D9] h-screen flex flex-col lg:flex-row justify-center align-middle text-center relative lg:text-left">
      <div className="lg:w-[60%] flex flex-col align-middle justify-center">
        <InViewWrapper>
          <h2 className="text-2xl font-bold mt-5 p-8 lg:mt-0">
            Evolving Together to utilize Innovative Digital Solutions to Develop Your Brand.
          </h2>
        </InViewWrapper>
      </div>
      <div className="lg:w-[40%] flex flex-col align-middle justify-center">
        <div className="grow flex flex-col gap-2 align-middle justify-center mx-auto lg:mx-0">
          {services.map((service, index) => (
            <ServiceCard key={`${index+1}`} title={service.title} className="w-[200px] lg:w-[300px]" style={{ marginLeft: `${index*20}px`}}/>
          ))}
        </div>
        <div className="grow flex flex-col align-middle justify-center p-4">
          <Card className="flex flex-row p-4 justify-around cursor-pointer bg-[#5D93AD] text-white hover:bg-white hover:text-[#5D93AD] transition-all ease-in-out">
            <div className="text-xl">GLADANA LOGO</div>
            <div className="font-semibold text-xl">Creative Solution</div>
          </Card>
        </div>
      </div>
    </section>
  )
}

function PerformanceMarketingSection() {
  return (
    <section className="bg-[#D9D9D9] h-screen flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center align-middle text-center relative lg:text-left">
      <div className="lg:w-[50%] flex flex-col align-middle justify-evenly px-6 gap-4 lg:gap-0">
        <Card className="p-4">
          <p className="text-lg font-semibold text-[#5D93AD]">Performance Marketing</p>
          <p className="text-lg font-semibold text-[#5D93AD]">Strategize for effectiveness and optimize for optimum impact</p>
        </Card>
        <Card className="p-4">
          <p className="text-lg font-semibold text-[#5D93AD]">Digital Advertising Solution</p>
          <p className="text-lg font-semibold text-[#5D93AD]">Data driven marketing analysis</p>
          <p className="text-lg font-semibold text-[#5D93AD]">Business growth consultation</p>
          <p className="text-lg font-semibold text-[#5D93AD]">Email marketing</p>
        </Card>
      </div>
      <div className="lg:w-[50%] flex flex-col align-middle justify-center gap-4 lg:gap-0">
        <div className="flex flex-row align-middle justify-center">SAMPLE REPORT DIGITAL MARKETING IMG</div>
      </div>
    </section>
  )
}

function MarketplaceManagementSection() {
  return (
    <section className="bg-[#D9D9D9] h-screen flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center align-middle text-center relative lg:text-left">
      <div className="lg:w-[50%] flex flex-col align-middle justify-evenly px-6 gap-4 lg:gap-0">
        <div className="flex flex-row align-middle justify-center">SAMPLE REPORT MARKETPLACE IMG</div>
      </div>
      <div className="lg:w-[50%] flex flex-col align-middle justify-evenly px-6 gap-4 lg:gap-0">
        <Card className="p-4">
          <p className="text-lg font-semibold text-[#5D93AD]">Marketplace Management</p>
          <p className="text-lg font-semibold text-[#5D93AD]">Managing end to end business and marketing strategy for marketplace</p>
        </Card>
        <Card className="p-4">
          <p className="text-lg font-semibold text-[#5D93AD]">Affiliate marketing</p>
          <p className="text-lg font-semibold text-[#5D93AD]">Marketplace SEO</p>
          <p className="text-lg font-semibold text-[#5D93AD]">Marketplace program consultation</p>
        </Card>
      </div>
    </section>
  )
}