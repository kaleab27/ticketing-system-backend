import { Request, Response } from "express";
import Ticket from "../models/ticket.model";
import { AuthRequest } from "../middlewares/auth.middleware";

export const createTicket = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description } = req.body;
    const ticket = new Ticket({ user: req.user.id, title, description });
    await ticket.save();
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Error creating ticket", error });
  }
};

export const getTickets = async (req: AuthRequest, res: Response) => {
  try {
    const tickets =
      req.user.role === "admin"
        ? await Ticket.find()
        : await Ticket.find({ user: req.user.id });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tickets", error });
  }
};

export const updateTicket = async (req: AuthRequest, res: Response) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      res.status(404).json({ message: "Ticket not found" });
      return;
    }

    ticket.status = req.body.status;
    await ticket.save();

    res.json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Error updating ticket", error });
  }
};
