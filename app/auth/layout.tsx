import React from "react";

type Props = {
  children: React.ReactNode;
};

function AuthLayout({ children }: Props) {
  return (
    <div className="bg-sky-500 dark:bg-sky-600 h-full w-full flex justify-center items-center">
      {children}
    </div>
  );
}

export default AuthLayout;
