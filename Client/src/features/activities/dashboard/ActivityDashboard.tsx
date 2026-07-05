import { Grid, Typography } from "@mui/material";
import ActivityList from "./ActivityList";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityFilters from "./ActivityFilters";

export default function ActivityDashboard() {
    const { activities, isPending } = useActivities();

    if (!activities || isPending) return <Typography>Loading...</Typography>;

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
