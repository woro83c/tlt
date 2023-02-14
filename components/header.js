import Logo from './logo';

function Header(props) {
    return (
        <header {...props}>
            <h1 className="text-hide">
                #TLT19 <Logo width="112" />
            </h1>
        </header>
    );
}

export default Header;
