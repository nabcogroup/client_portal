module.exports = {
    cloneObject : (objInstance) => {
        if(typeof objInstance === "object")
            return JSON.parse(JSON.stringify(objInstance));
        else 
            return false;
    }
    
}