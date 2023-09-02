import logo from '../assets/Logo.svg';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo"/>
      <nav>
        <ul>
          <li><a href='\'>Home</a></li>
          <li><a href='\about'>About</a></li>
          <li><a href='\reservation'>Reservation</a></li>
          <li><a href='\menu'>Menu</a></li>
          <li><a href='\order_online'>Order Online</a></li>
          <li><a href='\login'>Login</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;