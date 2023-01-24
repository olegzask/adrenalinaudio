import { SiElement, SiElectron } from "react-icons/si";
import {
  GiSpeedBoat,
  GiWaterBolt,
  GiSurroundedEye,
  GiPerspectiveDiceThree,
  GiMountainRoad,
  GiSlashedShield,
} from "react-icons/gi";
import { IoColorFilterOutline, IoHardwareChipOutline } from "react-icons/io5";
import {
  MdOutlineVerified,
  MdOutlineHideSource,
  MdPhoneIphone,
  MdOutlineCleaningServices,
} from "react-icons/md";
import { GrAndroid } from "react-icons/gr";
import { FaBluetooth, FaUsb } from "react-icons/fa";
import { TiFlowSwitch } from "react-icons/ti";
import "./marine.styles.css";

export const marineProducts = [
  {
    app: false,
    model: "M2WL-8",
    brand: "RF",
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
    range: "Marine",
  },
  {
    app: false,
    model: "PMX-2",
    brand: "RF",
    brandLogo: "/logos/rockford.png",
    imgBW: "",
    imgColor: "/images/marine/pmx-2/pmx-2_1.png",
    images: [
      "/images/marine/pmx-2/pmx-2_2.png",
      "/images/marine/pmx-2/pmx-2_3.png",
      "/images/marine/pmx-2/pmx-2_4.png",
    ],
    description: [
      "The PMX-2 compact digital media receiver is designed for marine and motorsports applications.",
      `The PMX-2 features a 2.7"full color TFT display for optimum viewing - even in full sun - that is optically wet bonded to prevent any dust or moisture penetration. It is IPX6 rated and uses a water resistant rotary encoder knob with white LED button illumination and front mounted sub level controls. Additionally, with features such Pandora control capabilities and Bluetooth audio steaming with album art support1 this unit becomes a true command center of any system. 1Android devices equipped with limited functionality. Please refer to owners manual for details.`,
      "Output flexibility comes with a 4x50W @ 2ohm internal amplifier or front and rear/sub output RCA's allowing the addition of after-market amplifiers for more power and output. Add-in the EEPROM memory system, custom GUI interface, and wired remote expansion capabilities and you have the only media receiver you'll ever need.",
    ],

    features: [
      {
        name: "Element Ready™",
        symbol: <SiElement color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Built in BlueTooth",
        symbol: <FaBluetooth color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "IPX6 Rated",
        symbol: <GiWaterBolt color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "USB Playback",
        symbol: <FaUsb color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Android Ready",
        symbol: <GrAndroid id="govno" color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "iOS ready",
        symbol: <MdPhoneIphone color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "Marine",
  },
  {
    app: false,
    model: "P-400X2",
    brand: "RF",
    brandLogo: "/logos/rockford.png",
    imgBW: "",
    imgColor: "/images/marine/p-400x2/p400x2_1.png",
    images: [
      "/images/marine/p-400x2/p400x2_1.png",
      "/images/marine/p-400x2/p400x2_2.png",
      "/images/marine/p-400x2/p400x2_3.png",
    ],
    description: [
      "The Punch P400X2 is a 2-channel stereo amplifier capable of producing 200 Watts into each channel at 2-Ohms. The P400X2 amplifier is great with full-range or component systems or can be bridged for use with 2 or more subwoofers.",
      `Whether you're looking to drive high frequency component speakers or low frequency subwoofers, the P400X2 has the power and flexibility you need to put some serious PUNCH in your vehicle. The power available from such a small amp means it's a great match for a 2-ohm DVC subwoofer or pair of 8-ohm SVC subwoofers.`,
    ],

    features: [
      {
        name: "TRANS•ana",
        symbol: <IoHardwareChipOutline color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "Balanced Inputs",
        symbol: <SiElectron color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "NOMAD",
        symbol: <GiSlashedShield color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "C.L.E.A.N. Set-Up",
        symbol: <MdOutlineCleaningServices color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "Marine",
  },
  {
    app: false,
    model: "M0-65B",
    brand: "RF",
    brandLogo: "/logos/rockford.png",
    imgBW: "",
    imgColor: "/images/marine/m0-65b/m0wl-65mb_1.png",
    images: [
      "/images/marine/m0-65b/m0wl-65mb_2.png",
      "/images/marine/m0-65b/m0wl-65mb_3.png",
      "/images/marine/m0-65b/m0wl-65mb_4.png",
    ],
    description: [
      "Designed rugged and rock solid, the new line-up of 6.5-inch motorsports cans are built for true outdoor audio performance. Higher output, rider customization, and an Element ReadyTM design to create an off-road audio experience second to none.",
      `Tackle any terrain with the M0WL-65MB Element Ready ™ 6.5" 2-way motorsport cans. Designed rugged and rock solid, the new line-up of 6.5” cans are built for true outdoor audio performance.  High output and Element Ready™ design creates an off-road audio experience second to none.`,
    ],

    features: [
      {
        name: "Element Ready™",
        symbol: <SiElement color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "IPX6 Rated",
        symbol: <GiWaterBolt color="rgb(133, 255, 62)" />,
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
        name: "True Off-Road Ecosystem",
        symbol: <GiMountainRoad color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "Marine",
  },
  {
    app: false,
    model: "M1-65B",
    brand: "RF",
    brandLogo: "/logos/rockford.png",
    imgBW: "",
    imgColor: "/images/marine/m1-65b/m1-65b_1.png",
    images: ["/images/marine/m1-65b/m1-65b_2.png"],
    description: [
      "The M1-65 Color Optix™ 2-way 6.5” speakers deliver loud, clear, accurate sound, and light the way for your journey! The speakers connect with the Rockford Fosgate Color Optix™ Controller and RF Connect App, allowing you to customize your own color patterns. The Element Ready™ design and IPX6 certification makes them truly purpose-built for marine or motorsport applications where protection from damaging UV rays and water spray is essential.",
      `The M1 series of Element Ready™ speakers are designed to pair with the Rockford Fosgate Color Optix™ Controller and RF Connect App through its Deutsch™ and Amphenol™ connectors integrated into the speaker. This combined with their IP67 certification make these speakers Element Ready™ and truly purpose built for marine applications. To complete your sound experience, the M1 speakers are complimented by 8-inch, 10-inch and 12-inch subwoofers, also controlled through the Color Optix™ lighting system.`,
    ],

    features: [
      {
        name: "Element Ready™",
        symbol: <SiElement color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "IPX6 Rated",
        symbol: <GiWaterBolt color="rgb(133, 255, 62)" />,
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
    range: "Marine",
  },
  {
    app: false,
    model: "M1-10 SUB",
    brand: "RF",
    brandLogo: "/logos/rockford.png",
    imgBW: "",
    imgColor: "/images/marine/m1subs/m1d2-10_1.png",
    images: [
      "/images/marine/m1subs/m1d2-10_2.png",
      "/images/marine/m1subs/m1d2-10_3.png",
      "/images/marine/m1subs/m1d2-10_4.png",
      "/images/marine/m1subs/m1d2-10_5.png",
    ],
    description: [
      "The M1D2-10 Color Optix™ 10” DVC 2-Ohm subwoofers deliver loud, clear, accurate bass, and light the way for your journey! The subwoofers connect with the Rockford Fosgate Color Optix™ Controller and RF Connect App, allowing you to customize your own color patterns. The Element Ready™ design and IPX6 certification makes them truly purpose-built for marine or motorsport applications where protection from damaging UV rays and water spray is essential.",
      `The M1 series of Element Ready™ subwoofers are designed to pair with the Rockford Fosgate Color Optix™ Controller and RF Connect App through its Deutsch™ and Amphenol™ connectors integrated into the basket. This combined with their IP67 certification make these speakers Element Ready™ and truly purpose built for marine applications. To compliment the plug and play connectivity and streamline installation, M1 subwoofers are equipped with a VersaSwitch™ to make changing impedance between 1 and 4 ohms as easy as flipping a switch.`,
    ],

    features: [
      {
        name: "Element Ready™",
        symbol: <SiElement color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "IPX6 Rated",
        symbol: <GiWaterBolt color="rgb(133, 255, 62)" />,
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
        name: "VERSA Switch",
        symbol: <TiFlowSwitch color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "Marine",
  },
  {
    app: false,
    model: "M1-12 SUB",
    brand: "RF",
    brandLogo: "/logos/rockford.png",
    imgBW: "",
    imgColor: "/images/marine/m1subs/m1d2-12_1.png",
    images: [
      "/images/marine/m1subs/m1d2-12_2.png",
      "/images/marine/m1subs/m1d2-12_3.png",
      "/images/marine/m1subs/m1d2-12_4.png",
      "/images/marine/m1subs/m1d2-12_5.png",
    ],
    description: [
      "The M1D4-12 Color Optix™ 12” DVC 4-Ohm subwoofers deliver loud, clear, accurate bass, and light the way for your journey! The subwoofers connect with the Rockford Fosgate Color Optix™ Controller and RF Connect App, allowing you to customize your own color patterns. The Element Ready™ design and IPX6 certification makes them truly purpose-built for marine or motorsport applications where protection from damaging UV rays and water spray is essential.",
      `The M1 series of Element Ready™ subwoofers are designed to pair with the Rockford Fosgate Color Optix™ Controller and RF Connect App through its Deutsch™ and Amphenol™ connectors integrated into the basket. This combined with their IP67 certification make these speakers Element Ready™ and truly purpose built for marine applications. To compliment the plug and play connectivity and streamline installation, M1 subwoofers are equipped with a VersaSwitch™ to make changing impedance between 2 and 8 ohms as easy as flipping a switch.`,
    ],

    features: [
      {
        name: "Element Ready™",
        symbol: <SiElement color="rgb(133, 255, 62)" />,
        description: "",
      },
      {
        name: "IPX6 Rated",
        symbol: <GiWaterBolt color="rgb(133, 255, 62)" />,
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
        name: "VERSA Switch",
        symbol: <TiFlowSwitch color="rgb(133, 255, 62)" />,
        description: "",
      },
    ],
    range: "Marine",
  },
];
