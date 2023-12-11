import styles from './styles.module.css'

interface Props {
  content: string
}

export const Placeholder = ({ content }: Props) => (
  <div className={styles.placeholder}>{content}</div>
)
