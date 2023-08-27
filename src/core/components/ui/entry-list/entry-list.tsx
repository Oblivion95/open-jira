import { Paper, List } from "@mui/material";
import { EntryCard } from "../entry-card";


const EntryList = () => {
  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          overflowY: "auto",
          backgroundColor: 'transparent',
          padding: 1
        }}
      >
        <List sx={{ opacity: 1 }}>
          {Array.from(Array(10).keys()).map((item) => (
            <EntryCard key={item}>{item}</EntryCard>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
