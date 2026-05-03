export const cartaSections = {
  entrantes: [
    { name: "Croquetas", price: "1,20€", note: "Precio por unidad" },
    { name: "Muslitos de cangrejo", price: "1,50€", note: "Precio por unidad" },
    { name: "Marinera", price: "2,50€", note: "Precio por unidad" },
    { name: "Pan y alioli/tomate", price: "3€" },
    { name: "Ensaladilla rusa", price: "6€" },
    { name: "Bravas", price: "6€" },
    { name: "Mejillones al vapor", price: "8,50€", note: "O Clòtxina según temporada" },
    { name: "Calamares a la romana", price: "10€" },
    { name: "Chipirones", price: "10€" },
    { name: "Boquerones fritos", price: "10€" },
    { name: "Pulpo a la gallega", price: "15€" },
    { name: "Fritura variada", price: "20€" },
  ],
  pescados: [
    { name: "Chipirones", price: "12€", note: "Acompañados de guarnición" },
    { name: "Boquerones", price: "14€", note: "Acompañados de guarnición" },
    { name: "Calamar a la romana", price: "15€", note: "Acompañado con guarnición" },
    { name: "Emperador", price: "15€", note: "Elaborado a la plancha" },
    { name: "Sepia a la plancha", price: "16€", note: "Acompañado de guarnición" },
    { name: "Parrillada especial", price: "20€", note: "Según disponibilidad: emperador, merluza, lubina, gambón..." },
    { name: null, price: null, note: "Todos los platos incluyen guarnición.", warning: true },
  ],
  carnes: [
    { name: "Pechuga de pollo", price: "10€", note: "Elaborado a la placha o empanada"},
    { name: "Filete de ternera", price: "12€", note: "Elaborado a la plancha" },
    { name: "Escalope de ternera", price: "12€", note: "Rebozado en pan rallado y frito" },
    { name: "Chuletas de cordero", price: "15€", note: "Elaborado a la plancha" },
    { name: "Entrecot", price: "20€", note: "Elaborado a la plancha" },
    { name: null, price: null, note: "Todos los platos incluyen guarnición.", warning: true },
  ],
  arroces: [
    { name: "Arroz a banda", price: "10€", note: "Gambita pelada" },
    { name: "Arroz negro", price: "11€", note: "Ajos tiernos y chipirones" },
    { name: "Arroz con sepia y verduras", price: "11€", note: "Sepia con verduras variadas" },
    { name: "Arroz con magro y verduras", price: "11€", note: "Magro con verduras variadas" },
    { name: "Arroz del señoret", price: "11€", note: "Calamar, atún, emperador, gambita pelada y mejillón" },
    { name: "Paella mixta", price: "14€", note: "Calamar, emperador, atún, gambita pelada, gambón, pollo, pimiento rojo..." },
    { name: "Fideua", price: "15€", note: "Almejas, calamar, emperador, atún, gambita pelada..." },
    { name: "De marisco", price: "15€", note: "Almejas, gambas, gambón, emperador, atún, gambita pelada..." },
    { name: "Caldero marinero", price: "28€", note: "Se realiza bajo previo encargo" },
    { name: "Arroz con bogavante", price: "25€", note: "Se realiza bajo previo encargo" },
    { name: null, price: null, note: "Mínimo para dos personas", warning: true },
  ],
};

export const menus = [
  { name: "PARRILLADA DE CARNE", price: "10€", desc: "Ensalada de la casa y parrillada de carne.", warning: "No disponible domingos ni festivos" },
  { name: "A BANDA", price: "12€", desc: "Ensaladilla rusa, croquetas, ensalada de la casa y arroz a banda. Incluye alioli", warning: "No disponible domingos ni festivos" },
  { name: "SEPIA CON VERDURAS", price: "15€", desc: "Ensalada de la casa, chipirones y arroz con sepia y verduras. Incluye alioli" },
  { name: "ESTRELLA", price: "15€", desc: "Ensalada de la casa, boquerones fritos y arroz a elegir entre a banda o negro. Incluye alioli" },
  { name: "VEGANO", price: "14€", desc: "Ensalada verde, patatas arrugadas y arroz con verduras. Incluye alioli" },
  { name: "PARRILLADA DE PESCADO", price: "17€", desc: "Ensalada de la casa y parrillada de pescado." },
  { name: "MEDITERRÁNEO", price: "16€", desc: "Ensalada de la casa, boquerones fritos, croquetas y arroz del señoret. Incluye alioli" },
  { name: "EXTRA", price: "20€", desc: "Ensalada de la casa, calamares a la romana, muslitos de cangrejo, gambones con gambita y arroz a banda. Incluye alioli" },
];

// Estructura: { category, items: [{ name, copa, botella }] }
// copa/botella = null si no se vende por esa unidad
export const vinos = [
  {
    category: "Aperitivos",
    items: [
      { name: "Vermut Rojo La Fabulosa (Galicia)", copa: "3,00€", botella: null },
    ],
  },
  {
    category: "Blancos",
    items: [
      { name: "Blanco de la casa",      copa: "2,20€", botella: "7,00€"  },
      { name: "Verdejo Rueda",           copa: "3,00€", botella: "14,00€" },
      { name: "Marina Alta (Alicante)",  copa: null,    botella: "14,00€" },
    ],
  },
  {
    category: "Rosados",
    items: [
      { name: "Rosado de la casa", copa: "2,20€", botella: "7,00€"  },
      { name: "Rosado Navarra",    copa: "2,50€", botella: "12,00€" },
    ],
  },
  {
    category: "Tintos",
    items: [
      { name: "Tinto de la casa",           copa: "2,00€", botella: "7,00€"  },
      { name: "Rioja de la casa",           copa: "3,00€", botella: "14,00€" },
      { name: "Ribera del Duero de la casa",copa: "3,00€", botella: "16,00€" },
      { name: "Ramón Bilbao Crianza",       copa: null,    botella: "20,00€" },
    ],
  },
];

export const galleryImages = [
  { src: "src/assets/img/gallery/arroz_bogavante.jpeg", alt: "Bogavante" },
  { src: "src/assets/img/gallery/ensaladilla_rusa.jpg", alt: "Ensaladilla" },
  { src: "src/assets/img/gallery/fideua.jpeg", alt: "Fideua" },
  { src: "src/assets/img/gallery/chipirones.jpg", alt: "Chipirones" },
  { src: "src/assets/img/gallery/bravas.jpg", alt: "Bravas" },
  { src: "src/assets/img/gallery/calamares.png", alt: "Calamares" },
  { src: "src/assets/img/gallery/boquerones.jpg", alt: "Boquerones" },
  { src: "src/assets/img/gallery/arroz.jpg", alt: "Arroz" },
];
