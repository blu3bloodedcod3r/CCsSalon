// original Seed file used to created the array of services
// new seeders folder created in the server
// keep as backup just in case it is needed **Images folder also kept for now**

import WS from "./images/WS.png";
import BS from "./images/BS.png";
import HT from "./images/HT.jpg";
import MH from "./images/MH.jpg";
import MS from "./images/MS.png";
import WH from "./images/WH.png"; 

export const services = [

    {
        id: 0,
        name: "Women's Styling",
        image: WS,
        description: "Includes: wash and style",
        duration: "45 min",
        price: "$70",
    },
    {
        id: 1,
        name: "Men's Styling",
        image: MS,
        description: "Includes: wash and style",
        duration: "45 min",
        price: "$40",
    },
    {
        id: 2,
        name: "Women's Haircut",
        image: WH,
        description: "Includes: wash and cut",
        duration: "1 Hour",
        price: "$35",
    },
    {
        id: 3,
        name: "Men's Haircut",
        image: MH,
        description: "Includes: wash and cut",
        duration: "45 min",
        price: "$25",
    },
    {
        id: 4,
        name: "Beard Service",
        image: BS,
        description: "Includes: razor shave and warm towel after trim/cut",
        duration: "45 min",
        price: "$35",
    },
    {
        id: 5,
        name: "Highlights & Tints",
        image: HT,
        description: "Includes: wash and style",
        duration: "2 - 3 hrs depedning on hair length",
        price: "$200",
    }
];

function getServiceData(id) {
    let serviceData = services.find(service => service.id === id)

    if (serviceData === undefined) {
        console.log("Product data does not exist for ID: " + id)
        return undefined
    }

    return serviceData;
}

export { getServiceData }
// Used in cartContext.js file
// When export default was used, it didn't work