import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';

interface Cat extends Document {
  name: string;
  age: number;
  breed: string;
}

@Injectable()
export class CatsService {
  CatSchema = new Schema<Cat>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    breed: { type: String, required: true },
  });

  CatModel = mongoose.model<Cat>('Cat', this.CatSchema);
  async findAll(): Promise<any> {
    let result;
    try {
      await mongoose.connect(
        'mongodb+srv://tester:1234@lego-db.lssxr4t.mongodb.net/?retryWrites=true&w=majority',
      );
      console.log('Connected to MongoDB');

      const cats = await this.CatModel.find({});
      console.log(cats);
      result = cats;
    } catch (error) {
      console.error('Error connecting to MongoDB', error);
    }

    return result;
  }

  async addCat(cat: Cat): Promise<any> {
    let result;
    try {
      await mongoose.connect(
        'mongodb+srv://tester:1234@lego-db.lssxr4t.mongodb.net/?retryWrites=true&w=majority',
      );
      console.log('Connected to MongoDB');

      const user = await this.CatModel.insertMany([cat]);

      console.log(user);
      result = 'Succesfully add new cat';
    } catch (error) {
      console.error('Error connecting to MongoDB', error);
      result = 'could not add new cat';
    }

    return result;
  }
}
