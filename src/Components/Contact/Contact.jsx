import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import location_icon from '../../assets/location_icon.png'
import dark_arrow from '../../assets/dark_arrow.png'



const Contact = () => {
       const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a3d1df55-1681-4a22-b484-53b2d18fa14d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='Contact'>
        <div className="Contact-col">
             <h3>Send us a message <img src={msg_icon} alt="" /></h3>
             <p>Feel free to reach out through contact from or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
           <ul>
                <li><img src={mail} alt="" />Contact@GreatStack.dev</li>
                <li><img src={phone} alt="" />+1 123-456-7890</li>
                <li><img src={location_icon} alt="" />77 Massachusets Ave, Cambridge<br /> MA 02139, united States</li>
           </ul>
        
        </div>
        <div className="Contact-col">

          <form onSubmit={onSubmit}>
            <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
                <input type="tel" name='phone'  placeholder='Enter your mobile number' required/>
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
              <button type='submit' className='btn dark-btn'>Submit now <img src={dark_arrow} alt="" /></button>
          </form>
          <span>{result}</span>

        </div>

    </div>
  )
}

export default Contact;
