import { prismaClient } from "../src/aplication/database.js"
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"

export const removeTestUser = async () => {
   await prismaClient.user.deleteMany({
        where: {
            username: "test"
        }
    })
} 

export const createTestUser = async () => {
  await prismaClient.user.create({
       data: {
        username : "test",
        password : await bcrypt.hash('test', 10),
        name: "test",
        token: "test"
       }
    })
}

export const getTestUser = async () => {
    return prismaClient.user.findUnique({
        where: {
         username : "test",
        }
     })
}

export const deleteAllContact = async () => {
    await prismaClient.contact.deleteMany({
        where: {
         username : "test",
        }
     })
}

export const createContactTest = async () => {
    await prismaClient.contact.create({
       data:{
           username: 'test',
           first_name: 'test',
           last_name: 'test',
           email: 'test@gmail.com',
           phone: '081214321432'
        } 
    })
}

export const getContactTest = async () =>{
    return prismaClient.contact.findFirst({
        where:{
            username: 'test'
        }
    })
}

export const createManyContactTest = async () => {
    for (let i = 0; i < 15; i++) {
        await prismaClient.contact.create({
            data:{
                username: 'test',
                first_name: `test ${i}`,
                last_name: `test ${i}`,
                email: `test${i}@gmail.com`,
                phone: `081214321432${i}`
             } 
         }) 
    }
}

export const deleteAllAddress = async () => {
    await prismaClient.address.deleteMany({
        where: {
            contact: {
                username : "test",
            }
        }
    })
}


export const createAddressTest = async () => {
    const contactId = await getContactTest()
    await prismaClient.address.create({
        data:{
            contact_id: contactId.id,
            street: "jalan test",
            city: "kota test",
            province: "provinsi test",
            country: "negara test",
            postal_code: "111111",
        }
    })
}

export const getAddressTest = async (contactId) => {

    return prismaClient.address.findFirst({
        where:{
            contact: {
                username: 'test'
            }
        },   
    })
}