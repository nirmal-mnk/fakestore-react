import styles from "./Footer.module.css";
import { knowus, connect, makemoney, helpyou } from "../../Utils/data";
export default function Footer() {
  return (
    <div className={styles.footerbg}>
      <div className={styles.footerSub}>
        <div className="row">
          <div className="col-lg-3">
            <h5>Get to Know Us</h5>
            <ul>
              {knowus.map((data) => (
                <li key={data}>{data}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Connect With Us</h5>
            <ul>
              {connect.map((data) => (
                <li key={data}>{data}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Make Money With Us</h5>
            <ul>
              {makemoney.map((data) => (
                <li key={data}>{data}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Let Us help You</h5>
            <ul>
              {helpyou.map((data) => (
                <li key={data}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerlogo}>
        <p>&copy; 2022. All Rights Reserved.</p>
        <img src="Images/amazon_PNG11.png" alt="Logo" />
      </div>
    </div>
  );
}
