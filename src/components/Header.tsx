interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-blue-900 italic mb-2">
        {title}
      </h1>
      <p className="text-sm text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}