import React from 'react';
import './index.css';
// Compos
import OnlineUser from './OnlineUser'; // 온라인 유저

/* 실시간 로그인 유저 */
class UserList extends React.Component {
    constructor(props){
        super(props);
        // 상태 설정
        this.state = {
            onlineUsers: [] // 실시간 유저 목록
        }
    }

    // @Override Lifecycle
    componentDidMount() {
        // 실시간 접속자 감지 
        this.props.fireDB.ref('FireChat/users').on('value', async ds => { // console.log(ds.val());
            // 데이터 key값 병합 작업
            const newData = []; let obj = null;
            await ds.forEach( cds => { // 이거 비동기라 -_-;;
                obj = { key: cds.key, ...cds.val() };
                newData.push( obj );
            });
            obj = null;
            this.setState({ onlineUsers: newData });
        });
    }

    // 렌더링
    render(){
        const listRender2OnlineUser = (data) => { // console.log(data);
            return data.map( (userinfo, i) => {
                return (
                    <OnlineUser
                        key={userinfo.key /* 사용자 key = uid */ }
                        name={userinfo.name /* 사용자 displayName */ }
                        isMe={userinfo.key===this.props.myInfo.uid /* 나 여부 */}
                    />
                );
            });
        }; // END listRender2OnlineUser();

        return (
            <div id="UserList">
                <div className="title clearfix">
                    <span className="right">
                        <button
                           onClick={this.props.onSignout}
                        >
                            로그아웃
                        </button>
                    </span>
                    유저 리스트
                </div>

                <div className="users">
                    { listRender2OnlineUser(this.state.onlineUsers) /* 접속자 목록 랜더링 */ }
                </div>
            </div> 
        );
    } // END render();
}

UserList.defaultProps = {
    fireDB: null,
    myInfo: null
}

export default UserList;