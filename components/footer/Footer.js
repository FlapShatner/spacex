import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li id={styles['copyright']}>SpaceX © 2022</li>
        <li>
          <a href='#'>Twitter</a>
        </li>
        <li>
          <a href='#'>Youtube</a>
        </li>
        <li>
          <a href='#'>Instagram</a>
        </li>
        <li>
          <a href='#'>Flickr</a>
        </li>
        <li>
          <a href='#'>LinkedIn</a>
        </li>
        <li>
          <a href='#'>Privacy Policy</a>
        </li>
        <li>
          <a href='#'>Suppliers</a>
        </li>
      </ul>
    </div>
  )
}
