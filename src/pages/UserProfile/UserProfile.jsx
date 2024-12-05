import { useState } from "react";

const UserProfile = () => {
    const [editing, setEditing] = useState(false);

    const [userInfo, setUserInfo] = useState({
      name: "Jannat",
      email: "jannat@example.com",
      phone: "123-456-7890",
      address: "123 Main Street, City, Country",
    });
  
    const bookingHistory = [
      { id: 1, date: "2024-12-01", flight: "Flight 101", status: "Completed" },
      { id: 2, date: "2024-11-25", flight: "Flight 202", status: "Cancelled" },
      { id: 3, date: "2024-11-20", flight: "Flight 303", status: "Upcoming" },
    ];
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUserInfo({ ...userInfo, [name]: value });
    };
  
    const saveChanges = () => {
      setEditing(false);
      alert("Profile updated successfully!");
    };
  
    return (
      <div className="min-h-screen bg-gray-100 p-6"  style={{ backgroundImage: "url('https://as2.ftcdn.net/v2/jpg/00/76/94/65/1000_F_76946564_IaJVspPVj7BGu5uKUAonlo9GbKpXuLZ2.jpg')" }}>
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
          {/* User Information */}
          <div className="border-b pb-4 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">User Profile</h2>
            {!editing ? (
              <div>
                <p className="text-gray-600 mt-2"><span className="font-bold">Name:</span> {userInfo.name}</p>
                <p className="text-gray-600"><span className="font-bold">Email:</span> {userInfo.email}</p>
                <p className="text-gray-600"><span className="font-bold">Phone:</span> {userInfo.phone}</p>
                <p className="text-gray-600"><span className="font-bold">Address:</span> {userInfo.address}</p>
                <button
                  onClick={() => setEditing(true)}
                  className="mt-4 px-4 py-2 bg-[#5b9fbe] hover:bg-[#78B3CE] text-white rounded "
                >
                  Edit Profile
                </button>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 gap-4 mt-4">
                  <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    name="address"
                    value={userInfo.address}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                    placeholder="Address"
                  />
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={saveChanges}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setEditing(false)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
  
          {/* Booking History */}
          <div>
            <h3 className="text-xl font-semibold text-gray-600 mb-4">Booking History</h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Flight</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookingHistory.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-100 text-gray-700">
                    <td className="border border-gray-300 px-4 py-2">{booking.date}</td>
                    <td className="border border-gray-300 px-4 py-2">{booking.flight}</td>
                    <td className="border border-gray-300 px-4 py-2">{booking.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default UserProfile;
