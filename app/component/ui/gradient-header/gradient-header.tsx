import Image from "next/image";

interface GradientHeaderProps {
  text?: string;
  className?: string;
  borderClass?: string;
  textMessage?: string;
  messageClass?: string;
}

export default function GradientHeader({
  text = "Default",
  className = "",
  borderClass = "",
  textMessage = "",
  messageClass = "",
}: GradientHeaderProps) {
  return (
    <div
      className={`flex flex-col w-full  justify-center items-center ${className}`}
    >
      <h2
        className="
          text-[24px] md:text-[32px]
          font-black tracking-tight leading-none uppercase
          bg-gradient-to-r from-[#1a1a1a] via-[#5a5a5a] to-[#9a9a9a] bg-clip-text text-transparent
        "
      >
        {text}
      </h2>
      <div className="w-full mt-4 flex justify-center mb-8">
        <Image
          className={`!w-auto ${borderClass}`}
          src="image/border.svg"
          alt="border logo"
          width={100}
          height={100}
          priority
        />
      </div>
      <p
        className={`text-center text-[14px] md:text-[16px] text-black/60  ${messageClass}`}
      >
        “{textMessage}”
      </p>
    </div>
  );
}
// bg-clip-text text-transparent
