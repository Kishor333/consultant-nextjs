import text from "@/app/content/global-text.json";
import { GradientHeader, SliderCard } from "@/app/component/ui";

export default function Projects() {
  return (
    <div className="w-full">
      <GradientHeader
        text="PROJECTS"
        className="justify-center"
        textMessage={text.project}
        messageClass="md:!text-[16px] text-black/60"
      />
      <div className="mt-12">
        <SliderCard />
      </div>
    </div>
  );
}
