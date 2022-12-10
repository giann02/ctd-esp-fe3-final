import React from "react";
import { useState } from "react";


const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones
    const [userData, setUserData] = useState({
        "name":"",
        "email":""
    })
    const handleChange = (e) => {
        setUserData({...userData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)
        let nameValidation = /^.{5,}$/.test(userData.name)
        let messagges = document.querySelectorAll('p')
        messagges.forEach(msg => {
            msg.remove()
        })
        let form = document.querySelector('form')
        
        if (emailValidation === false || nameValidation === false) {
            let badError = document.createElement('p')
            badError.innerHTML = "Please verify your information again."
            form.after(badError)

        } else {
            let messagge = document.createElement('p')
            messagge.innerHTML = "Thanks, " + userData.name + " we will contact you via email as soon as possible."
            form.after(messagge)
        }
    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input data-testId="name" type="text" name="name" id="name" placeholder="name" onChange={handleChange} />
                <input data-testId="email" type="email" name="email" id="email" placeholder="email" onChange={handleChange} />
                <input data-testId="click" type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default Form;
