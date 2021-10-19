interface IProps {
    defaultSlot: object;
}

const Com = (props: IProps) => {
    //* 获取插槽内容
    const { defaultSlot } = props;
    return (<div>
        下面是插槽内容:
        <div>{defaultSlot}</div>
    </div>);
}

export default Com;