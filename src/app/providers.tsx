"use client";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PropsWithChildren } from "react";
import client from "./apollo-client";

export default function Providers({ children }: PropsWithChildren<{}>) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </NextThemesProvider>
  );
}
