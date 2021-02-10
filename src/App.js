import "./App.css";
import { useState } from "react";
import GitHubUser from "./components/Card";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  button: {
    margin: 15,
  },
});
function App() {
  const API = "https://api.github.com/users/ximitti";
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    fetch(API)
      .then((response) => response.json())
      .then((user) => setUser(user))
      .catch((err) => console.log(err));

    setActive(!active);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button
          className={classes.button}
          size="large"
          variant="contained"
          color="primary"
          onClick={handleToggle}
        >
          Toggle User
        </Button>
        {active && <GitHubUser user={user} />}
      </header>
    </div>
  );
}

export default App;
