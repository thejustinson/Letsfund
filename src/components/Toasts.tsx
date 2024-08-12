import { RiCloseCircleLine } from '@remixicon/react'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

type MessageType = "success" | "error";

interface ErrorMessage {
  [key: string]: string;
}

interface createCampaignMessage {
  type: MessageType;
  messages: ErrorMessage;
}

interface ToastsProps {
  createCampaignMessage: createCampaignMessage | null;
}

const Toasts: React.FC<ToastsProps> = ({ createCampaignMessage }) => {
  if (!createCampaignMessage) return null;

  return (
    <div className='absolute z-[10] right-10 top-40 flex flex-col gap-y-2 overflow-x-hidden'>
      {Object.entries(createCampaignMessage.messages).map(([key, message], index) => (
        <Toast 
          key={index}
          type={createCampaignMessage.type}
          message={`${key}: ${message}`}
        />
      ))}
    </div>
  )
}

export default Toasts

interface ToastOptions{
  type: "error" | "success";
  message: string;
}

const Toast = ({ type, message }:ToastOptions) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '200%' }}
          animate={{ x: 0 }}
          exit={{ x: '200%' }}
          transition={{ type: 'spring', stiffness: 100 }}
          className={`border-b relative ${type === "success" ? "border-green-600" : "border-red-500"} bg-darkestMain p-2 pr-5 pl-3 w-[300px] rounded text-neutral-400 duration-200`}
        >
          {message}
          <RiCloseCircleLine className='absolute w-4 right-1 top-1' onClick={() => setIsVisible(false)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};