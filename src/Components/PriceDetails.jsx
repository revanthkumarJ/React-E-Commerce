import React from 'react'
import { useCart } from '../context/cart-context'
import { getTotalCartAmount } from '../utilities/CartUtils'

export default function PriceDetails() {
    const { cart } = useCart()
    const totalAmount=getTotalCartAmount(cart);
    const deliveryCharge=20;
    return (
        <div className='w-[400px] bg-[#fafafa] p-4'>
            <p className='text-2xl'> Price Details</p>
            <div className='flex flex-col gap-5 '>
                <div className='flex border-b p-2'>
                    <p>Price {cart.length} items</p>
                    <p className='ml-auto'>Rs {totalAmount}/-</p>
                </div>
                <div className='flex border-b p-2'>
                    <p>Delivery Charge</p>
                    <p className='ml-auto'>{deliveryCharge}/-</p>
                </div>
            </div>
            <div className='flex border-b p-2'>
                <p>Total Amount</p>
                <p className='ml-auto'>Rs {totalAmount+deliveryCharge}/-</p>
            </div>
            <div>
                <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">Place Order</button>
            </div>
        </div>
    )
}
