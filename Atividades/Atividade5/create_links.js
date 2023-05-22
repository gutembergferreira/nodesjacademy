function createLinkFiles(link,file){
    return `<li><a href="${link}">${file}</a></li>`;
}


module.exports = {
    createLinkFiles:createLinkFiles
};