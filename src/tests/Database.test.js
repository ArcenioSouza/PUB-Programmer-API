import app from "../app.js";
import supertest from "supertest";
import assert from "assert";

describe("Testes no banco de dados", () => {

   const MOCK_EMPLOYEE = {
      _id: "6250807c7c344defa555a8b5",
      name: "Arcenio Francisco",
      job: "Gerente",
      wage: 10000,
      cpf: 33334362809,
      __v: 0,
   };

   it("GET /employees deve retornar o status 200", (done) => {
      supertest(app)
         .get("/employees")
         .expect(200)
         .end((error, res) => {
            if (error) throw error;
            done();
         });
   });

   it("GET /employee/:id deve retornar o objeto mocado", (done) => {
      supertest(app)
         .get("/employee/6250807c7c344defa555a8b5")
         .expect(MOCK_EMPLOYEE)
         .end((error, res) => {
            if (error) throw error;
            done();
         });
   });
});
