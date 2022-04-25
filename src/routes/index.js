import employees from "./employeesRoute.js";
import foods from "./foodsRoute.js";
import suppliers from "./suppliersRoute.js";
import drinks from "./drinksRoute.js";
import logins from "./loginsRoute.js";

export default (app) => {
  app.use(employees);
  app.use(foods);
  app.use(suppliers);
  app.use(drinks);
  app.use(logins);
};
