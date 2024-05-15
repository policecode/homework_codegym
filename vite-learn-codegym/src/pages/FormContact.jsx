import { useState } from "react";

function FormContact() {
  const [form, setForm] = useState({});

  let handleChange = (e) => {
    e.preventdefault();
    console.log(e.target);
  }
  return (
    <div className="container">
      <form onSubmit={handleChange}>
        <h3>Form Contact</h3>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" name="phone" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" name="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default FormContact;
