import clsx from "clsx";

export const Figure = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <figure
      className={clsx(
        className,
        "col-span-full lg:col-start-2 lg:col-span-6 bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-m1 lg:p-r2",
        ""
      )}
    >
      {children}
    </figure>
  );
};

export default Figure;
