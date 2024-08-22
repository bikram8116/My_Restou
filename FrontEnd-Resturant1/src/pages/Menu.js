import React, { useState } from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, } from "@mui/material";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleClose = () => {
    setSelectedMenu(null);
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", objectFit: "cover", }}>
        {MenuList.map((menu) => (
          <Card
            key={menu.name}
            sx={{ maxWidth: "390px", display: "flex", m: 1 }}
          >
            <CardActionArea onClick={() => handleMenuClick(menu)}>
              <CardMedia
                 sx={{
                  height: "300px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "14px", 
                  
                }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name} <h6> ₹ {menu.price}</h6>
                </Typography>
                <Typography variant="body2">
                  {menu.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          
         
        ))}
        
      </Box>

      {/* Popup */}
      {/* <Dialog open={Boolean(selectedMenu)} onClose={handleClose}>
        <DialogTitle>{selectedMenu?.name}</DialogTitle>
        <DialogContent>
          <Typography>{selectedMenu?.description}</Typography>
          <Typography>Price: {selectedMenu?.price}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog> */}
    </Layout>
  );
};

export default Menu;
