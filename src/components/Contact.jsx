import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#3b6e49] flex justify-center item-center p-4"
    >
      <form method='POST' action="https://getform.io/f/b3118f26-0d06-4588-9013-c9797702f18e" className="flex flex-col max-w-[600px] w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form or shoot me an email- akash.ajith3@gmail.com
          </p>
        </div>
        
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
            
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
       <textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder='Message'></textarea>
      <button className="text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-5 shadow-lg shadow-[#040c16] mx-auto flex items-center">Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
