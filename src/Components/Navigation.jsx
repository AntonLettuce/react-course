import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
        <div><NavLink to="/profile">Профиль</NavLink></div>
        <div><NavLink to="/messages">Сообщения</NavLink></div>
    </nav>
  );
}

export default Navigation;
