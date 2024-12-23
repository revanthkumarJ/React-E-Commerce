import React from 'react'
import { useCart } from '../context/cart-context'

export default function HorizontalProductCard({ product }) {
    const { cartDispatch } = useCart()

    const handleOnRemoveClick = (product) => {
        
            cartDispatch({
                type: "REMOVE_FROM_CART",
                payload: product.id
            }
            )
        
    }

    return (
        <div className="card-horizontal d-flex shadow">
            <div className="card-hori-image-container relative">
                <img className="card-image" src={product.images[0]} alt="shoes" />
                
            </div>
            <div className="card-details d-flex direction-column">
                <div className="card-title">{product.title}</div>
                <div className="card-description">
                    <p className="card-des">{product.name}</p>
                    <p className="card-price">Rs.{product.price}

                    </p>
                </div>
                
                <div className="cta-btn d-flex gap">
                    <div className="cta-btn">
                        <button className="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin" onClick={()=>handleOnRemoveClick(product)}>
                            Remove From Cart</button>
                    </div>
                    <div className="cta-btn">
                        <button className="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
                            Move to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
