import { fetchToDoList } from './actions'
import { AddToDoItem } from './components/AddToDoItem'
import { ToDoItem } from './components/ToDoItem'
import styles from './styles.module.css'
import type { Metadata } from 'next'
import prisma from '~/lib/prisma'
import { Placeholder } from './components/Placeholder'
import { Button } from '~/components/ui/button'
import Link from 'next/link'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = Number(params.id)
  const todo = await prisma.toDoList.findUnique({ where: { id } })

  if (!todo) {
    return {
      title: 'A to do list',
    }
  }

  return {
    title: todo.title,
  }
}

const ToDoList = async ({ params }: Props) => {
  const id = params.id

  if (!id) return

  const list = await fetchToDoList(Number(id))

  if (!list) return

  const items = list.items

  if (items.length === 0) return <Placeholder content="No items yet" />

  return (
    <>
      <h2>{list?.title}</h2>
      <div className={styles.container}>
        <AddToDoItem id={id} />

        <h2>Items</h2>

        {items.map(({ id, title, description, priority }) => (
          <ToDoItem
            key={id}
            listId={list.id}
            itemId={id}
            title={title}
            description={description}
            priority={priority}
          />
        ))}
      </div>
      <Button asChild>
        <Link href="/to-do-list">Go back</Link>
      </Button>
    </>
  )
}

export default ToDoList
