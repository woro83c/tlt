import classNames from 'classnames';

export default props => {
    const { id, avatar, username } = props.user;

    return (
        <div
            className={classNames('avatar', { 'bg-primary': !avatar, 'bg-secondary': !id })}
            onMouseEnter={() => props.handleEnter(username)}
            onMouseLeave={props.handleLeave}
        >
            {id && (
                avatar ? (
                    <img className="img-fluid" src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.png`} alt={username} />
                ) : (
                    <span className="initial">{username.slice(0, 1).toUpperCase()}</span>
                )
            )}

            <style jsx>{`
                .avatar {
                    align-items: center;
                    display: flex;
                    grid-area: ${props.name};
                    justify-content: center;
                    overflow: hidden;

                    ${id ? 'cursor: pointer;' : ''}
                }

                .avatar * {
                    transition: 0.4s;
                }

                .avatar *:hover,
                .avatar *:focus {
                    transform: scale(1.5);
                }

                .initial {
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    width: 100%; height: 100%;
                }
            `}</style>
        </div>
    );
};
