import React from 'react';

// 함수형 컴포넌트
const RequireSignin = props => (
    <div className={ props.isMe ? "me" : "other" }>
        
        {props.name}
    </div>
)
export default RequireSignin;