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
    const res = await getTrainers(search);
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