import employees from "./employeesRoute.js";
import foods from "./foodsRoute.js";
import suppliers from "./suppliersRoute.js";

export default (app) => {
  app.use(employees);
  app.use(foods);
  app.use(suppliers);
};
