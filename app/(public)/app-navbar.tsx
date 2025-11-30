import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, LogOut, Settings, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  const { totalItems, subtotal } = mockCart;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        { /* Logo/Brand Name */ }
        <div className="text-xl font-bold text-primary">
          F-Commerce
        </div>

        { /* Navigation/Actions */ }
        <nav className="flex items-center space-x-4">
          { /* Cart Dropdown */ }
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6" />
                { totalItems > 0 && (
                  <Badge className="absolute -right-2 -top-2 h-5 min-w-5 justify-center rounded-full px-1 py-0 text-xs">
                    { totalItems }
                  </Badge>
                ) }
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-4" align="end">
              <DropdownMenuLabel className="text-lg font-semibold">Your Cart ({ totalItems })</DropdownMenuLabel>
              <DropdownMenuSeparator />

              { /* Cart Items Summary */ }
              <div className="space-y-2">
                { mockCart.items.slice(0, 2).map((item) => (
                    <div key={ item.id } className="flex justify-between text-sm">
                        <span>{ item.quantity } x { item.name }</span>
                        <span>${ item.price.toFixed(2) }</span>
                    </div>
                )) }
                { mockCart.items.length > 2 && (
                    <p className="text-xs text-muted-foreground">
                        + { mockCart.items.length - 2 } more item(s)
                    </p>
                ) }
              </div>
              <Separator className="my-2" />

              { /* Subtotal Info */ }
              <div className="flex justify-between text-base font-bold">
                <span>Subtotal:</span>
                <span>${ subtotal.toFixed(2) }</span>
              </div>

              <DropdownMenuSeparator />

              { /* Checkout Button */ }
              <Button className="w-full">
                View Cart & Checkout
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>

          { /* User Profile Dropdown */ }
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center">
                <User className="h-5 w-5 mr-1" />
                Profile <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile Menu</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}

const mockCart = {
  items: [
    { id: 1, name: "Wireless Headset", price: 49.99, quantity: 1 },
    { id: 2, name: "Leather Wallet", price: 19.99, quantity: 2 },
  ],
  totalItems: 3,
  subtotal: 89.97, // 49.99 + (19.99 * 2)
};