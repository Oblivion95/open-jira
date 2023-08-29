import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { Entry } from "@core/types";

interface Props {
  entry: Entry;
}

const EntryCard = ({ entry }: Props) => {
  return (
    <Card
      sx={{
        marginBottom: 1,
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
          <CardActions /* sx={{ display: 'flex', justifyContent: 'end' }} */>
            <Typography sx={{ marginLeft: 'auto' }}>{entry.createdAt}</Typography>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EntryCard;
