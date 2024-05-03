"use client";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import client from "./apollo-client";

export default function Providers({ children }: PropsWithChildren<{}>) {
  const queryClient = new QueryClient();

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </QueryClientProvider>
    </NextThemesProvider>
  );
}
