import { NextPage } from "next";

declare global {
  type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactNode) => JSX.Element;
  }
}

export {};
