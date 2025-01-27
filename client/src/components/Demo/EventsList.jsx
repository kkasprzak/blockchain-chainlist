import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import ImageIcon from '@mui/icons-material/Image';

function EventsList({ events }) {

  return (
    <div className="events-list">
      <Paper
        sx={{ p: 2, m: 2, width: '100%' }}
        elevation={5}
      >
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {events.map((event, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`Sprzedano ${event}`} />
          </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}

export default EventsList;