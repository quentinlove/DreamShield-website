// components/FeatureCard.jsx
import { CheckIcon } from "@heroicons/react/outline";

export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex space-x-4 hover:shadow-xl transition-shadow">
      <div className="flex-shrink-0">
        <img src={icon} alt={`${title} icon`} className="w-12 h-12" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
