import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Task = (props) => {
    return (
<Grid
  key={props.id}
  row={{ xs: 1, md: 2, lg:3 }}
>
  <Card
    sx={{
      backgroundColor: props.done ? 'lightgrey' : 'lightblue',
      padding: '20px'
    }}
  >
    <CardHeader
      title={props.title}
      sx={{
        backgroundColor: 'white',
        borderRadius: '3px',
        padding: '20px',
        textAlign: 'center'
      }}
    />

    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          mb: 2,
          padding: '20px'
        }}
      >
        <Typography
          component="p"
          variant="subtitle2"
          color="text.primary"
        >
          Due: {props.deadline}
        </Typography>
      </Box>

      <Typography
        component="p"
        variant="subtitle1"
        align="center"
        sx={{ fontStyle: 'italic' }}
      >
        {props.description}
      </Typography>
    </CardContent>

    <CardActions
      sx={{
        justifyContent: 'space-between',
        padding: '20px'
      }}
    >
      <Button
        variant="contained"
        size="small"
        color="success"
        onClick={props.markDone}
      >
        Done
      </Button>
<CircularProgress color="success" aria-label="Loading…" />
      <Button
        variant="contained"
        size="small"
        color="error"
        onClick={props.deleteTask}
      >
        <DeleteIcon />
      </Button>
    </CardActions>
  </Card>
</Grid>
)
}

export default Task;
