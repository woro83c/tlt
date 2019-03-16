import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Footer({ children, ...rest }) {
    return (
        <footer {...rest}>
            <TransitionGroup exit={false}>
                <CSSTransition key={children} classNames="fade" timeout={400}>
                    <span>
                        {children || (
                            <>
                                Brought to you with ❤️ by tLT <span className="badge">BOT</span>
                            </>
                        )}
                    </span>
                </CSSTransition>
            </TransitionGroup>

            <style jsx>{`
                .badge {
                    background: #393d42;
                    border-radius: 0.25rem;
                    display: inline-block;
                    font-size: 75%;
                    font-weight: 700;
                    line-height: 1;
                    padding: 0.25em 0.4em;
                }
            `}</style>
        </footer>
    );
}

export default Footer;
