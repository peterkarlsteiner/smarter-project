import * as chai from "chai";
import chaiHttp = require("chai-http");

import { app } from "../src/server";

chai.use(chaiHttp);
const expect = chai.expect;

describe("slash route", () => {
    it("should respond with HTTP 200 status", () => {
        return chai.request(app)
            .get("/")
            .then(res => {
                expect(res.status).to.be.equal(200);
            });
    });

    it("should respond with hello world message", () => {
        return chai.request(app)
            .get("/")
            .then(res => {
                expect(res.text).to.include("Hey there!");
            });
    });

    it("should respond with hello world and custom name, when supplied", () => {
        return chai.request(app)
            .get("/Name")
            .then(res => {
                expect(res.text).to.include("Hey there Name!");
            });
    });
});
