 const LoadingSpinner = ({ size = 24, color = 'text-blue-500' }) => {
  return (
    <div className="flex justify-center items-center py-6">
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent ${color}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;

