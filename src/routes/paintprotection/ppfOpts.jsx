import { FaTemperatureLow, FaWifi, FaRegEye } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { HiThumbUp } from "react-icons/hi";
import { ImCheckmark } from "react-icons/im";
import { MdWaterDrop, MdHealing } from "react-icons/md";
import { FaDumbbell, FaShieldAlt } from "react-icons/fa";

export const ppfOptions = [
  {
    tintType: "ULTIMATE PLUS",
    img: "/logos/ups.jpg",
    description:
      "ULTIMATE PLUS ™ raises the bar once again with an unparalleled high gloss finish & improved impact protection. ULTIMATE PLUS is designed to provide you with the peace of mind you need on the open road, keeping your vehicle's surfaces safe from things like gravel, oils, bug acids, bird droppings, and stopping paint chips before they start.",
    brands: "Xpel",

    features: [
      {
        name: "Heat Activated Self-Healing Topcoat",
        symbol: <FaTemperatureLow />,
        description:
          "Constructed from an elastomeric polyurethane, ULTIMATE PLUS will self-heal light scratches & swirl marks with a light heat application to the film's surface.",
      },
      {
        name: "Non-Yellowing",
        symbol: <BsSunFill />,
        description:
          "Our proprietary film formulation will not yellow from UV exposure, ensuring protected areas are nearly invisible.",
      },

      {
        name: "Discoloration & Stain Resistant",
        symbol: <FaRegEye />,
        description:
          "Don't worry about specs, spots, or splotches from contaminants. ULTIMATE PLUS is stain resistant & will maintain clarity under the harshest conditions.",
      },
      {
        name: "Prevents Wear & Tear",
        symbol: <HiThumbUp />,
        description:
          "Stop rock chips, nicks & scratches in the paint, and keep your vehicle looking as good as the day it rolled off the lot.",
      },
      {
        name: "Edge Seal Technology",
        symbol: <ImCheckmark />,
        description:
          "Lifting & delamination are a thing of the past. Our signature Edge Seal Technology ensures film stays stuck & keeps surfaces protected from contaminants.",
      },
    ],
  },
  // {
  //   tintType: "SUNTEK ULTRA",
  //   img: "/images/logos/ultra.png",
  //   description:
  //     "Premium protection designed to last. SunTek Paint Protection Film Ultra is scientifically formulated to help maintain the beauty and integrity of vehicle finishes for many years, in all kinds of weather. It’s a combination of innovative film technologies that we stand behind with a 10-year limited warranty.",
  //   brands: "Suntek",

  //   features: [
  //     {
  //       name: "Lasting Resistance",
  //       symbol: <MdWaterDrop />,
  //       description:
  //         "HydroResist™ top coat increases stain resistance and product longevity by limiting water and dirt accumulation on the film's surface.",
  //     },
  //     {
  //       name: "Extra Endurance",
  //       symbol: <FaDumbbell />,
  //       description:
  //         "Automotive finishes stay fresh and flawless longer with a film that helps offer the most power to shield against damage caused by rocks, salt, insects, and other road debris.",
  //     },

  //     {
  //       name: "Self-Healing",
  //       symbol: <MdHealing />,
  //       description:
  //         "Repairing scratches is almost effortless; film self-heals using heat from a vehicle’s engine or the sun.",
  //     },
  //     {
  //       name: "Great Looks",
  //       symbol: <HiThumbUp />,
  //       description:
  //         "Paint Protection Film Ultra is available in matte and high gloss finishes. Outstanding optical clarity makes film nearly impossible to detect once installed.",
  //     },
  //     {
  //       name: "10-Year Limited Warranty",
  //       symbol: <FaShieldAlt />,
  //       description:
  //         "The manufacturer warrants professionally sold and applied SunTek® Paint Protection Film Ultra series against cracking, bubbling or yellowing for a period of ten years from the date of purchase of the Product. This 10-year limited warranty applies only to SunTek Paint Protection Film Ultra series. Other restrictions apply; contact a SunTek dealer or a customer service representative for details.",
  //     },
  //   ],
  // },
];
