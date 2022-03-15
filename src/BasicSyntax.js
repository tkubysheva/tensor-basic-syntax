export function romanToInteger(str) {
    let result = 0;
    let n = str.length;
    for (let i = 0; i < n; ++i) {
        switch (str[i]) {
            case 'M':
                result += 1000;
                break;
            case 'D':
                result += 500;
                break;
            case 'C':
                if (i + 1 < n) {
                    if ('M' == str[i + 1]) {
                        result += 900;
                        ++i;
                        continue;
                    }
                    if ('D' == str[i + 1]) {
                        result += 400;
                        ++i;
                        continue;
                    }
                }
                result += 100;
                break;
            case 'L':
                result += 50;
                break;
            case 'X':
                if (i + 1 < n) {
                    if ('L' == str[i + 1]) {
                        result += 40;
                        ++i;
                        continue;
                    }
                    if ('C' == str[i + 1]) {
                        result += 90;
                        ++i;
                        continue;
                    }
                }
                result += 10;
                break;
            case 'V':
                result += 5;
                break;
            case 'I':
                if (i + 1 < n) {
                    if ('V' == str[i + 1]) {
                        result += 4;
                        ++i;
                        continue;
                    }
                    if ('X' == str[i + 1]) {
                        result += 9;
                        ++i;
                        continue;
                    }
                }
                result += 1;
                break;
        }
    }
    return result;
}
