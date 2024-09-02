import Rests from "../models/restaurant";
import { Request, Response } from "express";

export const handleGetAllRestaurants = async (req: Request, res: Response) => {
    try {
        const allRests = await Rests.find({});
        res.json(allRests);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export const handleAddNewRestaurant = async (req: Request, res: Response) => {
    try {
        const newRest = new Rests(req.body);
        const saveResp = await newRest.save();
        console.log(saveResp);

        res.send(saveResp);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export const handleGetRestaurantById = async (req: Request, res: Response) => {
    try {
        const requestedRest = await Rests.findById(req.params.id);
        res.json(requestedRest);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export const handleDeleteRestaurantById = async (req: Request, res: Response) => {
    try {
        const deleteResp = await Rests.findByIdAndDelete(req.params.id);
        console.log(deleteResp);
        res.send(deleteResp);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export const handleEditRestaurantById = async (req: Request, res: Response) => {
    try {
        const editResp = await Rests.findByIdAndUpdate(req.params.id, { ...req.body })
        console.log(editResp);
        res.send(editResp);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}