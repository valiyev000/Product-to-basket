import React, { useContext } from 'react'
import ContentApi from './ContentApi';

export default function Basket() {

    console.log("Basket render");

    const { basketItem } = useContext(ContentApi)
    const {basketItemRemove} = useContext(ContentApi)
    console.log(basketItem); //TODO basketItem arraydir object var icinde


    return (
        <main className='basketPage'>

            {basketItem.map((e, i) =>
                <div className="item" key={e.id}>
                    <img src={e.images[0]} alt="item-img.svg" />
                    <div className="about">
                        <div className="title">{e.title}</div>
                        <div className="description">{e.description}</div>
                    </div>
                    <div className="price">{e.price} USD</div>
                    <div className="remove" onClick={()=>basketItemRemove(e.id)}>X</div>
                </div>
            )}

        </main>
    )
}
