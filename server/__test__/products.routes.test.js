//Necesito exportar Supertest, el Server de index.js, la conexión con Mongo y el poder lanzar el server con Supertest
//4 require
const supertest = require("supertest");
const server = require("../index");
/* const mongoose = require("../config/db_mongo"); */ //Meter la conexión a la base de datos
const request = supertest(server); //Hace algo parecido al npm start

it("Probando JEST", () => {
    expect(1).toBe(1);
});

describe("GET all products", () => {
    it("GET test /api/products", async () => {
        await request
                .get("/api/products") //Como si yo a mano hago una petición GET a esa ruta con Thunder Client
                .expect(200)
    });

    it("GET test /api/products should return an array", async () => {
        const response = await request.get("/api/products");
        expect(response.body).toEqual(expect.any(Array));
    })
})

describe("GET one product", () => {
    it("Dame un producto en concreto", async () => {
        const response = await request
                              .get("/api/products/2")
                              .expect(200);
        //expect(response.body).not.toEqual([]);
        expect(response.body.length).toBe(1);
    });

    it("dame un producto que no exista", async () => {
        const response = await request
                                .get("/api/products/-1") // Devuelve {}?
                                .expect(200)
        // 3 Maneras de hacer lo mismo
        expect(response.body).toEqual([]);
        //expect(response.res.text).toBe("[]");
        //expect(response.body).toEqual(expect.objectContaining([]));
      });
});

describe("POST one product", () => {
    it("Se envia un producto", (done) => {
      request
        .post("/api/products")
        .send({
          id: 13,
          title: "Cervezas Tarde viernes TB",
          price: 0,
          description: "vente de tarde y conoce a DS,FS,CYB,DevOps,UXUI,MKT",
          image: "https://i.pravatar.jpg",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });

    it("Se envia un producto vacio", (done) => {
        request
          .post("/api/products")
          .send({})
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(400)
          .end((err, res) => {
            if (err) return done(err);
            return done();
            });
    });
    it("Se envia un producto con un campo vacio", (done) => {   
        request
          .post("/api/products")
          .send({
            id: 994,
            title: "Cervezas Lunes TB",
            price: 0,
            description: "",
            image: "https://i.pravatar.jpg",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(400)
          .end((err, res) => {
            if (err) return done(err);
            return done();
          });
      });
});

//beforeEach
//beforeAll
//afterEach
//afterAll
afterAll(async () => {
    await server.close(); //Cierro conexión con Express
    /* await mongoose.connection.close(); */ //Cierro la conexión de Mongoose
})