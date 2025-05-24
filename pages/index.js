import { Inter } from '@next/font/google'
import Navigation from '@/components/Navigation/Navigation'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import Story from '@/components/Story/Story'
import Concept from '@/components/Concept/Concept'
import Products from '@/components/Products/Products'
import Missions from '@/components/Missions/Missions'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Sliders from '@/components/Sliders/Sliders'
import Brands from '@/components/Brands/Brands'

export default function Home() {
  const [activeLink, setActiveLink] = useState('hero');

  const heroRefs = useRef(null)
  const storyRefs = useRef(null)
  const conceptRefs = useRef(null)
  const partnersRefs = useRef(null)
  const productsRefs = useRef(null)
  const portfoliosRefs = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const heroPosition = heroRefs.current.getBoundingClientRect().top;
      const storyPosition = storyRefs.current.getBoundingClientRect().top;
      const conceptPosition = conceptRefs.current.getBoundingClientRect().top;
      const partnersPosition = partnersRefs.current.getBoundingClientRect().top;
      const productPosition = productsRefs.current.getBoundingClientRect().top;
      const portfolioPosition = portfoliosRefs.current.getBoundingClientRect().top;
      
      if (heroPosition <= 0) {
        setActiveLink('hero');
      } 
      if (storyPosition <= 0) {
        setActiveLink('story');
      }
      if (conceptPosition <= 0) {
        setActiveLink('concept');
      }
      if (productPosition <= 0) {
        setActiveLink('products');
      }
      if (partnersPosition <= 0) {
        setActiveLink('partners');
      }
      if (portfolioPosition <= 0) {
        setActiveLink('portfolio');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [storyRefs, heroRefs]);

  const navigation_links = [
    {
      key: 0,
      label: "home",
      refs: heroRefs
    },
    {
      key: 4,
      label: "expertise",
      refs: productsRefs
    },
    {
      key: 3,
      label: "digital partners",
      refs: partnersRefs
    },
    {
      key: 2,
      label: "portfolio",
      refs: portfoliosRefs
    },
  ]

  const strats = {
    images: [
      {
        src: 'mission1.png',
        width: 403,
        height: 454
      },
      {
        src: 'mission2.png',
        width: 272,
        height: 275
      },
    ],
    text_title: 'Strategize for effectiveness and optimize for optimum impact',
    values: [
      'Digital Advertising Solution',
      'Data Driven Analysis',
      'Business Growth Consultation',
      'Email Marketing',
    ]
  }

  const manages = {
    images: [
      {
        src: 'mission1.png',
        width: 473,
        height: 454
      },
      {
        src: 'mission2.png',
        width: 201,
        height: 275
      },
    ],
    text_title: 'Managing end to end business and marketing strategy for marketplace',
    values: [
      'Affiliate Marketing',
      'Marketplace SEO',
      'Marketplace Program Consultation',
    ]
  }

  const acc = {
    images: [
      {
        src: 'story1.png',
        width: 473,
        height: 454
      },
      {
        src: 'story2.png',
        width: 201,
        height: 275
      },
    ],
    text_title: 'Accelerate digital knowledge to maximize digital presence or digital business penetration',
    values: [
      'Digital Marketing Introduction Class',
      'Performance Marketing Class',
      'Marketplace Strategy Class',
    ]
  }

  const resonates = {
    images: [
      {
        src: 'mission1.png',
        width: 403,
        height: 454
      },
      {
        src: 'mission2.png',
        width: 272,
        height: 275
      },
    ],
    text_title: 'Resonates your brand through digital media buying',
    values: [
      'OTT and OLV placement',
      'Digital Media Advertorials',
      'Mobile Push Notification',
      'Digital OOH',
    ]
  }

  const agency_partners = [
    "/img/agency_partner_1.png",
    "/img/agency_partner_2.png",
  ]

  return (
    <>
      <Head>
        <title>Adana</title>
      </Head>

      <Navigation navigation_links={navigation_links} activeLink={activeLink} setActiveLink={setActiveLink} />

      <Hero heroRefs={heroRefs} />

      <Concept conceptRefs={conceptRefs} />

      <Products productsRefs={productsRefs} />

      {/* <Carousel carouselRefs={carouselRefs} /> */}

      <Missions val={strats} />

      <Story val={manages} storyRefs={storyRefs} />

      <Missions val={resonates} />

      <Story val={manages} storyRefs={storyRefs} />

      <Sliders partnersRefs={partnersRefs} />

      <Brands portfoliosRefs={portfoliosRefs} />

      <Footer navigation_links={navigation_links} />
    </>
  )
}
