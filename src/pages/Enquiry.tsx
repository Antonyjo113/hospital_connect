
import React, { useState } from "react";
import "../css/enquiry.css";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enquiries =
      JSON.parse(localStorage.getItem("hospitalEnquiries")) || [];

    const newEnquiry = {
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleString(),
    };

    enquiries.push(newEnquiry);

    localStorage.setItem(
      "hospitalEnquiries",
      JSON.stringify(enquiries)
    );

    alert("Your enquiry has been submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      message: "",
    });
  };

  return (
    <div className="enquiry-container">
      <div className="enquiry-content">
        <h2>Make an Enquiry</h2>
        <p>We are here to help you. Send us your enquiry.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="General Medicine">General Medicine</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
