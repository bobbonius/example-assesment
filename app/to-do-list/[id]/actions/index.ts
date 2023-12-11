'use server'

import prisma from '~/lib/prisma'
import { revalidatePath } from 'next/cache'

export const fetchToDoList = async (id: number) => {
  const list = await prisma.toDoList.findUnique({ where: { id }, include: { items: true } })

  return list
}

export const addToDoItem = async (formData: FormData, id: number) => {
  const title = formData.get('title')?.toString()
  const description = formData.get('description')?.toString()
  const priority = formData.get('priority')?.toString()

  if (!title || !description || !priority) return

  await prisma.toDoListItem.create({
    data: { toDoListId: id, title, description, priority, completed: false },
  })

  revalidatePath(`/to-do-list/${id}`)
}

export const deleteToDoItem = async (listId: number, itemId: number) => {
  await prisma.toDoListItem.delete({ where: { id: itemId } })

  revalidatePath(`/to-do-list/${listId}`)
}

export const updateToDoItem = async (formData: FormData, id: number) => {}
export const completeToDoItem = async (formData: FormData, id: number) => {}
