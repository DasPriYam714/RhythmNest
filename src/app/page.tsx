import CoverSection from "@/components/CoverSection";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between p-10 bg-black">
      <div className="dark">
        <CoverSection></CoverSection>
      </div>
      <div>
        <Features></Features>
      </div>
      
    </main>
  );
}
