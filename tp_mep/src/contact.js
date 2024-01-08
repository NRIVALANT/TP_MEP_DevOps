import React, { useState } from 'react';
import './ContactPage.css'; // Importe le fichier CSS

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour envoyer le formulaire, par exemple, à un serveur ou via une API.
    console.log('Formulaire soumis avec les données :', formData);
    // Réinitialisez le formulaire après la soumission si nécessaire
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactPage;
