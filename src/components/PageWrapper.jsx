import { Navbar } from "./Navbar";
import { Header } from "./Header";

export const PageWrapper = ({ children }) => {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <div className="relative mx-auto flex h-full w-full max-w-screen-xl grow flex-col md:flex-row">
        <div className="h-full w-full md:ml-20 lg:ml-52">{children}</div>
        <Navbar />
      </div>
    </div>
  );
};
