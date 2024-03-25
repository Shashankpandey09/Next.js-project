import Sports from "@/Components/Sports";
import SpotLight from '@/Components/CollectionSpotlight'

export default function Home() {
  return (
    <main className="flex bg-[#292B32]  min-h-[1778px] flex-col items-center gap-10 ">
     <Sports/>
     <SpotLight/>
    </main>
  );
}
