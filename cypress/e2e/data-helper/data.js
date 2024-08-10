class Data {

    headerPayload() {
        return {
            'accept': 'application/json',
            'content-type': 'application/json'
        }
    }

    formHeaderPayload() {
        return {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    newPetBodyPayload() {
        return {
            "id": 2828,
            "category": {
                "id": 0,
                "name": "Cat"
            },
            "name": "Caddy",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
        }
    }

    updateBodyPayload() {
        return {
            'name': 'Mırmır',
            'status': 'pending'
        }
    }

    placeOrderBodyPayload() {
        return {
            "id": 2828,
            "petId": 2828,
            "quantity": 0,
            "shipDate": "2024-08-08T14:58:06.480Z",
            "status": "placed",
            "complete": true
        }
    }

    updatePetBodyPayload() {
        return {
            "id": 2828,
            "category": {
                "id": 0,
                "name": "Dog"
            },
            "name": "doggie2",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
        }
    }

    createUserBodyPayload() {
        return {
            "id": 111,
            "username": "john28",
            "firstName": "johann",
            "lastName": "Brahm",
            "email": "string",
            "password": "string",
            "phone": "string",
            "userStatus": 0
        }
    }

    updateUserBodyPayload() {
        return {
            "id": 2020,
            "username": "john2020",
            "firstName": "Johannes",
            "lastName": "Brahms",
            "email": "string",
            "password": "string",
            "phone": "string",
            "userStatus": 0
        }
    }

}

export default Data