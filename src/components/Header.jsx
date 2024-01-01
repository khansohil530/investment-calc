import logo from "../assets/investment-calculator-logo.png";

const Header = () => {
    return (
        <div id="header">
            <img src={logo} alt="Green bag of coins with dollor sign on it" />
            <h1>Investment Calculator</h1>
        </div>
    );
};

export default Header;
