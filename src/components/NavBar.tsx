import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeOptions } from '@mui/material/styles/createTheme';
import {
  Tooltip,
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
} from '@mui/material';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';

type Props = {
  window?: () => Window;
  handleToogle: () => void;
};

export default function DrawerAppBar({ window, handleToogle }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const theme: ThemeOptions = useTheme();
  const iconsButton = (color: string) => (
    <ListItem disablePadding>
      <ListItemButton
        color={'#f00'}
        onClick={handleToogle}
        sx={{ textAlign: 'center' }}
      >
        <Tooltip title="Dark/Light Mode">
          <IconButton sx={{ p: 0, margin: 'auto' }}>
            {theme.palette?.mode === 'dark' ? (
              <Brightness7Icon sx={{ color: color }} />
            ) : (
              <Brightness4Icon sx={{ color: color }} />
            )}
          </IconButton>
        </Tooltip>
      </ListItemButton>
      {mobileOpen && (
        <ListItemButton sx={{ textAlign: 'center' }}>
          <Link to={'/'}>
            <HomeIcon sx={{ color: color }} />
          </Link>
        </ListItemButton>
      )}
    </ListItem>
  );

  const drawer = (
    <Box
      color={theme.text?.navColor}
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', mt: 1 }}
    >
      <Divider />
      <List>
        <Link
          style={{
            margin: 'auto',
            color: 'inherit',
            textDecoration: 'none',
          }}
          to="/articals"
        >
          <ListItem disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center', textTransform: 'uppercase' }}
            >
              <ListItemText primary={'les Articles'} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          style={{
            margin: 'auto',
            color: 'inherit',
            textDecoration: 'none',
          }}
          to="/"
        >
          <Divider />
        </Link>
        <Box mt="10px">{iconsButton(theme.text?.navColor || 'inherit')}</Box>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        sx={{ backgroundColor: theme.text?.nav }}
        component="nav"
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Link to={'/'}>
              <IconButton sx={{ p: 1, color: '#fff' }}>
                <HomeIcon />
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link
              to="/articals"
              style={{
                margin: 'auto',
                color: 'inherit',
                textDecoration: 'none',
                marginBottom: 'auto',
              }}
            >
              <Button sx={{ color: '#fff' }}>Les Articles</Button>
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}
          >
            {iconsButton('#fff' || 'inherit')}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClick={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '240px',
              maxWidth: '100%',
              background: theme.text?.bgColor,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
