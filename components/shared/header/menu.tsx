import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
    return (
        <div className="flex items-center justify-end">
            <nav className="flex gap-3 w-full">
                <Link href="/signin" className="flex gap-1 items-center header-button">
                 
                    <span className="font-bold px-1">Hello, Sign in</span>
                </Link>

                <Link href="/cart" className="flex gap-1 px-1 items-center header-button">
                    <ShoppingCartIcon className="h-8 w-8" />
                    <span className="font-bold">Cart</span>
                </Link>

            </nav>
        </div>
    )
}