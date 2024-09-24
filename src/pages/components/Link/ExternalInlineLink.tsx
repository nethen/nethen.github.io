import { circOut, motion } from "framer-motion";

export const ExternalInlineLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <motion.a
      href={href}
      initial={false}
      animate="animate"
      whileHover="hover"
      variants={{
        animate: { opacity: 0.5 },
        hover: { opacity: 1 },
      }}
      target="_blank"
    >
      {children}
    </motion.a>
  );
};

export default ExternalInlineLink;
