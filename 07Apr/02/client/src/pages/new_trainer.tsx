import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { createTrainer } from "../services/api";
import Navbar from "../components/Navbar";

const NewTrainer = () => {
  const [form, setForm] = useState({
    name: "",
    skills: "",
    photo: "",
    status: "Active"
  });
  
  const navigate = useNavigate();


  const handleSubmit = async () => {
    const payload = {
      ...form,
      skills: form.skills.split(",")
    };

    await createTrainer(payload);

    navigate("/");
  };

  return (
    <div className="container mt-3">
      <Navbar />
      <h3>New Trainer</h3>

      <input
        className="form-control mb-2"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="form-control mb-2"
        placeholder="Skills (comma separated)"
        value={form.skills}
        onChange={(e) => setForm({ ...form, skills: e.target.value })}
      />

      <input
        className="form-control mb-2"
        placeholder="Photo URL"
        value={form.photo}
        onChange={(e) => setForm({ ...form, photo: e.target.value })}
      />

      <select
        className="form-control mb-2"
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option>Active</option>
        <option>Inactive</option>
      </select>

       <button className="btn btn-light" onClick={() => navigate('/')}>
        Back
      </button>
      <button className="btn btn-success" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};

export default NewTrainer;