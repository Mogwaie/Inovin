export default function Login() {
  return (
    <>
      <h2>Accéder à notre compte</h2>
      <form>
        <input type="text" value="email*" />
        <input type="text" value="Mot de passe*" />
      </form>
      <button type="button">Connexion</button>
      <button type="button">Inscription</button>
      <p>Mot de passe oublié ?</p>
    </>
  );
}
