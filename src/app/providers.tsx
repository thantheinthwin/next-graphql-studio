"use client";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import client from "./apollo-client";

export default function Providers({ children }: PropsWithChildren<{}>) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <ApolloProvider client={client}>
        {children}
        <ToastWithTheme />
      </ApolloProvider>
    </NextThemesProvider>
  );
}

export type ThemeType = "light" | "dark" | "system";

const ToastWithTheme = () => {
  const { theme } = useTheme();

  return (
    <Toaster
      richColors
      theme={theme as ThemeType}
      className="toaster group"
      style={{ fontFamily: "FontSans" }}
    />
  );
};
