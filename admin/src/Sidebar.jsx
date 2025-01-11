import { LineStyle, Timeline, TrendingUp, PersonOutlineOutlined, Inventory2Outlined, AttachMoneyOutlined, BarChartOutlined, EmailOutlined, DynamicFeedOutlined, ChatBubbleOutline, WorkOutlineOutlined, ReportOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="flex-1 h-[calc(100vh-50px)] bg-gray-100 sticky top-[50px]">
            <div className="p-5 text-gray-700">
                <div className=''>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
                        <ul className='list-none p-2'>
                            <Link to="/">
                                <li className='p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-200 rounded-xl'>
                                    <LineStyle className="mr-2" />
                                    Home
                                </li>
                            </Link>
                            <li className='p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-200 rounded-xl'>
                                <Timeline className="mr-2" />
                                Analytics
                            </li>
                            <li className='p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-200 rounded-xl'>
                                <TrendingUp className="mr-2" />
                                Sales
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-5 text-gray-700">
                <div className=''>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Quick Menu</h3>
                        <ul className='list-none p-2'>
                            <Link to="/users">
                                <li className='p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-200 rounded-xl'>
                                    <PersonOutlineOutlined className="mr-2" />
                                    Users
                                </li>
                            </Link>
                            <Link to="/products">
                                <li className='p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-200 rounded-xl'>
                                    <Inventory2Outlined className="mr-2" />
                                    Products
                                </li>
                            </Link>
                            <li className='p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-200 rounded-xl'>
                                <AttachMoneyOutlined className="mr-2" />
                                Transactions
                            </li>
                            <li className='p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-200 rounded-xl'>
                                <BarChartOutlined className="mr-2" />
                                Reports
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-5 text-gray-700">
                <div className=''>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                        <ul className='list-none p-2'>
                            <li className='p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-200 rounded-xl'>
                                <EmailOutlined className="mr-2" />
                                Mail
                            </li>
                            <li className='p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-200 rounded-xl'>
                                <DynamicFeedOutlined className="mr-2" />
                                Feedback
                            </li>
                            <li className='p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-200 rounded-xl'>
                                <ChatBubbleOutline className="mr-2" />
                                Messages
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-5 text-gray-700">
                <div className=''>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Staff</h3>
                        <ul className='list-none p-2'>
                            <li className='p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-200 rounded-xl'>
                                <WorkOutlineOutlined className="mr-2" />
                                Manage
                            </li>
                            <li className='p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-200 rounded-xl'>
                                <Timeline className="mr-2" />
                                Analytics
                            </li>
                            <li className='p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-200 rounded-xl'>
                                <ReportOutlined className="mr-2" />
                                Reports
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;