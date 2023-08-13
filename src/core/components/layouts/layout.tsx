import { Box } from "@mui/material";
import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "../ui/navbar/navbar";
import Sidebar from "../ui/sidebar/sidebar";

interface Props {
  children: ReactNode;
  title?: string;
}

const Layout = ({ title = "", children }: Props) => (
  <Box sx={{ flexGrow: 1 }}>
    <Head>
      <title>{`Open Jira${title ? ` - ${title}` : ""}`}</title>
    </Head>
    <Navbar />
    <Sidebar />
    <Box sx={{ padding: "10px 20px" }}>{children}iS</Box>
  </Box>
);

export default Layout;
