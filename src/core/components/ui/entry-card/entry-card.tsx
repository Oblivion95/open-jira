import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";

interface Props {
  children: ReactNode;
}

const EntryCard = ({ children }: Props) => {
  return (
    <Card
      sx={{
        marginBottom: 1,
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>Esto es una descripción</Typography>
          <CardActions /* sx={{ display: 'flex', justifyContent: 'end' }} */>
            <Typography sx={{ marginLeft: 'auto' }}>Hace 30 minutos atras</Typography>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EntryCard;
