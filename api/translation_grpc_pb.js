// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var translation_pb = require('./translation_pb.js');

function serialize_TranslateRequest(arg) {
  if (!(arg instanceof translation_pb.TranslateRequest)) {
    throw new Error('Expected argument of type TranslateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TranslateRequest(buffer_arg) {
  return translation_pb.TranslateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TranslateResponse(arg) {
  if (!(arg instanceof translation_pb.TranslateResponse)) {
    throw new Error('Expected argument of type TranslateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TranslateResponse(buffer_arg) {
  return translation_pb.TranslateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TranslationServiceService = exports.TranslationServiceService = {
  translateText: {
    path: '/TranslationService/TranslateText',
    requestStream: false,
    responseStream: false,
    requestType: translation_pb.TranslateRequest,
    responseType: translation_pb.TranslateResponse,
    requestSerialize: serialize_TranslateRequest,
    requestDeserialize: deserialize_TranslateRequest,
    responseSerialize: serialize_TranslateResponse,
    responseDeserialize: deserialize_TranslateResponse,
  },
};

exports.TranslationServiceClient = grpc.makeGenericClientConstructor(TranslationServiceService);
