import Group_1 from './images/Group_1.png'
import Frame_56 from './images/Frame_56.png'
import Frame_55 from './images/Frame_55.png'

import './About.css';

function About() {
  return (
      <header className="header-section">
        <div class="section">
            <div class="list-container" >
                <div class="groupList-logo">
                    <img src={Group_1} alt="grouplogo" class="gp1-logo"/>
                </div>
                <div class="my-list">
                    <ul class="list-bar">
                        <li class="list-item">About Us</li>
                        <li class="list-item">Our Commitment</li>
                        <li class="list-item">Contact</li>
                    </ul>
                </div>
            </div>
            <h1 class="we"> who we are</h1>
            <div class="img-frame">
                <img src={Frame_56} alt="kid picture"/>
            </div>
            <h2 class="commit"> Our Commitment</h2>
            <div class="grid-container">
                <div class="item">
                    <h3> Cultivating Reading Culture</h3>
                    <p>
                        We are passionate<br/> 
                        about fostering a reading culture<br/>
                        among children. By offering <br/>
                        a diverse range of books <br/>
                        across genres and age <br/>
                        groups, we aim to spark <br/>
                        curiosity, fuel imagination,<br/> 
                        and instill a lifelong love for books.
                    </p>
                    </div>
                    <div class="item">
                        <h3>Quality Assurance</h3>
                        <p>
                            From sturdy bindings to<br/>
                           vibrant illustrations our <br/>
                           hard copy books are crafted <br/>
                           with the utmost care and <br/>
                           attention to detail,<br/>
                           guaranteeing a delightful<br/> 
                           reading experience for <br/>
                           young.
                        </p>  
                    </div>
                    <div class="item">
                        <h3>Quality Assurance</h3>
                        <p>
                        From sturdy bindings to<br/>
                        vibrant illustrations our <br/>
                        hard copy books are crafted <br/>
                        with the utmost care and <br/>
                        attention to detail,<br/>
                        guaranteeing a delightful<br/> 
                        reading experience for <br/>
                        young.
                        </p>
                    </div>
                    <div class="item">
                        <h3>Quality Assurance</h3>
                        <p>
                        From sturdy bindings to<br/>
                        vibrant illustrations our <br/>
                        hard copy books are crafted <br/>
                        with the utmost care and <br/>
                        attention to detail,<br/>
                        guaranteeing a delightful<br/> 
                        reading experience for <br/>
                        young.
                        </p>
                    </div>
            </div>
            <footer>
                <img src={Frame_55} alt="footer frame" class="footer-frame"/>
            </footer>
        </div>
      </header>
  );
}

export default About;
