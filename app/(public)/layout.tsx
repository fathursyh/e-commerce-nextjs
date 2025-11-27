import { CartStoreProvider } from "../providers/cart-store-provider";
import Navbar from "./navbar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <CartStoreProvider>
        <Navbar/>
        <main>{ children }</main>
      </CartStoreProvider>
  );
}