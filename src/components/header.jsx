import React from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import './header.css';

function Header() {
	return (
		<header className="bg-gradient-to-r from-black/40 to-stone-900 shadow-xl p-3 sm:p-4 flex justify-between items-center mx-3 sm:mx-5 mb-5 rounded-xl border border-amber-900/30 header-blur">
			<div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
				<span className="elegant-gold">RESTAURANT</span>
			</div>

			{/* Contenedor de botones de redes sociales y WhatsApp */}
			<div className="flex items-center gap-1 sm:gap-2">
				{/* Botones de redes sociales - siempre visibles */}
				<div className="flex items-center gap-1 sm:gap-2">
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-btn"
						aria-label="Facebook"
					>
						<FaFacebookF className="text-amber-800 text-sm sm:text-base" />
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-btn"
						aria-label="Instagram"
					>
						<FaInstagram className="text-amber-800 text-sm sm:text-base" />
					</a>
					<a
						href="https://tiktok.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-btn"
						aria-label="TikTok"
					>
						<FaTiktok className="text-amber-800 text-sm sm:text-base" />
					</a>
				</div>

				{/* Separador visual */}
				<div className="h-6 w-px bg-amber-700/50 mx-1 sm:mx-2"></div>

				{/* Botón de WhatsApp - texto oculto en móviles pequeños */}
				<button className="whatsapp-btn">
					<span className="hidden sm:inline">CONTÁCTANOS</span>
					<FaWhatsapp className="text-amber-800 text-base sm:text-xl" />
				</button>
			</div>
		</header>
	);
}

export default Header;
