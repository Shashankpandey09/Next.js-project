import PlayersCard from "./PlayersCard";
import data from "../../data";

const Sports: React.FC = () => {
  return (
    <div className="text-white md:min-h-[673px] w-[90vw]">
      <div className="border-b-2  md:ml-20 mb-4 border-[#738FFF] w-fit">
        <h1 className="text-2xl font-semibold pt-9">Sports</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-3 p-4">
        {data.map((item, index) => (
          <PlayersCard key={index} {...item} />
        ))}
      </div>
      <div className=" flex justify-center items-center pt-10">
      <button className="bg-[#2C9CF0] px-8 rounded-md py-2  ">
        See More
      </button>
      </div>
     
    </div>
  );
};

export default Sports;
