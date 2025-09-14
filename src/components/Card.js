import "./Card.css";

export const Card = ({ hero }) => {
  return (
    <div className="card">
      <img src={hero.image_url} alt={hero.name} className="card-img" />

      <div className="card-content">
        <h2 className="hero-name">{hero.name}</h2>
        <p className="real-name">{hero.real_name}</p>
        <p>
          <strong>Publisher:</strong>
          {hero.publisher}
        </p>
        <p>
          <strong>Alignment:</strong>
          {hero.alignment}
        </p>
        <p>
          <strong>First Appearance:</strong>
          {hero.first_appearance}
        </p>

        <h3>Abilities</h3>
        <ul className="abilities">
          {hero.abilities.map((power, index) => (
            <li key={index}>{power}</li>
          ))}
        </ul>

        <h3>Biography</h3>
        <p className="bio">{hero.biography}</p>
      </div>
    </div>
  );
};
