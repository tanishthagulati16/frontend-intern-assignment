import { motion } from 'framer-motion';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <h1 className="text-4xl font-bold text-blue-900 italic mb-2">
        {title}
      </h1>
      <p className="text-sm text-gray-600">
        {subtitle}
      </p>
    </motion.div>
  );
}