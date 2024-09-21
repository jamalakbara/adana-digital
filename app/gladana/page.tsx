import MotionWrapper from "@/components/client/motion-wrapper";

export default function Home() {
  return (
    <MotionWrapper>
      <HeroSection />
    </MotionWrapper>
  )
}

function HeroSection() {
  return (
    <section id="Portfolio" className="bg-[#FFFFFF] h-screen flex flex-col gap-4 lg:gap-10 justify-center align-middle text-center relative lg:text-left">
      HeroSection
    </section>
  )
}