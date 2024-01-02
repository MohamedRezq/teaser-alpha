import { getApplications } from "@/lib/helpers/applications";
import ComingSoon from "./content/ComingSoon";
import FeaturesCards from "./content/FeaturesCards";
import FormSection from "./content/FormSection";
import { IApplication } from "@/lib/models/ApplicationModel";

export default async function Home() {
  const applications = (await getApplications())?.map((app) => {
    return { id: app?.id, label: app?.label };
  }) as IApplication[];

  return (
    <main className="flex flex-col items-center justify-between gap-40 px-5 sm:px-20 h-full mb-28 sm:mb-40">
      <ComingSoon />
      <FeaturesCards />
      <FormSection applications={applications} />
    </main>
  );
}
