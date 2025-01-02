import { Box, Typography, IconButton, Container, Grid2 } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useTheme } from "@mui/material/styles";
import { Instagram, WhatsApp } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";

function Footer() {
  const theme = useTheme();

  const socialMediaIconStyles = {
    color: `${theme.palette.primary.main}`,
    fontSize: "3rem",
    transition: "0.2s, transform 0.2s",
    "&:hover": {
      transform: "scale(1.1) translateY(-2px)",
    },
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#091629", color: "white", py: 4 }}>
        <Grid2 container spacing={2} justifyContent={"center"}>
          {/* Left Column */}
          <Grid2 size={{ xs: 10, md: 5 }}>
            <Box className="flex items-center">
              <img
                src="assets/ADITYALOGO.png"
                alt="logo"
                height="120px"
                width="120px"
                loading="lazy"
                className="hidden md:block mr-5"
              />

              <Typography variant="h4" fontWeight={600}>
                Aditya Fireworks Industries
              </Typography>
            </Box>
            <Typography variant="h6" mt={2} fontWeight={400}>
              Aditya Fireworks Industries was established in 2010. We are a
              recognized Neeri Approved fireworks manufacturers in india.
            </Typography>
            <Box mt={3}>
              <IconButton>
                <FacebookRoundedIcon sx={socialMediaIconStyles} />
              </IconButton>
              <IconButton>
                <Instagram sx={socialMediaIconStyles} />
              </IconButton>
              <a
                href="https://wa.me/9489583398"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <WhatsApp sx={socialMediaIconStyles} />
                </IconButton>
              </a>
              <IconButton>
                <YouTubeIcon sx={socialMediaIconStyles} />
              </IconButton>
            </Box>
          </Grid2>

          {/* Right Column */}
          <Grid2 size={{ xs: 10, md: 5 }} margin={{ xs: 5 }}>
            <Typography
              variant="h4"
              mb={2}
              fontWeight={600}
              borderBottom={3}
              borderColor={`${theme.palette.primary.main}`}
            >
              Contact Us
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <LocalPhoneIcon
                fontSize="large"
                sx={{ color: `${theme.palette.primary.main}`, mr: 3 }}
              />
              <Box>
                <Typography variant="h5">Phone</Typography>
                <Grid2
                  container
                  columnGap={5}
                  columnSpacing={{ xs: 1, sm: 1, md: 2 }}
                >
                  <Box display="flex" flexDirection={"column"}>
                    <Typography variant="h6">Logesh</Typography>
                    <Typography variant="h6">9489583398</Typography>
                  </Box>
                  <Box display="flex" flexDirection={"column"}>
                    <Typography variant="h6">Dinesh</Typography>
                    <Typography variant="h6">6383081492</Typography>
                  </Box>
                </Grid2>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <EmailOutlinedIcon
                fontSize="large"
                sx={{ color: `${theme.palette.primary.main}`, mr: 3 }}
              />
              <Box>
                <Typography variant="h5">Email</Typography>
                <Typography variant="h6">
                  <a
                    href="mailto:Adityafireworksindustries@gmail.com"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      wordBreak: "break-word",
                    }}
                  >
                    Adityafireworksindustries@gmail.com
                  </a>
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <LocationOnOutlinedIcon
                fontSize="large"
                sx={{ color: `${theme.palette.primary.main}`, mr: 3 }}
              />
              <Box>
                <Typography variant="h5">Address</Typography>
                <Typography variant="h6">
                  2/153 Ethirkottai Village, Sivakasi Taluk, Virudhunagar.
                </Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#091629",
          color: "white",
        }}
      >
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          Copyright &copy; {new Date().getFullYear()}. All Rights Reserved by
          Aditya Fireworks Industries
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
