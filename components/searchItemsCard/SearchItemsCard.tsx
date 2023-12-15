import Image from "next/image";
import Link from "next/link";

const SearchItemsCard = ({ val }) => {
  return (
    <div
      className={`mt-2 flex justify-start items-center border-b border-solid border-gray-300 transition-all ease-in-out duration-300 p-2 h-16 hover:bg-[#e9e9e9]`}
    >
      <Link href={`product/${val?.id}`}>
        <div className="flex items-center gap-2">
          <Image src={val?.img} alt="productImg" width={60} height={60} />
          <p>{val?.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default SearchItemsCard;
