import React from 'react'
import { Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Link,useNavigate } from 'react-router-dom';
import '../style/Header.css';
import '../style/Footer.css';


const Rootlayout = () => {
    const navigate = useNavigate();
  return (
    <>
        <header>
            <div className='header'>
                <LibraryBooksIcon sx={{ fontSize: 50 }} className='logo'/>
                <h1 onClick={()=>{navigate('/')}}>LetsBloom Library</h1>
                <Button variant="outlined" component={Link} to = "/add" className='button'>Add Book</Button>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
        <footer className="footer">
            <div>
                <p className="paragraph">Our library website's footer provides a comprehensive and convenient way to access crucial information and navigate the various sections of our library platform. Anchored at the bottom of every page, our footer serves as a gateway to essential resources and key areas of interest.</p>
                <p className="paragraph">@Copyright AnubhavSharma</p>
            </div>
        </footer>
    </>
  )
}

export default Rootlayout