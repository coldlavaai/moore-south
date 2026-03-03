/* ═══════════════════════════════════════════════════════
   V4 Premium Chat Widget JavaScript
   Moore (South) LLP - NO PLACEHOLDERS!
   ═══════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // V4 CONFIGURATION - NO PLACEHOLDERS!
  const config = {
    businessName: 'Moore (South) LLP',
    primaryColor: '#0066cc',
    botName: 'Moore Assistant',
    botEmoji: '📊',
    theme: 'light',
    greeting: 'Hello! 👋 Welcome to Moore (South) LLP. Part of Moore UK and Moore Global, we provide accountancy, audit, tax and business advisory services across the South Coast. How can I help you?',
    quickReplies: [
      'Our services',
      'Audit & Assurance',
      'Outsourced accounting',
      'Locations',
      'Contact us'
    ],
    responses: [
      {
        keywords: ['audit', 'assurance', 'auditing', 'auditor'],
        answer: '✓ **Audit & Assurance**\\n\\nComprehensive suite of services designed to meet a wide range of audit needs:\\n\\n• Statutory audits\\n• Internal audit services\\n• Assurance engagements\\n• Independent verification\\n\\nTrusted expertise backed by Moore Global network.\\n\\n📧 Contact us via www.mooresouth.co.uk/contact'
      },
      {
        keywords: ['outsource', 'outsourced', 'accounting', 'bookkeeping', 'payroll'],
        answer: '💼 **Outsourced Accounting Services**\\n\\nFlexible business outsourcing solutions. We act as an extension of your internal team:\\n\\n• Bookkeeping & transaction processing\\n• Payroll processing\\n• VAT returns & MTD compliance\\n• Management accounts\\n\\nTailored to your business needs.\\n\\n📧 Contact us via www.mooresouth.co.uk/contact'
      },
      {
        keywords: ['tax', 'business tax', 'corporation', 'corporate tax'],
        answer: '💷 **Business Tax**\\n\\nProactive advice and technical expertise:\\n\\n• Corporation tax planning\\n• Tax compliance & returns\\n• R&D tax credits\\n• Strategic tax advisory\\n\\nOptimize your tax position with confidence.\\n\\n📧 Contact us via www.mooresouth.co.uk/contact'
      },
      {
        keywords: ['corporate finance', 'finance', 'm&a', 'merger', 'acquisition', 'fundraising'],
        answer: '📈 **Corporate Finance**\\n\\nBusiness planning and financial modelling with independent guidance:\\n\\n• M&A advisory\\n• Fundraising support\\n• Business valuations\\n• Due diligence\\n\\nExpert support for your business growth.\\n\\n📧 Contact us via www.mooresouth.co.uk/contact'
      },
      {
        keywords: ['private', 'personal', 'wealth', 'estate', 'inheritance', 'trust'],
        answer: '👤 **Private Client Tax**\\n\\nBespoke advice on tax, trust and estate planning:\\n\\n• Personal tax planning\\n• Estate & inheritance tax\\n• Trust administration\\n• Wealth management\\n\\nProtect and preserve your personal wealth.\\n\\n📧 Contact us via www.mooresouth.co.uk/contact'
      },
      {
        keywords: ['owner managed', 'business advisory', 'small business', 'sme'],
        answer: '🏢 **Owner Managed Business Services**\\n\\nDedicated support throughout your business lifecycle:\\n\\n• Business advisory\\n• Growth strategy\\n• Succession planning\\n• Strategic guidance\\n\\nWe understand owner-managed businesses because we are one.\\n\\n📧 Contact us via www.mooresouth.co.uk/contact'
      },
      {
        keywords: ['mtd', 'making tax digital', 'digital'],
        answer: '💻 **Making Tax Digital**\\n\\nHMRC compliance preparation and ongoing support:\\n\\n• MTD for VAT\\n• Digital record keeping\\n• Software implementation\\n• Compliance advisory\\n\\nStay ahead of digital tax requirements.\\n\\n📧 Contact us via www.mooresouth.co.uk/contact'
      },
      {
        keywords: ['location', 'locations', 'office', 'offices', 'where', 'chichester', 'guildford', 'newport', 'salisbury', 'southampton'],
        answer: '📍 **Our South Coast Locations**\\n\\nWe have five strategic offices:\\n\\n• **Chichester** - West Sussex\\n• **Guildford** - Surrey\\n• **Newport** - Isle of Wight\\n• **Salisbury** - Wiltshire\\n• **Southampton** - Hampshire\\n\\nYour local, trusted advisers with global reach.\\n\\n📧 Find your nearest office: www.mooresouth.co.uk/contact'
      },
      {
        keywords: ['contact', 'phone', 'email', 'get in touch', 'reach'],
        answer: 'Get in touch with Moore (South) LLP:\\n\\n🌐 **Website:** www.mooresouth.co.uk\\n📧 **Contact Form:** www.mooresouth.co.uk/contact\\n📍 **Locations:** Chichester, Guildford, Newport, Salisbury, Southampton\\n\\nPart of Moore UK and Moore Global - your trusted advisers across the South Coast.'
      },
      {
        keywords: ['about', 'who', 'moore', 'global', 'network', 'history'],
        answer: 'Moore (South) LLP is part of **Moore UK** and the **Moore Global** network.\\n\\nWe combine local expertise with international reach, providing accountancy, audit, tax and business advisory services across the South Coast.\\n\\n🌍 **Moore Global network**\\n📍 **5 South Coast locations**\\n✓ **Comprehensive services**\\n🤝 **Your local, trusted advisers**\\n\\n*"Helping you thrive in a changing world"*'
      },
      {
        keywords: ['service', 'services', 'what', 'do', 'offer'],
        answer: 'We provide comprehensive services:\\n\\n📋 Accounts & Business Services\\n✓ Audit & Assurance\\n💼 Outsourced Accounting\\n💷 Business Tax\\n📈 Corporate Finance\\n👤 Private Client Tax\\n🏢 Owner Managed Business\\n💻 Making Tax Digital\\n\\nFull-service support across the South Coast.\\n\\n📧 www.mooresouth.co.uk/contact'
      }
    ],
    fallback: 'Thanks for your question! For personalized advice from our team:\\n\\n📧 **Contact Form:** www.mooresouth.co.uk/contact\\n🌐 **Website:** www.mooresouth.co.uk\\n\\nWe\'re here to help you thrive in a changing world. 😊'
  };

  // State
  let messages = [];
  let isOpen = false;

  // Create widget HTML
  function createWidget() {
    const widgetHTML = `
      <div class="chat-widget">
        <!-- Chat Window -->
        <div class="chat-window" id="chat-window">
          <!-- Header with brand gradient -->
          <div class="chat-header">
            <div class="chat-header-info">
              <div class="chat-header-avatar">${config.botEmoji}</div>
              <div class="chat-header-text">
                <h3>${config.businessName}</h3>
                <p>Online now</p>
              </div>
            </div>
            <button class="chat-close" id="chat-close" aria-label="Close chat">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M12 4L4 12M4 4l8 8"/>
              </svg>
            </button>
          </div>

          <!-- Messages -->
          <div class="chat-messages" id="chat-messages"></div>

          <!-- Quick Replies -->
          <div class="quick-replies" id="quick-replies"></div>

          <!-- Input -->
          <div class="chat-input-wrapper">
            <div class="chat-input-container">
              <input
                type="text"
                class="chat-input"
                id="chat-input"
                placeholder="Type your message..."
                aria-label="Chat message input"
              />
              <button class="chat-send" id="chat-send" aria-label="Send message">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Chat Bubble Button -->
        <button class="chat-bubble" id="chat-bubble" aria-label="Open chat">
          <span id="chat-bubble-icon">${config.botEmoji}</span>
        </button>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);
  }

  // Add message to chat
  function addMessage(text, sender = 'bot') {
    const messagesContainer = document.getElementById('chat-messages');
    const messageHTML = `
      <div class="message ${sender}">
        <div class="message-bubble">${formatMessage(text)}</div>
      </div>
    `;
    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    messages.push({ text, sender, timestamp: new Date() });
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Format message (convert **bold** and \n to HTML)
  function formatMessage(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  // Show typing indicator
  function showTyping() {
    const messagesContainer = document.getElementById('chat-messages');
    const typingHTML = `
      <div class="message bot typing-message">
        <div class="typing-indicator">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>
    `;
    messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Hide typing indicator
  function hideTyping() {
    const typing = document.querySelector('.typing-message');
    if (typing) typing.remove();
  }

  // Get bot response
  function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    // Check each response for keyword matches
    for (const response of config.responses) {
      for (const keyword of response.keywords) {
        if (lowerMessage.includes(keyword.toLowerCase())) {
          return response.answer;
        }
      }
    }

    return config.fallback;
  }

  // Handle user message
  function handleUserMessage(text) {
    if (!text.trim()) return;

    // Add user message
    addMessage(text, 'user');

    // Hide quick replies after first message
    document.getElementById('quick-replies').innerHTML = '';

    // Show typing
    showTyping();

    // Get response after delay
    setTimeout(() => {
      hideTyping();
      const response = getBotResponse(text);
      addMessage(response, 'bot');
    }, 800);

    // Clear input
    document.getElementById('chat-input').value = '';
  }

  // Show quick replies
  function showQuickReplies() {
    const quickRepliesContainer = document.getElementById('quick-replies');
    quickRepliesContainer.innerHTML = config.quickReplies
      .map(reply => `
        <button class="quick-reply-btn" data-reply="${reply}">
          ${reply}
        </button>
      `)
      .join('');

    // Add click handlers
    document.querySelectorAll('.quick-reply-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        handleUserMessage(btn.dataset.reply);
      });
    });
  }

  // Toggle chat window
  function toggleChat() {
    isOpen = !isOpen;
    const chatWindow = document.getElementById('chat-window');
    const chatBubble = document.getElementById('chat-bubble');
    const chatBubbleIcon = document.getElementById('chat-bubble-icon');

    if (isOpen) {
      chatWindow.classList.add('open');
      chatBubbleIcon.textContent = '✕';

      // Add greeting if first time opening
      if (messages.length === 0) {
        addMessage(config.greeting, 'bot');
        showQuickReplies();
      }
    } else {
      chatWindow.classList.remove('open');
      chatBubbleIcon.textContent = config.botEmoji;
    }
  }

  // Initialize
  function init() {
    createWidget();

    // Event listeners
    document.getElementById('chat-bubble').addEventListener('click', toggleChat);
    document.getElementById('chat-close').addEventListener('click', toggleChat);

    document.getElementById('chat-send').addEventListener('click', () => {
      const input = document.getElementById('chat-input');
      handleUserMessage(input.value);
    });

    document.getElementById('chat-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleUserMessage(e.target.value);
      }
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
