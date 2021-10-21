import React from "react";
export const store = {name:'初始化数据'}
export const Context = React.createContext(store) //* 创建一个context */

//* action
export const reducer = (state, action) => {
    switch (action.type) {
        case 'change':
            return {name:"修改了数据"}
        default:
            return {name:"默认数据"};
    }
}