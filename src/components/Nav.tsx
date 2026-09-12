import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className="flex justify-between items-center p-4">
        <img src={logo} alt="Logo" />

        <ul className="flex gap-4">
          <li>Home</li>
          <li> Technologies </li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="flex gap-4"> 
          <button> Sign in</button>
          <button className="bg-[#EB388C] hover:bg-[#d62d7d] text-white px-4 py-2 rounded">Sign up</button>
        </ul>
      </nav>
        
    );
};

export default Nav;