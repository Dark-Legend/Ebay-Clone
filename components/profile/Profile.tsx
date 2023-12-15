"use client";

import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Box, Button, Flex, Popover, Text } from "@radix-ui/themes";
import {
  CaretDownIcon,
  LockClosedIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { storeEmail } from "@/store/storeCart/store";

const Profile = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { data: session, status } = useSession();
  const addEmail = storeEmail((state) => state.addEmail);

  useEffect(() => {
    addEmail(session?.user?.email);
  }, [session]);
  return (
    <>
      <div className="relative">
        {status === "authenticated" && (
          <>
            <div
              className="flex gap-1 hover:cursor-pointer"
              onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            >
              <Text className="text-black font-light text-xs">
                Hi <span className="font-medium">{session?.user?.name}!</span>
              </Text>
              <Popover.Root>
                <Popover.Trigger>
                  <CaretDownIcon />
                </Popover.Trigger>
                <Popover.Content
                  style={{
                    width: 360,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Flex gap="3">
                    <Image
                      alt="User Avatar"
                      src={session?.user?.image}
                      width={70}
                      height={70}
                    />
                    <Box grow="1">
                      <p>{session?.user?.name}</p>
                    </Box>
                  </Flex>
                  <Button variant="soft" onClick={() => signOut()}>
                    <LockClosedIcon width="16" height="16" />
                    Logout
                  </Button>
                </Popover.Content>
              </Popover.Root>
            </div>
          </>
        )}
        {status === "unauthenticated" && (
          <div>
            <a
              href="#"
              className="text-blue-600 underline text-sm font-light"
              onClick={() => signIn("google")}
            >
              Login
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
