import { conectDb } from "@/lib/config";
import toDomodel from "@/lib/models/model";
import axios from "axios";
import { log } from "console";
import { NextResponse } from "next/server";
const loadDb= async ()=>{
  await conectDb();
};
 loadDb()
export async function GET (request:any) {
  const todos = await toDomodel.find();
    return NextResponse.json(todos)
};

export async function POST (request:any ) {
  
  
  const {title,discription} = await request.json();
 
  
  const newTodo = await toDomodel.create({title,discription});

  return NextResponse.json({message:"ToDo created"})
}
export async function DELETE (request:any ) {

  
  const id = await request.nextUrl.searchParams.get('mongoId');
 
  const todoDlted = await toDomodel.findOneAndDelete({_id:id})
  
 

  return NextResponse.json({message:"Deleted"})
};

export async function PUT (request:any ) {

  
  const idfromPrams = await request.nextUrl.searchParams.get('mongoId');
 console.log(idfromPrams);
 
  const todoDlted = await toDomodel.findByIdAndUpdate(idfromPrams,{
    $set:{
      isComplted:true
    }
  })
  
 

  return NextResponse.json({message:"Todo Updated"})
}