import React from 'react'
import emptyimg from "./assets/feature2.svg.png";
import './About.scss'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import Advisors from './Advisors';

function About() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='About'>
            <div className="About1">
                <div className="About1left">
                    <div className="contentwrapAboutleft">
                        <p className="headingAbout">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p className="contentAbout">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                    </div>
                </div>
                <div className="About1right">
                    <img src={emptyimg} alt="transbnk logo" className="About1rightimg" />
                </div>
            </div>
            <h4 className="buildingh">Building stronger partnerships, driving success together</h4>
            <div className="carousel-container">
                <img className="company-iconx" src={require("./assets/auro.98f50b020862c375bbcc.png.png")} alt="Company 1" />
                <img className="company-icon" src={require("./assets/blostem.ef7a9957ae05c2b0c5c3.png.png")} alt="Company 1" />
                <img className="company-icon" src={require("./assets/xtendvalue.e8b6621d488ae467c583.png.png")} alt="Company 1" />
                <img className="company-icon" src={require("./assets/signzy.4471d63fa0c459f2564e.png.png")} alt="Company 1" />
                <img className="company-icon" src={require("./assets/greattr.8f4754e8abad59f2c46534beba59321f.svg.png")} alt="Company 1" />

            </div>
            <div className="About3">
                <div className="About3left">
                    <p className="heading3About">
                        Why Choose Our BNPL MSME Loans?
                    </p>
                </div>
                <div className="About3right">
                    <ul style={{ padding: "0%", color: '#475066', margin: '0%' }}>
                        <li>Flexible Repayment Options: Say goodbye to rigid repayment schedules. With our BNPL MSME loans, you can repay your loan at a pace that suits your business's cash flow.</li>
                        <li>Quick Approval: Time is money, and we value both. Our streamlined application process ensures you receive a quick response and funding when you need it.
                        </li>
                        <li>Competitive Interest Rates: We offer competitive interest rates to keep your financing costs manageable.</li>
                        <li>No Hidden Fees: Transparency is our priority. You won't encounter any unexpected fees or charges.</li>
                        <li>Diverse Loan Products: Choose from a range of loan products designed to meet your specific business needs.</li>
                    </ul>   </div>
            </div>
            <h4 className="buildingh2">Meet the Members of <br />Our Dynamic Crew</h4>
            <p>Empowering success through teamwork and collaboration</p>
            <div className="memberswrap">
                <div className="member">
                    <div className="memberphoto">
                    </div>
                    <h4 className="membername">
                        NAME XYZ
                    </h4>
                    <h2 className="memberrole">
                        dsajadshdaskjads ROle
                    </h2>
                </div>
                <div className="member">
                    <div className="memberphoto">
                    </div>
                    <h4 className="membername">
                        NAME XYZ
                    </h4>
                    <h2 className="memberrole">
                        dsajadshdaskjads ROle
                    </h2>
                </div><div className="member">
                    <div className="memberphoto">
                    </div>
                    <h4 className="membername">
                        NAME XYZ
                    </h4>
                    <h2 className="memberrole">
                        dsajadshdaskjads ROle
                    </h2>
                </div><div className="member">
                    <div className="memberphoto">
                    </div>
                    <h4 className="membername">
                        NAME XYZ
                    </h4>
                    <h2 className="memberrole">
                        dsajadshdaskjads ROle
                    </h2>
                </div><div className="member">
                    <div className="memberphoto">
                    </div>
                    <h4 className="membername">
                        NAME XYZ
                    </h4>
                    <h2 className="memberrole">
                        dsajadshdaskjads ROle
                    </h2>
                </div><div className="member">
                    <div className="memberphoto">
                    </div>
                    <h4 className="membername">
                        NAME XYZ
                    </h4>
                    <h2 className="memberrole">
                        dsajadshdaskjads ROle
                    </h2>
                </div>
                <div className="member">
                    <div className="memberphoto">
                    </div>
                    <h4 className="membername">
                        NAME XYZ
                    </h4>
                    <h2 className="memberrole">
                        dsajadshdaskjads ROle
                    </h2>
                </div>
                <div className="member">
                    <div className="memberphoto">
                    </div>
                    <h4 className="membername">
                        NAME XYZ
                    </h4>
                    <h2 className="memberrole">
                        dsajadshdaskjads ROle
                    </h2>
                </div>
            </div>
            <div className="About5">
                <div className="About5left">
                    <p className="heading3About">
                        Achieving Greatness with the Support of Our Exceptional Advisors
                    </p>
                </div>
                <div className="About5right">
                    <p style={{ padding: "0%", color: '#475066', margin: '0%' }}>
                        As our company continues to grow and evolve, it is important that we have a strong and dedicated advisory board in place to provide guidance and support. Our advisory board members bring a wealth of experience and expertise in a variety of fields, and their input is invaluable as we make strategic decisions and navigate the challenges of the business world. Their diverse perspectives and ability to think creatively and critically allow us to approach problems from different angles and develop innovative solutions. We are grateful for their ongoing commitment to our company and look forward to working closely with them in the coming months and years.                    </p>   </div>
            </div>
            <Advisors />
        </div>
    )
}

export default About