import { Grid, Typography } from "@mui/material";
import ActivityList from "./ActivityList";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityFilters from "./ActivityFilters";

export default function ActivityDashboard() {
    const { activities, isLoading } = useActivities();

    if (isLoading) return <Typography>Loading...</Typography>;

    if (!activities) return <Typography>No activities found</Typography>;

    return (
        <Grid container spacing={3}>
            <Grid size={8}>
                <ActivityList />
            </Grid>
            <Grid size={4}>
                <ActivityFilters />
            </Grid>
        </Grid>
    );
}
