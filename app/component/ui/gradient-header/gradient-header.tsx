import Image from "next/image";

interface GradientHeaderProps {
  text?: string;
  className?: string;
  borderClass?: string;
  textMessage?: string;
  messageClass?: string;
  contentType?: "light" | "dark";
}

export default function GradientHeader({
  text = "Default",
  className = "",
  borderClass = "",
  textMessage = "",
  messageClass = "",
  contentType = "dark",
}: GradientHeaderProps) {
  return (
    <div
      className={`flex flex-col w-full  justify-center items-center ${className}`}
    >
      <h2
        className={`
          text-[24px] md:text-[32px]
          font-black tracking-tight leading-none uppercase
          bg-gradient-to-r  bg-clip-text text-transparent
           ${contentType === "dark" && "from-dark-gray via-dim-gray to-cool-gray"}
           ${contentType === "light" && "from-white/90 via-surface-light to-white/20"}
           `}
        aria-label={text}
      >
        {text}
      </h2>
      <div className="w-full mt-4 flex justify-center mb-8">
        <Image
          className={`!w-auto ${borderClass}`}
          src={
            contentType === "dark"
              ? "/image/border.svg"
              : "/image/border_white.svg"
          }
          alt="border logo"
          width={100}
          height={100}
          priority
        />
      </div>
      <p
        className={`text-center text-[14px] md:text-[16px] 
           ${messageClass}

           ${contentType === "light" && "text-white/80 w-[60%]"}
           `}
      >
        “{textMessage}”
      </p>
    </div>
  );
}
// bg-clip-text text-transparent
