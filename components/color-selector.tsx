export function ColorSelector() {
  const colors = [
    { name: "Blue", class: "bg-blue-500" },
    { name: "Orange", class: "bg-orange-500" },
    { name: "Green", class: "bg-green-500" },
    { name: "Red", class: "bg-red-500" },
    { name: "Cyan", class: "bg-cyan-500" },
  ];

  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <button
          key={color.name}
          className={`w-8 h-8 rounded-full ${color.class} hover:ring-2 ring-offset-2`}
          aria-label={`Select ${color.name}`}
        />
      ))}
    </div>
  );
}