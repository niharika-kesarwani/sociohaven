export const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 shadow-xl md:px-5">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between gap-3 md:flex-row">
        <h1 className="text-2xl font-bold uppercase tracking-widest text-primary hover:cursor-pointer lg:text-4xl">
          Sociohaven
        </h1>
        <div className="flex w-full max-w-xl px-3">
          <input
            type="text"
            className="w-full rounded-2xl border px-5 py-1"
            placeholder="Search here..."
          />
        </div>
      </div>
    </div>
  );
};
