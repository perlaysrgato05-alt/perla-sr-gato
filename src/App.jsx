import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
        medidas: "3 cm ",
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

  const [mostrarConfig, setMostrarConfig] = useState(false);

  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [brillos, setBrillos] = useState("Sí");
  const [figurita1, setFigurita1] = useState("");
  const [figurita2, setFigurita2] = useState("");
  const [figurita3, setFigurita3] = useState("");

  const [nombrePersonalizado, setNombrePersonalizado] = useState("");

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

  const enviarPersonalizado = () => {

    const mensaje = `
Hola ✨

Quiero personalizar este producto:

🛍 Producto:
${variante.nombre}

💰 Precio:
${variante.precio}

🎨 Color principal:
${color1}

🎨 Color secundario:
${color2}

✨ Brillos:
${brillos}

✍️ Nombre:
${nombrePersonalizado}

🐱 Figuritas:
- ${figurita1}
- ${figurita2}
- ${figurita3}
`;

    const url = `https://wa.me/573207589580?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        className="bg-white rounded-3xl shadow-xl p-4"
      >

        <div className="relative">

          <img
            src={variante.imagen}
            alt={variante.nombre}
            className="w-full max-h-[420px] object-contain bg-white mx-auto"
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

        <div className="p-4">

          <p className="text-sm text-[#8E44AD] font-semibold">
            {producto.categoria}
          </p>

          <h3 className="text-2xl font-bold text-[#3B2E39]">
            {variante.nombre}
          </h3>

          <p className="text-[#8E44AD] text-xl mt-2 font-semibold">
            {variante.precio}
          </p>

          {/* BOTÓN COMPRAR */}

          <div className="mt-6">

            <button
              onClick={() => enviarWhatsApp(variante)}
              className="w-full bg-[#8E44AD] hover:bg-[#5E3370] text-white py-3 rounded-2xl font-semibold transition"
            >
              Comprar
            </button>

          </div>

          {/* BOTÓN PERSONALIZAR */}

          <button
            onClick={() => setMostrarConfig(true)}
            className="mt-4 w-full border-2 border-[#8E44AD] text-[#8E44AD] py-3 rounded-2xl font-semibold hover:bg-[#8E44AD] hover:text-white transition"
          >
            <Sparkles className="inline mr-2" size={18} />
            Personalizar
          </button>

        </div>

      </motion.div>

      {/* POPUP PERSONALIZAR */}

      {
        mostrarConfig && (

          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

            <div className="bg-white p-8 rounded-3xl w-full max-w-md">

              <h2 className="text-3xl font-bold text-[#5E3370] mb-6">
                Personalizar
              </h2>

              {/* COLOR PRINCIPAL */}

<p className="font-semibold text-[#5E3370] mb-2">
  Escoge tu color principal 🎨
</p>

<select
  value={color1}
  onChange={(e) => setColor1(e.target.value)}
  className="w-full p-3 rounded-2xl border mb-6"
>
  <option value="">Selecciona un color</option>

  <option>Morado</option>
  <option>Rosado</option>
  <option>Blanco</option>
  <option>Negro</option>
  <option>Azul</option>
  <option>Rojo</option>
  <option>Verde</option>
</select>

{/* COLOR SECUNDARIO */}

<p className="font-semibold text-[#5E3370] mb-2">
  Escoge tu color secundario ✨
</p>

<select
  value={color2}
  onChange={(e) => setColor2(e.target.value)}
  className="w-full p-3 rounded-2xl border mb-6"
>
  <option value="">Selecciona un color</option>

  <option>Dorado</option>
  <option>Plateado</option>
  <option>Transparente</option>
  <option>Azul</option>
  <option>Rosado</option>
  <option>Blanco</option>
</select>

{/* NOMBRE */}

<p className="font-semibold text-[#5E3370] mb-2">
  Elige el nombre ✍️
</p>

<input
  type="text"
  value={nombrePersonalizado}
  onChange={(e) => setNombrePersonalizado(e.target.value)}
  placeholder="Escribe el nombre"
  className="w-full p-3 rounded-2xl border mb-2"
/>

<p className="text-sm text-gray-500 mb-6">
  Recuerda: el nombre completo es solo para lapiceros.
  Para llaveros de ajedrez se recomienda máximo 3 letras.
</p>
             {/* BRILLOS */}

<p className="font-semibold text-[#5E3370] mb-2">
  ¿Quieres brillitos?
</p>

<select
  value={brillos}
  onChange={(e) => setBrillos(e.target.value)}
  className="w-full p-3 rounded-2xl border mb-6"
>
  <option value="Sí">Sí</option>
  <option value="No">No</option>
</select>

{/* FIGURITAS */}

<p className="font-semibold text-[#5E3370] mb-2">
  Escoge hasta 3 figuritas ✨
</p>

{/* FIGURA 1 */}

<select
  value={figurita1}
  onChange={(e) => setFigurita1(e.target.value)}
  className="w-full p-3 rounded-2xl border mb-3"
>
  <option value="">Figurita 1</option>

  <option>Gato</option>
  <option>Mariposa</option>
  <option>Corazón</option>
  <option>Flor</option>
  <option>Estrella</option>
  <option>Avioncito</option>
</select>

{/* FIGURA 2 */}

<select
  value={figurita2}
  onChange={(e) => setFigurita2(e.target.value)}
  className="w-full p-3 rounded-2xl border mb-3"
>
  <option value="">Figurita 2</option>

  <option>Gato</option>
  <option>Mariposa</option>
  <option>Corazón</option>
  <option>Flor</option>
  <option>Estrella</option>
  <option>Avioncito</option>
</select>

{/* FIGURA 3 */}

<select
  value={figurita3}
  onChange={(e) => setFigurita3(e.target.value)}
  className="w-full p-3 rounded-2xl border mb-6"
>
  <option value="">Figurita 3</option>

  <option>Gato</option>
  <option>Mariposa</option>
  <option>Corazón</option>
  <option>Flor</option>
  <option>Estrella</option>
  <option>Avioncito</option>
</select>

              {/* BOTONES */}

              <div className="flex gap-4">

                <button
                  onClick={() => setMostrarConfig(false)}
                  className="flex-1 py-3 rounded-2xl bg-gray-200 font-semibold"
                >
                  Cancelar
                </button>

                <button
                  onClick={enviarPersonalizado}
                  className="flex-1 py-3 rounded-2xl bg-[#8E44AD] text-white font-semibold"
                >
                  Enviar
                </button>

              </div>

            </div>

          </div>

        )
      }
    </>
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
- Tiempo de envíos 
- Personalización
- Métodos de pago
`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f7f0ed]">

      {/* HERO */}

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

      {/* PRODUCTOS */}

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