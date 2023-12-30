import ComingSoon from "./content/ComingSoon";
import FeaturesCards from "./content/FeaturesCards";
import FormSection from "./content/FormSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-16 px-5 sm:px-20 h-full mb-28 sm:mb-40">
      <ComingSoon />
      <FeaturesCards />
      <FormSection />
    </main>
  );
}
