import './AsideProfile.css'
import { Link } from 'react-router-dom';
 
export const AsideProfile = ({user}) => {
    return (
        <aside className="ps-5">
            <div className="infoAsideProfile">
                <h2>{user.firstName + " "+ user.lastName}</h2>
                <img src="https://firebasestorage.googleapis.com/v0/b/libreria-melquiades-6e32c.appspot.com/o/avatar-dogecoin.jpg?alt=media&token=0f7c0c51-be93-4ebc-b274-2323427c46c7" alt="Imagen de perfil" />
                <Link to="/plataforma/perfil" className="text-decoration-none perfil">
                    <p >Tu perfil</p>
                </Link>
                
            </div>
            <Link to="/ayuda" className="text-decoration-none">
                <div className="help"><p >Centro de ayuda</p> </div>
            </Link>
            
        </aside>
    );
}

