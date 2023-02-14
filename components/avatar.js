function Avatar({ member: { id, name, avatar } }) {
    const src = avatar ? `https://cdn.discordapp.com/avatars/${id}/${avatar}.png` : null;
    return (
        <>
            {avatar ? (
                <img className="avatar img-fluid" src={src} alt={name} />
            ) : (
                <span className="avatar">{name.substring(0, 1).toUpperCase()}</span>
            )}

            <style jsx>{`
                .avatar {
                    align-items: center;
                    background: #00bcd4;
                    cursor: pointer;
                    display: flex;
                    flex: 1 1 auto;
                    font-weight: 700;
                    justify-content: center;
                    transition: 400ms;
                }

                @media (min-width: 576px) {
                    .avatar {
                        font-size: 1.125rem;
                    }
                }

                .avatar:hover,
                .avatar:focus {
                    transform: scale(1.5);
                }

                .avatar.img-fluid {
                    align-self: center;
                }
            `}</style>
        </>
    );
}

export default Avatar;
