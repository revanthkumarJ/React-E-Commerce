import React from 'react'

export default function ProductCard({ product }) {
    return (

        <div className="card card-vertical d-flex direction-column relative shadow">
            <div className="card-image-container">
                <img className="card-image" src={product.images[0]} alt="shoes" />
            </div>
            <div className="card-details">
                <div className="card-title">{product.title}</div>
                <div className="card-description">
                    <p className="card-des">Category: {product.category.name}</p>
                    <p className="card-price">
                        Rs: {product.price} /-
                    </p>
                </div>
                <div className="cta-btn">
                    <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                        <span className="material-symbols-outlined text-2xl hover:cursor-pointer">
                            shopping_cart
                        </span>
                        Add To Cart
                    </button>
                    <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                    <span className="material-symbols-outlined text-2xl hover:cursor-pointer">
                    favorite
                </span>
                        Add To Wishlist
                    </button>
                </div>
            </div>
        </div>
    )
}
