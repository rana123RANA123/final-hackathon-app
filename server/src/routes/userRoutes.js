const express = require("express");
const router = express.Router();
const { Doctors, Patients, Appointments } = require("../models/userModel");
const mongoose = require("mongoose");
const dayjs = require("dayjs");

// Read Accounts data
router.get("/doctors", async (req, res) => {
    const productsData = await Doctors.find();
    res.json(productsData);
});

// Read a specific Account data
router.get("/doctors/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = await Doctors.findById(userId);

        if (!userData) {
            return res.status(404).json({ message: "User not found!" });
        }
        res.status(200).json({ userData: userData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

const date = dayjs().format("YYYY-MM-DD");
const time = dayjs().format("HH:mm:ss");
const productRandomId = Math.floor((1 + Math.random()) * 0x10000000000).toString(16).substring(1);

// Create Account
router.post("/addDoctor", async (req, res) => {
    try {
        const doctorData = new Doctors({
            _id: new mongoose.Types.ObjectId(),
            doctorName: req.body.doctorName,
            doctorSpecialization: req.body.doctorSpecialization,
            doctorContact: req.body.doctorContact,
            doctorSchedule: req.body.doctorSchedule,
            doctorDate: req.body.doctorData,
            date: date,
            time: time,
            productRandomId: productRandomId,
        });
        const result = await doctorData.save();
        res.json(result);
    } catch (error) {
        console.log("error : ", error);
        res.json({ error: "something went wrong!" });
    }
});

// delete Account
router.delete("/deleteDoctor/:id", async (req, res) => {
    try {
        console.log(req.params);
        const userId = req.params.id;
        const deletedUser = await Doctors.findByIdAndDelete(userId);
        console.log("deletedProduct: ", deletedUser);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found!" });
        }

        return res.json({ message: "user deleted successfuly!" });
        console.log("user deleted successfuly")
    } catch (error) {
        return res.status(500).json({ error: error.message });
        console.log("user deleted not-successfuly")
    }
});

// Update Account

// router.put("/updateProduct/:id", async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const dataToBeUpdate = new Products({
//             productName: req.body.productName,
//             productType: req.body.productType,
//             productColor: req.body.productColor,
//             productPrice: req.body.productPrice,
//         });

//         const updatedData = await Products.findByIdAndUpdate(userId, dataToBeUpdate, {
//             new: true,
//         });
//         console.log("updatedData : ", updatedData);

//         if (!updatedData) {
//             return res.status(404).json({ message: "User not found!" });
//         }

//         return res.json({ message: "user updated successfuly!" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });



// -------------------------------------------------------------------------------------------------


router.get("/patients", async (req, res) => {
    const productsData = await Patients.find();
    res.json(productsData);
});

// Read a specific Account data
router.get("/patients/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = await Patients.findById(userId);

        if (!userData) {
            return res.status(404).json({ message: "User not found!" });
        }
        res.status(200).json({ userData: userData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// const seconddate = dayjs().format("YYYY-MM-DD");
// const secondtime = dayjs().format("HH:mm:ss");
// const secondproductRandomId = Math.floor((1 + Math.random()) * 0x10000000000).toString(16).substring(1);

// Create Account
router.post("/addPatient", async (req, res) => {
    try {
        const patientData = new Patients({
            _id: new mongoose.Types.ObjectId(),
            patientName: req.body.patientName,
            patientCNIC: req.body.patientCNIC,
            patientContact: req.body.patientContact,
            patientMedical: req.body.patientMedical,
            date: date,
            time: time,
            productRandomId: productRandomId,
        });
        const result = await patientData.save();
        res.json(result);
    } catch (error) {
        console.log("error : ", error);
        res.json({ error: "something went wrong!" });
    }
});

// delete Account
router.delete("/deletePatient/:id", async (req, res) => {
    try {
        console.log(req.params);
        const userId = req.params.id;
        const deletedUser = await Patients.findByIdAndDelete(userId);
        console.log("deletedProduct: ", deletedUser);
        
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found!" });
        }
        
        return res.json({ message: "user deleted successfuly!" });
        console.log("user deleted successfuly")
    } catch (error) {
        return res.status(500).json({ error: error.message });
        console.log("user deleted not-successfuly")
    }
});


// -------------------------------------------------------------------------------------------------


router.get("/appointments", async (req, res) => {
    const productsData = await Appointments.find();
    res.json(productsData);
});

// Read a specific Account data
router.get("/appointments/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = await Appointments.findById(userId);

        if (!userData) {
            return res.status(404).json({ message: "User not found!" });
        }
        res.status(200).json({ userData: userData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// const seconddate = dayjs().format("YYYY-MM-DD");
// const secondtime = dayjs().format("HH:mm:ss");
// const secondproductRandomId = Math.floor((1 + Math.random()) * 0x10000000000).toString(16).substring(1);

const doctorRandomId = Math.floor((1 + Math.random()) * 0x10000000000).toString(16).substring(1);
const patientRandomId = Math.floor((1 + Math.random()) * 0x10000000000).toString(16).substring(1);

const available = "available"

// Create Account
router.post("/addAppointment", async (req, res) => {
    try {
        const appointmentsData = new Appointments({
            _id: new mongoose.Types.ObjectId(),
            doctorRandomId: doctorRandomId,
            patientRandomId: patientRandomId,
            appointmentNotes: req.body.appointmentNotes,
            originalTime: req.body.originalTime,
            available: available,
            originalDate: req.body.originalDate,
        });
        const result = await appointmentsData.save();
        res.json(result);
    } catch (error) {
        console.log("error : ", error);
        res.json({ error: "something went wrong!" });
    }
});

// delete Account
router.delete("/deleteAppointment/:id", async (req, res) => {
    try {
        console.log(req.params);
        const userId = req.params.id;
        const deletedUser = await Appointments.findByIdAndDelete(userId);
        console.log("deletedProduct: ", deletedUser);
        
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found!" });
        }
        
        return res.json({ message: "user deleted successfuly!" });
        console.log("user deleted successfuly")
    } catch (error) {
        return res.status(500).json({ error: error.message });
        console.log("user deleted not-successfuly")
    }
});


module.exports = router;
