"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const LandingPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1E1F22] min-h-screen flex flex-col items-center justify-center text-white p-4"
    >
      <span className="mb-8">PledgePal</span>

      <h1 className="text-7xl font-bold mb-4 text-center">
        Crowdfunding <br/> at it's easiest!
      </h1>

      <p className="text text-neutral-500 text-center max-w-2xl mb-8">
        Create and support campaigns with ease. <br/> Join our community and make a
        difference today.
      </p>

      <div className="flex space-x-4">
        <Link href={'campaigns'}>
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-200"
            >
            Create Campaign
            </motion.button>        
        </Link>

        <Link href={'campaigns'}>
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2B2D31] px-6 py-3 rounded-lg font-semibold hover:bg-[#35373C] transition duration-200"
            >
            Explore Campaigns
            </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default LandingPage;
