
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="py-4 border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-nunito font-bold text-primary">Care<span className="text-gray-800">Mind</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <Link to="/" className={isActive('/') ? 'nav-link-active' : 'nav-link'}>
            Home
          </Link>
          <Link to="/features" className={isActive('/features') ? 'nav-link-active' : 'nav-link'}>
            Features
          </Link>
          <Link to="/pricing" className={isActive('/pricing') ? 'nav-link-active' : 'nav-link'}>
            Pricing
          </Link>
          <Link to="/dashboard" className={isActive('/dashboard') ? 'nav-link-active' : 'nav-link'}>
            Dashboard
          </Link>
          <Link to="/admin" className={isActive('/admin') ? 'nav-link-active' : 'nav-link'}>
            Admin
          </Link>
          <div className="ml-4 flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90" size="sm" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 z-30 bg-white border-b border-gray-100 shadow-lg animate-fade-in">
          <div className="flex flex-col p-4">
            <Link 
              to="/" 
              className={`py-2 ${isActive('/') ? 'text-primary' : 'text-gray-700'}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`py-2 ${isActive('/features') ? 'text-primary' : 'text-gray-700'}`}
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`py-2 ${isActive('/pricing') ? 'text-primary' : 'text-gray-700'}`}
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link 
              to="/dashboard" 
              className={`py-2 ${isActive('/dashboard') ? 'text-primary' : 'text-gray-700'}`}
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
            <Link 
              to="/admin" 
              className={`py-2 ${isActive('/admin') ? 'text-primary' : 'text-gray-700'}`}
              onClick={toggleMenu}
            >
              Admin
            </Link>
            <div className="mt-4 flex flex-col space-y-2">
              <Button variant="outline" asChild>
                <Link to="/login" onClick={toggleMenu}>Login</Link>
              </Button>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/signup" onClick={toggleMenu}>Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
