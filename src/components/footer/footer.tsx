import React from "react";
import { PiMetaLogo } from "react-icons/pi";
import colors from "@/shared/themes/colors";

interface SubtitlesI {
  subtitle: string;
}

interface FooterData {
  title: string;
  subtitles: SubtitlesI[];
  link: string;
}

const data: FooterData[] = [
  {
    title: "Company",
    subtitles: [
      { subtitle: "Example Company 1" },
      { subtitle: "Example Company 2" },
      { subtitle: "Example Company 3" },
    ],
    link: "/link",
  },
  {
    title: "Use Cases",
    subtitles: [
      { subtitle: "Example Use Case 1" },
      { subtitle: "Example Use Case 2" },
    ],
    link: "/link",
  }
];

const Footer = () => {
  return (
    <footer className="w-full flex flex-wrap py-8 justify-around border-t" style={{ borderColor: colors.gray }}>
      <div className="w-full md:w-1/2 p-2 flex flex-col md:flex-row md:items-center">
        <h1 className="flex items-center gap-2 text-2xl" style={{ color: colors.dark }}>
          <PiMetaLogo className="text-5xl" style={{ color: colors.primary }} />
          Your Logo
        </h1>
        <span className="flex gap-2 items-center text-lg mt-4 md:mt-0" style={{ color: colors.secondary }}>Lorem ipsum dolor sit amet.</span>
      </div>
      {data.map((item) => (
        <div key={item.title} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="flex flex-col justify-around">
            <h4 className="text-xl mb-2" style={{ color: colors.blueDark }}>{item.title}</h4>
            {item.subtitles.map((sub) => (
              <span key={sub.subtitle} className="flex gap-2 text-sm" style={{ color: colors.gray }}>
                {sub.subtitle}
              </span>
            ))}
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
