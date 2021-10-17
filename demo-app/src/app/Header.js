export default function Header({ title, subtitle }) {
  return (
    <div className="mt-10 ml-10 mb-10">
      <h2 className="text-2xl">{title}</h2>
      <h3 className="text-lg text-gray-500">{subtitle}</h3>
    </div>
  );
}
