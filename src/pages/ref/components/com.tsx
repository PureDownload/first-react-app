import React from "react"
// import {withTranslation} from 'react-i18next'
const Com = (props: any,ref:any) => {
    
    return (
        <div>子组件</div>
    )
}
// export default Com //* hook函数创建的组件没有ref
// export default withTranslation('translation', { withRef: true })(Com) //* react-i18next 需要安装，todo 还未测试
export default React.forwardRef(Com) //* 获取失败
