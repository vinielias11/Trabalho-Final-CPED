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

const request = {
    text: 'Hello, world!',
    target_language: 'es'
};

client.TranslateText(request, (error, response) => {
    if (error) {
        console.error(error);
        return;
    }
    
    console.log('Translated text:', response.translated_text);
});