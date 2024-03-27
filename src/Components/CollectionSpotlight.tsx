 import cards from '../../cardsData'
 import SpotlightCards from './SpotlightCards'
 const CollectionSpotlight: React.FC  = () => {
  return (
    <div className="md:w-[90vw] w-fit  min-h-[900px] flex flex-col items-center bg-gradient-to-br from-[#18282A] to-[#221A2C] text-white">
      <div className=" max-w-[1085.75px] w-full text-center relative  m-auto min-h-[798px] ">  
      <div className='absolute top-1/2 transform -translate-y-1/2 right-0'>
        <div className='w-[36.75px] h-[49px]  border border-[#2C9CF0] flex justify-center items-center'>
  <svg width="19" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.594509 19.6407C0.324454 19.3706 0.172746 19.0043 0.172746 18.6223C0.172746 18.2403 0.324454 17.874 0.594509 17.6038L7.72505 10.4733L0.594509 3.34276C0.332108 3.07107 0.186912 2.70719 0.190194 2.3295C0.193476 1.9518 0.344974 1.5905 0.612056 1.32342C0.879139 1.05633 1.24044 0.904837 1.61814 0.901554C1.99584 0.898272 2.35971 1.04347 2.6314 1.30587L10.7804 9.45486C11.0504 9.725 11.2021 10.0913 11.2021 10.4733C11.2021 10.8553 11.0504 11.2216 10.7804 11.4917L2.6314 19.6407C2.36126 19.9108 1.99492 20.0625 1.61295 20.0625C1.23098 20.0625 0.864645 19.9108 0.594509 19.6407Z" fill="#2C9CF0"/>
  </svg>
  </div>
</div>

<div className='absolute top-1/2 transform -translate-y-1/2 left-0'>
  <div className='w-[36.75px] h-[49px] border border-[#2C9CF0] flex justify-center items-center'>
  <svg width="19" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.1545 19.6407C11.4246 19.3706 11.5763 19.0043 11.5763 18.6223C11.5763 18.2403 11.4246 17.874 11.1545 17.6038L4.02397 10.4733L11.1545 3.34276C11.4169 3.07107 11.5621 2.70719 11.5588 2.3295C11.5555 1.9518 11.404 1.5905 11.137 1.32342C10.8699 1.05633 10.5086 0.904837 10.1309 0.901554C9.75319 0.898272 9.38931 1.04347 9.11763 1.30587L0.968638 9.45486C0.698583 9.725 0.546875 10.0913 0.546875 10.4733C0.546875 10.8553 0.698583 11.2216 0.968638 11.4917L9.11763 19.6407C9.38776 19.9108 9.7541 20.0625 10.1361 20.0625C10.518 20.0625 10.8844 19.9108 11.1545 19.6407Z" fill="#2C9CF0"/>
  </svg>
  </div>
</div>
       <h1 className="md:text-[50px] text-[38px] font-semibold font-poppins  ">Collection <span>Spotlight</span></h1>
       <p className="pt-2 text-[14px]">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable <br/> experience. Grab yours today!</p>
        <section className='flex flex-wrap gap-16 mt-4 justify-center items-center '>
         {
          cards.map((item)=>{
            return(
             <SpotlightCards key={item.id} {...item} />
            )
          })
         }
        </section>
      </div>
    </div>
  )
}
export default CollectionSpotlight