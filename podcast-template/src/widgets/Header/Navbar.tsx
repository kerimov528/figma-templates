import ButtonCustom from "@src/shared/ui/ButtonCustom/ButtonCustom";
import MainLogo from "@src/shared/ui/Logo/MainLogo";
import { Link } from "react-router-dom";

const menuItems = [
    {
        name: 'Episodes',
        path: '/episodes',
        icon: null
    },
    {
        name: 'About',
        path: '/about',
        icon: null
    },
    {
        name: 'More',
        path: '',
        icon: null
    }
]

const Navbar = () => {
    return <div className="flex w-full flex-1items-center h-[74px]">
        <div className="flex w-1/2 items-center justify-between">
        <MainLogo/>
        <div className="flex justify-evenly items-center mt-2">
           {
            menuItems.map((item, index)=> (
                    <li key={index} className="font-bold list-none mr-16">
                        <Link to={item.path}>{item.name}</Link>
                    </li>
            ))
        }
        </div>
        </div>
        <div className="flex w-1/2 justify-end items-center space-x-[20px]">
            <ButtonCustom label={"Recent Episodes"} variant="transparent"/>
            <ButtonCustom label={"Subscribe"} shadow shadowColor="grayShadow"/>
        </div>
    </div>;
};

export default Navbar;
