'use client'

import { Label } from '~/components/ui/label'
import { addToDoItem } from '../../actions'
import styles from './styles.module.css'
import { Input } from '~/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { Button } from '~/components/ui/button'

interface Props {
  id: string
}

export function AddToDoItem({ id }: Props) {
  const clientAction = async (formData: FormData) => await addToDoItem(formData, Number(id))

  return (
    <form action={clientAction} className={styles.form}>
      <div className={styles.inputs}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input type="title" id="title" name="title" placeholder="title" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Input type="description" id="description" name="description" placeholder="description" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Select name="priority">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">low</SelectItem>
              <SelectItem value="medium">medium</SelectItem>
              <SelectItem value="high">high</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button type="submit">Create To Do Item</Button>
    </form>
  )
}
