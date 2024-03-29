import fetch from 'isomorphic-unfetch';
import { shuffle } from 'lodash';
import Head from 'next/head';
import { useState } from 'react';
import Tilt from 'react-tilt';
import css from 'styled-jsx/css';
import Avatar from '../components/avatar';
import Header from '../components/header';
import Footer from '../components/footer';
import padArray from '../util/padArray';
import { blacklist, tltRole, token } from '../config';
import '../style.css';

const { className, styles } = css.resolve`
    header,
    footer {
        padding: 3rem 15px;
        text-align: center;
    }
`;

function Index({ members }) {
    const [footerContent, setFooterContent] = useState(null);

    return (
        <>
            <Head>
                <title>tLT - 19 years 💪</title>
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>
            <Header className={className} />
            <main>
                <Tilt>
                    <div className="grid">
                        {members.map((member, index) => {
                            const { id, name } = member;
                            const gridArea = 'A' + (index + 1).toString().padStart(2, '0');
                            const callbacks = {
                                onMouseOver: () => setFooterContent(name),
                                onMouseOut: () => setFooterContent(null),
                            };

                            return (
                                <div key={index} className="grid-item" style={{ gridArea }} {...id && callbacks}>
                                    {id && <Avatar member={member} />}
                                </div>
                            );
                        })}
                    </div>
                </Tilt>
            </main>
            <Footer className={className}>
                {footerContent}
            </Footer>

            {styles}
            <style jsx>{`
                main {
                    display: flex;
                    justify-content: center;
                }

                .grid {
                    display: grid;
                    grid-template-areas:
                        'A01 A02  .  A03  .  A04 A05 A06'
                        ' .  A07  .  A08  .   .  A09  . '
                        ' .  A10  .  A11  .   .  A12  . '
                        ' .  A13  .  A14  .   .  A15  . '
                        ' .  A16  .  A17  .   .  A18  . '
                        ' .  A19  .  A20  .   .  A21  . '
                        ' .  A22  .  A23 A24  .  A25  . ';
                    grid-template-columns: repeat(8, 1fr);
                    grid-template-rows: repeat(7, 0.75fr);
                    max-width: 512px;
                }

                .grid-item {
                    background: #393d42;
                    display: flex;
                    overflow: hidden;
                }
            `}</style>
        </>
    );
}

Index.getInitialProps = async () => {
    function getName({ user: { username }, nick }) {
        let name = nick || username;
        if (name === 'Allie') return 'bace';
        if (name === 'denetii') return 'Ksk';
        if (name === 'Johnny') return 'Doodoo';
        if (name === 'mikestoleyobike') return 'Silent';
        if (name === 'Xenelith') return 'Dragon';
        return name;
    }

    const url = 'https://discordapp.com/api/v6/guilds/326409849237798912/members?limit=99';
    const res = await fetch(url, { headers: { 'Authorization': `Bot ${process.env.BOT_TOKEN}` } });
    const data = await res.json();
    const members = data
        .map((member) => {
            const { user: { id, avatar, bot }, roles } = member;
            return { id, name: getName(member), avatar, bot, roles };
        })
        .filter(({ name, bot, roles }) => blacklist.indexOf(name) === -1 && !bot && roles.includes(tltRole))
        .slice(0, 25);

    return { members: shuffle(padArray(members, 25, {})) };
};

export default Index;
