import {
    Box,
    Button,
    ButtonGroup,
    List,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";

export default function Counter() {
    const { counterStore } = useStore();

    return (
        <Box>
            <Observer>
                {() => (
                    <>
                        <Typography variant="h4" gutterBottom>
                            {counterStore.title}
                        </Typography>
                        <Typography variant="h6">
                            The count is {counterStore.count}
                        </Typography>
                    </>
                )}
            </Observer>

            <ButtonGroup sx={{ mt: 3 }}>
                <Button
                    onClick={() => counterStore.decrement()}
                    variant="contained"
                    color="error"
                >
                    Decrement
                </Button>
                <Button
                    onClick={() => counterStore.increment()}
                    variant="contained"
                    color="success"
                >
                    Increment
                </Button>
                <Button
                    onClick={() => counterStore.increment(5)}
                    variant="contained"
                    color="primary"
                >
                    Increment by 5
                </Button>
            </ButtonGroup>

            <Observer>
                {() => (
                    <Paper>
                        <Typography variant="h5">
                            Counter Events ({counterStore.eventCount})
                        </Typography>
                        <List>
                            {counterStore.events.map((eve, ind) => (
                                <ListItemText key={ind}>{eve}</ListItemText>
                            ))}
                        </List>
                    </Paper>
                )}
            </Observer>
        </Box>
    );
}
