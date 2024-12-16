import { Technician } from "@/types/technician-type";

export const TechnicianCard: React.FC<{ technician: Technician }> = ({ technician }) => {
  return (
    <div className="border rounded-xl shadow-lg p-6 bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl mb-6 max-w-md w-full">
      <img src={"https://via.placeholder.com/150"} alt={technician.category} className="w-full h-40 object-cover rounded-t-lg mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{technician.category.toUpperCase()}</h2>
      <p className="text-gray-600 mb-4">{technician.description}</p>
      <p className="text-gray-700 mb-2">
        <strong>City:</strong> {technician.city}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Price:</strong> Rp{technician.price.toLocaleString()}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Rating:</strong> {technician.rating} ⭐
      </p>
      <p className={`mb-4 font-semibold text-lg ${technician.availability === "available" ? "text-green-500" : "text-red-500"}`}>{technician.availability === "available" ? "Available" : "Busy"}</p>
      <div className="flex flex-col gap-2">
        <a href={`tel:${technician.phone_num}`} className="block text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-5 rounded-lg font-medium hover:from-blue-600 hover:to-blue-800">
          Contact: {technician.phone_num}
        </a>
        <button className="block text-center bg-gray-200 text-gray-700 py-3 px-5 rounded-lg font-medium hover:bg-gray-300">Order</button>
      </div>
    </div>
  );
};
