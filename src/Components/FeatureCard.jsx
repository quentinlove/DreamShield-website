// components/FeatureCard.jsx
import { motion } from "framer-motion";

export default function FeatureCard({ title, description, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotateX: 3, rotateY: 3 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="p-1 rounded-2xl  
                 bg-gradient-to-r from-cyan-500 to-purple-600  
                 hover:from-purple-600 hover:to-pink-500  
                 transition-colors"
    >
      <div className="backdrop-blur-lg bg-white/10 border border-white/20  
                      rounded-xl p-6 flex space-x-4 shadow-lg hover:shadow-2xl  
                      transition-shadow">
        <div className="flex-shrink-0 filter drop-shadow-md">
          <img src={icon} alt={`${title} icon`} className="w-12 h-12" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
