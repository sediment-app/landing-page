const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white/50 backdrop-blur-md p-6 relative">
      {children}
    </div>
  );
};

export default Card;
