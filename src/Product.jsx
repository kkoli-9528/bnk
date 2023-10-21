import React from 'react'
import emptyimg from "./assets/feature2.svg.png";
import './Product.scss'
function Product() {
    return (
        <div className='product'>
            <div className="product1">
                <div className="product1left">
                    <div className="contentwrapproductleft">
                        <p className="headingproduct">
                            Lending Ecosystem Enabler
                        </p>
                        <p className="contentproduct">
                            End-to-end platform for lending journey
                        </p>
                        <button className='prodbuttonx'>Get Started</button>

                    </div>
                </div>
                <div className="product1right">
                    <img src={emptyimg} alt="transbnk logo" className="product1rightimg" />
                </div>
            </div>
            <div className="product2">
                <div className="product2left">
                    <div className="contentwrapproductleft">
                        <p className="heading2product">
                            Credit evaluation and monitoring to maintain a healthy portfolio and minimize NPA.

                        </p>
                        <p className="content2product">
                            AI/ML and API stack for customer on-boarding, credit evaluation, digital agreement execution, bank account opening, escrow management, repayment receipts and reconciliation.

                        </p>
                    </div>
                </div>
                <div className="product2right">
                    <img src={emptyimg} alt="transbnk logo" className="product2rightimg" />
                </div>
            </div>
            <div className="product3">
                <div className="product3left">
                    <div className="contentwrapproductleft">
                        <p className="heading3product">
                            Our Lending Ecosystem Enabler offers the following services.
                        </p>
                        <ul>
                            <ol>
                                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4648 2.01664L6.71392 14.7675L0.498047 8.55164L2.03813 7.01156L6.71392 11.6873L17.9247 0.476562L19.4648 2.01664Z" fill="#1D6AE5" />
                                </svg>
                                &nbsp;
                                Document Generation, Negotiation & Execution Platform
                            </ol>
                            <ol>
                                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4648 2.01664L6.71392 14.7675L0.498047 8.55164L2.03813 7.01156L6.71392 11.6873L17.9247 0.476562L19.4648 2.01664Z" fill="#1D6AE5" />
                                </svg>
                                &nbsp;
                                Escrow Account Opening Platform
                            </ol>
                            <ol>
                                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4648 2.01664L6.71392 14.7675L0.498047 8.55164L2.03813 7.01156L6.71392 11.6873L17.9247 0.476562L19.4648 2.01664Z" fill="#1D6AE5" />
                                </svg>
                                &nbsp;
                                POA Account Opening Platform
                            </ol>
                            <ol>
                                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4648 2.01664L6.71392 14.7675L0.498047 8.55164L2.03813 7.01156L6.71392 11.6873L17.9247 0.476562L19.4648 2.01664Z" fill="#1D6AE5" />
                                </svg>
                                &nbsp;
                                Reconciliation Hub
                            </ol>
                        </ul>
                    </div>
                </div>
                <div className="product3right">
                    <img src={emptyimg} alt="transbnk logo" className="product3rightimg" />
                </div>
            </div>


            <div className="product4">
                <div className="prod4item">
                    <svg width="60" height="61" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1252_9675)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8068 13.7988V32.0968C12.8068 42.4221 21.0409 50.7869 31.3661 50.7869V55.3614C18.5576 55.3614 8.10156 44.9054 8.10156 32.0968V13.7988H12.6761H12.8068Z" fill="#212121" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M50.0573 50.3967V32.0987C50.0573 21.7734 41.6925 13.4086 31.3672 13.4086V8.96484C44.1758 8.96484 54.6318 19.2901 54.6318 32.0987V50.3967H50.0573Z" fill="#212121" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4553 10.5312L19.8657 20.0723L16.7289 23.2091L10.4553 17.0662L4.18172 23.2091L1.04492 20.0723L10.4553 10.5312Z" fill="#212121" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M52.2815 53.6662L42.8711 44.1251L46.0079 40.9883L52.2815 47.1312L58.5551 40.9883L61.6919 44.1251L52.2815 53.6662Z" fill="#212121" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.1465 42.5546V21.6426H33.5903V42.5546H29.1465Z" fill="#212121" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9121 29.877H41.8241V34.3208H20.9121V29.877Z" fill="#212121" />
                        </g>
                    </svg>
                    <h3 className="p4heading">Customer Onboarding & Credit Evaluation</h3>
                    <p className="p4content">Real-time customer verification using government sources and APIs, such as identity and GSTIN to verify volume and details.</p>
                </div>
                <div className="prod4item">
                    <svg width="60" height="61" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5858 22.9489C16.5858 16.6753 21.6831 11.4473 27.9567 11.4473H35.7987C42.0723 11.4473 47.3003 16.6753 47.3003 22.9489H42.7258C42.7258 19.1586 39.589 16.0218 35.7987 16.0218H27.9567C26.1195 16.0218 24.3576 16.7516 23.0585 18.0507C21.7594 19.3497 21.0296 21.1117 21.0296 22.9489C21.0296 24.786 21.7594 26.548 23.0585 27.8471C24.3576 29.1461 26.1195 29.876 27.9567 29.876H35.7987C38.8144 29.876 41.7066 31.074 43.8391 33.2064C45.9716 35.3389 47.1696 38.2311 47.1696 41.2468C47.1696 44.2626 45.9716 47.1548 43.8391 49.2873C41.7066 51.4197 38.8144 52.6177 35.7987 52.6177H27.9567C24.9288 52.6179 22.0229 51.4241 19.8697 49.2953C17.7164 47.1666 16.4895 44.2746 16.4551 41.2468H21.1603C21.1603 45.0371 24.1664 48.1739 27.9567 48.1739H35.7987C37.6185 48.1739 39.3638 47.451 40.6507 46.1642C41.9375 44.8774 42.6604 43.132 42.6604 41.3122C42.6604 39.4923 41.9375 37.747 40.6507 36.4602C39.3638 35.1734 37.6185 34.4504 35.7987 34.4504H27.9567C21.6831 34.4504 16.4551 29.2225 16.4551 22.9489H16.5858Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6562 58.237V5.95703H34.1V58.237H29.6562Z" fill="#212121" />
                    </svg>


                    <h3 className="p4heading">
                        Document Generation & Negotiation
                    </h3>
                    <p className="p4content">
                        TransBnk AI/ML flows can generate execution document on the go, which can then be negotiated between the parties on the platform itself.
                    </p>
                </div>
                <div className="prod4item">
                    <svg width="60" height="61" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M47.0706 10.5315H15.7026C15.3105 10.5315 15.0491 10.7929 15.0491 11.185V53.009C15.0491 53.4011 15.3105 53.6625 15.7026 53.6625H47.0706C47.4627 53.6625 47.7241 53.4011 47.7241 53.009V11.185C47.7241 10.7929 47.4627 10.5315 47.0706 10.5315ZM15.7026 5.95703C14.3161 5.95703 12.9863 6.50784 12.0059 7.48828C11.0254 8.46872 10.4746 9.79848 10.4746 11.185V53.009C10.4746 54.3956 11.0254 55.7253 12.0059 56.7058C12.9863 57.6862 14.3161 58.237 15.7026 58.237H47.0706C48.4571 58.237 49.7869 57.6862 50.7673 56.7058C51.7478 55.7253 52.2986 54.3956 52.2986 53.009V11.185C52.2986 9.79848 51.7478 8.46872 50.7673 7.48828C49.7869 6.50784 48.4571 5.95703 47.0706 5.95703H15.7026Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.3793 23.9962H13.4824V19.291H48.3793V23.9962Z" fill="#212121" />
                        <path d="M28.7734 27.7852H34.0014V33.0132H28.7734V27.7852Z" fill="#212121" />
                        <path d="M20.9316 27.7852H26.1596V33.0132H20.9316V27.7852Z" fill="#212121" />
                        <path d="M36.6152 27.7852H41.8432V33.0132H36.6152V27.7852Z" fill="#212121" />
                        <path d="M28.7734 36.4141H34.0014V41.6421H28.7734V36.4141Z" fill="#212121" />
                        <path d="M20.9316 36.4141H26.1596V41.6421H20.9316V36.4141Z" fill="#212121" />
                        <path d="M36.6152 36.4141H41.8432V41.6421H36.6152V36.4141Z" fill="#212121" />
                        <path d="M36.6152 45.168H41.8432V50.396H36.6152V45.168Z" fill="#212121" />
                        <path d="M20.9316 45.168H29.6885V50.396H20.9316V45.168Z" fill="#212121" />
                        <path d="M29.6875 45.168H34.0006V50.396H29.6875V45.168Z" fill="#212121" />
                    </svg>


                    <h3 className="p4heading">
                        Agreement Execution
                    </h3>
                    <p className="p4content">
                        TransBnk platform offers digital document execution with e-stamp and Aadhaar sign integration for real-time processing.     </p>
                </div>
                <div className="prod4item">
                    <svg width="60" height="61" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.8803 42.8008L52.932 46.7218V16.0073C52.932 15.6152 52.6706 15.3538 52.2785 15.3538H10.4546C10.0625 15.3538 9.80106 15.6152 9.80106 16.0073V42.1473C9.80106 42.5394 10.0625 42.8008 10.4546 42.8008H48.8803ZM57.5065 57.8313L47.0505 47.3753H10.4546C9.06801 47.3753 7.73825 46.8245 6.75781 45.844C5.77737 44.8636 5.22656 43.5338 5.22656 42.1473V16.0073C5.22656 14.6207 5.77737 13.291 6.75781 12.3105C7.73825 11.3301 9.06801 10.7793 10.4546 10.7793H52.2785C53.6651 10.7793 54.9948 11.3301 55.9753 12.3105C56.9557 13.291 57.5065 14.6207 57.5065 16.0073V57.8313Z" fill="#212121" />
                        <path d="M18.2988 31.6909H23.5268V26.4629H18.2988V31.6909Z" fill="#212121" />
                        <path d="M28.7559 31.6909H33.9839V26.4629H28.7559V31.6909Z" fill="#212121" />
                        <path d="M39.2109 31.6909H44.4389V26.4629H39.2109V31.6909Z" fill="#212121" />
                    </svg>


                    <h3 className="p4heading">
                        Escrow Account opening
                    </h3>
                    <p className="p4content">
                        TransBnk is integrating its platform with various partner banks to facilitate a digital process for the opening of Escrow accounts.
                    </p>
                </div>
                <div className="prod4item">
                    <svg width="60" height="61" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1992 11.8251V2.9375H23.643V11.8251H19.1992Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1992 39.5357V30.3867H23.643V39.5357H19.1992Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.7266 37.9657V29.0781H47.3011V37.9657H42.7266Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.7266 60.4454V50.9043H47.3011V60.4454H42.7266Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.8871 43.3238L30.1758 38.88L32.5284 34.959L40.109 39.4028L37.8871 43.3238Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M57.3635 54.5655L49.5215 49.7296L51.7434 45.8086L59.7161 50.6445L57.3635 54.5655Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M52.0051 43.3238L59.7164 38.88L57.3638 34.959L49.7832 39.4028L52.0051 43.3238Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5284 54.5656L40.8932 49.8605L38.5406 45.9395L30.1758 50.6446L32.5284 54.5656Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8311 23.9805L38.4117 28.4243L36.0591 32.3453L28.4785 27.9015L30.8311 23.9805Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65159 10.127L14.2322 14.4401L12.0103 18.361L4.42969 14.1787L6.65159 10.2577V10.127Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0103 23.9805L4.42969 28.4243L6.78229 32.3453L14.3629 27.9015L12.0103 23.9805Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.1875 10.127L28.2148 14.4401L30.306 18.361L38.4094 14.048L36.1875 10.127Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4216 29.7335C23.6747 29.7335 25.8356 28.8384 27.4288 27.2452C29.022 25.652 29.917 23.4911 29.917 21.238C29.917 18.9848 29.022 16.824 27.4288 15.2307C25.8356 13.6375 23.6747 12.7425 21.4216 12.7425C19.1684 12.7425 17.0075 13.6375 15.4143 15.2307C13.8211 16.824 12.9261 18.9848 12.9261 21.238C12.9261 23.4911 13.8211 25.652 15.4143 27.2452C17.0075 28.8384 19.1684 29.7335 21.4216 29.7335ZM21.4216 34.308C24.8879 34.308 28.2123 32.9309 30.6634 30.4798C33.1145 28.0287 34.4915 24.7043 34.4915 21.238C34.4915 17.7716 33.1145 14.4472 30.6634 11.9961C28.2123 9.54498 24.8879 8.16797 21.4216 8.16797C17.9552 8.16797 14.6308 9.54498 12.1797 11.9961C9.72858 14.4472 8.35156 17.7716 8.35156 21.238C8.35156 24.7043 9.72858 28.0287 12.1797 30.4798C14.6308 32.9309 17.9552 34.308 21.4216 34.308Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44.9482 50.6441C46.5081 50.6441 48.004 50.0245 49.107 48.9215C50.21 47.8185 50.8297 46.3225 50.8297 44.7626C50.8297 43.2028 50.21 41.7068 49.107 40.6038C48.004 39.5008 46.5081 38.8811 44.9482 38.8811C43.3883 38.8811 41.8923 39.5008 40.7893 40.6038C39.6863 41.7068 39.0667 43.2028 39.0667 44.7626C39.0667 46.3225 39.6863 47.8185 40.7893 48.9215C41.8923 50.0245 43.3883 50.6441 44.9482 50.6441ZM44.9482 55.2186C47.7213 55.2186 50.3808 54.117 52.3417 52.1561C54.3026 50.1953 55.4042 47.5357 55.4042 44.7626C55.4042 41.9895 54.3026 39.33 52.3417 37.3691C50.3808 35.4083 47.7213 34.3066 44.9482 34.3066C42.1751 34.3066 39.5156 35.4083 37.5547 37.3691C35.5938 39.33 34.4922 41.9895 34.4922 44.7626C34.4922 47.5357 35.5938 50.1953 37.5547 52.1561C39.5156 54.117 42.1751 55.2186 44.9482 55.2186Z" fill="#212121" />
                    </svg>


                    <h3 className="p4heading">
                        Repayment
                    </h3>
                    <p className="p4content">
                        We provide solutions around e-NACH, BBPS & UPI for recovering the EMIs.    </p>
                </div>
                <div className="prod4item">
                    <svg width="60" height="61" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.3879 23.5863C32.3505 23.7208 33.3308 23.6472 34.2625 23.3706C35.1943 23.0939 36.0559 22.6207 36.7891 21.9827C37.5224 21.3447 38.1103 20.5569 38.5132 19.6724C38.9161 18.7879 39.1245 17.8272 39.1245 16.8553C39.1245 15.8833 38.9161 14.9227 38.5132 14.0381C38.1103 13.1536 37.5224 12.3658 36.7891 11.7278C36.0559 11.0899 35.1943 10.6166 34.2625 10.34C33.3308 10.0633 32.3505 9.98976 31.3879 10.1242C29.7641 10.3511 28.2769 11.1573 27.2007 12.3943C26.1245 13.6313 25.5318 15.2156 25.5318 16.8553C25.5318 18.4949 26.1245 20.0793 27.2007 21.3163C28.2769 22.5533 29.7641 23.3595 31.3879 23.5863ZM31.3879 28.1608C32.9747 28.3317 34.5797 28.1666 36.0984 27.6763C37.6172 27.186 39.0158 26.3815 40.2031 25.3152C41.3905 24.2488 42.3401 22.9444 42.9902 21.4868C43.6402 20.0293 43.9762 18.4512 43.9762 16.8553C43.9762 15.2593 43.6402 13.6813 42.9902 12.2237C42.3401 10.7662 41.3905 9.46177 40.2031 8.39538C39.0158 7.329 37.6172 6.5245 36.0984 6.03423C34.5797 5.54395 32.9747 5.37887 31.3879 5.54973C28.5991 5.85002 26.0196 7.17052 24.1454 9.25741C22.2711 11.3443 21.2344 14.0503 21.2344 16.8553C21.2344 19.6602 22.2711 22.3662 24.1454 24.4531C26.0196 26.54 28.5991 27.8605 31.3879 28.1608Z" fill="#212121" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.3874 36.2635C22.4998 36.2635 15.0499 42.4064 13.0894 50.6405H49.6854C47.7249 42.4064 40.275 36.2635 31.3874 36.2635ZM54.5213 50.6405C53.4522 44.843 50.2455 39.6582 45.5359 36.1123C40.8262 32.5665 34.957 30.918 29.0899 31.4932C23.2228 32.0684 17.7855 34.8254 13.8542 39.2184C9.92289 43.6114 7.78418 49.3203 7.86139 55.215H54.9134C54.9321 53.6811 54.8008 52.1489 54.5213 50.6405Z" fill="#212121" />
                    </svg>


                    <h3 className="p4heading">
                        Reconciliation Hub
                    </h3>
                    <p className="p4content">
                        Our real-time integration solutions allows for real-time information of client payments and reconciliation
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Product