# Create Client App (Vite React Typscript - ES6) 
```bash
cd client
npm create vite@latest . -- --template react-ts
npm install
npm install react-router-dom axios
```

# vite.config.ts
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173
  }
})
```

# 📄 index.html (Bootstrap CDN)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    ...
    <title>Trainer App</title>
    
    <!-- Bootstrap CDN -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    ...
  </body>
</html>
```

# 📄 client/src/services/types.ts
```ts
export interface Trainer {
  _id?: string;
  name: string;
  skills: string[];
  photo: string;
  status: "Active" | "Inactive";
}
```

# 📄 client/src/services/api.ts
```ts
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: `${API_URL}/api`
});

// ================== Trainer APIs ==================
export const getTrainers = () => api.get("/trainers");
export const createTrainer = (data: any) =>  api.post("/trainers", data);
export const getTrainerById = (id: string) =>  api.get(`/trainers/${id}`);
export const updateTrainer = (id: string, data: any) =>  api.put(`/trainers/${id}`, data);
export const deleteTrainer = (id: string) =>  api.delete(`/trainers/${id}`);
```



# 📄 client/src/components/Navbar.tsx

```tsx
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">Trainer Dashboard</span>        
      </div>
    </nav>
  );
};

export default Navbar;
```

# Trainer List Page (client/src/pages/index.tsx)
```tsx
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getTrainers, deleteTrainer } from "../services/api";
import { useNavigate } from "react-router-dom";

const TrainerList = () => {
  const [trainers, setTrainers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    load();
  }, [search]);

  const load = async () => {
    const res = await getTrainers(page, search);
    setTrainers(res.data);
  };

  const remove = async (id: string) => {
    await deleteTrainer(id);
    load();
  };

  return (
    <>
      <Navbar />

      <div className="container mt-3">
        <div className="d-flex justify-content-between">
          <h3>Trainer List</h3>
          
            <button className="btn btn-primary" onClick={() => navigate("/new")}>
              + Add
            </button>
          
        </div>

        <input
          className="form-control my-2"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Skills</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {trainers.map((t: any) => (
              <tr key={t._id}>
                <td>{t.name}</td>
                <td>{t.skills.join(", ")}</td>
                <td>{t.status}</td>
                <td>
                  
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => navigate(`/edit/${t._id}`)}
                    >
                      Edit
                    </button>
                  

                  
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => remove(t._id)}
                    >
                      Delete
                    </button>
                  
                </td>
              </tr>
            ))}            
          </tbody>
        </table>
        
      </div>
    </>
  );
};

export default TrainerList;
```


# 📄 New Trainer Page (client/src/pages/new_trainer.tsx)

```tsx
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { updateTrainer, getTrainerById } from "../services/api";

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
```

# 📄 Edit Trainer Page (client/src/pages/edit_trainer.tsx)

```tsx
import { useState } from "react";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { updateTrainer, getTrainerById } from "../services/api";

const EditTrainer = () => {
  const [form, setForm] = useState({
    name: "",
    skills: "",
    photo: "",
    status: "Active"
  });
  const { id } = useParams();  
  const navigate = useNavigate();

  useEffect(() => {
    load();
  }, [id]);

  const load = async () => {
    const response = await getTrainerById(id);
    setForm({
      ...response.data,
      skills: data.skills.join(",")
    });
  };

  const handleSubmit = async () => {
    const payload = {
      ...form,
      skills: form.skills.split(",")
    };

    await updateTrainer(id, payload);

    navigate("/");
  };

  return (
    <div className="container mt-3">
      <h3>Edit Trainer</h3>

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

export default EditTrainer;
```


# 📄 client/src/App.tsx
```tsx
```