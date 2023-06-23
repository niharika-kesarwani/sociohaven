import { Header } from "./Header";

export const PageWrapper = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="max-w-screen-xl mx-auto w-full h-full">{children}</div>
    </div>
  );
};
