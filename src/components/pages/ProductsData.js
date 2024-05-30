import ActiveImg from "./pictures/activeImg.jpg";
import cImg from './pictures/cserum.jpg';
import proImg from './pictures/proImg.jpg';
import hydraImg from './pictures/hydraImg.jpg';
import brightImg from './pictures/brightImg.jpg';
import polyImg from './pictures/polyImg.jpg';




const productsArray = [
    {
        id: "1",
        image:ActiveImg,
        title:"Is Clinic 'Active Serum'",
        price:"88"
    },

   {
        id: "2",
        image:brightImg,
        title:"Is Clinic 'Brightning Serum'",
        price:"83"
    },

    {
        id: "3",
        image:proImg,
        title:"Is Clinic 'Pro-Heal Serum",
        price:"95"
    },

    {
        id: "4",
        image:hydraImg,
        title:"Is Clinic 'Hydra-Cool Serum'",
        price:"64"
    },

 
    {
        id: "5",
        image:cImg,
        title:"Is Clinic 'C eye serum'",
        price:"68"
    },
    {
        id: "6",
        image:polyImg,
        title:"Is Clinic 'Poly-Vitamin Serum'",
        price:"83"
    }

]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;

    }

    return productData;
}

export { productsArray, getProductData };