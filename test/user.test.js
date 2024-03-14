import supertest from "supertest"
import { logger } from "../src/aplication/logging.js"
import { web } from "../src/aplication/web.js"
import { getTestUser, removeTestUser,createTestUser } from "./test-util.js"
import bcrypt from "bcrypt"

describe('POST /api/users', function(){

    afterEach(async ()=>{
        await removeTestUser()
    })

    it('should can register user', async () => {
        const result = await supertest(web)
        .post('/api/users')
        .send({
            username: "test",
            password: "12345678",
            name: "test",
        })

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.password).toBeUndefined;
        expect(result.body.data.name).toBe("test");
    })

    // it('should be reject', async () => {
    //     const result = await supertest(web)
    //     .post('/api/users')
    //     .send({
    //         username: "",
    //         password: "",
    //         name: "",
    //     })

    //     expect(result.status).toBe(400);
    //     expect(result.body.errors).toBeDefined();
       
    // })

    // it('should be reject duplicate', async () => {
    //     let result = await supertest(web)
    //     .post('/api/users')
    //     .send({
    //         username: "test",
    //         password: "12345678",
    //         name: "test",
    //     })

    //     expect(result.status).toBe(200);
    //     expect(result.body.data.username).toBe("test");
    //     expect(result.body.data.password).toBeUndefined;
    //     expect(result.body.data.name).toBe("test");

    //     result = await supertest(web)
    //     .post('/api/users')
    //     .send({
    //         username: "test",
    //         password: "12345678",
    //         name: "test",
    //     })

    //     expect(result.status).toBe(400);
    //     expect(result.body.errors).toBeDefined();
      
    // })
})

// describe('POST /api/user/login', function(){

//     beforeEach(async () => {
//         await createTestUser();
//     })

//     afterEach(async () => {
//         await removeTestUser();
//     })

//     it('should be login', async ()=> {
//         const result = await supertest(web)
//         .post('/api/users/login')
//         .send({
//             username: "test",
//             password: "test"
//         })

//         expect(result.status).toBe(200);
//         expect(result.body.data.token).toBeDefined()
//         expect(result.body.token).not.toBe('test')
//     })

//     it('should reject login if request is invalid', async ()=> {
//         const result = await supertest(web)
//         .post('/api/users/login')
//         .send({
//             username: "",
//             password: ""
//         })

//         logger.info(result.body)
//         expect(result.status).toBe(400);
//         expect(result.body.errors).toBeDefined();
//     })

//     it('should reject login if pass is wrong', async ()=> {
//         const result = await supertest(web)
//         .post('/api/users/login')
//         .send({
//             username: "test",
//             password: "salah"
//         })

//         logger.info(result.body)
//         expect(result.status).toBe(401);
//         expect(result.body.errors).toBeDefined();
//     })

//     it('should reject login if username is wrong', async ()=> {
//         const result = await supertest(web)
//         .post('/api/users/login')
//         .send({
//             username: "salah",
//             password: "salah"
//         })

//         logger.info(result.body)
//         expect(result.status).toBe(401);
//         expect(result.body.errors).toBeDefined();
//     })
// })

// describe('GET /api/users/current', function (){
//     beforeEach(async () => {
//         await createTestUser()
//     })

//     afterEach(async () => {
//         await removeTestUser()
//     })

//     it('should can get user', async () => {
//         const result = await supertest(web)
//             .get('/api/users/current')
//             .set('Authorization', 'test')

//         expect(result.status).toBe(200);
//         expect(result.body.data.username).toBe('test')
//         expect(result.body.data.name).toBe('test')
//     })
   
//     it('should be reject token invalid', async () => {
//         const result = await supertest(web)
//             .get('/api/users/current')
//             .set('Authorization', 'salah')

//         expect(result.status).toBe(401);
//         expect(result.body.errors).toBeDefined()
//     })

// })

// describe('PATCH /api/users/current',function (){

//     beforeEach(async () => {
//         await createTestUser()
//     })

//     afterEach(async () => {
//         await removeTestUser()
//     })

//     it('should be can update', async ()=>{
//         const result = await supertest(web)
//             .patch('/api/users/current')
//             .set('Authorization', 'test')
//             .send({
//                 name: 'test baru',
//                 password: 'baru'
//             })

//         expect(result.status).toBe(200)
//         expect(result.body.data.username).toBe("test")
//         expect(result.body.data.name).toBe("test baru")

//         const user = await getTestUser();
    
//         expect( await bcrypt.compare("baru", user.password)).toBe(true)

//         expect
//     })

//     it('should be can update only name', async ()=>{
//         const result = await supertest(web)
//             .patch('/api/users/current')
//             .set('Authorization', 'test')
//             .send({
//                 name: 'test baru',
//             })

//         expect(result.status).toBe(200)
//         expect(result.body.data.username).toBe("test")
//         expect(result.body.data.name).toBe("test baru")

//     })

//     it('should be can update only password', async ()=>{
//         const result = await supertest(web)
//             .patch('/api/users/current')
//             .set('Authorization', 'test')
//             .send({
//                 password: 'baru'
//             })

//         expect(result.status).toBe(200)
//         expect(result.body.data.username).toBe("test")
      
//         const user = await getTestUser();
    
//         expect( await bcrypt.compare("baru", user.password)).toBe(true)
        
//     })

//     it('should reject invalid', async ()=>{
//         const result = await supertest(web)
//             .patch('/api/users/current')
//             .set('Authorization', 'salah')
//             .send({})

//         expect(result.status).toBe(401)

//     })
// })

// describe('PATCH /api/users/logout',function (){

//     beforeEach(async () => {
//         await createTestUser()
//     })

//     afterEach(async () => {
//         await removeTestUser()
//     })

//     it('should be can logout', async ()=>{
//         const result = await supertest(web)
//             .delete('/api/users/logout')
//             .set('Authorization', 'test')
          
//         expect(result.status).toBe(200)
//         expect(result.body.data).toBe('ok')
//         const user = await getTestUser();
//         expect( user.token).toBeNull
//     })

//     it('should reject logout token invalid', async ()=>{
//         const result = await supertest(web)
//             .delete('/api/users/logout')
//             .set('Authorization', 'salah')
          
//         expect(result.status).toBe(401)
      
//     })

// })

