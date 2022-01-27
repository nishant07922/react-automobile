import React from "react";

import ProductAdminCard from "../../shared/components/UIelements/ProductAdminCard";

const DUMMY_PRODUCTS = [
    {
        P_id: '1',
        name: 'Empire State Building',
        desc: 'One of the most famous sky scrapers in the world!',
        filename:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        price: '2010',
        quant: '400'
    },
    {
        P_id: '2',
        name: '2Empire State Building',
        desc: '2One of the most famous sky scrapers in the world!',
        filename:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        price: '20010',
        quant: '4000'
    }
];
const AdminIndex = () => {
    return (
        <div class="album py-5 bg-light">
            <div class="container">

                <div class="row">

                    <ProductAdminCard filename={DUMMY_PRODUCTS[1].filename} name={DUMMY_PRODUCTS[1].name} P_id={DUMMY_PRODUCTS[1].P_id} desc={DUMMY_PRODUCTS[1].desc} price={DUMMY_PRODUCTS[1].price} quant={DUMMY_PRODUCTS[1].quant}></ProductAdminCard>

                </div>
            </div>
        </div>

    )
};

export default AdminIndex;