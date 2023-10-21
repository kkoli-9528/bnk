import React from 'react'
import emptyimg from "./assets/feature2.svg.png";
import './Advisors.scss'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import SampleAdv from './assets/divAdvisors.png'
function Advisors() {
    const data = [
        {
            name: "Prasanna Lohar",
            img: SampleAdv,
            desc: "Prasanna Lohar has over 23 years of experience and currently serves as the CEO of Block Stack and the Chief Innovation Officer of DCB Bank. He is also a co-chair of the Blockchain Consortium with IAMAI and FICCI, and has been recognized as a Top 50 CIO, Top 50 Influential Leader, and a Top 20 BFSI Leadership."
        }, {
            name: "PrasannaLohar2",
            img: SampleAdv,
            desc: "222222Prasanna Lohar has over 23 years of experience and currently serves as the CEO of Block Stack and the Chief Innovation Officer of DCB Bank. He is also a co-chair of the Blockchain Consortium with IAMAI and FICCI, and has been recognized as a Top 50 CIO, Top 50 Influential Leader, and a Top 20 BFSI Leadership."

        }
    ]
    const [selectedAdv, setselectedAdv] = useState("Prasanna Lohar")
    return (
        <div className='Advisors'>
            <div className="Advisors1" style={{ backgroundImage: `url(${data.find(item => item.name === selectedAdv).img})` }}>
                <div className="Advisors1left">
                    <div className="thumbnailWrap">
                        {
                            data.map((x) => (
                                <img src={x.img} alt={x.name} className='advthumbnail' onClick={() => {
                                    setselectedAdv(x.name)
                                }} />
                            ))
                        }

                    </div>
                    <div className="advtextwrap">
                        <p className="headingAdvisors">
                            {data.find(item => item.name === selectedAdv).name}
                        </p>
                        <p className="contentAdvisors">
                            {data.find(item => item.name === selectedAdv).desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advisors