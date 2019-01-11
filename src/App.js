import React, { Component } from 'react';
import './App.css';
// compos
import SBChatting from './components/SBChatting'; // 채팅 컴포넌트


class App extends Component {
  render() {
    return (
      <div className="App">
      
        <SBChatting isPopupStyle="true"/> {/* 채팅 컴포넌트 호출 */}

        <h1>React.js - Firebase Chatting Component Project</h1>
        <h2>요구사항</h2>
        <ul>
          <li>React.js and ReactDOM</li>
          <li>Google Firebase 계정과 프로젝트</li>
        </ul>
        <h2>사용방법</h2>
        <ul>
          <li>Firebase Web 초기화설정 (src/components/sb-chatting/firebaseConfig.js)</li>
          <li>Firebase Auth의 Google 로그인 활성화</li>
          <li>Firebase Realtime Database의 보안 규칙 설정</li>
        </ul>
<pre id="FRDB_RULE">{
`{
  "rules": {
    ".read": false,
    ".write": false
    // 채팅용으로 아래 추가
    , "FireChat": {
      ".read": true,
      ".write": ".write": "auth != null"
    }
  }
}`
}</pre>
        <h2>링크</h2>
        <ul className="Links">
          <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">React.js</a></li>
          <li><a href="https://firebase.google.com/docs/guides/" target="_blank" rel="noopener noreferrer">Firebase</a></li>
          <li><a href="https://uigradients.com/#Mantle" target="_blank" rel="noopener noreferrer">Background Color</a></li>
          <li> </li>
        </ul>
      </div>
    );
  }
}

export default App;
