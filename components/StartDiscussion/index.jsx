import Image from "next/image";
import styles from "./StartDiscussion.module.css";
export default function StartDiscussion({ src }) {
  return (
    <div className={styles.createDiscussion}>
      <Image src={src} alt="User Profile" height={50} width={50} />
      <input type="text" placeholder="Start a discussion" />
    </div>
  );
}
