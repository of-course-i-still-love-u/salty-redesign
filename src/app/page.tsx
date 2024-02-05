'use client'
import AboutMeSection from '@/components/aboutMeSection/aboutMeSection'
import CoverSection from '@/components/coverSection/coverSection'
import ExperiencesSection from '@/components/experiencesSection/experiencesSection'
import PortfolioSection from '@/components/portfolioSection/portfolioSection'
import ContactMeSection from '@/components/contactMeSection/contactMeSection'
import CreditSection from '@/components/creditSection/creditSection'
import NavigationBar from '@/components/navigationBar/navigationBar'
import { useEffect, useRef, useState } from 'react'

export default function Page() {

  const divCover = useRef<HTMLInputElement | null>(null);
  const divAbout = useRef<HTMLInputElement | null>(null);
  const divExp = useRef<HTMLInputElement | null>(null);
  const divPort = useRef<HTMLInputElement | null>(null);
  const divContact = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, []);


  const scrolLWithUseRef = (menu: string): any => {
    switch (menu) {
      case "Home":
        divCover.current?.scrollIntoView({ block: "center", behavior: "smooth" });
        break;
      case "About Me":
        divAbout.current?.scrollIntoView({ block: "center", behavior: "smooth" });
        break;
      case "Experiences":
        divExp.current?.scrollIntoView({ block: "center", behavior: "smooth" });
        break;
      case "Portfolio":
        divPort.current?.scrollIntoView({ block: "center", behavior: "smooth" });
        break;
      case "Contact":
        divContact.current?.scrollIntoView({ block: "center", behavior: "smooth" });
        break;
      default:
        break;
    }
  };


  return (
    <div className=" bg-white">
      <NavigationBar refMenu={(o) => scrolLWithUseRef(o)} />
      <div ref={divCover} id='Cover' >
        <CoverSection />
      </div>
      <div ref={divAbout}>
        <AboutMeSection refMenu={(o) => scrolLWithUseRef(o)} />
      </div>
      <div ref={divExp}>
        <ExperiencesSection />
      </div>
      <div ref={divPort}>
        <PortfolioSection />
      </div>
      <div ref={divContact} id='Contact'>
        <ContactMeSection />
      </div>
      <CreditSection refMenu={(o) => scrolLWithUseRef(o)} />

    </div>
  )
}

