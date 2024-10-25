import Image, { StaticImageData } from "next/image";

type Restaurant = {
  imageUrl: StaticImageData | string;
  name: string;
  numberOfRestaurants: number;
};

const Card = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className="rounded-lg border p-5 shadow-lg bg-black text-white flex flex-col gap-2">
      <Image
        src={restaurant.imageUrl}
        alt={restaurant.name}
        className="rounded"
      />
      <h2 className="font-bold text-xl">{restaurant.name}</h2>
      <a href="" className="text-[#FF9F0D]">
        {restaurant.numberOfRestaurants} Restaurants
      </a>
    </div>
  );
};

export default Card;
