import { Card, CardContent, CardHeader } from "@mui/material";
import LandingInfo from "../components/LandingInfo";

export const Dashboard = () => (
    <Card style={{marginTop:'2rem'}}>
        <CardHeader title="Welcome to the administration" />
        <LandingInfo></LandingInfo>
    </Card>
);