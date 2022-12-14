import './CreaTuCuenta.css'
import { Link } from 'react-router-dom';
import Select from 'react-select'
import { useState } from 'react';
import axios from '../../api/axios';
import RegistroExitoso from '../Perfil/RegistroExitoso';

export const CreaTuCuenta = () => {
    
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstnameError, setFirstnameError] = useState(false);
    const [lastnameError, setLastnameError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, SetPasswordError] = useState(false);
    const [confirmPasswordError, SetConfirmPasswordError] = useState(false);
    const [validation, setValidation] = useState(false);
    const [success, setSuccess] = useState(false);

    const REGISTER_URL= 'auth/register'

  
    const firstnameValidation = () => {
      const regEx = /^[a-zA-Z]{3,15}$/i;
      if(regEx.test(firstname)){
        setFirstnameError(false)
      }else if
        (!regEx.test(firstname) || firstname  === "") {
          
          setFirstnameError(true)
        }
    }

    const lastnameValidation = () => {
      const regEx = /^[a-zA-Z]{3,15}$/i;
      if(regEx.test(lastname)){
        setLastnameError(false)
      }else if
        (!regEx.test(lastname) || lastname  === "") {
          setLastnameError(true)
        }
    }

    const emailValidation = () =>{
      const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if(regEx.test(newUsername)){
        setUsernameError(false)
      }else if
        (!regEx.test(newUsername) || newUsername  === "") {
          setUsernameError(true)
        }
    }

    const passwordValidation = () => {
       const regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;
       if(regEx.test(newPassword)){
        SetPasswordError(false)
      }else if
        (!regEx.test(newPassword) || newPassword  === "") {
          SetPasswordError(true)
        }
    }

    const passwordConfirm = () => {
      if (confirmPassword !== newPassword){
        SetConfirmPasswordError(true)
      } else {
        SetConfirmPasswordError(false)

      }
    }

    const successValidation = () => {
      firstnameValidation();
      lastnameValidation();
      emailValidation();
      passwordValidation();
      passwordConfirm();
      if (firstnameError&&lastnameError&&usernameError&&passwordError&&confirmPasswordError){
        setValidation(false)
        return
      } else {
        setValidation(true)
        
      }

    }

   
    const options = [
        {value: "Per??", label: "Per??"},
        {value: "Argentina", label: "Argentina"},
        {value: "M??xico", label: "M??xico"},
        {value: "Colombia", label: "Colombia"},
        {value: "Ecuador", label: "Ecuador"},
        {value: "Chile", label: "Chile"},

    ]

    const data = {
      firstName:firstname,
      lastName:lastname,
      email:newUsername,
      password:newPassword
      
     }

    const handleJoin = (e) => {
      console.log("validation",validation)
      e.preventDefault();
      successValidation();
      if (validation) {
        
        
        axios.post(REGISTER_URL,data)
  
        .then(res=>{
          console.log(res)
          setSuccess(true)
        })
  
        .catch(()=>{
          console.log("No Server Response")
        })
      } else {
        console.log("Validaciones rechazadas")
      }
      

      
      
      
    }

    return ( <>{success?<RegistroExitoso/>:(
<div className="registerContainer">
        <form  onSubmit={handleJoin} className="formRegisterContainer">
          <h2>Crea una cuenta personal</h2>
          <p className="subtitle">Estas a unos pasos de entrar al mundo cripto.</p>
          <div className="pt-4">
            <p className="titleInput">Pa??s de residencia</p>
            <Select 
                    options={options}
                    
            />
           
          </div>
          <div className="pt-2">
           <p className="titleInput">Nombres</p>
           <input type="text" 
                name="Firstname" 
                placeholder="Nombres"
                value={firstname}
                onChange={(e)=> setFirstname(e.target.value)}
                className={firstnameError?"inputRegisterError":"inputRegister"} />
                
                
            <p className="instructions">Ingresa tus nombres</p>
            {firstnameError&&<div className="messageError"><label>
                Ingresa un nombre con solo letras
            </label></div>}
          </div>
          <div className="pt-2">
           <p className="titleInput">Apellidos</p>
           <input type="text" 
                name="Lastname" 
                placeholder="Apellidos"
                value={lastname}
                onChange={(e)=> setLastname(e.target.value)}
                className={lastnameError?"inputRegisterError":"inputRegister"} />
                
                
            <p className="instructions">Ingresa tus apellidos</p>
            {lastnameError&&<div className="messageError"><label>
                Ingresa un apellido con solo letras
            </label></div>}
          </div>
          <div className="pt-2">
           <p className="titleInput">Correo electr??nico</p>
           <input type="text" 
                name="Username" 
                placeholder="Correo electr??nico"
                value={newUsername}
                onChange={(e)=> setNewUsername(e.target.value)}
                className={usernameError?"inputRegisterError":"inputRegister"} />
                
                
            <p className="instructions">Registrate con el correo que m??s utilizas</p>
            {usernameError&&<div className="messageError"><label>
                Usa el formato nombre@ejemplo.com
            </label></div>}
          </div>

          <div className="pt-2">
           <p className="titleInput">Contrase??a</p>
           <input type="password"
                name="Password" 
                placeholder="Contrase??a"
                value={newPassword}
                onChange={(e)=> setNewPassword(e.target.value)}
                className={passwordError?"inputRegisterError":"inputRegister"}/> 
            <p className="instructions">M??n. 8 caracteres con n??meros y letras</p>   
            {passwordError&&<div className="messageError"><label>
                Digita una contrase??a de 8 caracteres con al menos un <br/>numero y una letra
            </label></div>}
          </div>

          <div className="pt-2">
           <p className="titleInput">Confirma tu contrase??a</p>
           <input type="password"
                name="confirmPassword" 
                value={confirmPassword}
                onChange={(e)=> setConfirmPassword(e.target.value)}
                placeholder="Comfirma tu contrase??a"
                className={confirmPasswordError||passwordError?"inputRegisterError":"inputRegister"}/>   
                {confirmPasswordError&&<div className="messageErrorTwo"><label>
                Las contrase??as deben coincidir
            </label></div>} 
          </div>
            
          <div className="linksRegister">
          
          <button
               
                className="btn btn-success">
          Comenzar
          </button>
          </div>
          
          <Link to="/iniciarsesion" className="loginLink"><p >Ya tengo una cuenta</p></Link> 
        </form>
      </div>




    )}</>)
  }
      
