const BoxPhotos = [
  { 
    id: 1,
    src: "../images/portfolio/t/laser/laser_01.jpg",
    category: "laser",
    text: "Grabado láser madera",
		album: createSubPhotosArr(1, "laser", 5)
  },
  { 
    id: 2,
    src: "../images/portfolio/t/laser/laser_02.jpg",
    category: "laser",
    text: "Grabado láser vidrio",
		album: createSubPhotosArr(2, "laser", 4)
  },
  { 
    id: 3,
    src: "../images/portfolio/t/laser/laser_03.jpg",
    category: "laser",
    text: "Letras y Logos",
		album: createSubPhotosArr(3, "laser", 5)
  },
  { 
    id: 4,
    src: "../images/portfolio/t/laser/laser_04.jpg",
    category: "laser",
    text: "Misceláneo",
		album: createSubPhotosArr(4, "laser", 3)
  },
  {
    id: 5,
    src: "../images/portfolio/t/laser/laser_05.jpg",
    category: "laser",
    text: "Láser piezas",
		album: createSubPhotosArr(5, "laser", 3)
  },
  { 
    id: 6,
    src: "../images/portfolio/t/laser/laser_06.jpg",
    category: "laser",
    text: "Regalos corporativos productos",
		album: createSubPhotosArr(6, "laser", 4)
  },
  { 
    id: 7,
    src: "../images/portfolio/t/router/router_01.jpg",
    category: "router",
    text: "Caja madera raulí",
		album: createSubPhotosArr(7, "router", 5)
  },
  { 
    id: 8,
    src: "../images/portfolio/t/router/router_02.jpg",
    category: "router",
    text: "Caja parlantes terciado",
		album: createSubPhotosArr(8, "router", 6)
  },
  { 
    id: 9,
    src: "../images/portfolio/t/router/router_03.jpg",
    category: "router",
    text: "Carteles logos",
		album: createSubPhotosArr(9, "router", 3)
  },
  { 
    id: 10,
    src: "../images/portfolio/t/router/router_04.jpg",
    category: "router",
    text: "Display",
		album: createSubPhotosArr(10, "router", 2)
  },
  { 
    id: 11,
    src: "../images/portfolio/t/router/router_05.jpg",
    category: "router",
    text: "Escenografía Decoración",
		album: createSubPhotosArr(11, "router", 3)
  },
  { 
    id: 12,
    src: "../images/portfolio/t/router/router_06.jpg",
    category: "router",
    text: "Escultura Lenga",
		album: createSubPhotosArr(12, "router", 5)
  },
  { 
    id: 13,
    src: "../images/portfolio/t/router/router_07.jpg",
    category: "router",
    text: "Estantes",
		album: createSubPhotosArr(13, "router", 4)
  },
  { 
    id: 14,
    src: "../images/portfolio/t/router/router_08.jpg",
    category: "router",
    text: "Juguetes",
		album: createSubPhotosArr(14, "router", 3)
  },
  { 
    id: 15,
    src: "../images/portfolio/t/router/router_09.jpg",
    category: "router",
    text: "Lámparas animales",
		album: createSubPhotosArr(15, "router", 4)
  },
  { 
    id: 16,
    src: "../images/portfolio/t/router/router_10.jpg",
    category: "router",
    text: "Misceláneo",
		album: createSubPhotosArr(16, "router", 4)
  },
  { 
    id: 17,
    src: "../images/portfolio/t/router/router_11.jpg",
    category: "router",
    text: "Mobiliario",
		album: createSubPhotosArr(17, "router", 3)
  },
  { 
    id: 18,
    src: "../images/portfolio/t/router/router_12.jpg",
    category: "router",
    text: "Mobiliario oficina",
		album: createSubPhotosArr(18, "router", 4)
  },
  { 
    id: 19,
    src: "../images/portfolio/t/router/router_13.jpg",
    category: "router",
    text: "Mobiliario retail",
		album: createSubPhotosArr(19, "router", 3)
  },
  { 
    id: 20,
    src: "../images/portfolio/t/router/router_14.jpg",
    category: "router",
    text: "Obras artísticas",
		album: createSubPhotosArr(20, "router", 3)
  },
  { 
    id: 21,
    src: "../images/portfolio/t/router/router_15.jpg",
    category: "router",
    text: "Pisos Terciado Melamina",
		album: createSubPhotosArr(21, "router", 3)
  },
  { 
    id: 22,
    src: "../images/portfolio/t/router/router_16.jpg",
    category: "router",
    text: "Plásticos Técnicos",
		album: createSubPhotosArr(22, "router", 3)
  },
  { 
    id: 23,
    src: "../images/portfolio/t/router/router_17.jpg",
    category: "router",
    text: "Proyectos 3D",
		album: createSubPhotosArr(23, "router", 4)
  },
  { 
    id: 24,
    src: "../images/portfolio/t/router/router_18.jpg",
    category: "router",
    text: "Rack TV",
		album: createSubPhotosArr(24, "router", 3)
  },
  { 
    id: 25,
    src: "../images/portfolio/t/router/router_19.jpg",
    category: "router",
    text: "Regalos Corporativos",
		album: createSubPhotosArr(25, "router", 5)
  },
  { 
    id: 26,
    src: "../images/portfolio/t/router/router_20.jpg",
    category: "router",
    text: "Revestimiento",
		album: createSubPhotosArr(26, "router", 3)
  },
  { 
    id: 27,
    src: "../images/portfolio/t/router/router_21.jpg",
    category: "router",
    text: "Stands Ferias",
		album: createSubPhotosArr(27, "router", 3)
  },
  { 
    id: 28,
    src: "../images/portfolio/t/router/router_22.jpg",
    category: "router",
    text: "Tallado Tablón Cartel",
    album: createSubPhotosArr(28, "router", 5)
  }    
];

function createSubPhotosArr(id, category, quantity){
	let arr = [];
	let i = 1;

	while (i <= quantity){
		arr.push(`../images/portfolio/${category}/${id}/${category}_${i}.jpg`)
		i++;
	}
	return arr;
}

export default BoxPhotos;