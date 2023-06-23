export const Header = () => {
  
  return (
    <div className="flex justify-between items-center py-4 md:px-5 shadow-xl">
      <div className="flex justify-between items-center flex-col md:flex-row w-full max-w-screen-xl mx-auto gap-3">
        <h1 className="uppercase tracking-widest text-2xl lg:text-4xl text-primary font-bold hover:cursor-pointer">Sociohaven</h1>
        <div className="flex w-full max-w-xl px-3"><input type="text" className="border rounded-2xl px-5 py-1 w-full" placeholder="Search here..."/></div>
      </div>
    </div>
  );
};
