import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export const Footer = () => {
    return (
        <footer className='bg-gray-900 text-center text-white'>
      <div className='container p-4 pb-0'>
      <section className='mb-4 flex justify-center items-center'>
  <div className="flex justify-center">
    <a
      className='btn btn-outline-light m-1'
      href='https://github.com/Jonatha67'
      role='button'
    >
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>

    <a
      className='btn btn-outline-light m-1'
      href='https://www.linkedin.com/in/jonathan-gutierrez-716a3625a/'
      role='button'
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </div>
</section>
      </div>

      <div
        className='text-center p-3'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2020 Copyright
        <a className='text-white' >
         
        </a>
      </div>
    </footer>
    );
  }
  
  export default Footer;