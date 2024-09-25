// import Image from "next/image";
import MotionWrapper from "@/components/client/motion-wrapper";
import { services } from "@/lib/data";
import { ServiceCard } from "@/components/client/service-card";
import { Card } from "@/components/ui/card";
import InViewWrapper from "@/components/client/in-view-wrapper";
import { MoveDownArrow } from "@/components/client/move-down-arrow";
import { LetsDiscussText } from "@/components/client/lets-discuss-text";
import { PartnersCarousel } from "@/components/client/partners-carousel";
import Link from "next/link";
import { Navbar } from "@/components/client/navbar";
import { Socmed } from "@/components/client/socmed";

export default function Home() {
  return (
    <MotionWrapper className="relative">
      <Navbar />
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
  return (
    <section id="Home" className="bg-artboard1 bg-cover h-screen flex flex-col justify-evenly align-middle text-center relative lg:text-left">
      <InViewWrapper>
        <div className="lg:absolute lg:top-[50%] lg:left-20 text-4xl text-white">
          Collaborative Growth<br />Through Impactful Digital Strategies
        </div>
      </InViewWrapper>
      <InViewWrapper>
        <div className="lg:absolute lg:bottom-20 lg:right-20 text-2xl">
          <LetsDiscussText className="text-white" />
        </div>
      </InViewWrapper>
      <InViewWrapper>
        <div className="flex flex-row align-middle justify-center lg:absolute lg:bottom-20 left-20">
          <MoveDownArrow className="text-white" />
        </div>
      </InViewWrapper>
    </section>
  )
}

function WhySection() {
  return (
    <section className="bg-artboard2 bg-cover h-screen flex flex-col justify-evenly align-middle text-center relative lg:text-left">
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
            <h2 className="text-2xl lg:text-4xl font-bold mt-5 lg:mt-0">Why Adana?</h2>
            <div className="text-md lg: text-xl mt-5 font-semibold lg:w-fit lg:mx-0 w-[80%] mx-auto">
              <span className="text-[#527D38]">Adana Digital</span> focus to craft performance marketing strategy and digital media to achieve <span className="text-[#527D38]">measurable impact</span> in order to <span className="text-[#527D38]">accelerate business growth</span>
            </div>
            <div className="text-md lg:text-xl mt-5 font-semibold lg:w-fit lg:mx-0 w-[80%] mx-auto">
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
    <section id="Expertise" className="bg-artboard3 bg-cover h-screen flex flex-col lg:flex-row justify-center align-middle text-center relative lg:text-left">
      <div className="lg:w-[60%] flex flex-col align-middle justify-center">
        <InViewWrapper>
          <div className="text-lg mt-5 p-8 lg:mt-0 underline underline-offset-2">Our Services</div>
          <h2 className="text-2xl font-bold mt-2 lg:pl-8 lg:mt-0">
            Evolving Together to utilize Innovative Digital Solutions to Develop Your Brand.
          </h2>
        </InViewWrapper>
      </div>
      <div className="lg:w-[40%] flex flex-col align-middle justify-center mt-3 lg:mt-0">
        <div className="hidden grow lg:flex flex-col gap-2 align-middle justify-center mx-auto lg:mx-0">
          {services.map((service, index) => (
            <ServiceCard key={`${index+1}`} title={service.title} className="w-[200px] lg:w-[300px] p-2" style={{ marginLeft: `${index*20}px`}} />
          ))}
        </div>
        <div className="grow lg:hidden flex flex-col gap-2 align-middle justify-center mx-auto lg:mx-0">
          {services.map((service, index) => (
            <ServiceCard key={`${index+1}`} title={service.title} className="w-[200px] lg:w-[300px] p-2 text-sm" />
          ))}
        </div>
        <div className="grow flex flex-col align-middle justify-center p-4">
          <Card className="flex flex-row p-4 justify-around cursor-pointer bg-[#5D93AD] text-white hover:bg-white hover:text-[#5D93AD] transition-all ease-in-out">
            <Link className="text-xl" href="/gladana">GLADANA LOGO</Link>
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
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D9D9D9] h-screen flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center align-middle text-center relative lg:text-left">
      <div className="lg:w-[50%] flex flex-col align-middle justify-evenly px-6 gap-4 lg:gap-0">
        <Card className="p-4">
          <p className="text-lg font-semibold text-[#5D93AD]">Digital Media Buying</p>
          <p className="text-lg font-semibold text-[#5D93AD]">Resonates Your Brand Through Digital Media Buying</p>
        </Card>
        <Card className="p-4">
          <p className="text-lg font-semibold text-[#5D93AD]">OTT and OLV Media Placement</p>
          <p className="text-lg font-semibold text-[#5D93AD]">Digital Media Advertorials</p>
          <p className="text-lg font-semibold text-[#5D93AD]">Mobile Push Notifications</p>
          <p className="text-lg font-semibold text-[#5D93AD]">Digital OOH</p>
        </Card>
      </div>
      <div className="lg:w-[50%] flex flex-col align-middle justify-center gap-4 lg:gap-0">
        <div className="flex flex-row align-middle justify-center">SAMPLE MEDIA PLACEMENT IMG</div>
      </div>
    </section>
  )
}

function DigitalCorporateTrainingSection() {
  return (
    <section className="bg-[#D9D9D9] h-screen flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center align-middle text-center relative lg:text-left">
      <div className="lg:w-[50%] flex flex-col align-middle justify-evenly px-6 gap-4 lg:gap-0">
        <div className="flex flex-row align-middle justify-center">SAMPLE REPORT DIGITAL MARKETING CLASS IMG</div>
      </div>
      <div className="lg:w-[50%] flex flex-col align-middle justify-evenly px-6 gap-4 lg:gap-0">
        <Card className="p-4">
          <p className="text-lg font-semibold text-[#5D93AD]">Digital Marketing Corporate Training</p>
          <p className="text-lg font-semibold text-[#5D93AD]">Accelerate digital knowledge to maximize digital presence or digital business penetration</p>
        </Card>
        <Card className="p-4">
          <p className="text-lg font-semibold text-[#5D93AD]">Digital Marketing Introduction Class</p>
          <p className="text-lg font-semibold text-[#5D93AD]">Performance Marketing Class</p>
          <p className="text-lg font-semibold text-[#5D93AD]">Marketplace Strategy Class</p>
        </Card>
      </div>
    </section>
  )
}

function DigitalTechnologyPartnerSection() {
  return (
    <section id="DigitalPartner" className="bg-artboard7 bg-cover h-screen flex flex-col gap-4 align-middle justify-center mx-auto relative lg:text-left">
      <InViewWrapper>
        <div className="absolute top-6 left-6 font-bold text-[#527D38]">Adana Digital<br />2024</div>
      </InViewWrapper>
      <div className="text-3xl text-[#527D38] text-center lg:text-left lg:px-20">Our Digital Tools and Media Partners</div>
      <PartnersCarousel className="mx-auto" />
    </section>
  )
}

function SuccessStoryAndClientListSection() {
  const brands = ["at Mauv", "Malo Home", "Buttonscarves", "Malo Toys", "Berlynn", "Noor Abika", "Cloxvox", "Mava Kabar", "Gurih7", "Mom Uung", "homeground", "Smells Good", "Legato Gelato", "Tangerine Marche", "Figlio Apparel", "Torgana"];
  return (
    <section id="Portfolio" className="bg-artboard8 bg-cover h-screen flex flex-col gap-4 lg:gap-10 justify-center align-middle text-center relative lg:text-left">
      <InViewWrapper>
        <div className="text-3xl text-[#527D38] text-center lg:text-left mx-5 lg:mx-20">We Collaborate Remarkably With Incredible Brands</div>
      </InViewWrapper>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 align-middle justify-center">
        <div className="grow lg:grow-[4] mx-auto lg:ml-20 lg:mr-4 p-4 grid grid-cols-2 rounded-md bg-[#5D93AD] h-fit lg:overflow-y-hidden lg:h-[50vh]">
          {brands.map((b, i) => (
            <div key={i} className="text-white italic">{b}</div>
          ))}
        </div>
        <div className="grow lg:grow-[6] flex flex-col gap-8 lg:ml-4 lg:mr-20 h-[25vh] lg:h-[50vh] overflow-y-scroll p-5 lg:p-0">
          {brands.map((b, i) => (
            <Card key={i} className="flex flex-col lg:flex-row align-middle justify-evenly">
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold">{b}</h4>
                <div className="block lg:hidden">Service yang dipakai</div>
                <p className="">Description of work</p>
              </div>
              <div className="hidden lg:block">Service yang dipakai</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function LeadsAndContactsSection() {
  return (
    <section id="Contact" className="bg-artboard9 bg-cover h-screen flex flex-col gap-20 justify-center align-middle px-20 relative lg:text-left">
      <div className="text-white text-lg">Let&apos;s create a measurable impact towards your business</div>
      <div className="text-white font-semibold text-2xl underline underline-offset-2">Start Your Journey Now</div>
      <div className="flex flex-col lg:flex-row align-middle gap-6 lg:gap-0 lg:justify-around">
        <div className="text-white">
          Jl. Pasir Luyu No. 33 (40254)<br />
          Regol, Kelurahan Pasirluyu, Kota Bandung<br />
          Jawa Barat
        </div>
        <div className="text-white">
          <Socmed />
        </div>
        <div className="text-white">
          contact@byadana.com<br />
          +62-811-2114-142
        </div>
      </div>
    </section>
  )
}