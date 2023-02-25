function Head(){
  return(
    <head>
      <title>CREVIS</title>
    </head>
  );
}

function Header(){
  return(
    <header>
      <div className="nav-bar">
        <a>CREVICE/LOGO</a>
        <div>
          <a className="bar-element" href="#club-description">소개</a>
          <a className="bar-element" href="#activity-box">활동</a>
          <a className="bar-element" href="#club-member">동아리원</a>
          <a className="bar-element" href="/english">한/영</a>
        </div>
      </div>
    </header>
  );
}

function AboutCrevise(){
  return(
    <div className="intro-box">
      <p id="slogan">생각의 틀을 깨다</p>
      <p id="club-name">CREVICE</p>
    </div>
  );
}

function ClubDesc(){
  return(
    <div className="club-description" id="club-description">
      <p id="title">크레비스는..</p>
      <p>crevice는 '(빙하따위의)갈라진 틈' 이라는 뜻의 영어단어입니다.</p>
      <p>빙하가 깨지면 갈라진 틈이 생기는 것 처럼</p>
      <p>저희 크레비스는 생각의 틀을 깨서 새로운 것을 창조한다는 슬로건을 가지고 있습니다.</p>
    </div>
  );
}

function Activity(){
  return(
    <div className="activity-box" id="activity-box">
      <p id="title">활동</p>
      <div id="activity-desc">활동 슬라이더 삽입</div>
    </div>
  );
}

function ClubMember(){
  return(
    <div className="club-member" id="club-member">
      <p id="title">동아리원</p>
      <div id="member-list">
        <div className="members">1</div>
        <div className="members">2</div>
        <div className="members">3</div>
      </div>
    </div>
  )
}

function Footer(){
  return(
    <div className="footer">
      <p>Copyright 2023. WP목정빈. All rights reserved.</p>
    </div>
  );
}

/*
function SLider(){
  return(
    <div className="banner">
      <SliderContent></SliderContent>
    </div>
  );
}

function SliderContent(){
  return(
    <p>OUT OF FRAME</p>
  )
}*/


function App() {
  return (
    <div className="App">
      <Head></Head>
      <Header></Header>
      <AboutCrevise></AboutCrevise>
      <ClubDesc></ClubDesc>
      <Activity></Activity>
      <ClubMember></ClubMember>
      <Footer></Footer>
    </div>
  );
}

export default App;