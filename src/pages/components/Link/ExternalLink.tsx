import { circOut, motion } from "framer-motion";

export const ExternalLink = ({
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
        animate: { color: "var(--midground)" },
        hover: { color: "var(--foreground)" },
      }}
      transition={{ ease: circOut }}
      target="_blank"
    >
      {children}
      <motion.div className="inline-block overflow-hidden align-bottom mx-1">
        <motion.span
          className="inline-block"
          variants={{
            animate: { x: "-100%" },
            hover: { x: "0" },
          }}
          transition={{ ease: circOut }}
        >
          &rarr;
        </motion.span>
      </motion.div>
    </motion.a>
  );
};

export default ExternalLink;
