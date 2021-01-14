const addScript = (id, src) => new Promise((resolve, reject) => {
    const element = document.getElementById(id);
    if(element) {
        return resolve(true);
    }
    
})