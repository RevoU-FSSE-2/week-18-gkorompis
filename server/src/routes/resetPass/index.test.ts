import request from "supertest";
import {expect} from 'chai';


const baseUrl = "https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com/dev"


describe("login /resetToken", ()=>{
    it('should return 500 if token is not found', async () =>{
        const responsePost = await request(baseUrl)
        .post("/resetToken/password/request")
        .send({});
        expect(responsePost.status).to.equal(500);
    });
});

