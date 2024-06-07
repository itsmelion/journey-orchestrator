"use client";

import { Modal, Portal } from '@journey-orchestrator/components';
import { motion } from "framer-motion";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Portal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <Modal>
          {children}
        </Modal>
      </motion.div>
    </Portal>
  );
}
