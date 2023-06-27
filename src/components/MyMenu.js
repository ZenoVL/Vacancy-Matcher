import { Menu } from 'react-admin';
import LabelIcon from '@mui/icons-material/Label';

export const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem to="/Admin/"/>
        <Menu.ResourceItem name="Users" />
        <Menu.ResourceItem name="Premises" />
        <Menu.ResourceItem name="ApproveRequests" />
        <Menu.ResourceItem name="Messages" />
    </Menu>
);