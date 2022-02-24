import styles from "./Comment.module.css";
import Image from "next/image";
export default function Comment({
  src,
  name,
  time,
  comment,
  likes,
  isPrincipal,
  children,
  likedByActualUser,
}) {
  return (
    <>
      <div className={`${isPrincipal ? styles.firstComment : ""}`}>
        <div className={styles.comment}>
          <div className={styles.userProfile}>
            <Image src={src} alt="User Profile" height={50} width={50} />
          </div>
          <div className={styles.commentContent}>
            <h3>
              {name} <span>{time}</span>
            </h3>
            <p>{comment}</p>
            <div className={styles.actionButtons}>
              <button
                className={`${styles.like} ${
                  likedByActualUser ? styles.liked : ""
                }`}
              >
                Comments {likes}
              </button>
              <button className={styles.reply}>Reply</button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
