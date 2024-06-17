import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0D222D] text-white py-10 overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 ml-10">
                <div>
                    <svg width="105" height="28" viewBox="0 0 105 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.79521 8.81065C4.89978 8.81065 5.79521 9.70608 5.79521 10.8106V27.6933H1.06421V8.81065H3.79521Z" fill="white" />
                        <path d="M21.8576 8.53797C24.088 8.53797 25.8902 9.25374 27.2645 10.6853C28.6387 12.0941 29.3259 14.071 29.3259 16.6159V27.6933H24.5949V17.2635C24.5949 15.7638 24.2231 14.6163 23.4797 13.821C22.7362 13.003 21.7225 12.594 20.4383 12.594C19.1317 12.594 18.0954 13.003 17.3294 13.821C16.586 14.6163 16.2142 15.7638 16.2142 17.2635V27.6933H11.4832V8.81065H14.2142C15.3188 8.81065 16.2142 9.70608 16.2142 10.8106V11.1625C16.845 10.3444 17.6448 9.7082 18.6135 9.25374C19.6048 8.77656 20.6861 8.53797 21.8576 8.53797Z" fill="white" />
                        <path d="M42.6447 23.2964L47.3757 8.81065H50.6924C51.5266 8.81065 52.1063 9.64079 51.819 10.424L45.4833 27.6933H39.7385L32.8448 8.81065H36.463C37.3283 8.81065 38.0955 9.36715 38.3641 10.1897L42.6447 23.2964Z" fill="white" />
                        <path d="M73.4852 17.843C73.4852 18.5246 73.4401 19.1382 73.35 19.6835H59.6639C59.7766 21.0469 60.2497 22.1148 61.0832 22.8874C61.9168 23.66 62.9418 24.0463 64.1584 24.0463C65.9156 24.0463 67.1659 23.2851 67.9094 21.7626H71.001C72.0043 21.7626 72.725 22.738 72.2305 23.611C71.6565 24.6241 70.8808 25.5077 69.9032 26.2617C68.3712 27.4206 66.4901 28 64.2597 28C62.4575 28 60.8354 27.6024 59.3936 26.8071C57.9743 25.9891 56.8591 24.8416 56.0481 23.3646C55.2596 21.8876 54.8653 20.1834 54.8653 18.252C54.8653 16.2978 55.2596 14.5822 56.0481 13.1053C56.8366 11.6283 57.9405 10.4921 59.3598 9.69684C60.7791 8.90154 62.4124 8.50389 64.2597 8.50389C66.0395 8.50389 67.6278 8.89018 69.0245 9.66275C70.4438 10.4353 71.5365 11.5374 72.3024 12.9689C73.0909 14.3777 73.4852 16.0024 73.4852 17.843ZM68.5852 16.4796C68.5627 15.2526 68.1234 14.2755 67.2673 13.5483C66.4112 12.7985 65.3636 12.4236 64.1246 12.4236C62.9531 12.4236 61.9618 12.7871 61.1508 13.5143C60.3623 14.2187 59.8779 15.2071 59.6977 16.4796H68.5852Z" fill="white" />
                        <path d="M82.2777 23.7736H88.6245C89.7291 23.7736 90.6245 24.669 90.6245 25.7736V27.6933H76.9046V23.8418L85.0825 12.7303H76.9384V8.81065H88.5231C89.6277 8.81065 90.5231 9.70608 90.5231 10.8106V12.6622L82.2777 23.7736Z" fill="white" />
                        <path d="M100.81 12.7303V21.8649C100.81 22.5011 100.956 22.9669 101.249 23.2623C101.564 23.535 102.082 23.6714 102.803 23.6714H103C104.104 23.6714 105 24.5668 105 25.6713V27.6933H102.026C98.0386 27.6933 96.0448 25.7391 96.0448 21.8308V12.7303H93.8145V8.81065H96.0448V4.14111H98.8096C99.9142 4.14111 100.81 5.03654 100.81 6.14111V8.81065H103C104.104 8.81065 105 9.70608 105 10.8106V12.7303H100.81Z" fill="white" />
                        <ellipse cx="3.16808" cy="3.19539" rx="3.16808" ry="3.19539" fill="#F27240" />
                    </svg>

                    <p className="mb-4 mt-3 text-xl">Safest way for Invest Your <span className="text-orange-500">Money</span></p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-2 px-3 rounded-3xl bg-gray-800 text-white focus:outline-none"
                        />
                        <button className="bg-[#061822] p-2 rounded-3xl ml-72 absolute text-md">Subscribe</button>
                    </div>
                </div>
                <div className="ml-48">
                    <h3 className="text-xl font-semibold mb-4">Contact</h3>
                    <ul>
                        <li className="mb-2"><a href="mailto:hello@invezt.com" className="hover:underline">Email Us</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Company</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">How it Work</a></li>
                    </ul>
                </div>
                <div className="ml-36">
                    <h3 className="text-xl font-semibold mb-4">Support</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">FAQs</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Consult</a></li>
                    </ul>
                </div>
                <div className="ml-24">
                    <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                    <ul>
                        <li className="mb-2"><a href="mailto:hello@invezt.com" className="hover:underline">hello@invezt.com</a></li>
                        <li className="mb-2"><a href="tel:+0123456789" className="hover:underline">+0123 456 789</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-10 pt-4">
                <div className="container mx-auto flex justify-between ml-5">
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-300">Privacy</a>
                        <a href="#" className="hover:text-gray-300">Services</a>
                        <a href="#" className="hover:text-gray-300">Terms and Conditions</a>
                    </div>
                    <p className="mr-20">©Copyright 2022</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
