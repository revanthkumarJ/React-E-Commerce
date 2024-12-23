import React from 'react'
import { useCart } from '../context/cart-context'
import { isPresentInCart } from "../utilities/CartUtils"
import { useNavigate } from 'react-router-dom'

export default function ProductCard({ product }) {

    const navigate = useNavigate()

    const { cart, cartDispatch } = useCart()

    const isInCart = isPresentInCart(cart, product.id)
    const handleOnCartClick = (product) => {
        if (isInCart) {
            navigate("/cart")
        }
        else {
            cartDispatch({
                type: "ADD_TO_CART",
                payload: product
            }
            )
        }
    }
    const handleOnWishList=(product) => {
        if (isInCart) {
            navigate("/cart")
        }
        else {
            cartDispatch({
                type: "ADD_TO_CART",
                payload: product
            }
            )
        }
    }

    return (

        <div className="card card-vertical d-flex direction-column relative shadow">
            <div className="card-image-container">
                <img className="card-image" src={product.images[0]} alt="shoes" />
            </div>
            <div className="card-details">
                <div className="card-title">{product.title}</div>
                <div className="card-description">
                    <p className="card-des">Category: {product.category.name}</p>
                    <p className="card-price text-2xl pt-1">
                        Rs: {product.price} /-
                    </p>
                </div>
                <div className="cta-btn">
                    <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin" onClick={() => handleOnCartClick(product)}>
                        {
                            isInCart ? (
                                <span class="material-symbols-outlined">
                                    shopping_cart_checkout
                                </span>
                            ) : (
                                <span className="material-symbols-outlined text-2xl hover:cursor-pointer">
                                    shopping_cart
                                </span>

                            )
                        }
                        {
                            isInCart ? "Go To Cart" : "Add To Cart"
                        }


                    </button>
                    <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin" onClick={() => handleOnWishList(product)}>
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
