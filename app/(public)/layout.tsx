import { CartStoreProvider } from "../providers/cart-store-provider";
import Navbar from "./app-navbar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <CartStoreProvider>
      { /* <Navbar/> */ }
      <Navbar />
      <main>{ children }</main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © 2025 E-Comm Shop. All rights reserved.
      </footer>
    </CartStoreProvider>
  );
}