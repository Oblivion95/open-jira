import Layout from "@core/components/layouts/layout";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Home = ({ children }: Props) => {
  return <div>Home</div>;
};
export default Home;

Home.getLayout = page => <Layout title="home">{page}</Layout>;
