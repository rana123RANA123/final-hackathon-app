const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    doctorName: String,
    doctorSpecialization: String,
    doctorContact: String,
    doctorSchedule: String,
    doctorDate: String,
    date: String,
    time: String,
  },
  { collection: "doctors", versionKey: false }
);

const Doctors = mongoose.model("doctors", doctorSchema);

// --------------------------------------------------------------------------------------------------


const patientSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    patientName: String,
    patientCNIC: String,
    patientContact: String,
    patientMedical: String,
    date: String,
    time: String,
  },
  { collection: "patients", versionKey: false }
);

const Patients = mongoose.model("patients", patientSchema);


// ----------------------------------------------------------------------------------------------


const appointmentSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    doctorRandomId: String,
    patientRandomId: String,
    appointmentNotes: String,
    originalTime: String,
    originalDate: String,
    available: String,
  },
  { collection: "appointments", versionKey: false }
);

const Appointments = mongoose.model("appointments", appointmentSchema);


module.exports = { Doctors ,Appointments, Patients };
