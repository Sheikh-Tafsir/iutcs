const moment = require("moment");
// const { updateCreatedAt } = require("../utils/adminUtils/userControllerUtils");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_id: {
      type: DataTypes.INTEGER,
    },
    role: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    // date_of_birth: {
    //   type: DataTypes.STRING,
    // },
    gender: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    designation: {
      type: DataTypes.STRING,
    },
    current_status: {
      type: DataTypes.STRING,
    },
    end_of_contract: {
      type: DataTypes.DATE,
    },
    release_date: {
      type: DataTypes.DATE,
    },
    gross_salary: {
      type: DataTypes.STRING,
    },
    department: {
      type: DataTypes.STRING,
    },
    name_in_nid: {
      type: DataTypes.STRING,
    },
    g_account: {
      type: DataTypes.STRING,
    },
    joining_date: {
      type: DataTypes.DATE,
    },
    blood_group: {
      type: DataTypes.STRING,
    },
    religion: {
      type: DataTypes.STRING,
    },
    contact: {
      type: DataTypes.STRING,
    },
    personal_email: {
      type: DataTypes.STRING,
    },
    bank_account_number: {
      type: DataTypes.STRING,
    },
    bank_account_name: {
      type: DataTypes.STRING,
    },
    name_in_etin: {
      type: DataTypes.STRING,
    },
    etin: {
      type: DataTypes.STRING,
    },
    nid_number: {
      type: DataTypes.STRING,
    },
    present_address: {
      type: DataTypes.STRING,
    },
    permanent_address: {
      type: DataTypes.STRING,
    },
    nid: {
      type: DataTypes.STRING,
    },
    tin: {
      type: DataTypes.STRING,
    },
    ssc_certificate: {
      type: DataTypes.STRING,
    },
    hsc_certificate: {
      type: DataTypes.STRING,
    },
    hons_certificate: {
      type: DataTypes.STRING,
    },
    last_office_clearance: {
      type: DataTypes.STRING,
    },
    last_office_salary_certificate: {
      type: DataTypes.STRING,
    },
    tax_return_documents: {
      type: DataTypes.STRING,
    },
    passport_size_photo: {
      type: DataTypes.STRING,
    },
    passport: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: false, // If you don't have timestamps in your table, set this to false
  }
);

// Hook to update createdAt before creating a new user
User.beforeCreate((user, _) => {
  user.createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
});

// Hook to update updatedAt before updating a user
User.beforeUpdate((user, _) => {
  user.updatedAt = moment().format("YYYY-MM-DD HH:mm:ss");
});

module.exports = User;
