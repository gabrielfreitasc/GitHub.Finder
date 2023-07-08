import Search from "../components/Search";
import User from '../components/User';
import Error from "../components/Error";

import { UserProps } from "../types/user";

import { useState } from "react";

const Home = () => {
  // Criação de State de error
  const [error, setError] = useState(false);
  // Salvar o status do user na variável
  const  [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async(userName: string) => {
    setError(false); // Vai zerar o status de error
    setUser(null);

    // Acessando a API do GitHub de acordo com o userName
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    // Identificando o status da requisição da pesquisa
    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
