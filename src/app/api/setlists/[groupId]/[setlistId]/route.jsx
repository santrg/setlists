import { NextResponse } from 'next/server'
import {prisma} from '@/libs/prisma'


export async function GET(request, {params}) {
  const setlist = await prisma.SetLists.findUnique({
    where: {
      id: Number(params.setlistId)
    }
  })  
  
  return NextResponse.json(setlist)
}


export async function DELETE(request, {params}) {  
    const res = await prisma.SetLists.delete({
      where: {
        id : Number(params.setlistId)        
      }    
    })
  return NextResponse.json("borrando setlist")
}


export async function PUT(request, {params}) {
  const data = await request.json()
  const res = await prisma.SetLists.update({
    where:{
      id : Number(params.setlistId)
    },
    data: {
      name : data.name,
      list : data.list,
      groupId : Number(data.groupId)
    },
  })
  return NextResponse.json("actualizando setlist")
}

