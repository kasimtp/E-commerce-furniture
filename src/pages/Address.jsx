const Address = () => {
  return (
    <form>

    
    <div className="w-full font-Poppins">
      <div className="bg-amber-000 px-4 flex flex-col">
        <div className="pt-4 bg-amber-000">
            <p className="capitalize text-[14px] font-Poppins font-semibold">
                Enter a new delivery address

            </p>
        </div>

        <div className="mb-4 mt-4">
          <label
            htmlFor="name"
            className="block text-sm  font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-zinc-300 text-[10px] rounded w-full p-2 mt-1"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium  text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="name"
            className="border text-[10px] border-zinc-300 rounded w-full  p-2 mt-1"
            placeholder="Address"
            required
          />
        </div>

         <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium capitalize text-gray-700"
          >
              pic code
          </label>
          <input
            type="number"
            id="name"
            className="border text-[10px] border-zinc-300 rounded w-full p-2 mt-1"
            placeholder="pin code"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium capitalize text-gray-700"
          >
          
            district
          </label>
          <input
            type="text"
            id="name"
            className="border text-[10px] border-zinc-300 rounded w-full p-2 mt-1"
            placeholder=" district"
            required
            
            
          />
        </div>

        

         <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium capitalize text-gray-700"
          >
           state
          </label>
          <input
            type="text"
            id="name"
            className="border text-[10px] border-zinc-300 rounded w-full p-2 mt-1"
            placeholder=" state"
            required
          />
        </div>
      </div>
    </div>
    </form>
  );
};

export default Address;
