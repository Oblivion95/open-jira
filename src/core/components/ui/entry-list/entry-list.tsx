import { Paper, List, Box } from "@mui/material";
import { EntryCard } from "../entry-card";
import { useEntries } from "@core/store/context/entries/entries";
import { useMemo } from "react";

type Props = {
  status?: string;
};

const EntryList = ({ status }: Props) => {
  const { entries } = useEntries();

  const entriesByStatus = useMemo(() => entries.filter((entry) => entry.status === status), [entries, status]);

  return (
    <Box>
      <Paper
        sx={{
          minHeight: "fit-content",
          overflowY: "auto",
          backgroundColor: 'transparent',
          padding: 1
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((item) => (
            <EntryCard key={item.id} entry={item} />
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default EntryList;
