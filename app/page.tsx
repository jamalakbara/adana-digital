"use client"
import MotionWrapper from "@/components/client/motion-wrapper";
import { services } from "@/lib/data";
import InViewWrapper from "@/components/client/in-view-wrapper";
import { MoveDownArrow } from "@/components/client/move-down-arrow";
import { LetsDiscussText } from "@/components/client/lets-discuss-text";
import { PartnersCarousel } from "@/components/client/partners-carousel";
import { Navbar } from "@/components/client/navbar";
import { Socmed } from "@/components/client/socmed";
import { useState } from "react";
import Link from 'next/link'
import { BrandsList } from "@/components/client/brands-list";
import glodana_logo from "@/public/assets/glodana-logo.svg";
import Image from "next/image";

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
    <section id="HeroSection" className="bg-white h-screen flex flex-col justify-evenly align-middle text-center relative lg:text-left">
      <InViewWrapper>
        <div className="lg:absolute lg:top-[50%] lg:right-20 text-5xl text-[#334E4D]">
          Collaborative Growth<br />Through Impactful Digital Strategies
        </div>
      </InViewWrapper>
      <InViewWrapper>
        <div className="lg:absolute lg:bottom-20 lg:right-20 text-2xl">
          <LetsDiscussText className="text-[#334E4D]" />
        </div>
      </InViewWrapper>
      <InViewWrapper>
        <div className="flex flex-row align-middle justify-center lg:absolute lg:bottom-20 left-20">
          <MoveDownArrow className="text-[#334E4D]" />
        </div>
      </InViewWrapper>
    </section>
  )
}

function WhySection() {
  return (
    <section id="WhySection" className="bg-white lg:h-screen flex flex-col gap-2 lg:gap-0 justify-center items-center text-center lg:relative">
      <h2 className="text-2xl lg:text-4xl font-extrabold mt-5 lg:mt-0 text-[#334E4D]">Why Adana?</h2>
      <p className="text-md lg: text-xl mt-5 lg:w-fit lg:mx-0 w-[80%] mx-auto text-[#334E4D]">
        Adana Digitalfocus to craft performance marketing strategy and digital media to achieve measurable impact in order to accelerate business growth.
      </p>
      <p className="text-md lg: text-xl mt-5 lg:w-fit lg:mx-0 w-[80%] mx-auto text-[#334E4D] mb-4 lg:mb-0">
        Recognizing that every company is unique, we aim to provide excellence strategies by taking a customized approach for each of our partner
      </p>
      <div className="h-[150px] w-[150px] bg-[#334E4D] rounded-md lg:absolute lg:top-[20%] lg:left-[20%]">
        <div className="relative">
          <div className="text-white font-semibold absolute top-12 left-6">Transparent</div>
        </div>
      </div>
      <div className="h-[150px] w-[150px] bg-[#EEFF01] rounded-full lg:absolute lg:top-[10%] lg:right-[25%]">
        <div className="relative">
          <div className="text-[#334E4D] font-semibold absolute top-12 left-8">Excellent<br />Deliverables</div>
        </div>
      </div>
      <div className="h-[150px] w-[150px] bg-[#EEFF01] rounded-full lg:absolute lg:bottom-[5%] lg:left-[20%]">
        <div className="relative">
          <div className="text-[#334E4D] font-semibold absolute top-16 left-4">Growth Minded</div>
        </div>
      </div>
      <div className="right-triangle-lt bg-[#6E8798] w-[170px] lg:absolute lg:bottom-[10%] lg:right-[15%]">
        <div className="relative">
          <div className="text-white font-semibold absolute top-4 left-4">Teamwork</div>
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
    <section id="ServicesSection" className="bg-white lg:h-screen flex flex-col justify-center gap-10 lg:gap-24 text-center relative lg:text-left py-20 px-10">
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
            className="flex flex-col items-center hover:opacity-70 transition-all ease-in-out"
          >
            {i === services.length-1 ? <p className="text-2xl">Our Services</p> : null}
            <div className="w-[250px] h-[200px] bg-red-500">IMG</div>
            <p className="text-2xl">{`0${i+1}. `} {s.title}</p>
            {i === services.length-1 ? <p className="text-2xl flex flex-row gap-2">
              by: <Image src={glodana_logo} alt="" width={150} />
            </p> : null}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex flex-row gap-4 justify-center">
        {services.map((s, i) => (
          <Link
            key={s.url}
            href={s.url}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col items-center gap-2 hover:opacity-70 transition-all ease-in-out relative"
          >
            {i === services.length-1 ? <p className="text-2xl absolute top-[-50px] left-0">Our Services</p> : null}
            <div className="w-[250px] h-[200px] bg-red-500">IMG</div>
            <p className="text-xl">{s.title}</p>
            {i === services.length-1 ? <p className="text-2xl absolute bottom-[-50px] left-0 flex flex-row gap-2">
              by: <Image src={glodana_logo} alt="" width={150} />
            </p> : null}

          </Link>
        ))}
      </div>
    </section>
  )
}

function PerformanceMarketingSection() {
  return (
    <section id="PerformanceMarketingSection" className="bg-gray-100 lg:h-screen py-20 px-10">
      <div className="relative">
        <div className="lg:absolute lg:top-[100px] lg:left-[250px] h-[400px] lg:w-[250px] bg-red-500">IMG 1</div>
        <div className="lg:absolute lg:top-[400px] lg:left-[350px] h-[200px] lg:w-[200px] bg-orange-500">IMG 2</div>
        <div className="lg:absolute lg:top-[150px] lg:left-[700px] lg:h-[100px] lg:w-[700px] flex flex-col justify-between mt-5 lg:mt-0">
          <h2 className="text-2xl font-semibold">Performance Marketing</h2>
          <p className="text-lg font-semibold">Strategize for effectiveness and optimize for optimum impact</p>
        </div>
        <div className="lg:absolute lg:top-[350px] lg:left-[800px] lg:h-[200px] lg:w-[500px] flex flex-col gap-2 mt-5 lg:mt-0">
          <p className="font-semibold">Digital Advertising Solution</p>
          <p className="font-semibold">Data Driven Marketing Analysis</p>
          <p className="font-semibold">Business Growth Consultation</p>
          <p className="font-semibold">Email Marketing</p>
        </div>
      </div>
    </section>
  )
}

function MarketplaceManagementSection() {
  return (
    <section id="MarketplaceManagementSection" className="bg-gray-300 lg:h-screen py-20 px-10">
      <div className="relative">
        <div className="lg:absolute lg:top-[150px] left-[250px] lg:h-[100px] lg:w-[700px] flex flex-col justify-between">
          <h2 className="text-2xl font-semibold">Marketplace Management</h2>
          <p className="text-lg font-semibold">Managing end to end business and marketing strategy for marketplace</p>
        </div>
        <div className="lg:absolute lg:top-[350px] left-[350px] lg:h-[200px] lg:w-[500px] flex flex-col gap-2 mt-5 lg:mt-0">
          <p className="font-semibold">Affiliate Marketing</p>
          <p className="font-semibold">Marketplace SEO</p>
          <p className="font-semibold">Marketplace Program Consultation</p>
        </div>
        <div className="lg:absolute lg:top-[100px] lg:left-[1000px] h-[500px] lg:w-[300px] bg-green-500 mt-5 lg:mt-0">IMG 1</div>
      </div>
    </section>
  )
}

function DigitalMediaBuyingSection() {
  return (
    <section id="DigitalMediaBuyingSection" className="bg-gray-100 lg:h-screen py-20 px-10">
      <div className="relative">
        <div className="lg:absolute lg:top-[50px] lg:left-[250px] h-[500px] lg:w-[350px] bg-red-500">IMG 1</div>
        <div className="lg:absolute lg:top-[150px] lg:left-[700px] lg:h-[100px] lg:w-[700px] flex flex-col justify-between mt-5 lg:mt-0">
          <h2 className="text-2xl font-semibold">Digital Media Buying</h2>
          <p className="text-lg font-semibold">Resonates Your Brand Through Digital Media Buying</p>
        </div>
        <div className="lg:absolute lg:top-[350px] lg:left-[800px] lg:h-[200px] lg:w-[500px] flex flex-col gap-2 mt-5 lg:mt-0">
          <p className="font-semibold">OTT and OLV Media Placement</p>
          <p className="font-semibold">Digital Media Advertorials</p>
          <p className="font-semibold">Mobile Push Notification</p>
          <p className="font-semibold">Digital OOH</p>
        </div>
      </div>
    </section>
  )
}

function DigitalCorporateTrainingSection() {
  return (
    <section id="DigitalCorporateTrainingSection" className="bg-gray-300 lg:h-screen py-20 px-10">
      <div className="relative">
        <div className="lg:absolute lg:top-[150px] left-[150px] lg:h-[100px] lg:w-[500px] flex flex-col justify-between">
          <h2 className="text-2xl font-semibold">Digital Marketing Corporate Training</h2>
          <p className="text-lg font-semibold">Accelerate digital knowledge to maximize digital presence or digital business penetration</p>
        </div>
        <div className="lg:absolute lg:top-[350px] left-[250px] lg:h-[200px] lg:w-[500px] flex flex-col gap-2 mt-5 lg:mt-0">
          <p className="font-semibold">Digital Marketing Introduction Class</p>
          <p className="font-semibold">Performance Marketing Class</p>
          <p className="font-semibold">Marketplace Strategy Class</p>
        </div>
        <div className="lg:absolute lg:top-[100px] lg:left-[800px] h-[400px] lg:w-[600px] bg-green-500 mt-5 lg:mt-0">IMG 1</div>
      </div>
    </section>
  )
}

function DigitalTechnologyPartnerSection() {
  return (
    <section id="DigitalTechnologyPartnerSection" className="bg-white h-screen flex flex-col gap-4 align-middle justify-center mx-auto relative lg:text-left">
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
    <section id="SuccessStoryAndClientListSection" className="bg-white h-screen flex flex-col gap-4 lg:gap-10 justify-start lg:justify-center pt-10 lg:pt-0 align-middle text-center relative lg:text-left">
      <InViewWrapper>
        <div className="text-3xl text-[#527D38] text-center mx-5 underline underline-offset-8">We Collaborate Remarkably With Incredible Brands</div>
      </InViewWrapper>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 align-middle justify-center">
        <BrandsList />
      </div>
    </section>
  )
}

function LeadsAndContactsSection() {
  return (
    <section id="LeadsAndContactsSection" className="bg-black h-screen flex flex-col gap-20 justify-center align-middle px-20 relative lg:text-left">
      <div className="text-white text-lg text-center lg:text-left">Let&apos;s create a measurable impact towards your business</div>
      <div className="text-white font-semibold text-5xl underline underline-offset-[10px] text-center lg:text-right">Start Your Journey Now</div>
      <div className="flex flex-col lg:flex-row align-middle gap-6 lg:gap-0 lg:justify-around lg:mt-20">
        <div className="text-white text-center lg:text-left">
          Jl. Pasir Luyu No. 33 (40254)<br />
          Regol, Kelurahan Pasirluyu, Kota Bandung<br />
          Jawa Barat
        </div>
        <div className="text-white">
          <Socmed />
        </div>
        <div className="text-white text-center lg:text-left">
          contact@byadana.com<br />
          +62-811-2114-142
        </div>
      </div>
    </section>
  )
}