"use client";

import { useEffect } from "react";
import { useSnackBar } from "../context/SnackBar.context";

const PokemonSnackBar = ({
  message,
  type = "info",
}: {
  message: string;
  type?: "success" | "error" | "info";
}) => {
  const { showSnackBar } = useSnackBar();

  useEffect(() => {
    if (message) {
      showSnackBar(message, type);
    }
  }, [message, type, showSnackBar]);
  return null;
};

export default PokemonSnackBar;
