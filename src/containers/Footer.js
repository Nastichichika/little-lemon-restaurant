import logo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo"/>
       <section>
        <ul>
          <li>Navigation</li>
          <li><a href='\'>Home</a></li>
          <li><a href='\about'>About</a></li>
          <li><a href='\reservation'>Reservation</a></li>
          <li><a href='\menu'>Menu</a></li>
          <li><a href='\order_online'>Order Online</a></li>
          <li><a href='\login'>Login</a></li>
        </ul>
      </section>
      <section>
        <ul>
            <li>Contact Us</li>
            <li>Address</li>
            <li>Phone number: +380992480204</li>
            <li>Email: little_lemon@gmail.com</li>
          </ul>
      </section>
      <section>
      <ul>
            <li>Social Media Links</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
      </section>
    </footer>
  );
}
export default Footer;