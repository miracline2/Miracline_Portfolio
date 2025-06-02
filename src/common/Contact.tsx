// ContactForm.tsx
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending message...');

    emailjs.sendForm(
      'service_tmsk91b',
      'template_lseiy9q',
      e.currentTarget,
      'f91dw6LfJ84NIwLak'
    ).then(
      (result: any) => {
        
        toast.dismiss(loadingToast);
        toast.success('Message sent successfully! 🎉', {
          duration: 4000,
          position: 'top-right',
          style: {
            background: '#10b981',
            color: 'white',
          },
        });
        
        console.log('---', result);
        clearForm();
        setIsSubmitting(false);
      },
      (error) => {
        toast.dismiss(loadingToast);
        toast.error('Oops! Something went wrong. Please try again.', {
          duration: 4000,
          position: 'top-right',
          style: {
            background: '#ef4444',
            color: 'white',
          },
        });
        
        console.error(error.text);
        setIsSubmitting(false);
      }
    );
  };

  return (
    <>
     
      <div className='flex flex-col mt-10 md:flex-row justify-evenly items-center gap-10 px-6'>
      
        
        <form 
          ref={formRef}
          onSubmit={sendEmail} 
          className="w-full max-w-xl mx-auto p-6 md:p-10 rounded-xl shadow-md shadow-purple-500/3 border-purple-600 border-l-4 relative flex flex-col gap-4"
        >
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name" 
            required 
            className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" 
          />
          
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email" 
            required 
            className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" 
          />
          
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Your Phone (optional)" 
            className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" 
          />
          
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message" 
            required 
            className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition min-h-[120px]"
          ></textarea>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`mt-2 font-semibold py-3 px-6 rounded-md cursor-pointer transition ${
              isSubmitting 
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;