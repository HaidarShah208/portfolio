import React from 'react'
import './footer.css'

function Footer() {
    const date=new Date().getFullYear()

  return (
<>
<footer className="footer">
    <div className="footer_container container">
        <h1 className="footer_title">Ali Haider</h1>
        <ul className='footer_list'>
            <li><a href="#about" className="footer_link">About</a></li>
            <li><a href="#services" className="footer_link">Services</a></li>
            <li><a href="#skills" className="footer_link">Skills</a></li>
        </ul>

        <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100051807652228&mibextid=ZbWKwL" className="footer_social-link" target='_blank'>
                <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://x.com/alihaider2080?t=U5S2mwFna4JvVNcE_JXbMg&s=08" className="footer_social-link" target='_blank'>
                <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/ali-haidar-5181a5276/" className="footer_social-link" target='_blank'>
            <i className="bx bxl-linkedin"></i>
            
            </a>
        </div>
        <span className='footer_copy'> &#169; {date} All right reserved  </span>
    </div>
</footer>
</>
    )
}

export default Footer