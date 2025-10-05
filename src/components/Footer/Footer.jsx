import React from 'react'
import { Link } from 'react-router-dom'
import {Logo} from '../index'

function Footer() {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-5 gap-6 text-white p-5 bg-[#14074f] font-mono">
                <div className="md:col-span-1">
                    <Link to="/" className="flex items-center mb-3 text-white font-bold no-underline">
                       <Logo width='75px'/>
                    </Link>
                    <p className="font-extrabold text-lg">© 2025</p>
                </div>

                <div className="md:col-span-1">

                </div>

                <div className="md:col-span-1">
                    <h5>Section</h5>
                    <ul className="flex flex-col gap-2">
                        <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Home</Link></li>
                        <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Features</Link></li>
                        <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Pricing</Link></li>
                        <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">FAQs</Link></li>
                        <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">About</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-1">
                    <h5>Section</h5>
                    <ul className="flex flex-col gap-2">
                        <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Home</Link></li>
                        <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Features</Link></li>
                        <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Pricing</Link></li>
                        <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">FAQs</Link></li>
                        <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">About</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-1">
                    <h5>Section</h5>
                    <ul className="flex flex-col gap-2">
                        <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Home</Link></li>
                        <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Features</Link></li>
                        <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Pricing</Link></li>
                        <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">FAQs</Link></li>
                        <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">About</Link></li>
                    </ul>
                </div>
            </footer>
    )
}

export default Footer
