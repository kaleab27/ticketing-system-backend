import express from "express";
import {
  createTicket,
  getTickets,
  updateTicket,
} from "../controllers/ticket.controller";
import { authenticate, isAdmin } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/tickets", authenticate, createTicket);
router.get("/tickets", authenticate, getTickets);
router.put("/tickets/:id", authenticate, isAdmin, updateTicket);

export default router;
