import "./App.css";
import { useState, useEffect } from "react";
import GitHubUser from "./components/Card";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  button: {
    margin: 15,
  },
  input: {
    color: grey,
  },
});
function App() {
  const API_DEFAULT = "https://api.github.com/users/ximitti";
  const classes = useStyles();
  const [api, setApi] = useState("https://api.github.com/users/ximitti");
  const [user, setUser] = useState({});
  const [active, setActive] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    search ? getData(api) : getData(API_DEFAULT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);

  const getData = (link) => {
    fetch(link)
      .then((response) => response.json())
      .then((user) => setUser(user))
      .catch((err) => console.log(err));
  };

  const handleToggle = () => {
    setActive(!active);
  };

  const submitUser = (event) => {
    event.preventDefault();
    const newApi = `https://api.github.com/users/${search}`;
    setApi(newApi);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form default noValidate autoComplete="off" onSubmit={submitUser}>
          <TextField
            className={classes.input}
            id="outlined-search"
            label="Pesquisar GitHub User"
            type="search"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            className={classes.button}
            size="medium"
            type="submit"
            variant="contained"
            color="primary"
          >
            Pesquisar
          </Button>
        </form>
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
