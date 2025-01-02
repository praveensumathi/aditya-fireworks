import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
            padding: "8px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WhatsAppIcon
            sx={{
              color: "#fff",
              fontSize: "45px",
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
