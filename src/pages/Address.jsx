import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiClient } from "../utils/api";

const Address = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
    "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
    "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir",
    "Ladakh", "Lakshadweep", "Puducherry",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addressData = {
      fullName: e.target.fullName.value,
      mobile: e.target.mobile.value,
      address1: e.target.address1.value,
      pinCode: e.target.pincode.value,
      district: e.target.district.value,
      state: e.target.state.value,
      country: e.target.country.value,
      landmark: e.target.landmark.value,
    };

    try {
      const token = localStorage.getItem("token");

      const { data } = await apiClient.post(
        "/addresses",
        addressData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        toast.success("✅ Address saved successfully!");
        navigate("/checkout", { state });
      } else {
        toast.error(data.message || "Failed to save address");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error saving address");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-10">
        <div className="border-b border-gray-100 pb-4 mb-6">
          <h2 className="capitalize text-2xl sm:text-3xl text-center text-gray-900 font-bold tracking-tight">
            Delivery Address
          </h2>
        </div>

        <form className="w-full font-Poppins space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="pb-4">
              <p className="capitalize text-[15px] text-[#0f1111] font-semibold">
                Enter a new delivery address
              </p>
            </div>

            {/* Full Name */}
            <div className="mb-4 mt-4">
              <label htmlFor="fullName" className="block font-medium text-[#0f1111] text-[16px]">
                Full Name
              </label>
              <input type="text" id="fullName" name="fullName" className="border border-black text-[14px] rounded w-full p-2 mt-1" placeholder="John Doe" required />
            </div>

            {/* Mobile Number */}
            <div className="mb-4">
              <label htmlFor="mobile" className="block font-medium text-[#0f1111] text-[16px]">
                Mobile Number
              </label>
              <input type="tel" id="mobile" name="mobile" className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1" placeholder="e.g. 9876543210" required />
            </div>

            {/* Address Line 1 */}
            <div className="mb-4">
              <label htmlFor="address1" className="block font-medium text-[#0f1111] text-[16px]">
                Address Line 1
              </label>
              <input type="text" id="address1" name="address1" className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1" placeholder="House No, Street, Area" required />
            </div>

            {/* Pin Code */}
            <div className="mb-4">
              <label htmlFor="pincode" className="block font-medium capitalize text-[#0f1111] text-[16px]">
                Pin Code
              </label>
              <input type="number" id="pincode" name="pincode" className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1" placeholder="Enter Pin Code" required />
            </div>

            {/* District */}
            <div className="mb-4">
              <label htmlFor="district" className="block font-medium capitalize text-[#0f1111] text-[16px]">
                District
              </label>
              <input type="text" id="district" name="district" className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1" placeholder="District" required />
            </div>

            {/* State Dropdown */}
            <div className="mb-4">
              <label htmlFor="state" className="block font-medium capitalize text-[#0f1111] text-[16px]">
                State
              </label>
              <select id="state" name="state" className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1" required>
                <option value="">Select State</option>
                {indianStates.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* Country */}
            <div className="mb-4">
              <label htmlFor="country" className="block font-medium capitalize text-[#0f1111] text-[16px]">
                Country
              </label>
              <input type="text" id="country" name="country" className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1" value="India" readOnly />
            </div>

            {/* Landmark */}
            <div className="mb-4">
              <label htmlFor="landmark" className="block font-medium capitalize text-[#0f1111] text-[16px]">
                Landmark (Optional)
              </label>
              <input type="text" id="landmark" name="landmark" className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1" placeholder="Nearby landmark" />
            </div>

            {/* Submit Button */}
            <div className="mt-8 mb-4">
              <button type="submit" className="w-full bg-[#4CB19A] text-white font-semibold py-3.5 rounded-xl hover:bg-[#3a8d7c] transition-colors text-lg shadow-md">
                Save Address
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
