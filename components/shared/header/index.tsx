import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex justify-start items-center">
          <Link href="/" className="flex justify-start items-center">
            <Image
              src="../images/logo.svg"
              alt="My store web platform"
              width={48}
              height={48}
              priority={true}
            />
            <span className="font-bold text-2xl ml-3">My Store</span>
          </Link>
        </div>
        <div className="space-x-2">
          <ModeToggle />
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/signin">
              <UserIcon /> Sign in
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
