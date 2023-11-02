import request from "supertest";
import {expect} from 'chai';
// import {app} from './index.js'

const baseUrl = "https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com/dev"

describe("login /login/auth return status 200", ()=>{
    it('should return 200 if success', async () =>{
        const responsePost = await request(baseUrl)
        .post("/login/auth")
        .send({username: "user1", password: "asdfASDF01"});
        expect(responsePost.status).to.equal(200);
    })
    it('should return 401 if not matched or bad request body', async () =>{
        const responsePost = await request(baseUrl)
        .post("/login/auth")
        expect(responsePost.status).to.equal(401);
    })
    it('should return 404 if endpoint is type', async () =>{
        const responsePost = await request(baseUrl)
        .post("/login/auths")
        .send({username: "user1", password: "asdfASDF01"});
        expect(responsePost.status).to.equal(404);
    })
});



