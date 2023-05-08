import React from 'react';
import Logo from "../../assets/img/SSTTEK_Logo.png";
import "./CompanyInformation.css"

function CompanyInformation(props) {
    return (
        <div className='company-main-wrapper'>
            <div className='company-logo-wrapper'>
                  <div>
                      <img src={Logo} className='company-logo'/>
                      <div className='company-site'>www.ssttek.com</div>
                  </div>
            </div>
            
            <div className='contact-wrapper'>
                <div className='contact-email'>
                    <p>EMAIL</p>
                    <p className='contact-info'>ssttech@example.com</p>
                </div>

                <div className='contact-phone'>
                    <p>PHONE</p>
                    <p className='contact-info'>+04 - 123456789</p>
                </div>
            </div>


            <div className='contact-wrapper'>
                <div className='contact-email'>
                    <p>LABELS</p>
                </div>

                <div className='contact-react'>
                    <button>Bot</button>
                    <button>React</button>
                </div>
            </div>

            <div className='contact-wrapper'>
                <div className='contact-email'>
                <p>ATTACHMENTS</p>
                </div>

                <div className='contact-email'>
                    <ul>
                        <li>Dataset.csv</li>
                        <li>bot_face.jpg</li>
                    </ul>
                </div>

                <p>View All</p>


            </div>
            


            <button className='react'>React</button>

        </div>
    );
}

export default CompanyInformation;