'use client'

import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Head from 'next/head';

import Navigation from '@/components/client/Navigation';
import Hero from './hero'
import Description from './description'
import Services from './services'
import PerformanceMarketing from './performance-marketing'
import MarketplaceManagement from './marketplace-management'
import MediaBuying from './media-buying'
import CorporateTraining from './corporate-training'
import ToolsPartners from './tools-partners'
import Brands from './brands'
import Contacs from './contacts'

const Page = () => {
  const [activeLink, setActiveLink] = useState('home');

  const heroRef = useRef(null)
  const descriptionRef = useRef(null)
  const servicesRef = useRef(null)
  const toolsPartnersRef = useRef(null)
  const brandsRef = useRef(null)
  const contactsRef = useRef(null)

  useEffect(() => {
    AOS.init()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const heroPosition = heroRef.current.getBoundingClientRect().top;
      const descriptionPosition = descriptionRef.current.getBoundingClientRect().top;
      const servicesPosition = servicesRef.current.getBoundingClientRect().top;
      const toolsPartnersPosition = toolsPartnersRef.current.getBoundingClientRect().top;
      const brandsPosition = brandsRef.current.getBoundingClientRect().top;
      const contactsPosition = contactsRef.current.getBoundingClientRect().top;
      
      if (heroPosition <= 0) {
        setActiveLink('home');
      }
      if (descriptionPosition <= 0) {
        setActiveLink('description');
      }
      if (servicesPosition <= 0) {
        setActiveLink('services');
      }
      if (toolsPartnersPosition <= 0) {
        setActiveLink('digital partners');
      }
      if (brandsPosition <= 0) {
        setActiveLink('portfolio')
      }
      if (contactsPosition <= 0) {
        setActiveLink('contacts');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [heroRef, descriptionRef]);

  const navigation_links = [
    {
      key: 1,
      label: "home",
      ref: heroRef
    },
    {
      key: 2,
      label: "description",
      ref: descriptionRef
    },
    {
      key: 3,
      label: "services",
      ref: servicesRef
    },
    {
      key: 4,
      label: "digital partners",
      ref: toolsPartnersRef
    },
    {
      key: 5,
      label: 'portfolio',
      ref: brandsRef
    },
    {
      key: 6,
      label: "contacts",
      ref: contactsRef
    }
  ]

  return (
    <>
      <Head>
        <title>Adana Digital</title>
      </Head>
      <Navigation navigation_links={navigation_links} activeLink={activeLink} setActiveLink={setActiveLink} />

      <Hero ref={heroRef} />
      <Description ref={descriptionRef} />
      <Services ref={servicesRef} />
      <PerformanceMarketing />
      <MarketplaceManagement />
      <MediaBuying />
      <CorporateTraining />
      <ToolsPartners ref={toolsPartnersRef} />
      <Brands ref={brandsRef} />
      <Contacs ref={contactsRef} />
    </>
  )
}

export default Page