import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

function SocialMediaIcons() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "50px",
        left: "20px",
        zIndex: 6,
        cursor: "pointer",
        animation: "bounce 2s infinite ease-in-out",
        "&:hover": {
          animation: "none",
        },
      }}
    >
      <a
        href="https://wa.me/message/EPP2G5MXN5KCN1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          sx={{
            backgroundColor: "#25d366",
            padding: "10px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <WhatsAppIcon
            sx={{
              color: "#fff",
              fontSize: "35px",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </Box>
      </a>
      <a href="tel:9489583398" target="_blank" rel="noopener noreferrer">
        <Box
          sx={{
            backgroundColor: "#369EE4",
            padding: "10px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PhoneIcon
            sx={{
              color: "#fff",
              fontSize: "35px",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </Box>
      </a>
    </Box>
  );
}

export default SocialMediaIcons;
