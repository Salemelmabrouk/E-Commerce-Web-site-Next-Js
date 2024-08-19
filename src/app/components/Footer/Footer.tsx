import Link from "next/link";
import FooterListe from "./FooterList";
import Container from "../container";
import {MdFacebook} from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (
      <footer className="bg-slate-700  text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                <FooterListe>
                    
                    <h3 className="text-base font-bold mb-2">Shop Categories </h3>
                    <Link href="#">Phones</Link>
                    <Link href="#">Laptop</Link>
                    <Link href="#">Desktop</Link>
                    <Link href="#">Watches</Link>
                    <Link href="#">Tvs</Link> 
                    <Link href="#">Accessories</Link>

                </FooterListe>
                 
                <FooterListe>
                    <h3 className="text-base font-bold mb-2"> Customer Services </h3>
                    <Link href="#">Contact Us</Link>
                    <Link href="#">Shipping Policy</Link>
                    <Link href="#">Returns & Exchanges</Link>
                    <Link href="#">FAQs</Link>
                 

                </FooterListe>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-base font-bold mb-2"> About Us</h3>
                <p className="mb-2">WebsiteName is a Professional WebsiteType Platform. Here we will provide you only interesting content, which you will like very much. We are dedicated to providing you the best of WebsiteType, with a focus on dependability and WebsiteSpeciality. We are working to turn our passion for WebsiteType into a booming online website.
               </p>
               <p>&copy; {new Date().getFullYear()} E-Shop. &nbsp; All rights reserved.</p>
                </div>
             
           
            <FooterListe>
            <h3 className="text-base font-bold mb-2"> Follow Us</h3>
            <div className="flex gap-2">
                <Link href="#"><MdFacebook size={24} /> </Link>
                <Link href="#"><AiFillTwitterCircle size={24} /> </Link>
                <Link href="#"><AiFillYoutube size={24} /> </Link>
                <Link href="#"><AiFillInstagram size={24} /> </Link>
            </div>
                 
                 </FooterListe>
                 </div>
        </Container>

      </footer>
    );
  };
  
  export default Footer;
  