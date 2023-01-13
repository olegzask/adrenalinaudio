import { RiGpsLine, RiWaterFlashFill } from "react-icons/ri";
import { BsShare, BsAward } from "react-icons/bs";
import { FaDigitalOcean, FaMobileAlt } from "react-icons/fa";
import { GiBrokenShield } from "react-icons/gi";
import { MdNotificationsActive } from "react-icons/md";
import { FcRefresh } from "react-icons/fc";
import { TbArrowAutofitDown } from "react-icons/tb";

export const remotes = [
  {
    model: "X1R",
    type: ["Smart Control"],
    brand: "Drone",
    brandLogo: "/logos/1200x300-drone-logo-white.png",
    price: 750,
    imgBW: "/images/remotes/drone-bw.jpg",
    imgColor: "/images/remotes/drone-color.jpg",
    images: [
      "/images/remotes/drone/drone_1.jpg",
      "/images/remotes/drone/drone_2.jpg",
      "/images/remotes/drone/drone_3.jpg",
      "/images/remotes/drone/drone_4.jpg",
      "/images/remotes/drone/drone_5.jpg",
    ],
    description: [" Remote Start can be installed in any vehicle."],

    features: [
      {
        name: "GPS Tracking",
        symbol: <RiGpsLine color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Family Sharing",
        symbol: <BsShare color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Push Notifications",
        symbol: <MdNotificationsActive color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "iOS / Android Compatible",
        symbol: <FaMobileAlt color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "Unlimited",
  },
  {
    model: "T12SS",
    type: ["2-Way LCD", "2-Way LED"],
    brand: "Compustar",
    brandLogo: "/logos/compustar_logo.png",
    price: 950,
    imgBW: "/images/remotes/t12-bw.jpg",
    imgColor: "/images/remotes/t12-color.jpg",
    images: [
      "/images/remotes/remote-imgs/t11_1.jpg",
      "/images/remotes/remote-imgs/t11_2.jpg",
    ],
    features: [
      {
        name: "2-Way LCD",
        symbol: <FcRefresh fill="rgb(14, 146, 255)" />,
        description: "",
      },
      {
        name: "2-Way LED",
        symbol: <FcRefresh fill="rgb(14, 146, 255)" />,
        description: "",
      },
      {
        name: "Waterproof",
        symbol: <RiWaterFlashFill color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Crushproof",
        symbol: <GiBrokenShield color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Alarm Notifications",
        symbol: <MdNotificationsActive color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "3 Year Warranty",
        symbol: <BsAward color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "4500 M",
    description: [" Remote Start can be installed in any vehicle."],
  },

  {
    model: "Q9SS",
    type: ["2-Way LCD", "2-Way LED"],
    brand: "Compustar",
    brandLogo: "/logos/compustar_logo.png",
    price: 900,
    imgBW: "/images/remotes/q9-bw.jpg",
    imgColor: "/images/remotes/q9-color.jpg",
    images: [
      "/images/remotes/remote-imgs/q9_1.jpg",
      "/images/remotes/remote-imgs/q9_2.jpg",
    ],
    features: [
      {
        name: "2-Way LCD",
        symbol: <FcRefresh fill="rgb(14, 146, 255)" />,
        description: "",
      },
      {
        name: "2-Way LED",
        symbol: <FcRefresh fill="rgb(14, 146, 255)" />,
        description: "",
      },
      {
        name: "Alarm Notifications",
        symbol: <MdNotificationsActive color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "3 Year Warranty",
        symbol: <BsAward color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "3000 M",
    description: [" Remote Start can be installed in any vehicle."],
  },
  {
    model: "T9FM",
    type: ["2-Way LCD", "1-Way LCD"],
    brand: "Compustar",
    brandLogo: "/logos/compustar_logo.png",
    price: 800,
    imgBW: "/images/remotes/t9-bw.jpg",
    imgColor: "/images/remotes/t9-color.jpg",
    images: [
      "/images/remotes/remote-imgs/t9_1.jpg",
      "/images/remotes/remote-imgs/t9_2.jpg",
    ],
    features: [
      {
        name: "2-Way LCD",
        symbol: <FcRefresh fill="rgb(14, 146, 255)" />,
        description: "",
      },
      {
        name: "1-Way LCD",
        symbol: <TbArrowAutofitDown color="rgb(14, 146, 255)" />,
        description: "",
      },
      {
        name: "Alarm Notifications",
        symbol: <MdNotificationsActive color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "3 Year Warranty",
        symbol: <BsAward color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "1000 M",
    description: [" Remote Start can be installed in any vehicle."],
  },
  {
    model: "G15SS",
    type: ["2-Way LED"],
    brand: "Compustar PRO",
    brandLogo: "/logos/compustar_logo.png",
    price: 800,
    imgBW: "/images/remotes/g15-bw.jpg",
    imgColor: "/images/remotes/g15-color.jpg",
    images: [
      "/images/remotes/remote-imgs/g15ss_1.jpg",
      "/images/remotes/remote-imgs/g15ss_2.jpg",
    ],
    features: [
      {
        name: "2-Way LED",
        symbol: <FcRefresh />,
        description: "",
      },
      {
        name: "Waterproof",
        symbol: <RiWaterFlashFill color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Crushproof",
        symbol: <GiBrokenShield color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Digital Spread Spectrum",
        symbol: <FaDigitalOcean color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "3 Year Warranty",
        symbol: <BsAward color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "3000 M",
    description: [" Remote Start can be installed in any vehicle."],
  },
  {
    model: "G15FM",
    type: ["2-Way LED", "1-Way LED"],
    brand: "Compustar",
    brandLogo: "/logos/compustar_logo.png",
    price: 700,
    imgBW: "/images/remotes/g15-bw.jpg",
    imgColor: "/images/remotes/g15-color.jpg",
    images: [
      "/images/remotes/remote-imgs/g15fm_1.jpg",
      "/images/remotes/remote-imgs/g15fm_2.jpg",
    ],
    features: [
      {
        name: "2-Way LED",
        symbol: <FcRefresh />,
        description: "",
      },
      {
        name: "1-Way LED",
        symbol: <TbArrowAutofitDown color="rgb(14, 146, 255)" />,
        description: "",
      },
      {
        name: "Waterproof",
        symbol: <RiWaterFlashFill color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "3 Year Warranty",
        symbol: <BsAward color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "1000 M",
    description: [" Remote Start can be installed in any vehicle."],
  },
];
