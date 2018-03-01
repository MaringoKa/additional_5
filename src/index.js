module.exports = function check(str, bracketsConfig) {
    // your solution
    var stack = [];
    var arr = str.split('');
    if (str.length % 2 == 1) {
        return false;
    }
    else{
        var map = {
            '(': ')',
            '[': ']',
            '{': '}',
            '|': '|'
        }

        for (var i = 0; i < arr.length;i++) {
            for (var j = 0; j < bracketsConfig.length; j++) {
             if (arr[i] == bracketsConfig[j][1] && stack[stack.length - 1] == bracketsConfig[j][0]) {
                var last = stack.pop();
                  /* if (str[i] !== map[last]) {
                      return true; }*/
           }
            else if (arr[i] == bracketsConfig[j][0]) {
                stack.push(arr[i]);
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
    }
};
