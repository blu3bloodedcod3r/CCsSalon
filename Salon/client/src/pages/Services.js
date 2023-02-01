import WS from "./images/WS.png";
import BS from "./images/BS.png";
import HT from "./images/HT.jpg";
import MH from "./images/MH.jpg";
import MS from "./images/MS.png";
import WH from "./images/WH.png"; 

export const services = [

        {
        id: 1,
        name: "Women's Styling",
        image: WS,
        description: "Includes: wash and style",
        duration: "45 min",
        price: "$50 - $100 (depending on hair length)",
    },
    {
        id: 2,
        name: "Men's Styling",
        image: MS,
        description: "Includes: wash and style",
        duration: "45 min",
        price: "$20-$50",
    },
    {
        id: 3,
        name: "Women's Haircut",
        image: WH,
        description: "Includes: wash and cut",
        duration: "1 Hour",
        price: "$35",
    },
    {
        id: 4,
        name: "Men's Haircut",
        image: MH,
        description: "Includes: wash and cut",
        duration: "45 min",
        price: "$25",
    },
    {
        id: 5,
        name: "Beard Service",
        image: BS,
        description: "Includes: razor shave and warm towel after trim/cut",
        duration: "45 min",
        price: "$25 - $45",
    },
    {
        id: 6,
        name: "Highlights & Tints",
        image: HT,
        description: "Includes: wash and style",
        duration: "2 - 3 hrs depedning on hair length",
        price: "$75 - $200",
    }
    ];

    export default { services }