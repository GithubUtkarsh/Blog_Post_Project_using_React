import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../index'

function Footer() {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-5 gap-6 text-white p-5 bg-[#14074f] font-mono">
            <div className="md:col-span-1 md:ms-10 md:mt-10 ">
                <Link to="/" className="flex items-center mb-3 text-white font-bold no-underline">
                    <Logo width='75px' />
                </Link>
                <p className="font-extrabold text-lg">© 2025</p>
            </div>

            <div className="md:col-span-1">

            </div>

            <div className="md:col-span-1">
                <h5 className='text-gray-400 uppercase font-bold mb-4'>Company</h5>
                <ul className="flex flex-col gap-2 ">
                    <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Features</Link></li>
                    <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Pricing</Link></li>
                    <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Affiliate Program</Link></li>
                    <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Press Kit</Link></li>
                </ul>
            </div>

            <div className="md:col-span-1">
                <h5 className='uppercase text-gray-400 font-bold mb-4'>Support</h5>
                <ul className="flex flex-col gap-2">
                    <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Account</Link></li>
                    <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Help</Link></li>
                    <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Contact Us</Link></li>
                    <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Customer Support</Link></li>
                </ul>
            </div>

            <div className="md:col-span-1">
                <h5 className='text-gray-400 uppercase font-bold mb-4'>Legals</h5>
                <ul className="flex flex-col gap-2">
                    <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Terms & Conditions</Link></li>
                    <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Privacy Policy</Link></li>
                    <li className=""><Link to="#" className="p-0 text-white font-bold hover:text-gray-200">Licensing</Link></li>

                </ul>
            </div>
        </footer>
    )
}

export default Footer
