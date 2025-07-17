import '../styles/Home.css';
import background from '../assets/image.png'
import { assets } from '../assets/assets';
import Navbar from '../components/Navbar';
export default function Home() {
    return (
        <div className="hero-section">
            <header className='my-section '>

               <Navbar/><br /><br />
                <h1 className="main-title poppins-light">best place to relax & enjoy</h1>
            </header>

        </div>
    );
}
