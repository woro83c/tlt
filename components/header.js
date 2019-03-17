import Logo from './logo';

function Header(props) {
    return (
        <header {...props}>
            <h1 className="text-hide">
                #TLTVX <Logo width="112" height="auto" />
            </h1>
        </header>
    );
}

export default Header;
