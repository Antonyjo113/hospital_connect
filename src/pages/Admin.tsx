
import React, { useEffect, useState } from "react";
import "../css/admin.css";
import { useNavigate } from "react-router-dom";
interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  message: string;
  date: string;
}


const Admin = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  const loadEnquiries = () => {
    const data =
      JSON.parse(localStorage.getItem("hospitalEnquiries")) || [];

      if (data !== null) {
        setEnquiries(data);
      }
  };

  useEffect(() => {
    loadEnquiries();
  }, []);
  const navigate = useNavigate();

  const deleteEnquiry = (id: string) => {
    const updated = enquiries.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      "hospitalEnquiries",
      JSON.stringify(updated)
    );

    setEnquiries(updated);
  };

  return (
    <div className="admin-container">
        <div className="wrapper-div">
      <h1>Hospital Admin Dashboard</h1>

        <button
            className="back-btn"
            onClick={() => navigate("/")}
            >
            ← Back to Home
            </button>

        </div>


      <div className="admin-stats">
        <h3>Total Enquiries: {enquiries.length}</h3>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {enquiries.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.department}</td>
                <td>{item.message}</td>
                <td>{item.date}</td>
                <td>
                  <button
                    onClick={() => deleteEnquiry(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {enquiries.length === 0 && (
          <p className="no-data">No enquiries available.</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
