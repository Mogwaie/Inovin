export default function Login() {
  return (
    <>
      <h2>Accéder à notre compte</h2>
      <form>
        <button className="primary-button" type="submit">
          Connexion
        </button>
      </form>
      <button className="primary-button" type="button">
        Inscription
      </button>
      <p>Mot de passe oublié ?</p>
    </>
  );
}
