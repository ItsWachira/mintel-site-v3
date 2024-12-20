export default function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#eef5fd] via-white to-[#f7941d]/10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
    </div>
  );
}