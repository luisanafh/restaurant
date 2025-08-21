import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import './header.css';

function Header() {
	return (
		<header className="bg-gradient-to-r from-black/40 to-stone-900 shadow-xl p-2 sm:p-4 flex justify-between items-center mx-2 sm:mx-5 mb-5 rounded-xl border border-amber-900/30 header-blur">
			<div className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
				<span className="elegant-gold">RESTAURANT</span>
			</div>
			<div className="flex items-center gap-1 sm:gap-2">
				<div className="flex items-center gap-1 sm:gap-2">
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-btn"
						aria-label="Facebook"
					>
						<FaFacebookF className="text-amber-800 text-xs sm:text-base" />
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-btn"
						aria-label="Instagram"
					>
						<FaInstagram className="text-amber-800 text-xs sm:text-base" />
					</a>
					<a
						href="https://tiktok.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-btn"
						aria-label="TikTok"
					>
						<FaTiktok className="text-amber-800 text-xs sm:text-base" />
					</a>
				</div>

				<div className="h-5 w-px bg-amber-700/50 mx-1 sm:mx-2 hidden xs:block"></div>

				<button className="whatsapp-btn">
					<span className="hidden sm:inline">CONTÁCTANOS</span>
					<FaWhatsapp className="text-amber-800 text-sm sm:text-xl" />
				</button>
			</div>
		</header>
	);
}

export default Header;
