import './MainCriptos.css'
import { useContext} from 'react';
import { CoinsContext } from '../../context/CoinsContext';
export const MainCriptos = () => {

    const {coins} =useContext(CoinsContext)

    const bitcoin = coins.filter((coin) => coin.name.includes("Bitcoin"))
    const ethereum = coins.filter((coin) => coin.name.includes("Ethereum"))
    const cardano = coins.filter((coin) => coin.name.includes("Cardano"))
    

    return (
        <div className="d-flex flex-row justify-content-around flex-wrap">
                    <div className="d-flex flex-column justify-content-center align-items-center py-4 criptoCard">
                     {bitcoin.map((bitcoin)=>(
                        <div className="d-flex" key={bitcoin.id}>  
                            <img src={bitcoin.image} alt="bitcoin" />
                            <div className="d-flex flex-column  justify-content-center ">
                                <h3>{bitcoin.name}</h3>
                                <p>{bitcoin.current_price} USD</p>
                            </div>
                        </div>
                            ))}
                       
                     
                        <div className="criptoGraphic">
                            <img  src="https://firebasestorage.googleapis.com/v0/b/libreria-melquiades-6e32c.appspot.com/o/grafico-cripto.jpg?alt=media&token=be8842be-2737-480d-84d5-e0b3148c1b11" alt="grafico cripto" />
                        </div>
                        
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center py-4 criptoCard">
                    {ethereum.map((ethereum)=>(
                        <div className="d-flex" key={ethereum.id}>
                                <img src={ethereum.image} alt="bitcoin" />
                                <div className="d-flex flex-column  justify-content-center ">
                                    <h3>{ethereum.name}</h3>
                                    <p>{ethereum.current_price.toFixed(2)}  USD</p>
                                </div>
                        </div>
                        ))}
                      
                        <div className="criptoGraphic">
                            <img  src="https://firebasestorage.googleapis.com/v0/b/libreria-melquiades-6e32c.appspot.com/o/grafico-cripto.jpg?alt=media&token=be8842be-2737-480d-84d5-e0b3148c1b11" alt="grafico cripto" />
                        </div>
                        
                    </div>
                    
                    <div className="d-flex flex-column justify-content-center align-items-center py-4 criptoCard">
                        {cardano.map((cardano)=>(
                        <div className="d-flex" key={cardano.id}>
                                <img src={cardano.image} alt="bitcoin" />
                                <div className="d-flex flex-column  justify-content-center ">
                                    <h3>{cardano.name}</h3>
                                    <p>{cardano.current_price.toFixed(5)}  USD</p>
                                </div>
                        </div>
                        ))}
                      
                        <div className="criptoGraphic">
                            <img  src="https://firebasestorage.googleapis.com/v0/b/libreria-melquiades-6e32c.appspot.com/o/grafico-cripto.jpg?alt=media&token=be8842be-2737-480d-84d5-e0b3148c1b11" alt="grafico cripto" />
                        </div>
                        
                    </div>
        </div>
    );
}

