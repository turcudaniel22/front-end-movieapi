
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div>
       <nav className=" bg-black p-3">
            <div className="container mx-auto flex justify-start items-center ">
                <Link to="/" className="text-white text-xl font-bold mr-4 hover:text-gray-300">Home</Link>
                <Link to="/auth" className="text-white text-xl font-bold  hover:text-sky-700">Auth</Link>
            </div>
        </nav>
    </div>
  )
}
