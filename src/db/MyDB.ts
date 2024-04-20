import { Artista } from "../business/entities/Artista";
import { Postagem } from "../business/entities/Postagem";

import mongoose from "mongoose";

const connectUserDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || "mongodb+srv://bruno35418:indaiacult@indaiacult.hdajmzg.mongodb.net/"
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Erro no userDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectUserDB;

export const MyDB = {
    artistas: [] as Artista[],
    postagem: [] as Postagem[]
};
