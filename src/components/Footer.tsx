import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-background text-white py-8">
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
      <div>
        <h3 className="font-bold text-lg mb-2">About Us</h3>
        <p className="text-sm text-gray-400">We are committed to providing the best services to our customers.</p>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">Quick Links</h3>
        <ul>
          <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">Newsletter</h3>
        <form>
          <input type="email" placeholder="Your email" className="w-full p-2 rounded" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Subscribe</button>
        </form>
      </div>
    </div>
    <div className="text-center text-sm text-gray-400 mt-8">
      © 2024 YourCompanyName. All Rights Reserved.
    </div>
  </footer>
  
  )
}
