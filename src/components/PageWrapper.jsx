import { Header } from "./Header";
import { Footer } from "./Footer";

export const PageWrapper = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
