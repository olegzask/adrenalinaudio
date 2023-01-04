import { FaTemperatureLow, FaWifi, FaRegEye } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { HiThumbUp } from "react-icons/hi";

export const tintOptions = [
  {
    tintType: "Nano-Ceramic Film",
    office: false,
    img: "/images/services-images/ceramic.jpg",
    description:
      "There's no better place to start than the top. If you're wanting the most out of your next window tint application, it's time to start looking at nano-ceramic film options from XPEL. Designed for maximum UV protection & heat rejection. this window tint can keep your vehicle cooler & more comfortable wherever you're headed.",
    brands: "Xpel",
    shades: [5, 20, 35, 50],
    features: [
      {
        name: "Ceramic Particle Technology",
        symbol: <CgMenuGridO />,
        description:
          "Contains a proprietary blend of ceramic particles to act as a solid barrier to infrared heat while maintaining the ease of install in a 1.5 mil construction.",
      },
      {
        name: "Superior Heat Rejection",
        symbol: <FaTemperatureLow />,
        description:
          "Our multilayer nano-ceramic particle technology blocks up to 98% of the infrared heat.",
      },
      {
        name: "UV Ray Protection",
        symbol: <BsSunFill />,
        description:
          "Nano-Ceramic Film like PRIME XR PLUS provides SPF 1,000 protection that effectively blocks over 99% of harmful UV rays that can lead to numerous skin cancers, premature aging and skin cell damage.",
      },
      {
        name: "Greater Clarity",
        symbol: <FaRegEye />,
        description:
          "In the past, keeping cool meant choosing a darker shade of tint. The multilayer nano-ceramic construction provides ultra-high performance without reducing outbound visibility.",
      },
      {
        name: "Crystal Clear Signal",
        symbol: <FaWifi />,
        description:
          "In a digital world, clear communication is key. Ceramic Window Tint construction will not interfere with radio, cellular, or bluetooth signals.",
      },
    ],
  },
  {
    tintType: "Dyed Film",
    img: "/images/services-images/dyed.jpg",
    description:
      "When comfort and cost is key, dyed window tint won't let you down. PRIME CS BLACK can cut out the glare, protect your skin from harmful UV rays, and make any journey that much more enjoyable.",
    brands: "Xpel",
    shades: [5, 20, 35, 50],
    features: [
      {
        name: "Reduces Glare",
        symbol: <FaRegEye />,
        description:
          "Dyed Window Tint reduces the sun's glare, enhancing visibility and reducing eye strain.",
      },
      {
        name: "Keeps You Comfortable",
        symbol: <FaTemperatureLow />,
        description:
          "Dyed Window Tint blocks solar heat radiation to keep your vehicle at a comfortable temperature and improve fuel efficiency.",
      },
      {
        name: "UV Ray Protection",
        symbol: <BsSunFill />,
        description:
          "Dyed Window Tint provides SPF 500 protection that effectively blocks over 99% of harmful UV rays that can lead to numerous skin cancers, premature aging and skin cell damage.",
      },
      {
        name: "Crystal Clear Signal",
        symbol: <FaWifi />,
        description:
          "Dyed Window Tint contains no metalized particles ensuring that it does not interfere with radio, cellular, or Bluetooth signals.",
      },
      {
        name: "Looks Good",
        symbol: <HiThumbUp />,
        description:
          "The black color of Dyed Window Tint remains the same over the years and never fades or turns purple.",
      },
    ],
  },
];
