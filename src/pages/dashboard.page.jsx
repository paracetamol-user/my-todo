import React, { useEffect } from 'react';
import useRequireAuth from '../hooks/useRequireAuth';
import SideBar from '../components/sidebar-component';
import FunctionBar from '../components/function-bar.component';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { ProvideSidebar } from '../context/SidebarContext';

export default function Dashboard() {

    const { user } = useRequireAuth();
    const { collectionId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!collectionId) {
            navigate('today');
        }
    }, [collectionId, navigate]);

    if (!user) {
        return <h1>Loading...</h1>;
    }


    return (
        <div className='h-screen w-screen flex flex-row'>
            <ProvideSidebar>
                <SideBar />
                <div className='grow space-y-2 z-1 overflow-y-auto'>
                    <FunctionBar />
                    <Outlet />
                </div>
            </ProvideSidebar>
        </div>
    );
}