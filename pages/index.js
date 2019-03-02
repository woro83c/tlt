import fetch from "isomorphic-unfetch";
import Header from "../components/header";

const Index = props => (
  <>
    <Header />
    <main>
      {props.users.map(user => user.user).filter(user => user.id).map(user => (
        <div key={user.id}>{user.username}</div>
      ))}
    </main>
  </>
);

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
