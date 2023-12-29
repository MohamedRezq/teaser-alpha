import Footer from "@/components/layout/Footer";
import ComingSoon from "./content/ComingSoon";
import FeaturesCards from "./content/FeaturesCards";
import FormSection from "./content/FormSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-24 px-10 sm:px-20 h-full">
      <ComingSoon />
      <FeaturesCards />
      <div className="mt-[400px] mb-[100px]">
        <FormSection />
      </div>
    </main>
  );
}
