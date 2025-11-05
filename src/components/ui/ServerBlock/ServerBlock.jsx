import serverImg from "@assets/serverBlock/serverImg1.png";
import star from "@assets/serverBlock/star.svg";
import icon1 from "@assets/serverBlock/icon1.svg";
import icon2 from "@assets/serverBlock/icon2.svg";
import icon3 from "@assets/serverBlock/icon3.svg";
import icon4 from "@assets/serverBlock/icon4.svg";
import clipboard from "@assets/serverBlock/clipboard.svg";
import './ServerBlock.css'

export default function ServerBlock() {
  return (
    <div className="server-card">
      <div className="server-header">
        <div className="server-badge">
          <span className="new-badge">NEW</span>
          <span className="server-ip">{'test'}</span>
        </div>
        <h3 className="server-title">{'test'}</h3>
      </div>

      <div className="server-content">
        <p className="server-description">{'test'}</p>

        <div className="server-features">
          <div>{'test'}</div>
          <div>{'test'}</div>
          <div>{'test'}</div>
          <div>{'test'}</div>
        </div>

        <div className="server-info-grid">
          <div className="info-item">
            <span className="info-label">Версия</span>
            <span className="info-value">{'test'}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Общий онлайн</span>
            <span className="info-value">{'test'}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Голосов</span>
            <span className="info-value">{'test'}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Баллов</span>
            <span className="info-value">{'test'}</span>
          </div>
        </div>
      </div>

      <button className="connect-button">
        Подключиться
      </button>
    </div>
  );
}
