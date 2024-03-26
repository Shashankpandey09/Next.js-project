import DottedLines from "./DottedLines";
interface Props{
    imageUrl:string;
    teamName:string;
    collectionType:string;
    location:string;
}
const SpotlightCards:React.FC<Props> = ({imageUrl,teamName,collectionType,location}) => {
  return (
   <div className="h-[624px] bg-[#3B3E47] w-[257px] ">
  <div className="image   ">
  <img src={imageUrl} alt={teamName} className="object-contain w-full pb-0 h-full " />
     <DottedLines/>
  </div>
    <div>
  <h1 className="font-semibold text-xl  line-height-[20px] my-3">
  {teamName}
</h1>
<p><span>Oct 15 |Sun| 4:30 PM</span></p>
<div className="w-[80%] m-auto opacity-60 my-3 ">
  <p>{location}</p> 
</div>

  <button className="bg-black py-2 w-[229px] px-4">{collectionType}</button>
</div>
   </div>
  )
}
export default SpotlightCards