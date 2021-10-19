interface IProps { //* 定义props类型 1.为了方便观看 2.防止出现不能将类型“xxx”分配给类型“IntrinsicAttributes”。 类型“IntrinsicAttributes”上不存在属性“xxx”。错误
    setValText: Function;
    text: string;
}
// 第一个参数为props，组件传的值都可以从props中获取
const Som = (props: IProps) => {
    // 获取到父组件传的值
    const { text, setValText } = props;

    const updateFatherVal = () => {
        setValText('aa')
    }
    return (
        // 使用父组件传值
        <div>子组件收到的text：{text}
            <button onClick={updateFatherVal}>修改</button>
        </div>
    )
}

export default Som;