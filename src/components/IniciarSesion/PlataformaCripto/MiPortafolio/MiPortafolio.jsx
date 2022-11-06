import './MiPortafolio.css'
//import { useContext } from 'react';
//import { CoinsContext } from '../../../../context/CoinsContext';
import { Link} from 'react-router-dom';
export const MiPortafolio = ({wallet, token, coins}) => {

    console.log("token",token)

    //const {coins} = useContext(CoinsContext)
    console.log("Estas son las coins",coins)
    const criptos = [wallet.btcBalance,
        wallet.ethBalance,
        wallet.usdtBalance,
        wallet.bnbBalance,
        wallet.usdcBalance,
        wallet.busdBalance, 
        wallet.adaBalance]
    
    
    return (
        <div className="d-flex">
            <div className="portfolioContainer">
                <div className="titlesPortfolio">
                    <div> </div>
                    <div>Precio</div>
                    
                </div>
                            
                {coins.map((coin)=>(
                    <div className="criptosPortfolio" key={coin.id}>
                        <div className="d-flex align-items-center">
                            <img className="criptoCards" src={coin.image} alt="cripto" />
                            <p>{coin.name}</p>
                        </div>
                        <div>{coin.current_price}</div>
                        <Link to={`/plataforma/calculadora/${coin.id}`}>
                            <button className="btn btn-dark botonComprar">Comprar</button>
                        </Link>
                        
                    </div>
                ))}

            
            
            </div>
            <div className="portfolioContainerDos">
                <div className="titlesPortfolio">
                    <div>Unidades</div>
                </div>
            
                {criptos.map((cripto, index)=>(<div key={index}>
                    <div className="criptosPortfolio" >
                        <div>{cripto}</div>
                        
                    </div>
                    
                </div>))}
            
            </div>
                <div className="portfolioContainerDos">
                <div className="titlesPortfolio">
                    <div>Valor</div>
                </div>

                    <div className="criptosPortfolio">
                       
                        <div>{((criptos[0])*coins[0].current_price).toFixed(2)}</div>
                    </div>
                    <div className="criptosPortfolio">
                        <div>{((criptos[1])*coins[1].current_price).toFixed(2)}</div>
                    </div>
                    <div className="criptosPortfolio">
                        <div>{((criptos[2])*coins[2].current_price).toFixed(2)}</div>
                    </div>
                    <div className="criptosPortfolio">
                        <div>{((criptos[3])*coins[3].current_price).toFixed(2)}</div>
                    </div>
                    <div className="criptosPortfolio">
                        <div>{((criptos[4])*coins[4].current_price).toFixed(2)}</div>
                    </div>
                    <div className="criptosPortfolio">
                        <div>{((criptos[5])*coins[5].current_price).toFixed(2)}</div>
                    </div>
                    <div className="criptosPortfolio">
                        <div>{((criptos[6])*coins[6].current_price).toFixed(2)}</div>
                    </div>
                        
                    
               
            </div>

        </div>
        
    );
}

