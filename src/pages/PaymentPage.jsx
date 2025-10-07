import { useState } from "react";
import { FaMoneyBillWave, FaCreditCard, FaGooglePay, FaWallet } from "react-icons/fa";
// import { Button } from "@/components/ui/button"; // optional if using shadcn
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  const handleContinue = () => {
    if (!selected) {
      alert("Please select a payment method");
      return;
    }

    if (selected === "razorpay") {
      navigate("/payment"); // navigate to Razorpay page
    } else if (selected === "cod") {
      navigate("/order-success", { state: { method: "Cash on Delivery" } });
    } else {
      alert(`${selected} payment option coming soon!`);
    }
  };

  const methods = [
    { id: "razorpay", title: "Credit / Debit / UPI (Razorpay)", icon: <FaCreditCard className="text-blue-500" /> },
    { id: "cod", title: "Cash on Delivery", icon: <FaMoneyBillWave className="text-green-500" /> },
    { id: "upi", title: "UPI / Google Pay / PhonePe", icon: <FaGooglePay className="text-indigo-500" /> },
    { id: "wallet", title: "Wallets (Paytm / Amazon Pay)", icon: <FaWallet className="text-orange-500" /> },
  ];

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">Select Payment Method</h2>

      <div className="space-y-3">
        {methods.map((m) => (
          <div
            key={m.id}
            onClick={() => setSelected(m.id)}
            className={`flex items-center justify-between border p-4 rounded-xl cursor-pointer transition 
              ${selected === m.id ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:bg-gray-50"}`}
          >
            <div className="flex items-center gap-3">
              {m.icon}
              <span className="font-medium">{m.title}</span>
            </div>
            <input
              type="radio"
              name="method"
              checked={selected === m.id}
              readOnly
              className="accent-blue-500 scale-125"
            />
          </div>
        ))}
      </div>

      {/* <Button
        onClick={handleContinue}
        className="w-full mt-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
      >
        Continue
      </Button> */}
    </div>
  );
};

export default PaymentPage;
