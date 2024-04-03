import {NextResponse} from 'next/server'
import {prisma} from '@/libs/prisma'

export async function GET(request,{params}) {
    const setlists = await prisma.SetLists.findMany({
        where : {
            groupId: Number(params.groupId)
        }
    })    
  return NextResponse.json(setlists) //si no existen setlists de ese grupo setlists = []
}

