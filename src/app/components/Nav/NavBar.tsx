import Link from "next/link";
import Container from "../container";
import Image from "next/image";
import  eshop  from "@/../public/img/e-shop.png"

const NavBar = () => {
    return (
      <nav className="sticky
      top-0
      bg-slate-200
      z-30
      shadow-sm">
     <div className="py-2 border-b-[1px]">
        <Container>
            <div className="flex items-center justify-between   md:gap-0">
                <Link href="/"> <Image src={eshop} height={35} width={35} alt="picture"></Image></Link>
                <div className="hidden md:block ">Search</div>
                <div className="flex items-center gap-8 md:gap-12">
                    <div>cartCount</div>
                    <div>userMenu</div>
                </div>
            </div>


        </Container>
     </div>
      </nav>
    );
  };
  
  export default NavBar;
  