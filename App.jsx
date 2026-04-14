import { useState } from "react";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ name: "", type: "", desc: "" });

  const createProject = () => {
    if (!form.name || !form.desc) return;

    const newProject = {
      id: Date.now(),
      ...form,
    };

    setProjects([newProject, ...projects]);
    setForm({ name: "", type: "", desc: "" });
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>DynaBuild Global 🚀</h1>
      <p>Créer des applications comme une startup</p>

      <div style={{ marginTop: 20 }}>
        <input
          placeholder="Nom"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br /><br />
        <input
          placeholder="Type"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        />
        <br /><br />
        <textarea
          placeholder="Description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />
        <br /><br />
        <button onClick={createProject}>Créer</button>
      </div>

      <h2 style={{ marginTop: 30 }}>Projets</h2>

      {projects.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", padding: 10, marginTop: 10 }}>
          <h3>{p.name}</h3>
          <p>{p.type}</p>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  );
}
