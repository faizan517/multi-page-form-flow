
import React from "react";

const corporateData = [
  { id: 1, name: "Alpha Corp", email: "contact@alphacorp.com", address: "123 Alpha Road" },
  { id: 2, name: "Beta Solutions", email: "info@betasolutions.com", address: "456 Beta Street" },
  { id: 3, name: "Gamma Enterprises", email: "hello@gammaenterprises.com", address: "789 Gamma Ave" },
];

export default function CorporateList() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Corporate List</h1>
      <div className="overflow-x-auto rounded-lg shadow border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">#</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Name</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Email</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Address</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {corporateData.map((corp) => (
              <tr key={corp.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{corp.id}</td>
                <td className="px-4 py-3 font-medium">{corp.name}</td>
                <td className="px-4 py-3">{corp.email}</td>
                <td className="px-4 py-3">{corp.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
