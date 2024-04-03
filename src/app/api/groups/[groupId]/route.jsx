import {NextResponse} from 'next/server'
import {prisma} from '@/libs/prisma'

export async function GET(request,{params}) {
    const group = await prisma.Group.findUnique({
        where : {
            id: Number(params.groupId)
        }
    })    
  return NextResponse.json(group) //si no existe el registro, group == null
}

export async function PUT(request,{params}) {
    const data = await request.json()
    const group_update = await prisma.Group.update({
        where: {
            id: Number(params.groupId)
        },
        data: {
          name: data.name,
          members: data.members
        },
      })
  return NextResponse.json("actualizando")
}

export async function DELETE(request, {params}) {
    const delete_group = await prisma.Group.delete({
        where:{
            id: Number(params.groupId)
        }
    })
  return NextResponse.json("Grupo borrado")
}


