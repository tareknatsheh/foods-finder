import mongoose from "mongoose";
const Schema = mongoose.Schema;

// an interface representing a document in MongoDB.
interface IRestaurant {
    name: string;
    description: string;
    address: string;
    stars?: number
}

const restaurantSchema = new Schema<IRestaurant>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    stars: { type: Number }
  });

  export default mongoose.model<IRestaurant>('Restaurant', restaurantSchema);