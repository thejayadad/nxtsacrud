'use server'
import wishlist from "@/models/Wishlist"
import db from "./db"

export const getWishlist = async (query = '') => {
    try {
        db.connect()

        //include when finishing the search. other wise its just:
        //const items without the searchQuery
        const searchQuery = query ? { itemName: { $regex: query, $options: 'i' } } : {};

        // Find the items based on the search query
        const items = await wishlist.find(searchQuery);
        return items
    } catch (error) {
        console.log("Error " + error)
        throw new Error('failed to get wishlist ' + error)
    }
}

export const getItemById = async (id) => {
    try {
        db.connect()
        const getItem = await wishlist.findById(id)
        return getItem
    } catch (error) {
        console.log("Error " + error)
        throw new Error('failed to get wishlist item ' + error)
    }
}