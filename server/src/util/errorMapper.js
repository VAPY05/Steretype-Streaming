module.exports = (error) => {
    if(error.name == "ValidationError"){
        return Object.entries(error.errors)
        .map(([key, error]) => error.properties.message)
        .join('\n');
    }else{
        return error.message
    }
}