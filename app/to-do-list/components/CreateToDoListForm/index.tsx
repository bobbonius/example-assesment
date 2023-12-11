'use client'

import { Label } from '~/components/ui/label'
import { createToDoList } from '../../actions'
import styles from './styles.module.css'
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'

export function CreateToDoList() {
  return (
    <form action={createToDoList} className={styles.container}>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="title">Title</Label>
        <Input type="title" id="title" name="title" placeholder="title" />
      </div>

      <Button type="submit">Create to do list</Button>
    </form>
  )
}
