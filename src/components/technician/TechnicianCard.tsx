import { Technician } from "@/types/technician-type";

export const TechnicianCard: React.FC<{ technician: Technician }> = ({ technician }) => {
  return (
    <div className="border rounded-2xl shadow-md hover:shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105 mb-6 max-w-md w-full">
      {/* Image (Edge-to-Edge) */}
      <div className="relative">
        <img src={"https://via.placeholder.com/150"} alt={technician.category} className="w-full h-44 object-cover" />
        {technician.availability === "available" && <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">Available</span>}
        {technician.availability !== "available" && <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">Busy</span>}
      </div>

      {/* Technician Info */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2 tracking-wide">{technician.category.toUpperCase()}</h2>
        <p className="text-gray-600 mb-4 text-sm">{technician.description}</p>

        <div className="text-sm space-y-1 mb-4">
          <p className="text-gray-700">
            <strong>City:</strong> {technician.city}
          </p>
          <p className="text-gray-700">
            <strong>Price:</strong> Rp{technician.price.toLocaleString()}
          </p>
          <p className="text-gray-700">
            <strong>Rating:</strong> {technician.rating} ⭐
          </p>
        </div>

        {/* Contact and Order Buttons */}
        <div className="flex flex-col gap-3">
          <a href={`tel:${technician.phone_num}`} className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-5 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884l3.093-.772a1 1 0 01.92.276l2.2 2.2a1 1 0 01-.293 1.653L6.947 10.46a11.042 11.042 0 005.03 5.03l1.22-1.973a1 1 0 011.653-.293l2.2 2.2a1 1 0 01.276.92l-.772 3.093A1.5 1.5 0 0115.584 20H4.416a1.5 1.5 0 01-1.513-1.184L2.003 5.884z" />
            </svg>
            Contact: {technician.phone_num}
          </a>
          <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 px-5 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3-9h6a1 1 0 110 2H7a1 1 0 110-2z" />
            </svg>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
