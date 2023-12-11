'use server'

import prisma from '~/lib/prisma'
import { revalidatePath } from 'next/cache'

export const createToDoList = async (formData: FormData) => {
  const title = formData.get('title')?.toString()

  if (!title) return

  await prisma.toDoList.create({ data: { title } })

  revalidatePath(`/to-do-list`)
}

export const fetchToDoLists = async () => {
  const lists = await prisma.toDoList.findMany()

  return lists
}
