import CardProd from "../Card/CardProd";
import Flex from "../Flex/Flex";
import "./itemListContainer.css";

function ItemListContainer(props) {
  const productoStock = [
    {
      id: 1,
      type: "remera",
      title: "Remera face your demons",
      img: "/img/remeras/remera1.jpeg",
      price: 6325,
      stock: 12,
    },
    {
      id: 2,
      type: "remera",
      title: "Remera blanca Rata",
      img: "/img/remeras/remera2.jpeg",
      price: 6325,
      stock: 10,
    },
    {
      id: 3,
      type: "remera",
      title: "Remera Rata",
      img: "/img/remeras/remera3.jpeg",
      price: 6325,
      stock: 17,
    },
    {
      id: 4,
      type: "remera",
      title: "Remera Bone Hands",
      img: "/img/remeras/remera4.jpeg",
      price: 6325,
      stock: 8,
    },
    {
      id: 5,
      type: "remera",
      title: "Remera Molo",
      img: "/img/remeras/remera5.jpeg",
      price: 6325,
      stock: 11,
    },
    {
      id: 6,
      type: "remera",
      title: "Remera Cheating Death",
      img: "/img/remeras/remera6.jpeg",
      price: 6325,
      stock: 2,
    },
    {
      id: 7,
      type: "remera",
      title: "Remera La Muerte",
      img: "/img/remeras/remera7.jpeg",
      price: 6325,
      stock: 15,
    },
    {
      id: 8,
      type: "remera",
      title: "Remera Evil Dead",
      img: "/img/remeras/remera8.jpeg",
      price: 6325,
      stock: 4,
    },
    {
      id: 9,
      type: "pantalon",
      title: "Pantalón cargo rústico",
      img: "/img/pantalones/pantalon1.jpeg",
      price: 9890,
      stock: 6,
    },
    {
      id: 10,
      type: "pantalon",
      title: "Pantalon eco-cuero costuras",
      img: "/img/pantalones/pantalon2.jpeg",
      price: 14927,
      stock: 10,
    },
    {
      id: 11,
      type: "pantalon",
      title: "Pantalón Parachute gris topo",
      img: "/img/pantalones/pantalon3.jpeg",
      price: 6000,
      stock: 2,
    },
    {
      id: 12,
      type: "pantalon",
      title: "Pantalón Wideleg Escoces",
      img: "/img/pantalones/pantalon4.jpeg",
      price: 12075,
      stock: 7,
    },
    {
      id: 13,
      type: "pantalon",
      title: "Pantalon Yessi",
      img: "/img/pantalones/pantalon5.jpeg",
      price: 8165,
      stock: 21,
    },
    {
      id: 14,
      type: "pantalon",
      title: "Pantalon Morphosis",
      img: "/img/pantalones/pantalon6.jpeg",
      price: 10695,
      stock: 10,
    },
    {
      id: 15,
      type: "pantalon",
      title: "Jogger Siré",
      img: "/img/pantalones/pantalon7.jpeg",
      price: 7360,
      stock: 4,
    },
    {
      id: 16,
      type: "pantalon",
      title: "Jogger cadenas y tiras",
      img: "/img/pantalones/pantalon8.jpeg",
      price: 5060,
      stock: 14,
    },
    {
      id: 17,
      type: "top",
      title: "Reme Crop Cosmic",
      img: "/img/tops/top1.jpeg",
      price: 4000,
      stock: 10,
    },
    {
      id: 18,
      type: "top",
      title: "Top Lurex Frunce",
      img: "/img/tops/top2.jpeg",
      price: 3220,
      stock: 8,
    },
    {
      id: 19,
      type: "top",
      title: "Top Espalda Estrella",
      img: "/img/tops/top3.jpeg",
      price: 2875,
      stock: 17,
    },
    {
      id: 20,
      type: "top",
      title: "Top Roulette Puntilla",
      img: "/img/tops/top4.jpeg",
      price: 3220,
      stock: 10,
    },
    {
      id: 21,
      type: "top",
      title: "Top Musculosa Cruzada",
      img: "/img/tops/top5.jpeg",
      price: 3150,
      stock: 7,
    },
    {
      id: 22,
      type: "top",
      title: "Top Musculosa básica blanca",
      img: "/img/tops/top6.jpeg",
      price: 3335,
      stock: 3,
    },
    {
      id: 23,
      type: "top",
      title: "Top tiras frunce lateral negro",
      img: "/img/tops/top7.jpeg",
      price: 3335,
      stock: 9,
    },
    {
      id: 24,
      type: "top",
      title: "Crop musculosa chomba",
      img: "/img/tops/top8.jpeg",
      price: 3680,
      stock: 13,
    },
  ];

  return (
    <div className="itemListContainer">
      <Flex>
        {productoStock.map((item) => (
          <CardProd item={item} />
        ))}
      </Flex>
    </div>
  );
}

export default ItemListContainer;
