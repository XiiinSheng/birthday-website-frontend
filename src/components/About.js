/* The About Page for the Website */

import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div id="about">
            <h1 id="aboutTitle">About This Website</h1>
            <div id="aboutText"><h3>Description: </h3>
Birthday wishes posting website project created by Xin Sheng. <br/>
Website owner: Xin Sheng<br/>
Contact email: shengxin369@gmail.com<br/>
<br/>
<h3>People:</h3>
Frontend/Backend/Database/UI/Planning/Copywriting: Xin Sheng<br/>
Testing: Xin Sheng, Joanna Lei, Tony Zeng<br/>
Requirements Analysis: Tony Zeng<br/>
<br/>
<h3>References:</h3>
Technology references: <br/>
Traversy Media: https://www.youtube.com/user/TechGuyWeb<br/>
DesignCourse: https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow<br/>
Tools documentations: etc.<br/>
StackOverflow: etc. <br/>
<br/>
UI references:<br/>
Design Sense: https://www.youtube.com/channel/UCK3KESgQlmEBJ5DnRxWJ9oA<br/>
<br/>
Stripes decoration: <br/>
https://www.vhv.rs/viewpic/hTbmJTi_party-decoration-png-png-download-transparent-<br/>
birthday-decoration/<br/>
<br/>
Cake image: <br/>
https://www.vexels.com/png-svg/preview/147243/three-floors-birthday-cake-illustration<br/>
<br/>
Background:<br/>
https://depositphotos.com/vector-images/birthday.html<br/>
<br/>
Photo:<br/>
http://www.youloveit.com/cartoons/650-toy-story-4-new-portrait-pictures-of-main-characters.html<br/>
<br/>
Birthday Quotes:<br/>
https://www.proflowers.com/blog/happy-birthday-quotes<br/>
https://www.zhihu.com/question/271212996<br/>
<br/>
Tools used: <br/>
MongoDB, Express.js, React, Bootstrap, Heroku, etc.<br/>
<br/>
<h3>Remarks:</h3>
Copyright © 2021, Xin Sheng<br/>
This website is only for learning purpose. Any resemblance is coincidental. <br/>
DO NOT use this website for business. (no one would) <br/>
NO reproduction without permission.    </div>
        <div id="aboutButtons">
            <Link id="backButton" className="btn btn-primary btn-lg" to="/"> Go Back </Link>
            <a id="feedbackButton" 
                className="btn btn-primary btn-lg" 
                href='https://docs.google.com/forms/d/e/1FAIpQLSet17o_PxFK3Y43yIPmD_1GNXO8GjBoze77csZOQpxo_q7sqw/viewform?usp=sf_link' 
                target="_blank"
                rel="noreferrer"> Feedback</a>
        </div>
        </div>
    )
}

export default About
