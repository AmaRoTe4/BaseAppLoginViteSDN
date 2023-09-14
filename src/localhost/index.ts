export const getVarForLocalStorage = (name:string):string => {
    return localStorage.getItem(name) ?? "";
};

export const setVarForLocalStorage = (name:string , value:string) => {
    localStorage.setItem(name , value);
};