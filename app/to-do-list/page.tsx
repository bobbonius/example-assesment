import Link from 'next/link'
import { fetchToDoLists } from './actions'
import { CreateToDoList } from './components/CreateToDoListForm'
import styles from './styles.module.css'

const ToDoLists = async () => {
  const lists = await fetchToDoLists()

  return (
    <>
      <h1>To Do Lists</h1>

      <div className={styles.createList}>
        <CreateToDoList />

        <ul className={styles.list}>
          {lists.map(list => (
            <li key={list.id} className={styles.listItem}>
              <Link href={`/to-do-list/${list.id}`} className={styles.link}>
                {list.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ToDoLists
