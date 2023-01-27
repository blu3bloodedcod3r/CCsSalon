import React, {useState} from 'react';
import Product from "./home";

import WS from "./images/WS";
import BS from "./images/BS";
import HT from "./images/HT";
import MH from "./images/MH";
import MS from "./images/MS";
import WH from "./images/WH";


export default function Products() {

    const [products] = useState([
        {
        name: "Women's Styling",
        image: WS,
        Description: "Includes: wash and style",
        Duration: "45 min",
        Price: "$50 - $100 (depending on hair length)",
    },
    {
        name: "Men's Styling",
        image: MS,
        Description: "Includes: wash and style",
        Duration: "45 min",
        Price: "$20-$50",
    },
    {
        name: "Women's Haircut",
        image: WH,
        Description: "Includes: wash and cut",
        Duration: "1 Hour",
        Price: "$35",
    },
    {
        name: "Men's Haircut",
        image: MH,
        Description: "Includes: wash and cut",
        Duration: "45 min",
        Price: "$25",
    },
    {
        name: "Beard Service",
        image: BS,
        Description: "Includes: razor shave and warm towel after trim/cut",
        Duration: "45 min",
        Price: "$25 - $45",
    },
    {
        name: "Highlights & Tints",
        image: HT,
        Description: "Includes: wash and style",
        Duration: "2 - 3 hrs depedning on hair length",
        Price: "$75 - $200",
    }
    ])
};