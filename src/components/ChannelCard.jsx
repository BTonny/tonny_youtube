import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetails, marginTop }) => {
  return (
    <Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', 
      width: { xs: '356px', md: '320px' }, height: '326px', margin: 'auto', marginTop }}>
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetails?.snippet?.title}
            sx={{ width: '180px', height: '180px', borderRadius: '50%', mb: 2, border: '1px solid #e3e3e3' }} />
          <Typography variant="h6" sx={{ mb: 1 }}>{channelDetails?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'primary.main', ml: '5px' }} />
          </Typography>
          {channelDetails?.statistics?.subscriberCount &&
            <Typography variant="body2" sx={{ color: '#aaa' }}>{parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} subscribers</Typography>
          }
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard