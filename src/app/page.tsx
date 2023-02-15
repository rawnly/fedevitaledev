import * as Brands from "./brands";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import SocialIcon from "./SocialIcon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import WelcomeText from "./WelcomeText";

const corners: { title: string; icon: IconProp; href: string }[][] = [
  [
    {
      title: "Twitter",
      icon: Brands.faTwitter,
      href: "https://twitter.com/fedevitaledev",
    },
    {
      title: "Spotify",
      icon: Brands.faSpotify,
      href: "https://twitter.com/fedevitaledev",
    },
  ],
  [
    {
      title: "Unsplash",
      icon: Brands.faUnsplash,
      href: "https://unsplash.com/@fedevitale",
    },
    {
      title: "Medium",
      icon: Brands.faMediumM,
      href: "https://fedevitale.medium.com",
    },
  ],
  [
    {
      title: "Stack Overflow",
      icon: Brands.faStackOverflow,
      href: "mailto:mail@fedevitale.dev",
    },
    {
      title: "Github",
      icon: Brands.faGithub,
      href: "https://github.com/rawnly",
    },
    {
      title: "Codepen",
      icon: Brands.faCodepen,
      href: "https://codepen.io/rawnly",
    },
  ],
  [
    {
      title: "Get in touch",
      icon: faEnvelope,
      href: "mailto:mail@fedevitale.dev",
    },
  ],
];

async function Page() {
  const [topLeft, topRight, bottomRight, bottomLeft] = corners;

  return (
    <>
      <WelcomeText />

      <div className="top-8 left-8 fixed flex flex-col gap-8 items-center justify-start z-50">
        {topLeft.map((item) => (
          <SocialIcon key={item.href} {...item} />
        ))}
      </div>

      <div className="top-8 right-8 fixed flex flex-col gap-8 items-center justify-start z-50">
        {topRight.map((item) => (
          <SocialIcon key={item.href} {...item} />
        ))}
      </div>

      <div className="bottom-8 right-8 fixed flex flex-col gap-8 items-center justify-start z-50">
        {bottomRight.map((item) => (
          <SocialIcon key={item.href} {...item} />
        ))}
      </div>

      <div className="bottom-8 left-8 fixed flex flex-col gap-8 items-center justify-start z-50">
        {bottomLeft.map((item) => (
          <SocialIcon key={item.href} {...item} />
        ))}
      </div>
    </>
  );
}

export default Page;
