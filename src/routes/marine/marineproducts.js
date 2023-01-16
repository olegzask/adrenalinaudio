import { SiElement } from "react-icons/si";
import {
  GiSpeedBoat,
  GiWaterBolt,
  GiSurroundedEye,
  GiPerspectiveDiceThree,
} from "react-icons/gi";
import { IoColorFilterOutline } from "react-icons/io5";
import { MdOutlineVerified, MdOutlineHideSource } from "react-icons/md";
import "./marine.styles.css";

export const marineProducts = [
  {
    app: false,
    model: "M2WL-8",
    brand: "Rockford Fosgate",
    brandLogo: "/logos/rockford.png",
    imgBW: "",
    imgColor: "/images/marine/m2wl-8/m2wl-8_1.png",
    images: [
      "/images/marine/m2wl-8/m2wl-8_1.png",
      "/images/marine/m2wl-8/m2wl-8_2.png",
      "/images/marine/m2wl-8/m2wl-8_3.png",
      "/images/marine/m2wl-8/m2wl-8_4.png",
      "/images/marine/m2wl-8/m2wl-8_5.png",
      "/images/marine/m2wl-8/m2wl-8_6.png",
      "/images/marine/m2wl-8/m2wl-8_7.png",
    ],
    description: [
      "The next evolution of on-water audio, the M2 wake tower speakers create an experience like never before, with class-leading output, total lighting control and grille customization.",
      `The M2WL-8B Color Optix™ 8" 2-way speakers deliver loud, clear, accurate sound, and light the way for your fresh or salt-water journey! The M2 can be installed using direct mount or a clamp mount method that provides 360-degree rotation on wake tower bar sizes from 1.5” to 3”. The M2 includes stainless-steel and black “sport” grille inserts and features a rear illuminated 3DIL™ medallion that can be rotated 360-degrees for proper orientation.  The speakers connect with the Rockford Fosgate Color Optix™ Controller (sold separately) and RF Connect App, allowing you to customize both front speaker and rear medallion with your own color patterns.`,
      "100% UV Stable ASA plastic frame & grille design stands up to harsh marine environment",
      "Gold plated marine grade brass terminals provide a corrosion resistant connection",
      "Provides superb low and midrange frequency reproduction with smooth high frequency roll-off",
    ],

    features: [
      {
        name: "Element Ready™",
        symbol: <SiElement color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "True Marine Ecosystem",
        symbol: <GiSpeedBoat color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "IPX6 Rated",
        symbol: <GiWaterBolt color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Color Optix™",
        symbol: <IoColorFilterOutline color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "3DIL Technology",
        symbol: <GiPerspectiveDiceThree id="govno" color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Klippel Verified",
        symbol: <MdOutlineVerified color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "VAST Surround",
        symbol: <GiSurroundedEye color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "ICC Crossover",
        symbol: <MdOutlineHideSource color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "Universal",
  },
];
