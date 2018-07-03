/**
 * Function:存放一些常量
 * Desc:如：接口地址，字符串常量等
 */

const constants = {

    /**
     * 电商ID
     */
    EBusinessID: "1290116",
    /**
     * 电商加密私钥，快递鸟提供，注意保管，不要泄漏
     */
    AppKey: "e12ce6b8-526b-45da-b091-f728eb72b908",
    /**
     * 单号识别请求url
     */
    ExpressReqURL: "http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx",
    /**
     * 快递公司客户电话html
     */
     ExpressPhoneURL:"https://m.guoguo-app.com/cpCompany.htm",
    /**
     * 保存到本地的，搜索快递记录key
     */
    SeachHistroyKey:"SeachHistroyKey",
    /**
     * 保存到本地的，快递备注记录key
     */
    SeachRemarkKey:"SeachRemarkKey",
    /**
     * 保存到本地的，颜色主题key
     */
    ThemeColorKey:"ThemeColorKey",
    /**
     * 字符串常量
     */
    LogoBaseUrl:"https://www.kuaidi100.com/images/all/",
    HomeRefreshEventKey:"HomeRefreshEventKey",
    ThemeChangeEventKey:"ThemeChangeEventKey",
    NoNewTip:"暂无新的物流信息",
    netFailTip:"网络访问错误",
    EmptyTip:"没有查询到物流信息",
    ErrorTip:"没有查询到物流信息",
    RetryTip:"点击重试",
    RemarkTip:"运单备注",
    EmptyReasonTitleTip:"可能原因:",
    EmptyReasonTip:"1.你的快递刚刚寄出\n2.你输入的运单号或选择的快递公司有误",
    SearchingTip:"正在加载物流信息…",
    Onload:"在途中",
    Signed:"已签收",
    WrongBag:"问题件",
    //2-在途中,3-签收,4-问题件
    NoHistoryRecord:'NoHistoryRecord',
    //
    ExitTip:'再按一次退出应用',

}

export default constants;