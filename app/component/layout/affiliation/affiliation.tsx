import text from "@/app/content/global-text.json";
import { GradientHeader } from "@/app/component/ui";
import AffiliationCardSlider from "./affiliation-card/affiliation-card";
import "./affiliation.modal.scss";

export default function Affiliation() {
  return (
    <section className="w-full min-h-180 affiliation-cover pt-14">
      <GradientHeader
        text="AFFILIATION"
        className="justify-center"
        textMessage={text.affiliation.affiliation}
        messageClass="md:!text-[16px] text-black/60"
      />
      <div className="md:mt-12 md:px-31.25 md:py-14">
        <AffiliationCardSlider />
      </div>
    </section>
  );
}
