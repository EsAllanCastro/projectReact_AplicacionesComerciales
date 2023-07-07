import React from 'react';
import { deleteFetch } from './FetchMethods'
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const navigate = useNavigate()
    const handleLogOut = async (e) => {
        e.preventDefault();
        try {
            deleteFetch('api/user/logout');
            navigate('/')
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <button
          className='btn btn-success m-2 float-right rounded'
          type="submit"
          onClick={handleLogOut}
          style={{ backgroundColor: 'succes' }}
        >
          Cerrar Sesión
        </button>
      );
      
}

export default Logout