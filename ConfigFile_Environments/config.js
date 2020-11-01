module.exports = function(){

    let devSettings={
        URI:"DevURI",
        DB:"DevDB"
    }
    let prodSettings={
        URI:"ProdURI",
        DB:"ProdDB"
    }
    switch(process.env.NODE_ENV){
        case 'development':
            return {devSettings};

        case 'production':
            return {prodSettings};

        default:
            return "Other Settings";
    }
};