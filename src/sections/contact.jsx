import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';
import { Particles } from '../components/Particles';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isLoading, setisLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('success');
    const [alertMessage, setAlertMessage] = useState('Thank you. I will get back to you as soon as possible');

    const showAlertMessage = (type, message) => {
          setAlertType(type);
          setAlertMessage(message);
          setShowAlert(true);
    };


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Form submitted", formData);
          await   emailjs.send("service_9x86tlj", "template_tqfeodd" , {
            from_name: formData.name,
            to_name: "Varun",
            from_email: formData.email,
            to_email: "vsinghchouhan905@gmail.com",
            message: formData.message,
          } , "i6OHmf07Q3YllJTdG");
         //"i6OHmf07Q3YllJTdG"
          setisLoading(false);
          setAlertType("success");
          setAlertMessage("Thank you. I will get back to you as soon as possible");
          setShowAlert(true);
        } catch (error) {
            setisLoading(false);
            console.log("Error sending email");
            alert("Something went wrong.");
             setAlertMessage("Danger. Something went wrong");
        }
        
        
    }
  return (
    <section className="relative flex items-center c-space
    section-spacing">
        <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
        />
    {showAlert && <Alert type={alertType} Text={alertMessage} />}
        <div className="flex flex-col items-center justify-center max-w-md
        p-5 mx-auto border border-white/10 rounded-2xl 
        bg-primary">
            <div className="flex flex-col items-start w-full gap-5
            mb-10 ">
                <h2 className="text-heading">Let's Talk</h2>
                <p className="font-normal text-neutral-400">
                wether you're looking to build a new website, improve 
                your online presence, or 
                want to bring a new idea to life , I'm here to help.
                </p>
            </div>
            <form
            onSubmit={handleSubmit}
            className="w-full"
            
            >
                <div className="mb-5">
                   <label htmlFor="name" className="feild-label">
                    Full Name
                   </label>
                   <input 
                   id="name"
                   className="field-input field-input-focus"
                   type="text"
                   name="name"
                   placeholder="Varun Singh"
                   autoComplete="name"
                   value={formData.name}
                   onChange={handleChange}
                   required/>
                </div>
                <div className="mb-5">
                   <label htmlFor="email" className="feild-label">
                    Email
                   </label>
                   <input 
                   id="email"
                   className="field-input field-input-focus"
                   type="email"
                   name="email"
                   placeholder="vsinghchouhan905@gmail.com"
                   autoComplete="email"
                   value={formData.email}
                   onChange={handleChange}
                   required/>
                </div>
                <div className="mb-5">
                   <label htmlFor="message" className="feild-label">
                    Message
                   </label>
                   <textarea 
                   id="message"
                   className="field-input field-input-focus"
                   type="message"
                   rows={4}
                   name="message"
                   placeholder="Hi, I would like to work with you!"
                   autoComplete="message"
                   value={formData.message}
                   onChange={handleChange}
                   required/>
                </div>
                <button
                type='submit'
                className="w-full px-1 py-3 text-lg text-center rounded-md
                cursor-pointer bg-radial from-lavender to-royal hover-animation">
                 {!isLoading ? "send" : "Sending..."} </button>
            </form>
        </div>
    </section>
  )
}

export default Contact;
