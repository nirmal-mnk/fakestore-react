import styles from "./Banner.module.css";
export default function Banner(props) {
  return (
    <div className={styles.bannerMain}>
      <img src={props.bannerSrc} alt="Banner Image" />
    </div>
  );
}
