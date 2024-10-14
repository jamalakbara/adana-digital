/* eslint-disable  @typescript-eslint/no-explicit-any */
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
      if ([heroRef.current, descriptionRef.current, servicesRef.current, toolsPartnersRef.current, brandsRef.current, contactsRef.current].includes(null)) {
        return
      }

      const heroPosition = (heroRef.current as any).getBoundingClientRect().top;
      // const descriptionPosition = (descriptionRef.current as any).getBoundingClientRect().top;
      const servicesPosition = (servicesRef.current as any).getBoundingClientRect().top;
      const toolsPartnersPosition = (toolsPartnersRef.current as any).getBoundingClientRect().top;
      const brandsPosition = (brandsRef.current as any).getBoundingClientRect().top;
      const contactsPosition = (contactsRef.current as any).getBoundingClientRect().top;
      
      if (heroPosition <= 0) {
        setActiveLink('home');
      }
      // if (descriptionPosition <= 0) {
      //   setActiveLink('description');
      // }
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
  }, [heroRef]);

  const navigation_links = [
    {
      key: 1,
      label: "home",
      ref: heroRef
    },
    // {
    //   key: 2,
    //   label: "description",
    //   ref: descriptionRef
    // },
    {
      key: 3,
      label: "expertise",
      ref: servicesRef
    },
    {
      key: 4,
      label: "digital-partners",
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

      <div id='home' ref={heroRef}>
        <Hero />
      </div>
      <div ref={descriptionRef}>
        <Description />
      </div>
      <div id='expertise' ref={servicesRef}>
        <Services />
      </div>
      <div id='performance-marketing'>
        <PerformanceMarketing />
      </div>
      <div id='marketplace-management'>
        <MarketplaceManagement />
      </div>
      <div id='media-buying'>
        <MediaBuying />
      </div>
      <div id='corporate-training'>
        <CorporateTraining />
      </div>
      <div id='digital-partners' ref={toolsPartnersRef}>
        <ToolsPartners />
      </div>
      <div id='portfolio' ref={brandsRef}>
        <Brands />
      </div>
      <div id='contacts' ref={contactsRef}>
        <Contacs />
      </div>
    </>
  )
}

export default Page