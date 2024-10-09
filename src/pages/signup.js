import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css'; // Custom CSS for styling

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    password: '',
    password2: '',
    email: '',
    phoneNumber: '',
    role: 'cooperative', // Default role is 'cooperative'
    cooperativeDetails: {
      cooperativeName: '',
      location: '',
    },
  });

  const [response, setResponse] = useState('');
  const [step, setStep] = useState(1); // To manage form steps

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('cooperative')) {
      setFormData((prev) => ({
        ...prev,
        cooperativeDetails: {
          ...prev.cooperativeDetails,
          [name.split('.')[1]]: value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.password2) {
      setResponse('Passwords do not match');
      return;
    }

    const user = {
      username: formData.fullname,
      password: formData.password,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      role: formData.role,
      cooperativeDetails: formData.cooperativeDetails,
    };

    fetch("http://localhost:8000/api/user/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResponse('Account created successfully');
        } else {
          setResponse('Error creating account: ' + data.message);
        }

        setFormData({
          fullname: '',
          password: '',
          password2: '',
          email: '',
          phoneNumber: '',
          role: 'cooperative',
          cooperativeDetails: {
            cooperativeName: '',
            location: '',
          },
        });
        setStep(1); // Reset to first step
      })
      .catch((error) => {
        setResponse('An error occurred: ' + error.message);
      });
  };

  return (
    <section className="vh-100 bg-image"
      style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Join the Agricultural Marketplace</h2>

                  <form onSubmit={handleSubmit}>
                    {step === 1 && (
                      <>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="fullname"
                            className="form-control form-control-lg"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="tel"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Your Phone Number"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password2"
                            className="form-control form-control-lg"
                            name="password2"
                            value={formData.password2}
                            onChange={handleChange}
                            placeholder="Repeat your password"
                            required
                          />
                        </div>

                        <div className="form-group mb-4">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="role"
                              id="roleCooperative"
                              value="cooperative"
                              checked={formData.role === 'cooperative'}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="roleCooperative">
                              Cooperative
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="role"
                              id="roleBuyer"
                              value="buyer"
                              checked={formData.role === 'buyer'}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="roleBuyer">
                              Buyer
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mb-4">
                          <button type="button" className="btn btn-primary btn-lg" onClick={() => setStep(2)}>
                            Next
                          </button>
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="cooperativeName"
                            className="form-control form-control-lg"
                            name="cooperativeName"
                            value={formData.cooperativeDetails.cooperativeName}
                            onChange={handleChange}
                            placeholder="Cooperative Name"
                            required
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="location"
                            className="form-control form-control-lg"
                            name="cooperative.location"
                            value={formData.cooperativeDetails.location}
                            onChange={handleChange}
                            placeholder="Location"
                            required
                          />
                        </div>

                        <div className="d-flex justify-content-center mb-4">
                          <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>
                            Back
                          </button>
                          <button type="submit" className="btn btn-success btn-lg ms-2">
                            Register
                          </button>
                        </div>
                      </>
                    )}

                    {/* Display response message */}
                    {response && <p className="text-center mt-3">{response}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
