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
        "col-span-full lg:col-start-2 lg:col-span-6 aspect-square md:aspect-video w-full min-h-[60svh] lg:min-h-[80svh] lg:h-full bg-neutral-100 dark:bg-neutral-900 rounded-3xl flex flex-col justify-center items-center p-m1 lg:p-r2"
      )}
    >
      {children}
    </figure>
  );
};

export default Figure;
