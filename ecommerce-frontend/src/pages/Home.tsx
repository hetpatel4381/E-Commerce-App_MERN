import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to={"/search"} className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="hetpatel"
          price={3000}
          stock={435}
          name="Macbook"
          handler={addToCartHandler}
          photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdDt-muZcwGPOftRj3nYz8ZIPfg3Vdepxbw&usqp=CAU"
        />
      </main>
    </div>
  );
};

export default Home;
