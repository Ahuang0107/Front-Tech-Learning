//自定义标签正则
var REPLACE_CUSTOM_REGEXP = /{\$.+?}/g; // 匹配由{}包裹的$开头内容，最小匹配
//属性标签正则
var REPLACE_ATTR_REGEXP = /{(\w+\s?)+}/;    // 匹配由{}包裹的内容，比如{Entity Name}
//日期标签正则
var REPLACE_DATE_REGEXP = /{(CY|PY)\|.+?}/g;    //匹配由{}包谷，里面CY或者PY开头的内容，最小匹配，比如{CY|YYYY年度}，<H100>{CY|YYYY/12/31}公允价值
//数据标签正则
var TAG_REGEXP = /^\[.+\]$/;    // 匹配由[]包裹的内容
// 表格特殊值标签前缀

class Cell{
    constructor(props) {
        //标签类型
        this.type = "";
        //年份类型(CY/PY)
        this.yearType = "";
        //年份匹配结果
        this.yearMatchData = "";
        //公式类型(POSITIVE/NEGATIVE)
        this.formulaType = "";
        //符号类型
        this.signType = "";
        //引用表类型
        this.linkType = "";
        //引用表名称
        this.linkSheet = "";
        //是否为行列表标签
        this.isRowListTag = false;
        //引用行类型
        this.linkRowType = "";
        //引用行符号处理
        this.linkRowSign = "";
        //引用条件行
        this.linkConditionRow = "";
        //引用条件列
        this.linkConditionCol = "";
        //目标列标签
        this.targetColName = "";
        //多条件引用
        this.conditionArray = null;
    }
    parseValue() {
        var value = this.value;
        if (value && typeof value == "string") {
            if (REPLACE_CUSTOM_REGEXP.test(value)) {
                this.type = "REPLACE_CUSTOM";   //自定义标签
            } else if (REPLACE_ATTR_REGEXP.test(value)) {
                this.type = "REPLACE_ATTR"; //属性标签
            } else if (REPLACE_DATE_REGEXP.test(value)) {
                this.type = "REPLACE_DATE"; //日期标签
                if (value.indexOf("{PY|") >= 0)
                    this.yearType = "PY";
                else
                    this.yearType = "CY";
                this.yearMatchData = value.match(REPLACE_DATE_REGEXP);
            } else if (TAG_REGEXP.test(value) && !this.isColumnTag) {
                value = value.substring(1, value.length - 1);
                if (value.indexOf("]+[") > 0 || value.indexOf("]-[") > 0) {
                    this.type = "TAG_CALCULATE";
                } else if (value == "ARP") {
                    this.type = "TAG_ARP";
                } else if (value == "VALUE" || value == "POSITIVE_VALUE" || value == "NEGATIVE_VALUE") {
                    this.type = "TAG_VALUE";
                    this.formulaType = value.split("_")[0];
                } else if (value == "LASTVALUE") {
                    this.type = "TAG_LASTVALUE";
                } else if (value == "SUBTOTAL") {
                    this.type = "TAG_SUBTOTAL";
                } else if (value == "TOTAL") {
                    this.type = "TAG_TOTAL";
                } else if (value.indexOf("FORMULA=") == 0) {
                    this.type = "TAG_FORMULA";
                    this.parseFormula(value);
                } else if (value.indexOf("|") > 0) {
                    this.type = "TAG_DATA";
                    this.parseTagData(value);
                } else {
                    this.type = "TAG_OTHER";
                }
            } else {
                this.type = "OTHER";
            }
        } else {
            this.type = "OTHER";
        }
    }
    parseTagData(value) {
        var params = value.split("|");
        var param_0 = params[0];
        var param_1 = params[1];
        if (["REQUEST", "SPECIAL", "CALC", "PIVOT"].includes(param_0)) {
            this.linkType = param_0;
            this.linkSheet = param_1;
            this.conditionArray = params.slice(2);
        } else if (["SPECIALVALUE", "LASTVALUE", "CALCVALUE", "PIVOTVALUE"].includes(param_0)) {
            this.linkType = param_0;
            this.targetColName = param_1;
            this.conditionArray = params.slice(1);
        } else {
            //-打头则乘以-1
            if (param_0.indexOf("-") == 0) {
                param_0 = param_0.substr(1);
                this.signType = "-";
            } else {
                this.signType = "";
            }
            //#打头为引用客户数据
            if (param_0.indexOf("#") == 0) {
                param_0 = param_0.substr(1);
                this.linkType = "CLIENT";
            } else {
                this.linkType = "";
            }
            this.linkSheet = param_0;
            this.targetColName = params[2];
            if (param_1) {
                this.isRowListTag = false;
                this.linkRowSign = "";
                if (param_1.indexOf("POSITIVE_") == 0) {
                    //[#余额表|POSITIVE_科目代码=MARK|期初余额]
                    this.linkRowSign = "POSITIVE";
                    param_1 = param_1.substr(9);
                } else if (param_1.indexOf("NEGATIVE_") == 0) {
                    //[#余额表|NEGATIVE_科目代码=MARK|期初余额]
                    this.linkRowSign = "NEGATIVE";
                    param_1 = param_1.substr(9);
                } else if (param_1.indexOf("TAXFREE_") == 0) {
                    //[O310|TAXFREE_利息收入合计_免税|调整值]
                    this.linkRowType = "TAXFREE";
                    param_1 = param_1.substr(8);
                } else if (param_1.indexOf("TOTAL_") == 0) {
                    //[#PBC|TOTAL_凭证类型=股票买入+借贷=借|期初余额]
                    this.linkRowType = "TOTAL";
                    param_1 = param_1.substr(6);
                } else if (param_1.indexOf("LIST_") == 0) {
                    //[#PBC|LIST_科目名称=银行存款+利息收入|科目代码]
                    this.isRowListTag = true;
                    this.linkRowType = "LIST";
                    param_1 = param_1.substr(5);
                } else if (param_1.indexOf("SUB_") == 0) {
                    //[#PBC|SUB_应收上交所国债利息|科目代码]
                    this.isRowListTag = true;
                    this.linkRowType = "SUB";
                    param_1 = param_1.substr(4);
                } else if (param_1.indexOf("TIME_") == 0) {
                    //[#净值波动表|TIME_2018-12-31~2019-12-31|日期]
                    this.isRowListTag = true;
                    this.linkRowType = "TIME";
                    param_1 = param_1.substr(5);
                }
                //
                var hasCondition = param_1.indexOf("=") > 0 && this.linkRowType != "LIST" && this.linkRowType != "TOTAL";
                if (hasCondition) {
                    var moreCondition = param_1.indexOf("&") > 0
                    if (moreCondition) {
                        //[#增值税台账-金融商品转让|日期=2019-01-31&税费类型=确定|贷方发生额]
                        let result = [];
                        let array = param_1.split("&");
                        for (let index = 0; index < array.length; index++) {
                            let element = array[index];
                            let temp = element.split("=");
                            result.push({
                                col: temp[0],
                                value: temp[1]
                            });
                        }
                        this.conditionArray = result;
                    } else {
                        //[#净值波动表|科目代码=123456|期末余额]
                        let array = param_1.split("=");
                        this.linkConditionCol = array[0];
                        param_1 = array[1];
                    }
                }
                //
                if (param_1.indexOf("(") == 0 && param_1.lastIndexOf(")") == param_1.length - 1) {
                    //[#余额表_CY|(应收申购款+应收申购款-应收申购款)|期初余额]
                    //[E300|(应收权证保证金利息小计+深圳结算保证金应收利息小计)|期末余额]
                    this.linkRowType = "ROW_CALCULATE";
                    this.linkConditionRow = param_1.substring(1, param_1.length - 1);
                } else {
                    //[#余额表_CY|应收申购款|期初余额]
                    //[E400|应收申购款|期末余额]
                    this.linkConditionRow = param_1;
                    //[#净值波动表|日期=2018-12-31~2019-12-30|资产净值]
                    if (!this.isRowListTag && param_1.indexOf("~") > 0)
                        this.linkRowType = "TIME_RANGE";
                }
            }
        }
    }
    getCustomArray() {
        return this.value.match(REPLACE_CUSTOM_REGEXP);
    }
    parseFormula(value) {
        //FORMULA=资产份额-资产份额_UP
        this.formula = value.substr(8);
    }
}

let cell=new Cell();
cell.value="[O310|TAXFREE_利息收入合计_免税|调整值]";
// cell.value="[#余额表_CY|交易类债券利息收入+利息收入_债券利息收入_增值税抵扣|贷方发生额]";
// cell.value="[#余额表_CY|(利息收入_交易类债券_深交所_已上市_资产支持证券+利息收入_债券_增值税抵扣_深交所_资产支持证券)|贷方发生额]";
cell.parseValue();

console.log(cell)
// console.log('FORMULA=资产份额-资产份额_UP'.substr(8))
// console.log("利息收入_交易类债券_深交所_已上市_资产支持证券+利息收入_债券_增值税抵扣_深交所_资产支持证券".split(/[+\-\*]/));
// console.log("利息收入_交易类债券_深交所_已上市_资产支持证券+利息收入_债券_增值税抵扣_深交所_资产支持证券".match(/[+\-\*]/g));
