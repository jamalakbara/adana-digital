"use client"
import MotionWrapper from "@/components/client/motion-wrapper";
import { services } from "@/lib/data";
import { Card } from "@/components/ui/card";
import InViewWrapper from "@/components/client/in-view-wrapper";
import { MoveDownArrow } from "@/components/client/move-down-arrow";
import { LetsDiscussText } from "@/components/client/lets-discuss-text";
import { PartnersCarousel } from "@/components/client/partners-carousel";
import { Navbar } from "@/components/client/navbar";
import { Socmed } from "@/components/client/socmed";
import { useState } from "react";
import Link from 'next/link'
import { BrandsCarousel } from "@/components/client/brands-carousel";

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
    <section id="HeroSection" className="bg-artboard1 bg-cover h-screen flex flex-col justify-evenly align-middle text-center relative lg:text-left">
      <InViewWrapper>
        <div className="lg:absolute lg:top-[50%] lg:left-20 text-5xl text-white">
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
    <section id="WhySection" className="bg-artboard2 bg-cover h-screen flex flex-col justify-evenly align-middle text-center relative lg:text-left">
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
            <h2 className="text-2xl lg:text-4xl font-extrabold mt-5 lg:mt-0 text-[#334E4D]">Why Adana?</h2>
            <p className="text-md lg: text-xl mt-5 lg:w-fit lg:mx-0 w-[80%] mx-auto text-[#334E4D]">
              Adana Digitalfocus to craft performance marketing strategy and digital media to achieve measurable impact in order to accelerate business growth.
            </p>
            <p className="text-md lg: text-xl mt-5 lg:w-fit lg:mx-0 w-[80%] mx-auto text-[#334E4D]">
              Recognizing that every company is unique, we aim to provide excellence strategies by taking a customized approach for each of our partner
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const [, setClassCard] = useState("h-64");

  const handleMouseEnter = () => {
    setClassCard("h-64");
  }

  const handleMouseLeave = () => {
    setClassCard(" ");
  }

  return (
    <section id="ServicesSection" className="bg-white bg-cover h-screen flex flex-col justify-center gap-10 lg:gap-24 text-center relative lg:text-left py-20 px-10">
      <div className="flex flex-col items-center justify-center text-[#334E4D] lg:w-1/2">
        <InViewWrapper>
          <h2 className="text-xl lg:text-2xl mt-5 lg:mt-0 underline underline-offset-8">Our Services</h2>
          <p className="text-2xl lg:text-4xl font-bold mt-2">
            Evolving Together to utilize Innovative Digital Solutions to Develop Your Brand.
          </p>
        </InViewWrapper>
      </div>

      <div className="flex flex-col gap-4 lg:hidden">
        {services.map((s, i) => (
          <Link
            key={s.url}
            href={s.url}
            className={`border-2 border-[#334E4D] ${i===services.length-1 ? 'bg-[#EEFF01] border-[#EEFF01]' : ''} rounded-sm p-2 flex flex-col justify-between hover:bg-[#EEFF01] hover:border-[#EEFF01] cursor-pointer text-[#334E4D] transition-all text-sm`}
          >
            <p className="text-2xl">{`0${i+1}. `} {s.title}</p>
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex flex-row gap-4 items-end">
        {services.map((s, i) => (
          <Link
            key={s.url}
            href={s.url}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`border-2 border-[#334E4D] ${i===services.length-1 ? 'bg-[#EEFF01] border-[#EEFF01] h-64' : ''} rounded-sm p-8 basis-1/5 hover:h-64 flex flex-col justify-between hover:bg-[#EEFF01] hover:border-[#EEFF01] cursor-pointer text-[#334E4D] transition-all`}
          >
            <span>{`0${i+1}`}</span>
            <p className="text-2xl">{s.title}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

function PerformanceMarketingSection() {
  return (
    <section id="PerformanceMarketingSection" className="bg-white h-screen flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center align-middle text-center relative lg:text-left py-20 px-10">
      <div className="lg:w-[50%] flex flex-col align-middle justify-center px-6 gap-4 lg:gap-4">
        <Card className="p-8 grow flex flex-col gap-8 bg-[#5D93AD]">
          <h2 className="text-lg font-semibold text-black">Performance Marketing</h2>
          <div>
            <p className="text-base font-medium text-black">Strategize for effectiveness and optimize for optimum impact</p>
          </div>
        </Card>
        <Card className="p-8 grow flex flex-col gap-8 bg-[#5D93AD]">
          <h2 className="text-lg font-semibold text-black">Digital Advertising Solution</h2>
          <div>
            <p className="text-base font-medium text-black">Strategize for effectiveness and optimize for optimum impact</p>
          </div>
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
    <section id="MarketplaceManagementSection" className="bg-white h-screen flex flex-col lg:flex-row-reverse gap-4 lg:gap-0 justify-center align-middle text-center relative lg:text-left py-20 px-10">
      <div className="lg:w-[50%] flex flex-col align-middle justify-center px-6 gap-4 lg:gap-4">
        <Card className="p-8 grow flex flex-col gap-8 bg-[#5D93AD]">
          <h2 className="text-lg font-semibold text-black">Performance Marketing</h2>
          <div>
            <p className="text-base font-medium text-black">Strategize for effectiveness and optimize for optimum impact</p>
          </div>
        </Card>
        <Card className="p-8 grow flex flex-col gap-8 bg-[#5D93AD]">
          <h2 className="text-lg font-semibold text-black">Digital Advertising Solution</h2>
          <div>
            <p className="text-base font-medium text-black">Strategize for effectiveness and optimize for optimum impact</p>
          </div>
        </Card>
      </div>
      <div className="lg:w-[50%] flex flex-col align-middle justify-center gap-4 lg:gap-0">
        <div className="flex flex-row align-middle justify-center">SAMPLE REPORT DIGITAL MARKETING IMG</div>
      </div>
    </section>
  )
}

function DigitalMediaBuyingSection() {
  return (
    <section id="DigitalMediaBuyingSection" className="bg-white h-screen flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center align-middle text-center relative lg:text-left py-20 px-10">
      <div className="lg:w-[50%] flex flex-col align-middle justify-center px-6 gap-4 lg:gap-4">
        <Card className="p-8 grow flex flex-col gap-8 bg-[#5D93AD]">
          <h2 className="text-lg font-semibold text-black">Performance Marketing</h2>
          <div>
            <p className="text-base font-medium text-black">Strategize for effectiveness and optimize for optimum impact</p>
          </div>
        </Card>
        <Card className="p-8 grow flex flex-col gap-8 bg-[#5D93AD]">
          <h2 className="text-lg font-semibold text-black">Digital Advertising Solution</h2>
          <div>
            <p className="text-base font-medium text-black">Strategize for effectiveness and optimize for optimum impact</p>
          </div>
        </Card>
      </div>
      <div className="lg:w-[50%] flex flex-col align-middle justify-center gap-4 lg:gap-0">
        <div className="flex flex-row align-middle justify-center">SAMPLE REPORT DIGITAL MARKETING IMG</div>
      </div>
    </section>
  )
}

function DigitalCorporateTrainingSection() {
  return (
    <section id="DigitalCorporateTrainingSection" className="bg-white h-screen flex flex-col lg:flex-row-reverse gap-4 lg:gap-0 justify-center align-middle text-center relative lg:text-left py-20 px-10">
      <div className="lg:w-[50%] flex flex-col align-middle justify-center px-6 gap-4 lg:gap-4">
        <Card className="p-8 grow flex flex-col gap-8 bg-[#5D93AD]">
          <h2 className="text-lg font-semibold text-black">Performance Marketing</h2>
          <div>
            <p className="text-base font-medium text-black">Strategize for effectiveness and optimize for optimum impact</p>
          </div>
        </Card>
        <Card className="p-8 grow flex flex-col gap-8 bg-[#5D93AD]">
          <h2 className="text-lg font-semibold text-black">Digital Advertising Solution</h2>
          <div>
            <p className="text-base font-medium text-black">Strategize for effectiveness and optimize for optimum impact</p>
          </div>
        </Card>
      </div>
      <div className="lg:w-[50%] flex flex-col align-middle justify-center gap-4 lg:gap-0">
        <div className="flex flex-row align-middle justify-center">SAMPLE REPORT DIGITAL MARKETING IMG</div>
      </div>
    </section>
  )
}

function DigitalTechnologyPartnerSection() {
  return (
    <section id="DigitalTechnologyPartnerSection" className="bg-artboard7 bg-cover h-screen flex flex-col gap-4 align-middle justify-center mx-auto relative lg:text-left">
      <InViewWrapper>
        <div className="absolute top-6 left-6 font-bold text-[#527D38]">Adana Digital<br />2024</div>
      </InViewWrapper>
      <div className="text-3xl text-[#527D38] text-center lg:text-left lg:px-20 underline underline-offset-8 lg:mx-auto">Our Digital Tools and Media Partners</div>
      <PartnersCarousel className="mx-auto" />
    </section>
  )
}

function SuccessStoryAndClientListSection() {
  return (
    <section id="SuccessStoryAndClientListSection" className="bg-artboard8 bg-cover h-screen flex flex-col gap-4 lg:gap-10 justify-start lg:justify-center pt-10 lg:pt-0 align-middle text-center relative lg:text-left">
      <InViewWrapper>
        <div className="text-3xl text-[#527D38] text-center mx-5 underline underline-offset-8">We Collaborate Remarkably With Incredible Brands</div>
      </InViewWrapper>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 align-middle justify-center">
        <BrandsCarousel />
      </div>
    </section>
  )
}

function LeadsAndContactsSection() {
  return (
    <section id="LeadsAndContactsSection" className="bg-artboard9 bg-cover h-screen flex flex-col gap-20 justify-center align-middle px-20 relative lg:text-left">
      <div className="text-white text-lg">Let&apos;s create a measurable impact towards your business</div>
      <div className="text-white font-semibold text-5xl underline underline-offset-8">Start Your Journey Now</div>
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