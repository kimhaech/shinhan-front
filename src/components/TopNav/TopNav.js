import Logo from "../../assets/images/logo.svg";
import styles from "./TopNav.module.css";
import btnLogo from "../../assets/images/ic_share.svg";
const TopNav = () => {
  const APP_DOWNLOAD_LINK =
    "https://open.shinhansec.com/phone/goM.jsp?p=OTUxMCYmJiZTJiY*&amp;v=2";
  const onClickShareButton = () => {
    const currentUrl = window.document.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("주소가 복사되었습니다.");
      })
      .catch((err) => console.log(err));
  };
  // 현재 사이트 링크 클립보드 복사하고 알림창 띄우기
  return (
    <div className={styles.container}>
      {/* 로고 */}
      <img src={Logo} alt="logo" />
      {/* 오른쪽 섹션 */}
      {/* 다운로드버튼 */}
      <div className={styles.rightContainer}>
        <a href={APP_DOWNLOAD_LINK} target="_blank">
          <div className={styles.roundButton}>앱 다운로드</div>
        </a>

        {/* 공유버튼 */}
        <div className={styles.sharebtn} onClick={onClickShareButton}>
          <img src={btnLogo} alt="btn" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
