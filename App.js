import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { AdminLogin } from './component/Admin-Login';
import { UserLogin } from './component/User-Login';
import { VideoHome } from './component/Video-home';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { Container} from '@mui/material';
import { AdminDashboard } from './component/admin-dashboard';
import { UserSignin } from './component/user-signin';


function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <div className='shade'>
        <nav className='p-3 bg-dark w-100'>
             <Container maxWidth="lg" className="d-flex justify-content-between align-items-center">
               <Typography variant="h4" className="text-light fw-bold"> 📚 On_Learning</Typography>
               <Button variant="contained" color="primary"  endIcon={<PersonIcon />} component={Link}  to="/admin-login" >  Admin  </Button>
            </Container>
          </nav>

          <Routes>
            <Route path="/" element={<VideoHome />} />
            <Route path="admin-login" element={<AdminLogin />} />
            <Route path="user-login" element={<UserLogin />} />
            <Route path="admin-dash" element={<AdminDashboard/>}/>
            <Route path="user-signin" element={<UserSignin/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


