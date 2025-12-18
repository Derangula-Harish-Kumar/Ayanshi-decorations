const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl bg-card shadow-soft"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="aspect-[4/3] animate-shimmer" />
          <div className="p-4">
            <div className="h-5 w-3/4 animate-shimmer rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
