
import mongoose from "mongoose";

const Wishlist = new mongoose.Schema({
    itemName: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    purchaseUrl: { type: String },
    purchased: {type: String}
}, { timestamps: true });

export default mongoose?.models?.Wishlist || mongoose.model("Wishlist", Wishlist)