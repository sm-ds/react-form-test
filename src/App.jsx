import "./App.css";
import Naruto from "./assets/1.webp";
import Jiraya from "./assets/2.webp";


function App() {
  return (
    <div className="App">
      <img src={Naruto} width="400px" height="auto" alt="" />
      <form className="form" name="user_form" action="#" method="post">
        <h4 className="title">Join to Konoha</h4>
        <label className="label" htmlFor="login">
          Ninja Login
        </label>
        <input
          className="input"
          type="text"
          name="login"
          placeholder="Login"
          id="login"
          size="35"
          required
        />
        <label className="label" htmlFor="email">
          Ninja Email
        </label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          size="35"
          placeholder="Email"
          required
        />
        <label className="label" htmlFor="password">
          Ninja Password
        </label>
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Passsword"
          id="password"
          size="35"
          required
        />
        <button className="submitbutton">Submit</button>
      </form>
      <img src={Jiraya} width="600px" height="auto" alt="" />
    </div>
  );
}

export default App;
