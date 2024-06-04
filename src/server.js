const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { google } = require('googleapis');
const translation = google.translate('v2');

const packageDefinition = protoLoader.loadSync('translation.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const translationProto = grpc.loadPackageDefinition(packageDefinition).TranslationService;

const server = new grpc.Server();

server.addService(translationProto.service, {
    TranslateText: async (call, callback) => {
        const { text, target_language } = call.request;

        try {
            const response = await translation.translations.list({
                q: [text],
                target: target_language,
                auth: '',
                format: 'text'
            });

            const translatedText = response.data.data.translations[0].translatedText;
            callback(null, { translated_text: translatedText });
        } catch (error) {
            callback(error);
        }
    }
});

const PORT = '50051';
server.bindAsync(`127.0.0.1:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(`Servidor rodando em: http://127.0.0.1:${port}`);
});
