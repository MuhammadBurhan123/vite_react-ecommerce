import React from 'react';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
  <div>
    {/* upper Navbar */}
    <div>
        <div>
            <div>
                <a href="#">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>
        </div>
    </div>
    {/* lower Navbar */}
    <div></div>
  </div>
);
}

export default Navbar