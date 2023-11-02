import request from "supertest";
import {expect} from 'chai';


const baseUrl = "https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com/dev"


describe("login /serviceRequest", ()=>{
    it('should return 200 when invoked', async () =>{
        const responsePost = await request(baseUrl)
        .post("/logout")
        .send({});
        expect(responsePost.status).to.equal(200);
    });
});