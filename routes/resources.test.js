// import app
import app from "../app";
// import supertest
import request from "supertest";
// import jest
import { test, expect } from "@jest/globals";
import {pool} from '../db'

test("test to see if get route works", async () => {
	const response = await request(app).get("/api/resources");
	expect(response.status).toEqual(200);
	expect(response.body).toEqual({
		success: true,
		payload: expect.any(Array),
	});
	for (let i = 0; i < response.body.payload.length; i++) {
		const resourceObject = response.body.payload[i];
		expect(resourceObject).toStrictEqual({
			author: expect.any(String),
			category: expect.any(String),
			difficulty: expect.any(Number),
			estimated_time: expect.any(String),
			format: expect.any(String),
			id: expect.any(Number),
			link: expect.any(String),
			title: expect.any(String),
		});
	}
});


test('test to see that the information is posted when typed', async ()=> {
	const author = 'Coach';
	const category = 'UX/UI';
	const difficulty= 1;
	const estimated_time= '< 30 mins';
	const format = 'Video';
	const link = 'https://www.youtube.com/watch?v=-yrnWnN0g9o';
	const title= 'React With Firebase';
    //const created = {task: task, completionDate: completionDate}
    const response = await  request(app)
        .post("/api/resources")
        .send({ author, category, difficulty, estimated_time, format, link, title });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
        success: true,
        payload: {
             author: 'Coach',
			 category :'UX/UI',
	 		 difficulty: 1,
	 		 estimated_time:'< 30 mins',
	 		 format: 'Video',
			 id: expect.any(Number),
	 		 link:'https://www.youtube.com/watch?v=-yrnWnN0g9o',
			 title:'React With Firebase',
			
        },
    });
})
afterAll(async () => {
    await pool.end();
});