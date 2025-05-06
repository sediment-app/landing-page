const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative rounded-xl border border-gray-200 bg-white/50 p-6 backdrop-blur-md">
      {children}
    </div>
  );
};

export default Card;
