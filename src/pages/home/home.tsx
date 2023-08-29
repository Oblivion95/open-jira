import { ReactNode } from "react";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import Layout from "@core/components/layouts/layout";
import { EntryList } from "@core/components/ui/entry-list";
import NewEntry from "./new-entry/new-entry";

interface Props {
  children: ReactNode;
}

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: "calc(100vh - 100px)" }}>
          <CardHeader title="Pendientes" />
          <NewEntry />
          <CardContent>
            <EntryList />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: "calc(100vh - 100px)" }}>
          <CardHeader title="En progreso" />
          <CardContent>
            <EntryList status="pending" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: "calc(100vh - 100px)" }}>
          <CardHeader title="Completadas" />
          <CardContent>
            <EntryList  />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Home;

Home.getLayout = (page) => <Layout title="home">{page}</Layout>;
