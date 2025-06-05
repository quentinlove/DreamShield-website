// components/FAQItem.jsx
import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full text-left"
      >
        <span className="font-medium text-gray-800">{question}</span>
        {open ? (
          <ChevronUpIcon className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {open && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
}
