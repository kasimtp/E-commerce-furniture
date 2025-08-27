// const Address = () => {
//   return (
//     <form>

    
//     <div className="w-full font-Poppins">
//       <div className="bg-amber-000 px-4 flex flex-col">
//         <div className="pt-4 bg-amber-000">
//             <p className="capitalize  text-[18px] text-[#0f1111] font-Poppins font-semibold">
//                 Enter a new delivery address

//             </p>
//         </div>

//         <div className="mb-4 mt-4">
//           <label
//             htmlFor="name"
//             className="block  font-medium  text-[#0f1111] text-[16px] "
//           >
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="border border-black text-[14px] rounded w-full p-2 mt-1"
//             placeholder="Name"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="name"
//             className="block text-[16px] font-medium   text-[#0f1111]"
//           >
//             Address
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="border text-[14px] border-[#0f1111] rounded w-full  p-2 mt-1"
//             placeholder="Address"
//             required
//           />
//         </div>

//          <div className="mb-4">
//           <label
//             htmlFor="name"
//             className="block  text-[16px] font-medium capitalize text-[#0f1111]"
//           >
//               pin code
//           </label>
//           <input
//             type="number"
//             id="name"
//             className="border text-[14px] border-[#0f1111] rounded w-full p-2 mt-1"
//             placeholder=""
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="name"
//             className="block text-[16px] font-medium capitalize text-gray-700"
//           >
          
//             district
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="border text-[14px] border-[#0f1111] rounded w-full p-2 mt-1"
//             placeholder=" "
//             required
            
            
//           />
//         </div>

        
// {/* 
//          <div className="mb-4">
//           <label
//             htmlFor="name"
//             className="block  text-[16px] font-medium capitalize text-gray-700"
//           >
//            state
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="border text-[14px] font-medium border-[#0f1111] rounded w-full p-2 mt-1"
//             placeholder=" "
//             required
//           />
//         </div> */}


//       </div>
//     </div>
//     </form>
//   );
// };

// export default Address;






// const Address = () => {
//   return (
//     <form className="w-full font-Poppins">
//       <div className="bg-amber-000 px-4 flex flex-col">
//         {/* Title */}
//         <div className="pt-4 bg-amber-000">
//           <p className="capitalize text-[18px] text-[#0f1111] font-semibold">
//             Enter a new delivery address
//           </p>
//         </div>

//         {/* Full Name */}
//         <div className="mb-4 mt-4">
//           <label
//             htmlFor="fullName"
//             className="block font-medium text-[#0f1111] text-[16px]"
//           >
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             className="border border-black text-[14px] rounded w-full p-2 mt-1"
//             placeholder="John Doe"
//             required
//           />
//         </div>

//         {/* Mobile Number */}
//         <div className="mb-4">
//           <label
//             htmlFor="mobile"
//             className="block font-medium text-[#0f1111] text-[16px]"
//           >
//             Mobile Number
//           </label>
//           <input
//             type="tel"
//             id="mobile"
//             className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
//             placeholder="e.g. 9876543210"
//             required
//           />
//         </div>

//         {/* Address Line 1 */}
//         <div className="mb-4">
//           <label
//             htmlFor="address1"
//             className="block font-medium text-[#0f1111] text-[16px]"
//           >
//             Address Line 1
//           </label>
//           <input
//             type="text"
//             id="address1"
//             className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
//             placeholder="House No, Street, Area"
//             required
//           />
//         </div>

//         {/* Address Line 2 */}
//         <div className="mb-4">
//           <label
//             htmlFor="address2"
//             className="block font-medium text-[#0f1111] text-[16px]"
//           >
//             Address Line 2 (Optional)
//           </label>
//           <input
//             type="text"
//             id="address2"
//             className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
//             placeholder="Apartment, Landmark, etc."
//           />
//         </div>

//         {/* Pin Code */}
//         <div className="mb-4">
//           <label
//             htmlFor="pincode"
//             className="block font-medium capitalize text-[#0f1111] text-[16px]"
//           >
//             Pin Code
//           </label>
//           <input
//             type="number"
//             id="pincode"
//             className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
//             placeholder="Enter Pin Code"
//             required
//           />
//         </div>

//         {/* District */}
//         <div className="mb-4">
//           <label
//             htmlFor="district"
//             className="block font-medium capitalize text-[#0f1111] text-[16px]"
//           >
//             District
//           </label>
//           <input
//             type="text"
//             id="district"
//             className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
//             placeholder="District"
//             required
//           />
//         </div>

//         {/* State */}
//         <div className="mb-4">
//           <label
//             htmlFor="state"
//             className="block font-medium capitalize text-[#0f1111] text-[16px]"
//           >
//             State
//           </label>
//           <input
//             type="text"
//             id="state"
//             className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
//             placeholder="State"
//             required
//           />
//         </div>

//         {/* Country */}
//         <div className="mb-4">
//           <label
//             htmlFor="country"
//             className="block font-medium capitalize text-[#0f1111] text-[16px]"
//           >
//             Country
//           </label>
//           <input
//             type="text"
//             id="country"
//             className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
//             placeholder="Country"
//             required
//           />
//         </div>

//         {/* Landmark (Optional) */}
//         <div className="mb-4">
//           <label
//             htmlFor="landmark"
//             className="block font-medium capitalize text-[#0f1111] text-[16px]"
//           >
//             Landmark (Optional)
//           </label>
//           <input
//             type="text"
//             id="landmark"
//             className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
//             placeholder="Nearby landmark"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="mt-6">
//           <button
//             type="submit"
//             className="w-full bg-[#0f1111] text-white font-medium py-2 rounded hover:bg-gray-800"
//           >
//             Save Address
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Address;





const Address = () => {
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

  return (
    <form className="w-full font-Poppins">
      <div className="bg-amber-000 px-4 flex flex-col">
        {/* Title */}
        <div className="pt-4 bg-amber-000">
          <p className="capitalize text-[18px] text-[#0f1111] font-semibold">
            Enter a new delivery address
          </p>
        </div>

        {/* Full Name */}
        <div className="mb-4 mt-4">
          <label
            htmlFor="fullName"
            className="block font-medium text-[#0f1111] text-[16px]"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="border border-black text-[14px] rounded w-full p-2 mt-1"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block font-medium text-[#0f1111] text-[16px]"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
            placeholder="e.g. 9876543210"
            required
          />
        </div>

        {/* Address Line 1 */}
        <div className="mb-4">
          <label
            htmlFor="address1"
            className="block font-medium text-[#0f1111] text-[16px]"
          >
            Address Line 1
          </label>
          <input
            type="text"
            id="address1"
            className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
            placeholder="House No, Street, Area"
            required
          />
        </div>

        {/* Address Line 2 */}
        <div className="mb-4">
          <label
            htmlFor="address2"
            className="block font-medium text-[#0f1111] text-[16px]"
          >
            Address Line 2 (Optional)
          </label>
          <input
            type="text"
            id="address2"
            className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
            placeholder="Apartment, Landmark, etc."
          />
        </div>

        {/* Pin Code */}
        <div className="mb-4">
          <label
            htmlFor="pincode"
            className="block font-medium capitalize text-[#0f1111] text-[16px]"
          >
            Pin Code
          </label>
          <input
            type="number"
            id="pincode"
            className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
            placeholder="Enter Pin Code"
            required
          />
        </div>

        {/* District */}
        <div className="mb-4">
          <label
            htmlFor="district"
            className="block font-medium capitalize text-[#0f1111] text-[16px]"
          >
            District
          </label>
          <input
            type="text"
            id="district"
            className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
            placeholder="District"
            required
          />
        </div>

        {/* State Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="state"
            className="block font-medium capitalize text-[#0f1111] text-[16px]"
          >
            State
          </label>
          <select
            id="state"
            className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
            required
          >
            <option value="">Select State</option>
            {indianStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Country */}
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block font-medium capitalize text-[#0f1111] text-[16px]"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
            value="India"
            readOnly
          />
        </div>

        {/* Landmark (Optional) */}
        <div className="mb-4">
          <label
            htmlFor="landmark"
            className="block font-medium capitalize text-[#0f1111] text-[16px]"
          >
            Landmark (Optional)
          </label>
          <input
            type="text"
            id="landmark"
            className="border border-[#0f1111] text-[14px] rounded w-full p-2 mt-1"
            placeholder="Nearby landmark"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 mb-18">
          <button
            type="submit"
            className="w-full bg-[#4CB19A] text-white font-medium py-2 rounded hover:bg-gray-800"
          >
            Save Address
          </button>
        </div>
      </div>
    </form>
  );
};

export default Address;
