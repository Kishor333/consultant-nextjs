import text from "@/app/content/global-text.json";
import Image from "next/image";
import "./footer.scss";

export default function FooterScreen() {
  const contactItem = [
    { label: "Email", value: "consult2tshering@gmail.com" },
    { label: "Phone", value: "+97517277845" },
  ];
  const socialItem = [
    {
      label: "Instagram",
      value: "https://www.instagram.com/consult2t?igsh=MTZmZWZmaWl3bnM2bA==",
      image: "image/footer/insta.svg",
    },
    {
      label: "FaceBook",
      value: "https://www.facebook.com/share/18XTkypMCQ/",
      image: "image/footer/facebook.svg",
    },
    {
      label: "Linkedin",
      value: "https://www.linkedin.com/company/consult2t/",
      image: "image/footer/lintin.svg",
    },
  ];
  return (
    <footer className="w-full">
      <div className="flex flex-wrap footer-test">
        {/* <div className="w-full relative "> */}
        {/* <Image
            className="w-full object-fit opacity-25"
            src="image/footer/footer_bg.svg"
            alt="wave logo"
            width={100}
            height={100}
            priority
          /> */}
        {/* <div className="absolute inset-0 bg-black/74 py-15 px-31.25 text-white"> */}
        <div className="px-5 py-8 md:py-15 md:px-31.25 text-white w-full">
          <div className="flex flex-wrap justify-between mb-12">
            <Image
              className="object-fit w-[228px]"
              src="image/app_logo_white.svg"
              alt="logo"
              width={100}
              height={100}
              priority
            />
            <p className="w-full mt-2 md:mt-0 md:w-fit text-[18px] font-extralight text-white/80">
              {text.footer.craft_spaces}
            </p>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-[25%]">
              <p className="text-[24px] font-bold mb-6">Address</p>
              <div className="flex md:pr-5">
                <div className="mini-icon flex items-center justify-center">
                  <Image
                    className="object-fit w-[20px]"
                    src="image/footer/location.svg"
                    alt="logo"
                    width={24}
                    height={24}
                    priority
                  />
                </div>
                {/* <div className="ml-4"> */}
                <p className="ml-4 flex-1 text-[14px] text-white/80">
                  {text.footer.location}
                </p>
                {/* </div> */}
              </div>
            </div>
            <div className="w-full md:w-[25%]">
              <p className="text-[24px] font-bold mb-6">Contact</p>
              {contactItem.map((item, index) => (
                <div className="flex items-center mb-6" key={index}>
                  <div className="mini-icon flex items-center justify-center">
                    <Image
                      className="object-fit w-[20px]"
                      src="image/footer/location.svg"
                      alt="location icon"
                      width={24}
                      height={24}
                      priority
                    />
                  </div>
                  <div className="text-[14px] ml-4 flex-1">
                    <p className="font-bold text-white/80">{item.label}</p>
                    <p className="flex-1 text-white/80">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:w-[25%]">
              <p className="text-[24px] font-bold mb-6">Contact</p>
              {socialItem.map((item, index) => (
                <div className="flex items-center mb-6" key={index}>
                  <div className="mini-icon flex items-center justify-center">
                    <Image
                      className="object-fit w-[20px]"
                      src={item.image}
                      alt={`${item.label} icon`}
                      width={24}
                      height={24}
                      priority
                    />
                  </div>
                  <div className="text-[14px] pl-4 w-[calc(100%-40px)]">
                    <p className="font-bold text-white/80">{item.label}</p>
                    {/* <p className="flex-1 text-white/80">{item.value}</p> */}
                    <a
                      href={item.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 underline"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:w-[25%] flex justify-center pl-4">
              <div>
                <p className="text-[24px] mb-6 bg-golden-yellow px-1 text-black/60 font-light w-max">
                  Site Map
                </p>
                <div className="">
                  {[
                    "Interior",
                    "Architecture",
                    "Urban Planning",
                    "Heritage",
                    "Construction",
                  ].map((item, index) => (
                    <p className="mb-2 text-[14px] text-white/80" key={index}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="text-[12px] md:text-[14px] bg-teal-blue text-white w-full flex justify-center py-3">
        <p className="m-0">
          &#64; {new Date().getFullYear()} {text.footer.all_right}
        </p>
      </div>
    </footer>
  );
}
