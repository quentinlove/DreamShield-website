// components/Testimonial.jsx
export default function Testimonial({ name, role, avatar, quote }) {
  return (
    <div className="bg-light rounded-lg p-6 shadow">
      <div className="flex items-center space-x-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <p className="font-semibold text-primary">{name}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700 italic">“{quote}”</p>
    </div>
  );
}
