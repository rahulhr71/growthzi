import '../styles/Home.css';
import background from '../assets/image.png'
import { assets } from '../assets/assets';
export default function Home() {
    return (
        <div className="hero-section">
            <header className='my-section '>
                <div>
                    <img src={assets.logo} alt="" />
                </div>
                <h1 className="main-title">Welcome to Our Resort</h1>
            </header>

        </div>
    );
}
