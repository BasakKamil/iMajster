
export default {
    formatCurrency : function(num){
        return 'zł' + Number(num.toFixed(2)).toLocaleString() + '';
    }

}
