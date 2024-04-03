import {NextResponse} from 'next/server'
import {prisma} from '@/libs/prisma'

export async function GET() {
    const data = await prisma.SetLists.findMany()
  return NextResponse.json(data)
}

export async function POST(request) {    
  const res = await request.json()
  const data = await prisma.SetLists.create({
    data: res
  }) 
 return NextResponse.json("Creando Datos Nuevos")
}