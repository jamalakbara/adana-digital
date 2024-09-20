// import Image from "next/image";
import MotionWrapper from "@/components/client/motion-wrapper";
import { NavbarMobile } from "@/components/client/navbar-mobile";
import { services } from "@/lib/data";
import { ServiceCard } from "@/components/client/service-card";
import { Card } from "@/components/ui/card";
import InViewWrapper from "@/components/client/in-view-wrapper";
import { MoveDownArrow } from "@/components/client/move-down-arrow";
import { LetsDiscussText } from "@/components/client/lets-discuss-text";
import { PartnersCarousel } from "@/components/client/partners-carousel";

export default function Home() {
  return (
    <MotionWrapper className="relative">
      <NavbarMobile className="absolute top-2 h-0"/>
      <HeroSection />
      <WhySection />
      <ServicesSection />
      <PerformanceMarketingSection />
      <MarketplaceManagementSection />
      <DigitalMediaBuyingSection />
      <DigitalCorporateTrainingSection />
      <DigitalTechnologyPartnerSection />
      <SuccessStoryAndClientListSection />
      <LeadsAndContactsSection />
    </MotionWrapper>
  )
}

function HeroSection() {
  const bgs = [
    { h: 20, w: 20, t: 45, r: 60 },
    { h: 30, w: 30, t: 40, r: 50 },
    { h: 40, w: 40, t: 30, r: 40 },
    { h: 50, w: 50, t: 25, r: 30 },
    { h: 60, w: 60, t: 30, r: 20 },
    { h: 80, w: 80, t: 40, r: 10 },
    { h: 90, w: 90, t: 50, r: 0 },
  ];
  return (
    <section className="bg-gradient-to-b from-[#EEFF01] via-[#D9D9D9] to-[#FFFFFF] h-screen flex flex-col justify-evenly align-middle text-center relative lg:text-left">
      {bgs.map((bg, i) => (
        <InViewWrapper key={i} duration={(i+1)*.35}>
          <div className="absolute bg-[#334E4D] blur-2xl invisible lg:visible" style={{ height: bg.h, width: bg.w, top: `${bg.t}%`, right: `${bg.r}%` }} />
        </InViewWrapper>
      ))}
      {/* <div className="h-[20px] w-[20px] absolute top-[45%] right-[60%] bg-[#334E4D] blur-2xl invisible lg:visible" />
      <div className="h-[30px] w-[30px] absolute top-[40%] right-[50%] bg-[#334E4D] blur-2xl invisible lg:visible" />
      <div className="h-[40px] w-[40px] absolute top-[30%] right-[40%] bg-[#334E4D] blur-2xl invisible lg:visible" />
      <div className="h-[50px] w-[50px] absolute top-[25%] right-[30%] bg-[#334E4D] blur-2xl invisible lg:visible" />
      <div className="h-[60px] w-[60px] absolute top-[30%] right-[20%] bg-[#334E4D] blur-2xl invisible lg:visible" />
      <div className="h-[80px] w-[80px] absolute top-[40%] right-[10%] bg-[#334E4D] blur-2xl invisible lg:visible" />
      <div className="h-[90px] w-[90px] absolute top-[50%] right-[00%] bg-[#334E4D] blur-2xl invisible lg:visible" /> */}
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
  const bgs = [
    { h: 20, w: 20, t: 35, r: 60 },
    { h: 30, w: 30, t: 25, r: 50 },
    { h: 40, w: 40, t: 30, r: 40 },
    { h: 50, w: 50, t: 25, r: 30 },
    { h: 60, w: 60, t: 30, r: 20 },
    { h: 70, w: 70, t: 25, r: 10 },
    { h: 80, w: 80, t: 30, r: 0 },
  ];
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] via-[#D9D9D9] to-[#5D93AD] h-screen flex flex-col justify-evenly align-middle text-center relative lg:text-left">
      {bgs.map((bg, i) => (
        <InViewWrapper key={i+1} duration={(i+1)*.25}>
          <div className="absolute bg-[#EEFF01] blur-2xl invisible lg:visible" style={{ top: `${bg.t}%`, right: `${bg.r}%`, width: bg.w, height: bg.h }} />
        </InViewWrapper>
      ))}
      {/* <div className="h-[20px] w-[20px] absolute top-[35%] right-[60%] bg-[#EEFF01] blur-2xl invisible lg:visible" />
      <div className="h-[30px] w-[30px] absolute top-[25%] right-[50%] bg-[#EEFF01] blur-2xl invisible lg:visible" />
      <div className="h-[40px] w-[40px] absolute top-[30%] right-[40%] bg-[#EEFF01] blur-2xl invisible lg:visible" />
      <div className="h-[50px] w-[50px] absolute top-[25%] right-[30%] bg-[#EEFF01] blur-2xl invisible lg:visible" />
      <div className="h-[60px] w-[60px] absolute top-[30%] right-[20%] bg-[#EEFF01] blur-2xl invisible lg:visible" />
      <div className="h-[70px] w-[70px] absolute top-[25%] right-[10%] bg-[#EEFF01] blur-2xl invisible lg:visible" />
      <div className="h-[80px] w-[80px] absolute top-[30%] right-[00%] bg-[#EEFF01] blur-2xl invisible lg:visible" /> */}
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
            <div className="mt-5 font-semibold lg:w-fit lg:mx-0 w-[80%] mx-auto">
              <span className="text-[#527D38]">Adana Digital</span> focus to craft performance marketing strategy and digital media to achieve <span className="text-[#527D38]">measurable impact</span> in order to <span className="text-[#527D38]">accelerate business growth</span>
            </div>
            <div className="mt-5 font-semibold lg:w-fit lg:mx-0 w-[80%] mx-auto">
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
    <section className="bg-gradient-to-b from-[#5D93AD] via-[#D9D9D9] to-[#FFFFFF] h-screen flex flex-col lg:flex-row justify-center align-middle text-center relative lg:text-left">
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
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D9D9D9] h-screen flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center align-middle text-center relative lg:text-left">
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

function DigitalMediaBuyingSection() {
  return (
    <section className="bg-[#D9D9D9] h-screen flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center align-middle text-center relative lg:text-left"></section>
  )
}

function DigitalCorporateTrainingSection() {
  return (
    <section className="bg-[#D9D9D9] h-screen flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center align-middle text-center relative lg:text-left"></section>
  )
}

function DigitalTechnologyPartnerSection() {
  return (
    <section className="bg-[#D9D9D9] h-screen flex flex-col gap-4 align-middle justify-center mx-auto relative lg:text-left">
      <InViewWrapper>
        <div className="absolute top-6 left-6 font-bold text-[#527D38]">Adana Digital<br />2024</div>
      </InViewWrapper>
      <div className="text-3xl text-[#527D38] mx-auto">Our Digital Tools and Media Partners</div>
      <PartnersCarousel className="mx-auto" />
    </section>
  )
}

function SuccessStoryAndClientListSection() {
  return (
    <section className="bg-[#FFFFFF] h-screen flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center align-middle text-center relative lg:text-left"></section>
  )
}

function LeadsAndContactsSection() {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] via-[#527D38] to-[#527D38] h-screen flex flex-col gap-20 justify-center align-middle px-20 relative lg:text-left">
      <div className="text-white text-lg">Let&apos;s create a measurable impact towards your business</div>
      <div className="text-white font-semibold text-2xl">Start Your Journey Now</div>
      <div className="flex flex-row align-middle justify-around">
        <div className="text-white">ADDRESS</div>
        <div className="text-white">SOCIAL MEDIA</div>
        <div className="text-white">EMAIL & PHONE</div>
      </div>
    </section>
  )
}