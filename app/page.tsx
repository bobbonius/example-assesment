import Link from 'next/link'
import { Button } from '~/components/ui/button'

export default function Home() {
  return (
    <>
      <h1>Live Ticket Group</h1>
      <Button asChild>
        <Link href="/to-do-list">Go to To Do Lists</Link>
      </Button>
    </>
  )
}
