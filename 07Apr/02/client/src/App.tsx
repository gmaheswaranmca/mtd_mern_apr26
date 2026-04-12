import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrainerList from "./pages";
import NewTrainer from "./pages/new_trainer";
import EditTrainer from "./pages/edit_trainer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrainerList /> }/>
        <Route path="/new" element={<NewTrainer /> }/>
        <Route path="/edit/:id" element={<EditTrainer /> }/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;