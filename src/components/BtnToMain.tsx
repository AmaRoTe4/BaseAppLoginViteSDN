import { Link } from "react-router-dom";
import Home_black from "../svg/home_black";

export default function BtnToMain() {
    return (
        <Link to="/">
            <span className="fixed bottom-5 left-5 p-4 rounded-full border border-black hover:bg-gray-200 bg-white">
                <Home_black className="h-[30px]" />
            </span>
        </Link>
    )
}