const express = require("express");
const router = express.Router();

// Import route files-ADMIN
// const adminAuthRoute = require("./routes/admin/auth/adminAuthRoute")
// const adminCreationRoute = require("./routes/admin/admins/adminsRoute")
// const userRoutes = require("./routes/admin/user/userRoute");
// const packageRoutes = require("./routes/admin/package/packageRoute");
// Import route files
const adminAuthRoute = require("./routes/admin/auth/adminAuthRoute");
const adminCreationRoute = require("./routes/admin/admins/adminsRoute");
const userRoutes = require("./routes/admin/user/userRoute");
const packageRoutes = require("./routes/admin/package/packageRoute");
// const packageListRoutes = require("./routes/client/package/packageListRoute");
// const packageOrderingRoutes = require("./routes/client/order/packageOrderingRoute");
// const profileRoutes = require("./routes/client/profile/userProfileRoute");
const passwordRecoveryRoutesForAdmin = require("./routes/admin/passwordRecovery/passwordRecoveryRoute");
const adminLoginRoutes = require("./routes/admin/auth/adminAuthRoute");
const menuRoutes = require("./routes/admin/menu/menuRoute");
const pastMenuRoutes = require("./routes/admin/pastMenu/pastMenuRoute");
const searchRoutes = require("./routes/admin/search/searchRoute");
const orderRoutes = require("./routes/admin/order/orderRoute");
const dashboardRoutes = require("./routes/admin/dashboard/dashboardRoute");
const userProfileCompletionRoutes = require("./routes/admin/userProfileCompletion/userProfileCompletionRoute");
const emailNotificationRoutes = require("./routes/admin/emailNotification/emailNotificationRoute");
// Import route files-CLIENT
// const mealSettingsRoutes = require("./routes/client/settings/settingsRoute");
// const clientAuthRoutes = require("./routes/client/auth/clientAuthRoute");
const packageListRoutes = require("./routes/client/package/packageListRoute");
const packageOrderingRoutes = require("./routes/client/order/packageOrderingRoute");
const profileRoutes = require("./routes/client/profile/userProfileRoute");
const profileCompletionRoutes = require("./routes/client/profileCompletion/profileCompletionRoute");
const employeeInformationRoutes = require("./routes/client/information/employeeInformationRoute");
const employeeEventNotificationRoutes = require("./routes/client/event/eventRoute");
const employeeSearchRoutes = require("./routes/client/search/employeeSearchRoute");
// const currentDateMealListRoutes = require("./routes/client/display/currentDateMealListRoute")
const settingsRoutes = require("./routes/admin/settings/settingsRoute");
// const dashboardRoutes = require("./routes/admin/dashboard/dashboardRoute");
const mealSettingsRoutes = require("./routes/client/settings/settingsRoute");
const clientAuthRoutes = require("./routes/client/auth/clientAuthRoute");
const currentDateMealListRoutes = require("./routes/client/display/currentDateMealListRoute");
const holidayRoute = require("./routes/admin/holiday/holidayRoute");
// Assign routes to base router

// ADMIN
router.use("/admin/auth", adminAuthRoute); //for admin use
router.use("/admin/admins", adminCreationRoute);
router.use("/admin/users", userRoutes); //for admin use
router.use("/admin/packages", packageRoutes); //for admin use
// router.use("/admin/login", adminLoginRoutes);
// router.use("/admin/password-recovery", passwordRecoveryRoutesForAdmin); //for admin use
router.use("/admin/menus", menuRoutes);
router.use("/admin/menu/search", searchRoutes);
router.use("/admin/pastmenus", pastMenuRoutes);
router.use("/admin/orders", orderRoutes);
router.use("/admin/settings", settingsRoutes);
router.use("/admin/dashboard", dashboardRoutes);
router.use("/admin/client-profile-completion", userProfileCompletionRoutes);
router.use("/admin/emailNotification", emailNotificationRoutes);
router.use("/admin/holiday", holidayRoute);

// CLIENT
router.use("/client/packages", packageListRoutes); //for client use
router.use("/client/order", packageOrderingRoutes); //for client use
router.use("/client/auth", clientAuthRoutes);
router.use("/client/client-profile", profileRoutes);
router.use("/client/profile-completion", profileCompletionRoutes);
router.use("/client/settings", mealSettingsRoutes);
router.use("/client/employee-information", employeeInformationRoutes);
router.use("/client/event-notification", employeeEventNotificationRoutes);
router.use("/client/search/", employeeSearchRoutes);
router.use("/client/display/", currentDateMealListRoutes);

module.exports = router;
