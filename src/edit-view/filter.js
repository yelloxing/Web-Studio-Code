
// 外来文本统一过滤处理

export default function (oralStr) {

    // 把tab统一变成空格
    let tab = "";
    for (let i = 0; i < this._tabSpace; i++) {
        tab += " ";
    }

    return oralStr.replace(/\t/g, tab);
};