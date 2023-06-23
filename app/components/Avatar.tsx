"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  console.log(user);

  return (
    <div className="relative">
      <div className="relative inline-block overflow-hidden rounded-full h-9 w-9 md:w-11 md:h-11">
        <Image
          alt="Avatar"
          src={user?.image || "/images/placeholder.jpg"}
          fill
        />
      </div>
      <span className="absolute top-0 right-0 block w-2 h-2 bg-green-500 rounded-full ring-2 ring-white md:h-3 md:w-3"></span>
    </div>
  );
};

export default Avatar;
