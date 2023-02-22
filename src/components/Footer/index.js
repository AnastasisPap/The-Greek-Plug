import React from 'react';
import './styles.scss';
import fb from '../../assets/insta.png'
import insta from '../../assets/insta.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
        <div className='sb__footer-links-div'>
          <h4>Dispovapes</h4>
          <a>
            <p>Καλέστε μας:</p>
            <p><b>0123456789</b></p>
          </a>
          <a>
            <p>Στείλτε μας email:</p>
            <p><b>gamothmanasou@dispovapes.gr</b></p>
          </a>
        </div>
        <div className='sb__footer-links-div'>
          <h4>ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ</h4>
          <a href='/aboutus'>
            <p>Για εμάς</p>
          </a>
          <a href='/termsofuse'>
            <p>Όροι Χρήσης</p>
          </a>
          <a href='/paymentmethods'>
            <p>Τρόποι Πληρωμής</p>
          </a>
          <a href='/delivery'>
            <p>Τρόποι Αποστολής</p>
          </a>
          <a href='/returnspolicy'>
            <p>Πολιτική Επιστροφών</p>
          </a>
          <a href='/legal'>
            <p>Πολιτική Απορρήτου</p>
          </a>
          <a href='/contact'>
            <p>Επικοινωνία</p>
          </a>
        </div>
        <div className='sb__footer-links-div'>
          <h4>Κατηγορίες</h4>
          <a href='/'>
            <p></p>
          </a>
          <a href='/categories/vapy'>
            <p>VAPY</p>
          </a>
          <a href='/categories/EL SHISHA'>
            <p>EL SHISHA</p>
          </a>
          <a href='/contact'>
            <p>Επικοινωνία</p>
          </a>
        </div>
        <div className='sb__footer-links-div'>
          <h4>Company</h4>
          <a href='/about'>
            <p>About</p>
          </a>
          <a href='/press'>
            <p>Press</p>
          </a>
          <a href='/career'>
            <p>Career</p>
          </a>
          <a href='/contact'>
            <p>Contact</p>
          </a>
        </div>
        <div className='sb__footer-links-div'>
          <h4>FOLLOW US ON SOCIAL:</h4>
          <div className='socialmedia'>
            <p><img src={fb} alt=''/></p>
            <p><img src={insta} alt=''/></p>
          </div>
        </div>
        </div>
      <div className='sb__footer-below'>
        <div className='sb__footer-copyright'>
          <p>
            @ {currentYear} Dispovapes. All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;