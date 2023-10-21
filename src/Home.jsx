import React, { useState } from "react";
import "./Home.scss";
import transbnklogo from "./assets/TransBnk Logo TM (4).png";
import emptyimg from "./assets/feature2.svg.png";
import Lending from "./assets/Marketing.svg";
import techstatsdata from "./techstatdata";
import LendingEcosystem from "./LendingEcosytem";
import SupplyChain from "./SupplyChain";
import CapitalMarket from "./CapitalMarket";
import CustodialRecon from "./CustodialRecon";
import MarketplaceSolution from "./MarketplaceSolution";
import Home5 from "./Home5";
import "./Home.scss"; // Import CSS file

const Home = () => {
    const [techstatselected, settechstatselected] = useState("Lending Ecosystem")

    const TechstatsContent = (props) => {
        if (techstatselected === 'Lending Ecosystem') {
            return (
                <LendingEcosystem />)
        }
        else if (techstatselected === 'Supply Chain') {
            return (
                <SupplyChain />)
        }
        else if (techstatselected === 'Capital Market') {
            return (
                <CapitalMarket />)
        }
        else if (techstatselected === 'Custodial Recon') {
            return (
                <CustodialRecon />)
        } else if (techstatselected === 'Marketplace Solution') {
            return (
                <MarketplaceSolution />)
        }
        else {
            return (<h1>Under Maintenance</h1>)
        }
    }

    const Techstatsitem = (props) => {
        return (
            <div className=
                {techstatselected === props.title ? "techstatsitem"
                    : ["techstatsitem techstatsitemselected"]} onClick={() => settechstatselected(props.title)}>
                {props.image}
                <h1 className={techstatselected === props.title ? "techstatsitemtitleselected"
                    : "techstatsitemtitle"}>{props.title}</h1>
                {techstatselected === props.title ?
                    <hr className="lineselected" /> : <hr />}

            </div>
        );
    }

    return (
        <div className="centered-content"> {/* Apply centering to the parent container */}
            <div className="herobanner">
                <img src={transbnklogo} alt="transbnk logo" className="herobannerimg" />
                <h2 style={{ fontSize: "1.5rem", marginTop: "1rem" }}>Transaction Banking Simplified!</h2>
            </div>

            <h1>Welcome to Our BNPL MSME Loan Platform</h1>

            <h2>Unlock Growth Opportunities for Your Business</h2>

            <p>
                Are you a small or medium-sized business looking for a flexible financing solution? Look no further! Our BNPL platform offers tailor-made MSME loans that empower your business to thrive. We understand that managing your finances is essential for growth. That's why we're here to support you with convenient and hassle-free lending options.
            </p>

            <div className="home3">
                <h4 className="h3heading"> Unlocking the power of fintech,<br /> one solution at a time.</h4>
                <p className="h3con">TransBnk uses cutting-edge technology such as API platforms, AI/ML automation, and blockchain to digitize transactions, increase transparency, trust, and independence in the transaction ecosystem.</p>

                <div className="techstats">
                    {techstatsdata.map((x) =>
                        <Techstatsitem title={x.title}
                            image={x.image}
                        />
                    )}
                    <hr className="lineplain" />
                </div>
                <TechstatsContent />

            </div>

            <h4 className="headingp5">Leading the way with our innovative <br />features, designed to empower you.</h4>
            <Home5 />
        </div>
    );
};

export default Home;
