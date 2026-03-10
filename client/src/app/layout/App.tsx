import { useEffect, useState } from "react";
import axios from "axios";
import { Container, CssBaseline, List, ListItem } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data));
  }, []);

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <List>
          {activities.map((activity) => (
            <ListItem key={activity.id}>{activity.title}</ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}

export default App;
