class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    predefinedResponses = {
        greeting: [
            '您好，很高兴为您服务！有什么我可以帮您的？',
            '欢迎！请告诉我您的问题或需求。',
            '您好！我是冷库助手，随时为您解答。',
        ],
        services: [
            '我们提供冷库设计、安装和维护服务，您想了解哪一方面？',
            '我们的服务包括高效冷库解决方案，您有具体需求吗？',
            '从设计到维护，我们一站式服务，您需要详细介绍吗？',
        ],
        contact: [
            '您可以通过电话 +86 123-456-7890 或邮箱 info@coolinstall.cn 联系我们。',
            '想直接和我们团队沟通？请拨打 +86 123-456-7890。',
            '我们的地址是中国上海市冷库路88号，欢迎随时联系！',
        ],
        default: [
            '我正在处理您的请求，请稍等片刻。',
            '抱歉，我不太明白，能否再详细说明一下？',
            '请告诉我更多信息，我会尽力帮您！',
        ],
    };

    handleMessage(message) {
        console.log('ActionProvider handleMessage appelé avec:', message); // Debug
        const lowerMessage = message.toLowerCase();
        let response;

        if (lowerMessage.includes('你好') || lowerMessage.includes('hi')) {
            response = this.predefinedResponses.greeting[Math.floor(Math.random() * this.predefinedResponses.greeting.length)];
        } else if (lowerMessage.includes('服务') || lowerMessage.includes('service')) {
            response = this.predefinedResponses.services[Math.floor(Math.random() * this.predefinedResponses.services.length)];
        } else if (lowerMessage.includes('联系') || lowerMessage.includes('contact')) {
            response = this.predefinedResponses.contact[Math.floor(Math.random() * this.predefinedResponses.contact.length)];
        } else {
            response = this.predefinedResponses.default[Math.floor(Math.random() * this.predefinedResponses.default.length)];
        }

        const botMessage = this.createChatBotMessage(response);
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }
}

export default ActionProvider;