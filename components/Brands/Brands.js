import React from 'react'

const Brands = ({portfoliosRefs}) => {
  const brands = [
  {
    name: "at Mauv",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
  {
    name: "Malo Home",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
  {
    name: "Buttonscarves",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
  {
    name: "Malo Toys",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
  {
    name: "Berlynn",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
  {
    name: "Noor Abika",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
  {
    name: "Cloxvox",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
  {
    name: "Mava Kabar",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
  {
    name: "Gurih7",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
  {
    name: "Mom Uung",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
  {
    name: "homeground",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
  {
    name: "Smells Good",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
  {
    name: "Legato Gelato",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
  {
    name: "Tangerine Marche",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
  {
    name: "Figlio Apparel",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
  {
    name: "Torgana",
    desc: "description of experience",
    serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
  },
]
  return (
    <section 
      ref={portfoliosRefs}
      className='h-screen bg-white flex flex-row py-[100px]'
    >
      <div className='w-[50vw] px-20'>
        <p className="text-lg text-[#527D38] font-semibold mb-6">Incredible brands:</p>
        <div className="grid grid-cols-2">
          {brands.map((brand, i) => (
            <p key={i+1} className="text-[#527D38] my-2">{brand.name}</p>
          ))}
        </div>
      </div>
      <ul className="h-[500px] overflow-y-scroll list-none w-full lg:mx-10 px-1 lg:px-2">
        {brands.map((b, i) => (
          <li key={i+1} className="">
            <div className="py-2 flex flex-row justify-between gap-2 h-[140px] lg:h-[120px]">
              <span className="text-[#527D38] text-lg lg:text-xl">{i + 1}.</span>
              <div className="flex flex-col gap-2">
                <p className="text-[#527D38] text-md lg:text-lg font-semibold">{b.name}</p>
                <p className="text-[#527D38] text-sm lg:text-md">{b.desc}</p>
                <p className="block lg:hidden text-[#527D38] text-sm lg:text-md italic">
                  {b.serv.join(", ")}
                </p>
              </div>
              <ul className="hidden lg:block list-none">
                {b.serv.map((s, j) => (
                  <li key={`${i}.${j}`} className="text-[#527D38] text-sm lg:text-md">{s}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-row align-top">
              <div className="grow bg-gradient-to-r from-transparent to-[#527D38] h-[3px]"></div>
              <div className="grow bg-gradient-to-r from-[#527D38] to-transparent h-[3px]"></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Brands