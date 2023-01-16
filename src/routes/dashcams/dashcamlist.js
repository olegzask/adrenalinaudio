import { BsCameraVideo, BsAward } from "react-icons/bs";
import { FaCarCrash, FaParking } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

export const dashcams = [
  {
    app: true,
    appleLink:
      "https://apps.apple.com/ca/app/momento-m6-dash-cam-viewer/id1447529243",
    googleLink:
      "https://play.google.com/store/apps/details?id=kr.e777.mcnex&hl=en_CA&gl=US&pli=1",
    model: "M6",
    category: "DashCam",
    type: ["Wi-Fi HD Dual Dash Camera"],
    brand: "Momento",
    brandLogo: "/logos/logo-momento-black.png",
    price: 750,
    imgBW: "",
    imgColor: "/images/dashcams/M6/M6-angled.png",
    images: [
      "/images/dashcams/M6/M6-angled.png",
      "/images/dashcams/M6/M6-back.png",
      "/images/dashcams/M6/M6-front.png",
      "/images/dashcams/M6/M6-left-side.png",
      "/images/dashcams/M6/M6-rearcam.png",
      "/images/dashcams/M6/M6-top.png",
      "/images/dashcams/M6/M6-with-rearcam.png",
      "/images/dashcams/M6/32GB.png",
    ],
    features: [
      {
        name: "Driving Mode",
        symbol: <BsCameraVideo color="rgb(133, 255, 62)" />,
        description:
          "Continuously records everything at the front and rear of your vehicle while driving.",
      },
      {
        name: "Impact Sensors",
        symbol: <FaCarCrash color="rgb(133, 255, 62)" />,
        description:
          "Stores 15 seconds before and after any impact or shock your vehicle experiences",
      },
      {
        name: "Parking Mode",
        symbol: <FaParking color="rgb(133, 255, 62)" />,
        description:
          "Even when you're parked, the M6 has motion sensors that trigger recordings.",
      },
      {
        name: "Low-light Sensitivity",
        symbol: <MdLightMode color="rgb(133, 255, 62)" />,
        description:
          "The M6 records in Full HD, giving you crystal clear footage in 1080p. Additionally, the M6 is equipped with a Sony Exmor-R image sensor that is enhanced with STARVIS, the industry-standard for surveillance applications, ensuring low-light performance.",
      },
      {
        name: "2 Year Warranty",
        symbol: <BsAward color="rgb(133, 255, 62)" />,
        description:
          "The M6 is protected by a 2-Year manufacturer's Warranty. This warranty covers both front and rear cameras, and protects your purchase from defects or malfunctioning parts.",
      },
    ],
    range: "Wi-Fi enabled Full HD",
    description: [
      "The M6 is Momento's first dash cam that connects to your smartphone by creating a small and secure Wi-Fi hotspot inside your vehicle that only you can access through the Momento App. In addition to giving you easy access to your video files, the Momento App also provides additional driving insights such as speed, location and trip data.",
      "Wi-Fi enabled Full HD (1080p) dash camera system including front camera, rear camera, GPS antenna, and 32GB micro-SD memory card. The Momento M6 is a smart dash cam that provides 270° of surveillance coverage  and records footage that you can view from the Momento smartphone app!",
      "The Momento M6 is a smart dash cam that provides 270° of surveillance coverage – and records footage that you can view from the Momento smartphone app!",
      "The M6 records in Full HD, giving you crystal clear footage in 1080p. Additionally, the M6 is equipped with a Sony Exmor-R image sensor that is enhanced with STARVIS, the industry-standard for surveillance applications, ensuring low-light performance.",
      "The M6 includes a 32GB micro-SD card that can be upgraded to any Class 10 micro-SD card up to 256GB. That's twice as much as our leading competitors! Plus, its easy-to-use file management system best utilizes your storage while ensuring your most important videos stay saved.",
      "The M6 is protected by a 2-Year manufacturer’s Warranty. This warranty covers both front and rear cameras, and protects your purchase from defects or malfunctioning parts*.",
    ],
  },
];
