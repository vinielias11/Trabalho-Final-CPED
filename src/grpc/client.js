const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('translation.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const translationProto = grpc.loadPackageDefinition(packageDefinition).TranslationService;

const client = new translationProto('localhost:50051', grpc.credentials.createInsecure());



module.exports = {
    traduzirTexto: function (request, callback){
        client.TranslateText(request, (error, response) => {
            if (error) {
                console.error(error);
                return;
            }
            
            callback(response.translated_text);
        });
    }
}
