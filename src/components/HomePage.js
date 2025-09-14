import { useState } from "react";
import "./Home.css";
import { Navbar } from "./Navbar";
import { usePostHeroesMutation } from "../redux/Api";

export const HomePage = () => {
  const [postHeroes] = usePostHeroesMutation();
  const [formData, setFormData] = useState({
    name: "",
    real_name: "",
    publisher: "",
    alignment: "good",
    abilities: "",
    image_url: "",
    first_appearance: "",
    biography: "",
    team_id: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const heroData = {
      ...formData,
      abilities: formData.abilities
        .split(",")
        .map((a) => a.trim())
        .filter((a) => a !== ""),
      team_id: Number(formData.team_id),
    };

    postHeroes(heroData);
    alert("Added successfully");

    // Reset form
    setFormData({
      name: "",
      real_name: "",
      publisher: "",
      alignment: "good",
      abilities: "",
      image_url: "",
      first_appearance: "",
      biography: "",
      team_id: "",
    });
  };

  const handlePreview = () => {
    alert(`
      Name: ${formData.name}
      Real Name: ${formData.real_name}
      Publisher: ${formData.publisher}
      Alignment: ${formData.alignment}
      Abilities: ${formData.abilities}
      First Appearance: ${formData.first_appearance}
      Team ID: ${formData.team_id}
    `);
  };

  return (
    <>
      <Navbar />
      <div className="hero-form-container">
        <h2>Add a Superhero 🦸</h2>
        <form onSubmit={handleSubmit} className="hero-form">
          <input
            type="text"
            name="name"
            placeholder="Hero Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="real_name"
            placeholder="Real Name"
            value={formData.real_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="publisher"
            placeholder="Publisher (Marvel/DC)"
            value={formData.publisher}
            onChange={handleChange}
            required
          />
          <select
            name="alignment"
            value={formData.alignment}
            onChange={handleChange}
          >
            <option value="good">Good</option>
            <option value="bad">Bad</option>
            <option value="neutral">Neutral</option>
          </select>
          <input
            type="text"
            name="abilities"
            placeholder="Abilities (comma separated)"
            value={formData.abilities}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="image_url"
            placeholder="Image URL"
            value={formData.image_url}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="first_appearance"
            placeholder="First Appearance (e.g. August 1962)"
            value={formData.first_appearance}
            onChange={handleChange}
            required
          />
          <textarea
            name="biography"
            placeholder="Biography"
            rows="4"
            value={formData.biography}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="team_id"
            placeholder="Team ID"
            value={formData.team_id}
            onChange={handleChange}
            required
          />

          <div className="button-group">
            <button type="submit" className="btn-submit">
              Add Hero
            </button>
            <button
              type="button"
              className="btn-preview"
              onClick={handlePreview}
            >
              Preview
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
