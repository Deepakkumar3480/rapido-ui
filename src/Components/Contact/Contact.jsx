import React, { useContext } from "react";
import "./contact.css";
import DataContext from "../../Context/Context";

const Contact = () => {
  const {handleChange,handleSubmit,formData,elementError} = useContext(DataContext)
 
  const inputs = [
    {label:"name" ,name: "name", placeholder: "Enter your name" },
    { label:"email address" ,name: "email", placeholder: "Enter your email address" },
    { label:"mobile number" ,name: "mobile", placeholder: "Enter your mobile number" },
  ];

  const select = [
    {label : "you are a",name: "role", options: ["Customer", "Captain"] },
    {
      label:"query",
      name: "query",
      options: [
        "Driver Behaviour",
        "Account Activation/Deactivation Request",
        "Driver Appreciation",
        "Ride Fare Related",
        "Collaboration",
        "Ride Payment Related",
        "Unable to Login",
        "Other",
      ],
    },
  ];
  const { darkmode } = useContext(DataContext);

  return (
    <div className={`contact-container ${darkmode ? 'bg-dark text-light' : ''}`}>
      <div className="contact-wrapper">
        <h1>You can find us here</h1>
        <div className="row">
          <div className="col-lg-6 px-md-5 px-lg-2">
            <p className="m-0 p-0">Find help for your queries here :</p>
            <form action="" onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <div className="input-group" key={input.name}>
                  <label htmlFor={input.name} className="label">
                    {input.label}
                    <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name={input.name}
                    id={input.name}
                    className="input"
                    autoComplete="off"
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                  {elementError && elementError[input.name] && <span className="err-text">{elementError[input.name]}</span>}
            
                </div>
              ))}

              {select.map((select)=>(
                <div className="input-group" key={select.name}>
                <label htmlFor={select.name} className="label">
                    {select.label}
                    <sup>*</sup>
                  </label>
                  <select value={formData[select.name]} name={select.name} id={select.name} className="input" onChange={handleChange}>
                    <option value="" >-select-</option>
                    {select && select.options.map((option)=>(
                      <option value={option} key={option}>{option}</option>
                    ))}
                  </select>
                  {elementError && elementError[select.name] && <span className="err-text">{elementError[select.name]}</span>}
                </div>
              ))}

              <div className="input-group">
                <label htmlFor="comment" className="label">comment</label>
                <textarea name="comment" className="input" placeholder="Enter your comment" id="command" cols="30" rows="3" autoComplete="off" onChange={handleChange}></textarea>
                {elementError && elementError.comment && <span className="err-text">{elementError.comment}</span>}

              </div>
              <div className="input-group">
              <button className="submit-btn" type="submit" >Submit</button>
              </div>
            </form>
          </div>
          <div className="col-lg-6 my-3 my-lg-0">
            <div className="address-div">
              <span>Registered Office Address:</span>
              <p>
                Patna, 800002, Bihar INDIA
              </p>
            </div>
            <div className="address-div">
              <span>Head Office:</span>
              <p>
              Patna, 800002, Bihar INDIA.
              </p>
            </div>
            <div className="address-div">
              <span>Corporate Office:</span>
              <p>
              Patna, 800002, Bihar INDIA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
