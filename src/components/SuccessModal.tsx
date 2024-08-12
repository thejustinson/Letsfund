import { RiCloseLine } from "@remixicon/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface SuccessModalOptions {
    SuccessModalIsVisible: boolean;
    setSuccessModalIsVisible: (SuccessModalIsVisible: boolean) => void
}

const SuccessModal = ({ SuccessModalIsVisible, setSuccessModalIsVisible }: SuccessModalOptions) => {
  return (
    <AnimatePresence>
      {SuccessModalIsVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[rgba(43,45,49,0.71)] w-screen h-screen absolute top-0 left-0 flex justify-center items-center overflow-x-hidden"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-darkestMain max-w-[300px] flex flex-col items-center justify-center p-8 rounded-lg relative"
          >
            <Image src="/success.gif" alt="success" width={300} height={400} />
            <h3 className="text-lg font-semibold text-center leading-6">
              Your campaign has been created successfully.
            </h3>
            <button
              className="bg-[#35373C] p-1 rounded absolute top-4 right-4 active:scale-90 duration-200"
              onClick={() => setSuccessModalIsVisible(false)}
            >
              <RiCloseLine />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;