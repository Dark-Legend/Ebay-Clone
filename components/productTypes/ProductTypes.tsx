import { productList } from "./constant";

const ProductTypes = () => {
  return (
    <div className="border-b border-b-solid border-b-gray-400">
      <ul className=" flex items-center justify-between p-2">
        {productList?.map((val, i) => (
          <li
            key={i}
            className="text-[12px] cursor-pointer text-gray-600 font-medium hover:transition-all hover:duration-200 hover:text-gray-900"
          >
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductTypes;
