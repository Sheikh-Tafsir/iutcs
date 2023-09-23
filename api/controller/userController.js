const User = require("../models/users");

const bcrypt = require("bcrypt");
const { getToken } = require("../../../middleware/token/adminJWT");
const moment = require("moment"); // Import the moment library

const {
  updateCreatedAt,
} = require("../../../utils/adminUtils/userControllerUtils");
const newGeneratedPassword = require("../auth/passwordRecovery/generatePassword");
const nodemailer = require("nodemailer");
const { response } = require("express");
require("dotenv").config();

const createUser = async (req, res) => {
  try {
    const { name, employee_id, email } = req.body;

    let transporter = await nodemailer.createTransport({
      service: "gmail",
      port: 587,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });

    // Hash the generated password
    const hashedNewGeneratedPassword = await bcrypt.hash(
      newGeneratedPassword,
      10
    );

    // Check if the employee ID already exists in the database
    const existingEmployee = await User.findOne({
      where: { employee_id: employee_id },
    });
    if (existingEmployee) {
      return res.status(409).json({
        code: 409,
        error: "Employee ID already exists",
      });
    }

    // Check if the email already exists in the database
    const existingEmail = await User.findOne({ where: { email: email } });
    if (existingEmail) {
      return res.status(409).json({ code: 409, error: "Email already exists" });
    }

    // const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");

    const data = await User.create({
      name: name,
      employee_id: employee_id,
      email: email,
      active: "yes",
      password: hashedNewGeneratedPassword,
    });

    // Manually update the createdAt timestamp
    // await updateCreatedAt(data);

    let info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "MealTime account Creation",
      html: `<table style="background-color:#f5f5f5;width:100%;max-width:600px;margin:0 auto;font-family:Arial, sans-serif;font-size:16px;line-height:1.4;color:#333;">
      <tr>
        <td style="padding:20px;">
          <h3 style="font-weight:600;margin-bottom:20px;">
            <span style="color:rgb(0,176,224);margin-top:0">Meal Time</span>
          </h3>
          <p style="margin-bottom:10px;">Hello,</p>
          <p style="margin-bottom:10px;"><b>${name}</b></p>
          <p style="margin-bottom:10px;">This is a temporary password for your account <b>${newGeneratedPassword}</b>, please login with this password and change immediately </p>
     
          <p style="text-align: center; margin-top: 50px; font-size: 12px;">Powered by &copy; DreamOnline Ltd.</p>
        </td>
      </tr>
    </table>`,
    });

    res.status(200).json({
      code: 200,
      data: data,
      message: "New user added successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ code: 400, error: error.message });
  }
};

const getAllUser = async (req, res) => {
  const information_schema_column_numbers = 3;

  try {
    const users = await User.findAll();

    const QueryForFindingTotalNumberOfColumnsInUserTable = `
    SELECT COUNT(*) AS total_columns_in_user_table
    FROM information_schema.columns
    WHERE table_schema = 'meal_time'
      AND table_name = 'users';
    `;
    const QueryForFindingTotalNumberOfColumnsInEmergencyContactTable = `
    SELECT COUNT(*) AS total_columns_in_emergency_contact_table
    FROM information_schema.columns
    WHERE table_schema = 'meal_time'
      AND table_name = 'emergencycontacts';
    `;

    const getTotalNumberOfColumnsInUserTable = await sequelize.query(
      QueryForFindingTotalNumberOfColumnsInUserTable,
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    const getTotalNumberOfColumnsInEmergencyContactTable =
      await sequelize.query(
        QueryForFindingTotalNumberOfColumnsInEmergencyContactTable,
        {
          type: Sequelize.QueryTypes.SELECT,
        }
      );

    let ignorefields = [
      "role",
      "user_id",
      "createdAt",
      "updatedAt",
      "password",
      "id",
    ];

    // res.status(200).json({ code: 200, data: usersWithFormattedData });
    const usersWithFormattedData = users.map(async (user) => {
      // Calculate filled fields and profile completion percentage
      let filledFieldsForUserTable = 0;
      let filledFieldsForEmergencyContactTable = 0;

      // Use await inside an async function to fetch emergency_contact
      const emergency_contact = await EmergencyContact.findOne({
        where: { user_id: user.user_id },
      });

      // Count filled fields in the user table
      for (const field in user.dataValues) {
        if (ignorefields.includes(field)) {
          continue;
        }
        if (user.dataValues[field]) {
          filledFieldsForUserTable++;
        }
      }

      // Check if emergency_contact exists before processing
      if (emergency_contact) {
        for (const field in emergency_contact.dataValues) {
          if (ignorefields.includes(field)) {
            continue;
          }
          if (emergency_contact.dataValues[field]) {
            filledFieldsForEmergencyContactTable++;
          }
        }
      }

      // Calculate the total number of fields (excluding ignored fields)
      const totalField = parseInt(
        getTotalNumberOfColumnsInUserTable[0].total_columns_in_user_table +
          getTotalNumberOfColumnsInEmergencyContactTable[0]
            .total_columns_in_emergency_contact_table -
          9
      );

      // Calculate the profile completion progress percentage
      const profileCompletionProgressPercentage =
        ((filledFieldsForUserTable + filledFieldsForEmergencyContactTable) /
          totalField) *
        100;

      const responseData = {
        name: user.name,
        user_id: user.user_id,
        employee_id: user.employee_id,
        email: user.email,
        active: user.active,
        gender: user.gender,
        type: user.type,
        designation: user.designation,
        current_status: user.current_status,
        profile_completion: {
          percentage: profileCompletionProgressPercentage.toFixed(0),
        },
        end_of_contract: moment(user.end_of_contract).format("YYYY-MM-DD"),
        release_date: moment(user.release_date).format("YYYY-MM-DD"),
        gross_salary: user.gross_salary,
        department: user.department,
        g_account: user.g_account,
        joining_date: moment(user.joining_date).format("YYYY-MM-DD"),
      };
      // console.log(responseData)
      return responseData;
    });

    // Use Promise.all to await the results of the map operation
    Promise.all(usersWithFormattedData)
      .then((formattedUsers) => {
        res.status(200).json({ code: 200, data: formattedUsers });
      })
      .catch((error) => {
        console.error("Error:", error);
        res.status(500).json({ code: 500, error: "Internal Server Error" });
      });
  } catch (error) {
    console.error(error);
    res.status(400).json({ code: 400, error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUser,
};
