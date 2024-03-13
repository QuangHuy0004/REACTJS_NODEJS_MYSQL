import { Outlet } from 'react-router-dom';

const BackendLayout = () => {
    return ( 
        <>
        <h1>Header11</h1>
        <Outlet/>
        <h1>Footer11</h1>
        </>
     );
}
 
export default BackendLayout;