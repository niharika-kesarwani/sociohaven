import { Header } from "./Header";

export const PageWrapper = ({ children }) => {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <div className="mx-auto h-full w-full max-w-screen-xl">{children}</div>
    </div>
  );
};
