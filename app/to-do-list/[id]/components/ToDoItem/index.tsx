'use client'

import { deleteToDoItem } from '../../actions'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'

interface Props {}

export const ToDoItem = ({ listId, itemId, title, description, priority }: Props) => {
  const deleteItem = async () => await deleteToDoItem(listId, itemId)

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge>{priority}</Badge>
      </CardContent>
      <CardFooter>
        <Button onClick={deleteItem}>Delete</Button>
      </CardFooter>
    </Card>
  )
}
