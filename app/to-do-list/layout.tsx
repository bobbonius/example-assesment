import { ReactNode } from 'react'
import styles from './styles.module.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Assessment Playground',
  description: 'Build your To Do app here!',
}

export default function Layout({ children }: { children: ReactNode }) {
  return <section className={styles.container}>{children}</section>
}
