import Link from "next/link";
import styles from "../css/Header.module.css";

export default function Header() {
    return (
    <div className="header">
    <h1 className="main-title">Hello! I am Polina &lt;3</h1>
    <ul className={styles.nav}>
        <li>
            <Link href="/">Bio</Link></li>
        <li><Link href="../Comic">Comic</Link></li>
        <li> <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Labs 
                </button>
                <div className={styles.dropdowncontent}>
                    <Link href="../Lab1">Lab 1</Link>
                    <Link href="">Lab 2</Link>
                    <Link href="">Lab 3</Link>
                </div>
            </div>
        </li>
    </ul>
</div>
    )
}