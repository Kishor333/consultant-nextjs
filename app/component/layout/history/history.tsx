import text from "@/app/content/global-text.json";
import { GradientHeader } from "@/app/component/ui";
import Image from "next/image";
import "./history.scss";

export default function HistoryScreen() {
  return (
    <section className="w-full" aria-label="history section">
      <GradientHeader
        text="OUR HISTORY"
        className="justify-center"
        textMessage={text.history.quote}
        messageClass="md:!text-[16px] text-black/60"
      />
      <section className="w-full flex flex-wrap justify-between relative mt-4">
        <div className="w-full md:w-[50%] md:pr-10">
          <p className="text-gray-main text-[24px]">Consult2T</p>
          <p className="text-gray-main">{text.history.paragraph_one}</p>
          <p className="text-gray-main">{text.history.paragraph_two}</p>
        </div>

        {/* </div> */}
        <div className="w-[calc(100%-55px)] md:w-[50%] flex justify-between items-start relative">
          <Image
            className="w-[55px]"
            src="image/hor_divider.svg"
            alt="border logo"
            width={100}
            height={30}
            priority
          />
          <Image
            className="pr-10 bg-right contain-content w-full md:!w-[480px]"
            src="image/history/history_background.svg"
            alt="border logo"
            width={100}
            height={100}
            priority
          />
        </div>
      </section>
    </section>
  );
}
