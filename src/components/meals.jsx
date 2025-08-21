import React, { useState } from 'react';
import {
	carppaccio,
	bruschetta,
	tartardesalmon,
	tostadehigo,
	filete,
	salmonfrito,
	risotto,
	pato,
	ravioli,
	pollo,
	souffle,
	tartaqueso,
	tartalimon,
	flancoco,
	vinotinto,
	coctel,
	champagne,
	espresso,
	tehierbas,
} from '../assets/images';
import './meals.css';

function Meals() {
	const [activeCategory, setActiveCategory] = useState('entrees');

	const menuItems = {
		entrees: [
			{
				name: 'Carpaccio de Res',
				description: 'Finas láminas de res con rúcula y queso parmesano',
				price: '$18.99',
				image: carppaccio,
			},
			{
				name: 'Tartar de Salmón',
				description: 'Salmón fresco con mousse de aguacate',
				price: '$16.50',
				image: tartardesalmon,
			},
			{
				name: 'Bruschetta Tradicional',
				description:
					'Pan artesano con aceite de oliva, tomates heirloom, albahaca y balsámico. Servido con burrata y virutas de parmesano.',
				price: '$16.99',
				image: bruschetta,
			},
			{
				name: 'Tosta de Higo y Quesos con Miel de Junquillo',
				description:
					'Tosta con queso crema trufado, higos, queso de cabra. Decorada con microgreens y nueces tostadas.',
				price: '$19.50',
				image: tostadehigo,
			},
		],
		mains: [
			{
				name: 'Filete Mignon',
				description:
					'Filete de ternera con salsa de vino tinto y puré de papas trufado',
				price: '$32.99',
				image: filete,
			},
			{
				name: 'Salmón a la Parrilla',
				description:
					'Salmón fresco con costra de hierbas, arroz jazmín y salsa de eneldo',
				price: '$26.50',
				image: salmonfrito,
			},
			{
				name: 'Risotto de Mariscos',
				description:
					'Arroz arbóreo con una selección de mariscos frescos y azafrán',
				price: '$26.50',
				image: risotto,
			},
			{
				name: 'Pato a la Naranja',
				description:
					'Pato confitado con salsa de naranja amarga y vegetales glaseados',
				price: '$28.75',
				image: pato,
			},
			{
				name: 'Ravioli',
				description: 'Ravioli con espárragos y nueces ralladas',
				price: '$24.99',
				image: ravioli,
			},
			{
				name: 'Pollo al horno',
				description:
					'Pollo fresco con costra de hierbas, espárragos y salsa beurre blanc',
				price: '$29.99',
				image: pollo,
			},
		],
		desserts: [
			{
				name: 'Soufflé de Chocolate',
				description:
					'Soufflé caliente de chocolate amargo con helado de vainilla',
				price: '$12.99',
				image: souffle,
			},
			{
				name: 'Tarta de Queso',
				description: 'Tarta de queso cremosa con coulis de frutos rojos',
				price: '$10.50',
				image: tartaqueso,
			},
			{
				name: 'Tarta de Limón y Merengue Italiano',
				description:
					'Base crujiente con crema cítrica y merengue flameado al momento.',
				price: '$7.00',
				image: tartalimon,
			},
			{
				name: 'Flan de Coco con Caramelo de Ron Oscuro',
				description:
					'Textura cremosa con notas tropicales y toque de licor artesanal.',
				price: '$8.00',
				image: flancoco,
			},
		],
		drinks: [
			{
				name: 'Château Bois Pertuis Bordeaux',
				description:
					'Vino tinto francés de Burdeos con notas de cereza, vainilla y pimienta, cuerpo medio y taninos suaves.',
				price: '$4.00',
				image: vinotinto,
			},
			{
				name: 'Cóctel Signature',
				description:
					'Cóctel exclusivo del chef con ginebra premium, licor de flor de saúco y cítricos',
				price: '$14.00',
				image: coctel,
			},
			{
				name: 'Champagne',
				description: 'Copa de champagne francés brut',
				price: '$16.00',
				image: champagne,
			},
			{
				name: 'Café Espresso',
				description: 'Café espresso italiano con galleta de chocolate',
				price: '$6.50',
				image: espresso,
			},
			{
				name: 'Té de Hierbas',
				description: 'Selección de tés de hierbas orgánicas con miel',
				price: '$7.00',
				image: tehierbas,
			},
		],
	};

	return (
		<div className="bg-gradient-to-r from-black/40 to-stone-900 shadow-xl p-3 sm:p-4 flex justify-between items-center mx-3 sm:mx-5 rounded-xl border border-amber-900/30 header-blur">
			<div className="max-w-5xl mx-auto">
				<div className="text-center mb-16">
					<h1 className="elegant-title text-5xl md:text-6xl font-bold mb-3">
						Menú
					</h1>
					<div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
				</div>

				<div className="flex flex-wrap justify-center gap-3 mb-12">
					<button
						className={`category-btn ${
							activeCategory === 'entrees' ? 'active' : ''
						}`}
						onClick={() => setActiveCategory('entrees')}
					>
						Entradas
					</button>
					<button
						className={`category-btn ${
							activeCategory === 'mains' ? 'active' : ''
						}`}
						onClick={() => setActiveCategory('mains')}
					>
						Platos Principales
					</button>
					<button
						className={`category-btn ${
							activeCategory === 'desserts' ? 'active' : ''
						}`}
						onClick={() => setActiveCategory('desserts')}
					>
						Postres
					</button>
					<button
						className={`category-btn ${
							activeCategory === 'drinks' ? 'active' : ''
						}`}
						onClick={() => setActiveCategory('drinks')}
					>
						Bebidas
					</button>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{menuItems[activeCategory].map((item, index) => (
						<div
							key={index}
							className="menu-item bg-stone-900/70 backdrop-blur-sm rounded-xl p-6 border border-amber-900/30 hover:border-amber-500/50 transition-all duration-300"
						>
							<div className="flex justify-between items-start mb-4">
								<div className="flex-1 mr-4">
									<h3 className="text-amber-400 text-xl font-bold mb-2">
										{item.name}
									</h3>
									<p className="text-stone-300 text-sm md:text-base">
										{item.description}
									</p>
								</div>
								<span className="text-amber-500 font-bold text-lg whitespace-nowrap">
									{item.price}
								</span>
							</div>
							<div className="mt-4 rounded-lg overflow-hidden h-48 flex items-center justify-center">
								{item.image ? (
									<img
										src={item.image}
										alt={item.name}
										className="w-full h-full object-cover"
									/>
								) : (
									<div className="bg-stone-700 border-2 border-dashed border-stone-600 w-full h-full rounded-lg flex items-center justify-center">
										<span className="text-stone-500">
											Imagen de {item.name}
										</span>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Meals;
