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
        animate: { color: "var(--midground)" },
        hover: { color: "var(--foreground)" },
      }}
      target="_blank"
      className="underline"
      transition={{ ease: circOut }}
    >
      {children}
    </motion.a>
  );
};

export default ExternalInlineLink;
