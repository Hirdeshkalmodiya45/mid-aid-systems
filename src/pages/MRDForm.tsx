import React, { useState } from "react";

interface MRDFormProps {
  patient: {
    id: string;
    name: string;
    age?: number;
    gender?: string;
    address?: string;
    contact?: string;
    mrdNumber?: string;
  };
  onClose: () => void;
}

const MRDForm: React.FC<MRDFormProps> = ({ patient, onClose }) => {
  const [dob, setDob] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [dischargeDate, setDischargeDate] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");
  const [testReports, setTestReports] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [dischargeSummary, setDischargeSummary] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mrdData = {
      patientId: patient.id,
      mrdNumber: patient.mrdNumber,
      name: patient.name,
      age: patient.age,
      gender: patient.gender,
      address: patient.address,
      contact: patient.contact,
      dob,
      emergencyContact,
      admissionDate,
      dischargeDate,
      diagnosis,
      treatment,
      testReports,
      doctorName,
      dischargeSummary,
      notes,
    };

    console.log("Submitted MRD Data:", mrdData);
    onClose();
  };

  return (
    <div className="p-4 bg-white rounded shadow w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Enter MRD Data for {patient.name}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Patient Demographics */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">MRD Number</label>
            <input type="text" defaultValue={patient.mrdNumber} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth</label>
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Emergency Contact</label>
            <input type="text" value={emergencyContact} onChange={(e) => setEmergencyContact(e.target.value)} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contact Number</label>
            <input type="text" defaultValue={patient.contact} className="w-full border p-2 rounded" />
          </div>
        </div>

        {/* Clinical Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Date of Admission</label>
            <input type="date" value={admissionDate} onChange={(e) => setAdmissionDate(e.target.value)} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date of Discharge</label>
            <input type="date" value={dischargeDate} onChange={(e) => setDischargeDate(e.target.value)} className="w-full border p-2 rounded" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Chief Complaint / Diagnosis</label>
          <input type="text" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} className="w-full border p-2 rounded"  />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Treatment Plan</label>
          <textarea value={treatment} onChange={(e) => setTreatment(e.target.value)} className="w-full border p-2 rounded" rows={3} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Test Reports</label>
          <textarea value={testReports} onChange={(e) => setTestReports(e.target.value)} className="w-full border p-2 rounded" rows={2} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Discharge Summary</label>
          <textarea value={dischargeSummary} onChange={(e) => setDischargeSummary(e.target.value)} className="w-full border p-2 rounded" rows={3} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Doctor's Name</label>
          <input type="text" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Additional Notes</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full border p-2 rounded" rows={2} />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 pt-4">
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default MRDForm;