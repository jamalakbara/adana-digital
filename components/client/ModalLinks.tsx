/* eslint-disable  @typescript-eslint/no-explicit-any */

const Navlink = ({ link, activeLink, onClick }: { link: { label: string }, activeLink: string, onClick: (link: any) => void }) => {
  return (
    <div
      className={`cursor-pointer text-secondary-white capitalize font-light font-sans hover:opacity-100
      sm:text-4xl
      md:text-[52px] md:leading-[62px]
      ${link.label === activeLink ? 'opacity-100' : 'opacity-70'}`} 
      onClick={() => onClick(link)}
    >
      {link.label}
    </div>
  )
}

const Hamburger = ({ visibleModal, setVisibleModal }: { visibleModal: boolean, setVisibleModal: (arg: boolean) => void }) => {
  const handleClick = () => {
    setVisibleModal(!visibleModal)
  }

  return (
    <div onClick={handleClick} className="relative w-9 h-9 rounded-full border-solid border-2 border-white opacity-30 cursor-pointer flex flex-col justify-evenly p-2">
      <div className="absolute top-1/2 left-0 translate-y-[-50%] scale-50 w-full h-[2px] -rotate-45 bg-white"></div>
      <div className="absolute top-1/2 left-0 translate-y-[-50%] scale-50 w-full h-[2px] rotate-45 bg-white"></div>
    </div>
  )
}

const ModalLinks = ({ navigation_links, activeLink, setActiveLink, visibleModal, setVisibleModal }: { navigation_links: { label: string }[], activeLink: string, setActiveLink: (link: any) => void, visibleModal: boolean, setVisibleModal: (arg: boolean) => void }) => {
  const handleClick = ({ label, refs }: { label: string, refs: any }) => {
    refs.current.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(label)
    setVisibleModal(!visibleModal)
  }
  
  if (visibleModal) return (
    <section 
      className={`h-screen fixed z-[1001] top-0 left-0 w-full
      sm:px-[40px]
      md:px-20
      xl:px-[10%]`}
      style={{background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(7px)'}}
    >
      <div className="flex items-center justify-end h-[100px]">
        <Hamburger visibleModal={visibleModal} setVisibleModal={setVisibleModal} />
      </div>
      <div className="flex justify-end">
        <div className="text-right flex flex-col gap-[20px]">
          {
            navigation_links.map((link,idx) => (
              <div key={idx} data-aos='fade-left' data-aos-delay={idx*100}>
                <Navlink key={idx} link={link} activeLink={activeLink} onClick={handleClick} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ModalLinks