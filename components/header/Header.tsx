"use client";
import { currentUseCartItem } from "@/datafetch/cart/query";
import Profile from "../profile/Profile";
import { IoCartOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const { data } = currentUseCartItem(email);
  return (
    <div className="border border-solid border-gray-500 border-t-0 border-r-0 border-l-0 p-3 flex justify-between items-center -z-10 overflow-auto">
      <div className="flex items-center justify-between gap-5">
        <Profile />
        <p className="text-black font-light text-sm">Deaily Deals</p>
        <p className="text-black font-light text-sm">Help & Contact</p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <p className="text-black font-light text-sm">Sell</p>
        <div className="relative">
          {data?.cartItem?.length ? (
            <>
              <Link href="/cart">
                <IoCartOutline color="black" fontSize={23} />
                <div className="w-4 h-4 bg-red-700 flex justify-center items-center rounded-full absolute -right-2 -top-2">
                  <p className="text-white text-[12px]">
                    {data?.cartItem?.length}
                  </p>
                </div>
              </Link>
            </>
          ) : (
            <>
              <IoCartOutline color="black" fontSize={23} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
