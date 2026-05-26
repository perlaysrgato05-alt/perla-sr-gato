import { ShoppingCart, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import lapicero1 from "./assets/lapicero1.jpeg";
import lapicero2 from "./assets/lapicero2.jpeg";
import lapicero3 from "./assets/lapicero3.jpeg";

import peon from "./assets/peon.jpeg";
import caballo from "./assets/caballo.jpeg";
import reina from "./assets/reina.jpeg";

const productos = [
  {
    categoria: "Lapiceros",

    variantes: [
      {
        nombre: "Lapicero Prisma",
        precio: "$30.000",
        imagen: lapicero1,
      },

      {
        nombre: "Lapicero Ovalado",
        precio: "$28.000",
        imagen: lapicero2,
      },

      {
        nombre: "Lapicero Cónico",
        precio: "$32.000",
        imagen: lapicero3,
      },
    ],
  },

  {
    categoria: "Llaveros Ajedrez",

    variantes: [
      {
        nombre: "Peón",
        precio: "$14.000",
        imagen: peon,
      },

      {
        nombre: "Caballo",
        precio: "$16.000",
        imagen: caballo,
      },

      {
        nombre: "Reina",
        precio: "$22.000",
        imagen: reina,
      },
    ],
  },

  {
    categoria: "Llaveros Ajedrez",

    variantes: [
      {
        nombre: "Peón",
        precio: "$14.000",
        imagen: peon,
      },

      {
        nombre: "Caballo",
        precio: "$16.000",
        imagen: caballo,
      },

      {
        nombre: "Reina",
        precio: "$22.000",
        imagen: reina,
      },
    ],
  },
];

function CardProducto({ producto, enviarWhatsApp }) {

  const [actual, setActual] = useState(0);

  const variante = producto.variantes[actual];

  const siguiente = () => {
    setActual((prev) =>
      prev === producto.variantes.length - 1 ? 0 : prev + 1
    );
  };

  const anterior = () => {
    setActual((prev) =>
      prev === 0 ? producto.variantes.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl"
    >

      <div className="relative">

        <img
          src={variante.imagen}
          alt={variante.nombre}
          className="w-full max-h-[420px] object-contain bg-white"
        />

        <button
          onClick={anterior}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={siguiente}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronRight />
        </button>

      </div>

      <div className="p-6">

        <p className="text-sm text-[#8E44AD] font-semibold">
          {producto.categoria}
        </p>

        <h3 className="text-2xl font-bold text-[#3B2E39]">
          {variante.nombre}
        </h3>

        <p className="text-[#8E44AD] text-xl mt-2 font-semibold">
          {variante.precio}
        </p>

        <div className="flex gap-3 mt-6">

          <button
            onClick={() => enviarWhatsApp(variante)}
            className="flex-1 bg-[#8E44AD] hover:bg-[#5E3370] text-white py-3 rounded-2xl font-semibold transition"
          >
            Comprar
          </button>

          <button
            className="bg-[#EFE3DD] p-3 rounded-2xl"
          >
            <ShoppingCart />
          </button>

        </div>

        <button
          onClick={() => enviarWhatsApp(variante)}
          className="mt-4 w-full border-2 border-[#8E44AD] text-[#8E44AD] py-3 rounded-2xl font-semibold hover:bg-[#8E44AD] hover:text-white transition"
        >
          <Sparkles className="inline mr-2" size={18} />
          Personalizar
        </button>

      </div>

    </motion.div>
  );
}

function App() {

  const enviarWhatsApp = (producto) => {

    const numero = "573207589580";

    const mensaje = `
Hola ✨

Quiero pedir este producto de Perla & Sr. Gato:

🛍 Producto:
${producto.nombre}

💰 Precio:
${producto.precio}

Quiero información sobre:
- colores disponibles
- personalización
- métodos de pago
`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f7f0ed]">

      <section className="px-6 py-20 text-center">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-[#5E3370]"
        >
          Perla & Sr. Gato
        </motion.h1>

        <p className="mt-6 text-[#3B2E39] text-lg max-w-2xl mx-auto">
          Artesanías personalizadas en resina epóxica ✨
        </p>

      </section>

      <section className="px-6 pb-20">

        <h2 className="text-3xl font-bold text-center text-[#5E3370] mb-12">
          Productos Destacados
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {productos.map((producto, index) => (

            <CardProducto
              key={index}
              producto={producto}
              enviarWhatsApp={enviarWhatsApp}
            />

          ))}

        </div>

      </section>

    </div>
  );
}

export default App;