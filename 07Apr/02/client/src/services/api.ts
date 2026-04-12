import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: `${API_URL}/api`
});

// ================== Trainer APIs ==================
export const getTrainers = (search: string) => api.get(`/trainers?search=${search}`);
export const createTrainer = (data: any) =>  api.post("/trainers", data);
export const getTrainerById = (id: string) =>  api.get(`/trainers/${id}`);
export const updateTrainer = (id: string, data: any) =>  api.put(`/trainers/${id}`, data);
export const deleteTrainer = (id: string) =>  api.delete(`/trainers/${id}`);