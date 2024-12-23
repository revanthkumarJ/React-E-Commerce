import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function Navbar() {
    const navigate=useNavigate()
    const [style, setStyle] = useState({ cursor: "default" });
    return (
        <header className='flex bg-blue-600 py-4 px-6'>
            <div>
                <h1 style={style} className='text-2xl text-slate-50' onClick={()=>{navigate("/")} } onMouseEnter={() => setStyle({ cursor: "pointer" })}
      onMouseLeave={() => setStyle({ cursor: "default" })}>Revanth Mart</h1>
            </div>
            <nav className='ml-auto flex gap-4'>
                <span className="material-symbols-outlined text-2xl hover:cursor-pointer">
                    favorite
                </span>
                <span className="material-symbols-outlined text-2xl hover:cursor-pointer" onClick={()=>{navigate("/cart")}}>
                    shopping_cart
                </span>
                <span className="material-symbols-outlined text-2xl hover:cursor-pointer">
                    account_circle
                </span>
            </nav>
        </header>
    )
}
