import React from 'react'
import { useCart } from '../context/cart-context'
import HorizontalProductCard from '../Components/HorizontalProductCard'
import PriceDetails from '../Components/PriceDetails'
import { getTotalCartAmount } from '../utilities/CartUtils'

export default function CartPage() {
    const { cart } = useCart()
    

    return (
        <main className='flex flex-col items-center pt-6'>
            <h2 className='text-3xl'>My Cart</h2>
            <div className='flex flex-row gap-8'>
                <div className='pt-4 flex flex-col  gap-4 '>
                    {
                        cart.length > 0 &&
                        cart.map((item) => {
                            return <HorizontalProductCard key={item.id} product={item} />
                        })

                    }
                </div>
                <div>
                <PriceDetails />
                </div>
            </div>

        </main>
    )
}
