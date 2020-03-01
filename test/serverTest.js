const chai  = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);

describe("Server", ()=>{

	describe("GET Requset ", ()=>{

		it("It will give the all courses", done =>{
			chai.request(app).get('/api/getList').end((error, res)=>{
				assert.equal(res.status, 200)
				assert.isArray(res.body.data);
				assert.isObject(res.body.data[0])
				done();
			})
		})
	})
})