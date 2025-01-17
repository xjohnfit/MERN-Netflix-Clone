const largeWidget = () => {

    const Button = ({ type }) => {
        return <button className={"py-1 px-2 border-none rounded-lg " + (type == "Approved" ? 'bg-green-500' : type == "Declined" ? 'bg-red-500' : 'bg-yellow-300')}>{type}</button>;
    };

    return (
        <div className="flex-[2_2_0%] shadow-lg p-5">
            <h3 className="text-[22px] font-bold">Latest Transactions</h3>
            <table className="w-full border-spacing-5 my-2">
                <tbody>
                    <tr className="">
                        <th className="text-left font-bold">Customer</th>
                        <th className="text-left font-bold">Date</th>
                        <th className="text-left font-bold">Amount</th>
                        <th className="text-left font-bold">Status</th>
                    </tr>
                    <tr>
                        <td className="flex items-center font-semibold mb-2">
                            <img
                                className="w-10 h-10 rounded-[50%] object-cover mr-3"
                                src="/src/assets/User (3).jpg"
                                alt="Avatar"
                            />
                            <span className="font-semibold">Jessica Smith</span>
                        </td>
                        <td className="font-light">
                            Dec 18, 2025
                        </td>
                        <td className="font-light">$500.00</td>
                        <td>
                            <Button type="Approved" />
                        </td>
                    </tr>
                    <tr>
                        <td className="flex items-center font-semibold mb-2">
                            <img
                                className="w-10 h-10 rounded-[50%] object-cover mr-3"
                                src="/src/assets/User (1).jpg"
                                alt="Avatar"
                            />
                            <span className="font-semibold">Joseph McDonald</span>
                        </td>
                        <td className="font-light">
                            Dec 18, 2025
                        </td>
                        <td className="font-light">$500.00</td>
                        <td>
                            <Button type="Pending" />
                        </td>
                    </tr>
                    <tr>
                        <td className="flex items-center font-semibold mb-2">
                            <img
                                className="w-10 h-10 rounded-[50%] object-cover mr-3"
                                src="/src/assets/User (4).jpg"
                                alt="Avatar"
                            />
                            <span className="font-semibold">Kendrick Lamar</span>
                        </td>
                        <td className="font-light">
                            Dec 18, 2025
                        </td>
                        <td className="font-light">$500.00</td>
                        <td>
                            <Button type="Declined" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default largeWidget;
