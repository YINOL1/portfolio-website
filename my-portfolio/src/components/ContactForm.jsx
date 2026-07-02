// 1. Imports
import { useState } from 'react';
import './ContactForm.css'; // Optional: for form-specific styling

// 2. Component Declaration
export default function ContactForm() {
  // 3. State Management
  // We create state variables to hold the text the user types
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 4. Helper Functions
  // This updates the state whenever the user types a keystroke
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // This handles what happens when they hit submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    console.log("Form submitted with:", formData);
    // Later, you will add the code here to actually send the email!
  };

  // 5. JSX Return
  return (
    <form className="contact-form-container" onSubmit={handleSubmit}>
      
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="input-group">
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="4"
          value={formData.message} 
          onChange={handleChange} 
          required 
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">Send Message</button>
      
    </form>
  );
}