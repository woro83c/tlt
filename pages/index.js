import fetch from "isomorphic-unfetch";
import { useState } from "react";
import Avatar from "../components/avatar";
import Header from "../components/header";
import Footer from "../components/footer";
import "../style.css";

function Index(props) {
  const [name, setName] = useState(null);

  return (
    <>
      <Header />
      <main>
        {props.users.map(user => user.user).filter(user => user.id).map(user => (
          <Avatar key={user.id} user={user} setName={setName} />
        ))}
      </main>
      <Footer>{name}</Footer>

      <style jsx>{`
        main {
          transition: 0.2s;
        }

        main:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}

Index.getInitialProps = async () => {
  const token = "NTQ4NjgzOTYxMjY2ODY0MTQ4.D1Jhjg.MDFC0tiyLhGcDZmk8210KcEdWBI";
  const res = await fetch("https://discordapp.com/api/v6/guilds/326409849237798912/members?limit=100", {
    headers: {
      "Authorization": `Bot ${token}`,
    },
  });
  const data = await res.json();

  // const pixelCount = 25;
  // const pixels = shuffle(arrayPad(data.filter(({ user }) => {
  //   const blacklist = ['code_', 'GanjatheCat'];
  //   return !blacklist.find((name) => name === user.username) && !user.bot;
  // }), pixelCount, { user: new Box() }));

  return {
    users: data,
  };
};

export default Index;
