import { BsSearch } from 'react-icons/bs';
import { useState, KeyboardEvent } from 'react';

// CSS MODULE
import classes from './Serach.module.css'

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
}

const Search = ({loadUser}: SearchProps) => {
  // Status do input quando o user for colocar um usuário do github
  const [userName, setUserName] = useState("");

  // Evento ao apertar Enter e enviar a pesquisa
  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className={classes.search}>
      <h2>Search for a User:</h2>
      <p>Know your best repositories</p>
      <div className={classes.search_container}>
        <input type="text" placeholder='Enter user name' onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown} />
        <button type='submit' onClick={() => loadUser(userName)} >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search
