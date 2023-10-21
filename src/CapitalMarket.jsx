import React, { useState } from "react";
import "./LendingEcosystem.scss";
import transbnklogo from "./assets/TransBnk Logo TM (4).png";
import emptyimg from "./assets/feature2.svg.png";
import Lending from "./assets/Marketing.svg";
import techstatsdata from "./techstatdata";
const CapitalMarket = () => {
    return (
        <div className="LendingEcosystem1">
            <div className="LendingEcosystem1left">
                <div className="LendingEcosystem1leftwrap">
                    <div className="LendingEcosystemItem">
                        <svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.31641 2.00195V30.1588" stroke="#40286B" stroke-width="2.55971" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.7151 7.12109H6.1162C4.92817 7.12109 3.78879 7.59304 2.94873 8.43311C2.10866 9.27317 1.63672 10.4125 1.63672 11.6006C1.63672 12.7886 2.10866 13.928 2.94873 14.768C3.78879 15.6081 4.92817 16.0801 6.1162 16.0801H12.5155C13.7036 16.0801 14.8429 16.552 15.683 17.3921C16.5231 18.2322 16.9949 19.3715 16.9949 20.5596C16.9949 21.7476 16.5231 22.887 15.683 23.727C14.8429 24.5671 13.7036 25.0391 12.5155 25.0391H1.63672" stroke="#40286B" stroke-width="2.55971" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="LendingEcosystemCon">
                            <p className="headingpage4">
                                Lorem ipsum
                            </p>
                            <p className="contentpage4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div className="LendingEcosystemItem">
                        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.77344 2.92188V10.601H9.45255" stroke="#40286B" stroke-width="2.55971" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M29.9291 23.4018V15.7227H22.25" stroke="#40286B" stroke-width="2.55971" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M26.7178 9.32257C26.0686 7.48827 24.9655 5.8483 23.5111 4.55566C22.0568 3.26303 20.2987 2.35988 18.4009 1.93048C16.5031 1.50107 14.5274 1.55942 12.6583 2.10008C10.7892 2.64073 9.08747 3.64607 7.71195 5.02227L1.77344 10.6025M29.9302 15.7219L23.9917 21.302C22.6162 22.6783 20.9144 23.6836 19.0453 24.2242C17.1762 24.7648 15.2005 24.8232 13.3027 24.3938C11.4049 23.9644 9.64683 23.0612 8.1925 21.7687C6.73815 20.476 5.63497 18.836 4.98587 17.0017" stroke="#40286B" stroke-width="2.55971" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <div className="LendingEcosystemCon">
                            <p className="headingpage4">
                                Lorem ipsum
                            </p>
                            <p className="contentpage4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>    <div className="LendingEcosystemItem">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1253_10146)">
                                <path d="M26.9283 19.0371L20.3242 20.299" stroke="#40286B" stroke-width="2.55971" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.4093 11.5337L14.9708 13.0004C14.6274 13.1135 14.2543 13.0963 13.9227 12.9521C13.5911 12.8079 13.3241 12.5467 13.1726 12.2184C13.0093 11.868 12.9886 11.4678 13.115 11.1024C13.2413 10.7369 13.5048 10.435 13.8496 10.2602L18.1487 8.09857C18.5151 7.91378 18.9155 7.80616 19.3252 7.78238C19.7349 7.75861 20.1451 7.81917 20.5305 7.96034L26.8952 10.2884" stroke="#40286B" stroke-width="2.55971" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.67383 19.0475H8.80307L13.2978 24.085C13.5268 24.3502 13.8314 24.5391 14.1707 24.6264C14.51 24.7135 14.868 24.6949 15.1964 24.5729C15.5248 24.4509 15.808 24.2313 16.0082 23.9437C16.2082 23.6561 16.3156 23.3142 16.3157 22.9639V22.1768L16.5397 22.2663C16.8613 22.3948 17.2095 22.4427 17.5537 22.4057C17.898 22.3686 18.228 22.2478 18.5148 22.0536C18.8016 21.8596 19.0364 21.5981 19.1989 21.2922C19.3613 20.9865 19.4463 20.6454 19.4463 20.2992H20.0721C20.4209 20.299 20.7626 20.2017 21.0591 20.0182C21.3558 19.8348 21.5954 19.5725 21.7514 19.2606C21.9073 18.9487 21.9733 18.5996 21.9422 18.2522C21.911 17.905 21.7838 17.5731 21.5747 17.2941L17.5572 12.1465" stroke="#40286B" stroke-width="2.55971" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.503 9.9303L14.0449 9.55274C13.5832 9.21276 13.0248 9.02935 12.4514 9.0293C12.1098 9.02917 11.7713 9.09477 11.4544 9.22255L5.75781 11.5007" stroke="#40286B" stroke-width="2.55971" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1.91602 9.32333H4.47572C4.80071 9.30979 5.11785 9.42554 5.35771 9.64525C5.59756 9.86497 5.74062 10.1707 5.75557 10.4957V18.7085C5.74062 19.0336 5.5976 19.3395 5.35778 19.5593C5.11796 19.7792 4.80084 19.8953 4.47572 19.8821H1.91602" stroke="#40286B" stroke-width="2.55971" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M30.7146 19.8821H28.1549C27.8298 19.8953 27.5126 19.7792 27.2728 19.5593C27.0329 19.3395 26.89 19.0336 26.875 18.7085V10.4957C26.89 10.1707 27.0331 9.86497 27.2729 9.64525C27.5128 9.42554 27.8299 9.30979 28.1549 9.32333H30.7146" stroke="#40286B" stroke-width="2.55971" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.3161 22.1755L15.0645 20.9238" stroke="#40286B" stroke-width="2.55971" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.4472 20.2987L17.5684 18.4199" stroke="#40286B" stroke-width="2.55971" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>

                        <div className="LendingEcosystemCon">
                            <p className="headingpage4">
                                Lorem ipsum
                            </p>
                            <p className="contentpage4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <p className="learnmore1">Learn more &nbsp;&nbsp;<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.38477 9.81641H16.9385" stroke="#40286B" stroke-width="2.22197" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.16211 2.03906L16.939 9.81594L9.16211 17.5928" stroke="#40286B" stroke-width="2.22197" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    </p>     </div>
            </div>
            <div className="LendingEcosystem1right">
                <img src={emptyimg} alt="transbnk logo" className="LendingEcosystem1rightimg" />
            </div>
        </div>
    );
};

export default CapitalMarket;
