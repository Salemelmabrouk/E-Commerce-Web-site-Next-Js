import   Container   from "../components/container";
import CartClient from "./CartClient";

const Card = () => {
    return ( 
        <div className="pt-8">
            <Container  >
                <CartClient />

            </Container>
            </div>
     );
}
 
export default Card;
