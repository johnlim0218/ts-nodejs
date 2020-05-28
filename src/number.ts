export const getFirstNumber = (num:number):number => {
    if(num >= 10){
        return returnFirstNum(num);
    } else {
        return justReturn(num);
    }
}

export function returnFirstNum(num:number):number {
    return num % 10;
}

export function justReturn(num:number):number {
    return num;
}

export const equalNumber = (num:number):number => {
    return num;
}