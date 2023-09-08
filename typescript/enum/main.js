var House_Condition;
(function (House_Condition) {
    House_Condition[House_Condition["HABITABLE"] = 0] = "HABITABLE";
    House_Condition[House_Condition["NORMAL"] = 1] = "NORMAL";
    House_Condition[House_Condition["UNINHABITABLE"] = 2] = "UNINHABITABLE";
})(House_Condition || (House_Condition = {}));
var house = {
    windows: 4,
    condition: House_Condition.HABITABLE,
};
// PO VYPSÁNÍ DO KONZOLE SE OJEVÍ U CONDITIONU ČÍSLO 0
