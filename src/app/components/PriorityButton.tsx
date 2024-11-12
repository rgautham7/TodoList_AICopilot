"use client";

import { Priority } from "../types/todo";
import { useState, useRef, useEffect } from "react";

interface PriorityButtonProps {
  currentPriority: Priority;
  onPriorityChange: (priority: Priority) => void;
}

export const PriorityButton: React.FC<PriorityButtonProps> = ({
  currentPriority,
  onPriorityChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getPriorityClass = (priority: Priority) => {
    switch (priority) {
      case 'High': return 'priority-high';
      case 'Medium': return 'priority-medium';
      case 'Low': return 'priority-low';
      default: return 'priority-none';
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`priority-button ${getPriorityClass(currentPriority)}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentPriority || 'Priority'}
      </button>

      {isOpen && (
        <div className="priority-dropdown">
          {(['High', 'Medium', 'Low'] as Priority[]).map((priority) => (
            <div
              key={priority}
              className="priority-option"
              onClick={() => {
                onPriorityChange(priority);
                setIsOpen(false);
              }}
            >
              {priority}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};