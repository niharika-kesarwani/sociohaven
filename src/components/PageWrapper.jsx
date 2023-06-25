import { Navbar } from "./Navbar";
import { Header } from "./Header";

export const PageWrapper = ({ children }) => {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <div className="relative mx-auto flex h-[88%] w-full max-w-screen-xl grow flex-col md:flex-row 3xl:h-auto">
        <div className="h-full w-full md:order-1">{children}</div>
        <Navbar />
      </div>
    </div>
  );
};
