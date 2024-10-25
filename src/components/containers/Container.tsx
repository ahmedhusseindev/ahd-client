import Card from "../cards/Card";
import restaurants from "../../api/restaurants";

const Container = () => {
  return (
    <section className="px-[5%] lg:px-[10%] pb-8 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {restaurants.map((e) => (
        <Card restaurant={e} key={e.name} />
      ))}
    </section>
  );
};

export default Container;
