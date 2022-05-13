function extractFile(text){

    let index = text.lastIndexOf('\\');
    let fileName = text.substring(index + 1).split('.');
    let extention = fileName.pop();
    let template = fileName.join('.');

    console.log(`File name: ${template}`);
    console.log(`File extension: ${extention}`);


}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.bak.pptx');