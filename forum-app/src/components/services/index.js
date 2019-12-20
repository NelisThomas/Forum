module.exports = {
    isImg: url => {
        return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }
}