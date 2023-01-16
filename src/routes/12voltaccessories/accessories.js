import { GiHeatHaze } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { AiOutlineEyeInvisible } from "react-icons/ai";

export const allAccessories = [
  {
    app: false,
    model: "HS1",
    brand: "AA",
    brandLogo: "/logos/adrenalin_logo.png",
    price: 0,
    imgBW: "",
    imgColor: "/images/accessories/12volt-color.jpg",
    images: [
      "/images/accessories/12volt-color.jpg",
      "/images/accessories/hseats_1.jpg",
    ],
    description: [
      "Say goodbye to cold morning and night time driving!!! With the seat heater kit, you can make your drive a very comfortable and relaxing experience. Our seat heaters will provide comforting warmth through the seats cushion and backing way before your vehicle’s heater can heat up the interior. Seat heaters are a comfort and convenience feature that most of today’s drivers expect to have in any new vehicle. Now everyone can enjoy this luxury in almost any car, truck, SUV or van.",
      "Quick heat-up time (1-2 Minutes).",
      "Carbon Fiber backrest and bottom cushion heating pads.",
      "Pads can be trimmed or cut by installer to fit on any standard seat.",
      "Dual temperature control system (Electronic control and Standard bi-metal thermostat).",
      "Illuminated 2-color switch for high & low temperature setting",
      "Can be wired into remote start systems for automatic turn-on",
    ],

    features: [
      {
        name: "Quick Heat-Up",
        symbol: <GiHeatHaze color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Dual Temperature",
        symbol: <FaTemperatureHigh color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Invisible",
        symbol: <AiOutlineEyeInvisible color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "Universal",
  },
];
