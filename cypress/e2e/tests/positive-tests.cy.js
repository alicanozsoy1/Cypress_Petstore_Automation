import Data from "../data-helper/data"
import Params from "../data-helper/params"

describe("Petstore Positive Tests", () => {

    const data = new Data;
    const params = new Params;
    var url = params.url();

    it("Find By Status", function () {
        cy.request({
            method: "GET",
            url: url + "/v2/pet/findByStatus?status=available"
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
            })
    });

    it("Add New Pet", function () {
        cy.request({
            method: "POST",
            url: url + "/v2/pet",
            body: data.newPetBodyPayload()
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
            })
    })

    it("Get Pet By ID", function () {
        cy.request({
            method: "GET",
            url: url + "/v2/pet/2828",
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
            })
    });

    it("Check Inventory", function () {
        cy.request({
            method: "GET",
            url: url + "/v2/store/inventory",
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
            })
    });

    it("Update Pet By ID", function () {
        cy.request({
            method: "POST",
            url: url + "/v2/pet/2828",
            headers: data.formHeaderPayload(),
            body: data.updateBodyPayload()
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
            })
    })

    it("Place Order", function () {
        cy.request({
            method: "POST",
            url: url + "/v2/store/order",
            body: data.placeOrderBodyPayload()
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
            })
    })

    it("Update Existing Pet", function () {
        cy.request({
            method: "PUT",
            url: url + "/v2/pet",
            body: data.updatePetBodyPayload()
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
            })
    })

    it("Create User", function () {
        cy.request({
            method: "POST",
            url: url + "/v2/user",
            body: data.createUserBodyPayload()
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
            })
    })

    it("Update User", function () {
        cy.request({
            method: "PUT",
            url: url + "/v2/user/john28",
            headers: data.headerPayload(),
            body: data.updateUserBodyPayload()
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
            })
    })

    it("Delete Pet By ID", function () {
        cy.request({
            method: "DELETE",
            url: url + "/v2/pet/2828",
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
            })
    })

    it("Delete Order By ID", function (){
        cy.request({
            method: "DELETE",
            url: url + "/v2/store/order/2828"
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
            })
    })

    it("Delete User By Username", function (){
        cy.request({
            method: "DELETE",
            url: url + "/v2/user/john2020"
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
            })
    })

});