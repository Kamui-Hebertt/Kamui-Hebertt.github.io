import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';
import axios from "axios";




function Contact () {
   const { loading, setloading, english } = useContext(providerFile);

   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

   useEffect(
    () => {
      setloading(true)
      let timer1 = setTimeout(() => setloading(false), 2000);
      return () => {
        clearTimeout(timer1);
      };
    },
    []
  );



  const { name, email, message } = formData;

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/send-email", formData)
      .then((response) => {
        console.log(response);
        alert("Email sent successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send email. Please try again later.");
      });
  };
   


        return(
            <div  >
                <SideBar />
          {loading ? <Loading /> : (
          <>
              <div className="form">
             <h3>{english ? "How to Contact me" : "Como me contatar"}</h3>
                  <form className="formMain" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="nameL">{english ?"Name:" : "Nome:"}</label>
                      <input
                        className="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        required />
                    </div>
                    <div>
                      <label className="emailL" htmlFor="email">Email:</label>
                      <input
                        className="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        required />
                    </div>
                    <div>
                      <div className="textfield">
                      <label className="messageL" htmlFor="message">{english ?"Message:" : "Mensagem:"}</label>
                      <textarea
                        className="textMessage"
                        name="message"
                        value={message}
                        onChange={handleInputChange}
                        required />
                    </div>
                    </div>
                    <button type="submit" className="sendBtn">{english ?"Send" : "Enviar"}</button>
                  </form>
                </div>
                <main className="contact">
                <div className="textC">
                  
                  <p>Email: heberttafetteira.com@gmail.com</p>
                  <p>{english ? "Phone Number/Whatsapp: +55 2199215-7839" : "Telefone/Whatsapp: +55 2199215-7839"}</p>

                   <a href="https://www.linkedin.com/in/hebertt-nascimento/" target="_blank" rel="noreferrer"> Linkedin </a>
                </div>


              </main>
                
                
                </>
            ) }  
           {loading ? null : (<Footer />) } 
            
            </div>
        )
    }

export default Contact;