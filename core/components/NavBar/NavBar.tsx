import { FunctionComponent } from 'react';
import SearchBar from '../SearchBar/SearchBar';
// import style from './NavBar.module.css';

const NavBar: FunctionComponent = () => {
    return (
        <nav className="flex flex-row sticky justify-between items-center bg-blue-500 text-white h-20 px-10">
            <div className="logo">
                Logo
            </div>
            <SearchBar />
            <div>
                Datos
                {/* Datos del usuario */}
            </div>
        </nav>
    )
}

export default NavBar;