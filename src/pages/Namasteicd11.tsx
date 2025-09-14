import React, { useState } from "react";
import Header from "@/components/Header";
const mappedDiseases = [
  { namasteCode: "NM001", namasteName: "Sugar (Type 1)", namasteDescription: "Insulin ki kami se hone wali bimari.", icdCode: "5A00", icdName: "Type 1 Diabetes Mellitus", icdDescription: "Pancreas produces little or no insulin." },
  { namasteCode: "NM002", namasteName: "BP High", namasteDescription: "Raktchaap adhik hone ki sthiti.", icdCode: "BA40", icdName: "Hypertension", icdDescription: "Persistently elevated blood pressure." },
  { namasteCode: "NM003", namasteName: "Yaadasht Kamzor", namasteDescription: "Bhoolepan aur sochne ki takleef.", icdCode: "8A20", icdName: "Alzheimer Disease", icdDescription: "Progressive memory loss and cognitive decline." },
  { namasteCode: "NM004", namasteName: "Mann Udaas", namasteDescription: "Lambi samay tak udaasi aur ruchi ki kami.", icdCode: "6A40", icdName: "Major Depressive Disorder", icdDescription: "Persistent sadness and loss of interest." },
  { namasteCode: "NM005", namasteName: "Paani se Dast", namasteDescription: "Ganda paani se hone wali pet ki bimari.", icdCode: "1A00", icdName: "Cholera", icdDescription: "Acute diarrheal disease caused by Vibrio cholerae." },
  { namasteCode: "NM006", namasteName: "Saans ki Takleef", namasteDescription: "Saans lene mein dikkat.", icdCode: "CA22", icdName: "Asthma", icdDescription: "Chronic inflammatory disease of the airways." },
  { namasteCode: "NM007", namasteName: "Bukhar aur Thakan", namasteDescription: "Viral infection ke lakshan.", icdCode: "1F40", icdName: "Influenza", icdDescription: "Acute viral infection of the respiratory tract." },
  { namasteCode: "NM008", namasteName: "Pet Dard", namasteDescription: "Pet mein jalan ya dard.", icdCode: "DA01", icdName: "Gastritis", icdDescription: "Inflammation of the stomach lining." },
  { namasteCode: "NM009", namasteName: "Jode Dard", namasteDescription: "Haddi aur jodon mein sujan aur dard.", icdCode: "FA00", icdName: "Rheumatoid Arthritis", icdDescription: "Autoimmune disorder affecting joints." },
  { namasteCode: "NM010", namasteName: "Skin Infection", namasteDescription: "Twacha par daag, sujan ya jalan.", icdCode: "1F60", icdName: "Cellulitis", icdDescription: "Bacterial infection of the skin and underlying tissues." }
];

const Namasteicd11 = () => {
  const [search, setSearch] = useState("");

  const filteredDiseases = mappedDiseases.filter((item) =>
    `${item.namasteCode} ${item.namasteName} ${item.namasteDescription} ${item.icdCode} ${item.icdName} ${item.icdDescription}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );
 const handleLogout = () => {
    // Add your logout logic here
    console.log("Logged out");
  };

  return (
    
    <div>
    
          <Header isLoggedIn onLogout={handleLogout} />
            <div className="p-6 max-w-6xl mx-auto"></div>
      <h1 className="text-2xl font-bold text-primary mb-4 text-center">🩺 Namaste × ICD-11 Disease Mapping</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by code, name, or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded shadow-sm">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="p-2 border">🪷 Namaste Code</th>
              <th className="p-2 border">Disease Name</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">🧠 ICD-11 Code</th>
              <th className="p-2 border">Disease Name</th>
              <th className="p-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredDiseases.length > 0 ? (
              filteredDiseases.map((item) => (
                <tr key={item.namasteCode} className="hover:bg-gray-50">
                  <td className="p-2 border font-mono text-xs">{item.namasteCode}</td>
                  <td className="p-2 border font-semibold">{item.namasteName}</td>
                  <td className="p-2 border text-sm text-gray-600">{item.namasteDescription}</td>
                  <td className="p-2 border font-mono text-xs">{item.icdCode}</td>
                  <td className="p-2 border font-semibold">{item.icdName}</td>
                  <td className="p-2 border text-sm text-gray-600">{item.icdDescription}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-500">
        Powered by Med Aid System · ICD-11 Reference · Namaste Healthtech
      </div>
    </div>
  );
};

export default Namasteicd11;