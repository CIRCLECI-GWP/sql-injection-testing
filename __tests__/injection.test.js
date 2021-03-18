const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);

const db = require("../db");

let createTableSQL =
    "CREATE TABLE IF NOT EXISTS `users` ( `id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL , `email` VARCHAR(100) NOT NULL , `name` VARCHAR(240) NOT NULL)";

let insert =
    "INSERT INTO users (name, email) VALUES ('user1@test.com','User 1'), ('user2@test.com','User 2'), ('user3@test.com','User 3')";

test("Test malicious data exposure", (done) => {
    db.run(createTableSQL, function (err) {
        db.run(insert, function () {
            let maliciousUserId = `1' OR 1=1;--`;

            request
                .post("/users/fetch/")
                .send({ id: maliciousUserId })
                .set("Accept", "application/json")
                .expect(200)
                .expect("Content-Type", /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    //Should not return more than one record
                    expect(res.body.data.length).toBeLessThan(2);
                    done();
                });
        });
    });
});
