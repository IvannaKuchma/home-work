import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    const links = [ 'posts', 'components', 'albums', 'photos', 'todos', 'users' ];
    return (
        <aside className="w-64 h-screen bg-gray-100 p-4 shadow-md">
        <nav className="flex flex-col gap-2">
            {links.map((link) => (
                <NavLink
                    key={link}
                    to={`/${link}`}
                    className={({ isActive }) =>
                       isActive ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'
                    }
                >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                </NavLink>
            ))} 
        </nav>
        </aside>
    );
};

export default Sidebar;