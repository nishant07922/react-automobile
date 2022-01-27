import React from "react";

import ProductUserCard from "../../shared/components/UIelements/ProductUserCard";

const DUMMY_PRODUCTS = [
    {
        P_id: '1',
        name: 'Suspensions (shock absorbers pair with highend coil)',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        filename:'https://graphicriver.img.customer.envatousercontent.com/files/277219361/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=c763ea0cfd13c121cc0e697ebbf8bb1e',
        price: '2010',
        quant: '400'
    },
    {
        P_id: '2',
        name: 'Ventilated Discs',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        filename:'https://media.istockphoto.com/photos/car-brake-disc-and-red-caliper-isolated-picture-id976970898?k=20&m=976970898&s=612x612&w=0&h=DbJcxU2GJi1oVG2kOgdOBuzqYVXSey_3Vk2Y40uGQm8=',
        price: '20010',
        quant: '4000'
    },
    {
        P_id: '3',
        name: 'Ventilated Discs',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        filename:'https://media.istockphoto.com/photos/car-brake-disc-and-red-caliper-isolated-picture-id976970898?k=20&m=976970898&s=612x612&w=0&h=DbJcxU2GJi1oVG2kOgdOBuzqYVXSey_3Vk2Y40uGQm8=',
        price: '20010',
        quant: '4000'
    },
    {
        P_id: '4',
        name: 'Ventilated Discs',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        filename:'https://media.istockphoto.com/photos/car-brake-disc-and-red-caliper-isolated-picture-id976970898?k=20&m=976970898&s=612x612&w=0&h=DbJcxU2GJi1oVG2kOgdOBuzqYVXSey_3Vk2Y40uGQm8=',
        price: '20010',
        quant: '4000'
    }
];
const Index = () => {
    return (
        <div class="album py-5 bg-light">
        <h2>admin credetials: admin@gmail.com</h2><br></br>
        <h2>Admin@1234</h2><br></br>
        <h2>user credetials: user@gmail.com</h2><br></br>
        <h2>User@1234</h2>
            <div class="container">

                <div class="row">
                {Object.keys(DUMMY_PRODUCTS).map(function(key, i){
                        return(
                    <ProductUserCard filename={DUMMY_PRODUCTS[i].filename} name={DUMMY_PRODUCTS[i].name} P_id={DUMMY_PRODUCTS[i].P_id} desc={DUMMY_PRODUCTS[i].desc} price={DUMMY_PRODUCTS[i].price} quant={DUMMY_PRODUCTS[i].quant}></ProductUserCard>
                );})}
                </div>
            </div>
        </div>

    )
};

export default Index;