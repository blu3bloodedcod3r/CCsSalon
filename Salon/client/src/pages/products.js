
import WS from "./images/WS";
import BS from "./images/BS";
import HT from "./images/HT";
import MH from "./images/MH";
import MS from "./images/MS";
import WH from "./images/WH";


export const products = [
        {
        id: 1,
        name: "Women's Styling",
        image: WS,
        Description: "Includes: wash and style",
        Duration: "45 min",
        Price: "$50 - $100 (depending on hair length)",
    },
    {
        id: 2,
        name: "Men's Styling",
        image: MS,
        Description: "Includes: wash and style",
        Duration: "45 min",
        Price: "$20-$50",
    },
    {
        id: 3,
        name: "Women's Haircut",
        image: WH,
        Description: "Includes: wash and cut",
        Duration: "1 Hour",
        Price: "$35",
    },
    {
        id: 4,
        name: "Men's Haircut",
        image: MH,
        Description: "Includes: wash and cut",
        Duration: "45 min",
        Price: "$25",
    },
    {
        id: 5,
        name: "Beard Service",
        image: BS,
        Description: "Includes: razor shave and warm towel after trim/cut",
        Duration: "45 min",
        Price: "$25 - $45",
    },
    {
        id: 6,
        name: "Highlights & Tints",
        image: HT,
        Description: "Includes: wash and style",
        Duration: "2 - 3 hrs depedning on hair length",
        Price: "$75 - $200",
    }
    ];

    export default { products }