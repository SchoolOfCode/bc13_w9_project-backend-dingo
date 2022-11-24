// import app
import app from "../app";
// import supertest
import request from "supertest";
// import jest
import { test, expect } from "@jest/globals";

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
