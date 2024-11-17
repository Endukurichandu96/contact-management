import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();


export const createContact = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, phoneNumber, companyName, jobTittle } = req.body;
        const contactDetails = await prisma.contact.create({
            data: {
                firstName,
                lastName,
                email,
                phoneNumber,
                companyName,
                jobTittle
            },
        });
        console.log(contactDetails);
        res.send('Data inserted successfully');
    } catch (error) {
        res.status(500).send('Error inserting data');
    }
};

export const getAllContactDetails = async (req: Request, res: Response) => {
    try {
        const allContactDetails = await prisma.contact.findMany();
        res.json(allContactDetails);
    } catch (error) {
        res.status(500).send(' retrieving data');
    }
};


export const getContactDetailsById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const contactDetail = await prisma.contact.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        if (!contactDetail) {
            return res.status(404).send('Contact detail not found');
        }
        res.json(contactDetail);
    } catch (error) {
        res.status(500).send('Error retrieving data');
    }
};

export const updateContactDetails = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { phoneNumber, companyName, jobTittle } = req.body;
        const updatedContactDetail = await prisma.contact.update({
            where: {
                id: parseInt(id),
            },
            data: {
                phoneNumber,
                companyName,
                jobTittle
            },
        });
        res.send('Data updated successfully');
    } catch (error) {
        res.status(500).send('Error updating data');
    }
};

export const deletContactDetails = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.contact.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.send('Data deleted successfully');
    } catch (error) {
        res.status(500).send('Error deleting data');
    }
};