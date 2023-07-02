import './header.scss';

function Header() {
  return (
    <div>
      <div className="header-container">
        <div className="main-wrapper">
          <div className="header-logo box">
            <div>로고</div>
          </div>
          <div className="header-search-wrapper">
            <input className="search-bar" type="text" placeholder="검색어를 입력하세요." />
          </div>
        </div>
        <div className="header-character box">캐릭터</div>
      </div>

      <div className="menu-container">
        <div className="menu-wrapper">
          {/* 반복문으로 처리 예정 */}
          <div className="menu-item">홈</div>
          <div className="menu-item">공모전</div>
          <div className="menu-item">대외활동</div>
          <div className="menu-item">자격증</div>
          <div className="menu-item">어학</div>
          <div className="menu-item">인턴</div>
          <div className="menu-item">취준job담</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
