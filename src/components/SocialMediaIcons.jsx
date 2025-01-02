import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, ListItem } from "@mui/material";

function SocialMediaIcons() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "50px",
        zIndex: "6",
        cursor: "pointer",
        padding: "10px",
      }}
    >
      <List sx={{ width: "70%", height: "80px" }}>
        <a href="https://wa.me/message/EPP2G5MXN5KCN1" target="_blank">
          <ListItem
            sx={{
              background: "#25d366",
              padding: "10px",
              justifyContent: "center",
              borderRadius: "10%",
            }}
          >
            <ListItemIcon sx={{ justifyContent: "center" }}>
              <WhatsAppIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
          </ListItem>
        </a>
      </List>
    </Box>
  );
}

export default SocialMediaIcons;
