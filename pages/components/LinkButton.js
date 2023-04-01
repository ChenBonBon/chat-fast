import classNames from "classnames";

export default function LinkButton({ type, href, children, className }) {
  if (type === "dashed") {
    return (
      <a
        href={href}
        className="btn btn-outline normal-case py-3 h-auto min-h-0 rounded-md hover:bg-black-50 hover:text-black-800"
      >
        {children}
      </a>
    );
  }

  if (type === "danger") {
    return (
      <a
        href={href}
        className={classNames(
          "btn normal-case bg-brand-500 border-brand-500 px-6 py-2 h-auto min-h-0 rounded-md hover:bg-brand-600 hover:border-brand-600",
          className
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={classNames(
        "btn btn-primary normal-case py-3 h-auto min-h-0 rounded-md hover:bg-black-600",
        className
      )}
    >
      {children}
    </a>
  );
}
