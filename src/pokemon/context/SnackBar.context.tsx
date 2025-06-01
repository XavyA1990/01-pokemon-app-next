"use client";

import { createContext, useContext, useState } from "react";

type SnackBarContextType = {
  showSnackBar: (message: string, type?: "success" | "error" | "info") => void;
};

const SnackBarContext = createContext<SnackBarContextType | undefined>(
  undefined
);

const snackBarClassNames = {
  success: "bg-green-600",
  error: "bg-primary",
  info: "bg-secondary",
};

export const SnackBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [message, setMessage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [type, setType] = useState<"success" | "error" | "info">("info");

  const showSnackBar = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    setMessage(message);
    setType(type);
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  return (
    <SnackBarContext.Provider value={{ showSnackBar }}>
      {children}
      {isOpen && (
        <div
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded text-white z-50 opacity-80
          ${snackBarClassNames[type]} transition-opacity duration-300 ease-in-out`}
        >
          {message}
        </div>
      )}
    </SnackBarContext.Provider>
  );
};

export const useSnackBar = () => {
  const context = useContext(SnackBarContext);
  if (!context)
    throw new Error("useSnackBar must be used within a SnackBarProvider");

  return context;
};
