import React from 'react'

export default function Navbar() {
    return (
        <header className='flex bg-blue-600 py-4 px-6'>
            <div>
                <h1 className='text-2xl text-slate-50'>Revanth Mart</h1>
            </div>
            <nav className='ml-auto flex gap-4'>
                <span className="material-symbols-outlined text-2xl hover:cursor-pointer">
                    favorite
                </span>
                <span className="material-symbols-outlined text-2xl hover:cursor-pointer">
                    shopping_cart
                </span>
                <span className="material-symbols-outlined text-2xl hover:cursor-pointer">
                    account_circle
                </span>
            </nav>
        </header>
    )
}
