 import cards from '../../cardsData'
 import SpotlightCards from './SpotlightCards'
 const CollectionSpotlight: React.FC  = () => {
  return (
    <div className="md:w-[90vw] w-fit  min-h-[900px] flex flex-col items-center bg-gradient-to-br from-[#18282A] to-[#221A2C] text-white">
      <div className=" w-full text-center   m-auto min-h-[798px] ">
       <h1 className="md:text-[50px] text-[38px] font-semibold font-poppins  ">Collection <span>Spotlight</span></h1>
       <p className="pt-2 text-[14px]">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable <br/> experience. Grab yours today!</p>
        <section className='flex flex-wrap gap-6 mt-4 justify-center items-center '>
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