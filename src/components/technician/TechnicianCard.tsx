import { Technician } from "@/types/technician-type";
import Link from "next/link";

export const TechnicianCard: React.FC<{ technician: Technician }> = ({ technician }) => {
  return (
    <Link href={"/technician_detail/?id=" + technician.technician_id}>
      <div className="border rounded-2xl shadow-md hover:shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105 mb-6 max-w-md w-full">
        <div className="relative">
          <img src={"https://via.placeholder.com/150"} alt={technician.category} className="w-full h-60 object-cover" />
          {technician.availability === "available" && <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">Available</span>}
          {technician.availability !== "available" && <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">Busy</span>}
        </div>

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
        </div>
      </div>
    </Link>
  );
};
