class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        console.log('MessageParser parse appelé avec:', message); // Debug
        this.actionProvider.handleMessage(message);
    }
}

export default MessageParser;