import Data from '../data-helper/data';
import Params from '../data-helper/params';

describe("Petstore Negative Tests", () => {
    const data = new Data;
    const params = new Params;
    var url = params.url();

    it("Find By Status", function () {
        cy.request({
            method: "GET",
            url: url + "/v2/pet/findByStatus?"
        })
            .then(function (response) {
                expect(response.status).to.eq(200);
                expect(response.body).to.deep.equal([]);
            })
    });

    it("Add New Pet", function () {
        cy.request({
            method: "POST",
            url: url + "/v2/pet",
            failOnStatusCode: false
        })
            .then(function (response) {
                expect(response.status).to.eq(415)
            })
    })

    it("Get Pet By ID", function () {
        cy.request({
            method: "GET",
            url: url + "/v2/pet/0",
            failOnStatusCode: false
        })
            .then(function (response) {
                expect(response.status).to.eq(404)
            })
    });

    it("Check Inventory", function () {
        cy.request({
            method: "GET",
            url: url + "/v2/store/inventory123213",
            failOnStatusCode: false
        })
            .then(function (response) {
                expect(response.status).to.eq(404)
            })
    });

    it("Update Pet By ID", function () {
        cy.request({
            method: "POST",
            url: url + "/v2/pet/0",
            headers: data.formHeaderPayload(),
            body: data.updateBodyPayload(),
            failOnStatusCode: false
        })
            .then(function (response) {
                expect(response.status).to.eq(404)
            })
    })

    it("Place Order", function () {
        cy.request({
            method: "POST",
            url: url + "/v2/store/order",
            headers: data.headerPayload(),
            failOnStatusCode: false,
        })
            .then(function (response) {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.eq("No data")
            })
    })

    it("Update Existing Pet", function () {
        cy.request({
            method: "PUT",
            url: url + "/v2/pet",
            body: {
                "id": "asdads"
            },
            failOnStatusCode: false
        })
            .then(function (response) {
                expect(response.status).to.eq(500)
                expect(response.body.message).to.eq("something bad happened")
            })
    })

    it("Create User", function () {
        cy.request({
            method: "POST",
            url: url + "/v2/user",
            headers: data.headerPayload(),
            failOnStatusCode: false
        })
            .then(function (response) {
                expect(response.status).to.eq(405)
                expect(response.body.message).to.eq("no data")
            })
    })

    it("Update User", function () {
        cy.request({
            method: "PUT",
            url: url + "/v2/user/john28",
            headers: data.headerPayload(),
            failOnStatusCode: false
        })
            .then(function (response) {
                expect(response.status).to.eq(405)
                expect(response.body.message).to.eq("no data")
            })
    })

    it("Delete Pet By ID", function () {
        cy.request({
            method: "DELETE",
            url: url + "/v2/pet/0",
            failOnStatusCode: false
        })
            .then(function (response) {
                expect(response.status).to.eq(404)
            })
    })

    it("Delete Order By ID", function (){
        cy.request({
            method: "DELETE",
            url: url + "/v2/store/order/0",
            failOnStatusCode: false
        })
            .then(function (response) {
                expect(response.status).to.eq(404)
                expect(response.body.message).to.eq("Order Not Found")
            })
    })

    it("Delete User By Username", function (){
        cy.request({
            method: "DELETE",
            url: url + "/v2/user/",
            headers: data.headerPayload(),
            failOnStatusCode: false
        })
            .then(function (response) {
                expect(response.status).to.eq(405)
                expect(response.body.code).to.eq(405)
                expect(response.body.type).to.eq("unknown")
            })
    })

})