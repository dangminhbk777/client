<template>
  <div class="__chat">
    <!-- Quick Nav: BEGIN -->
    <ul class="m-nav-sticky" style="margin-top: 30px;">
      <li class="m-nav-sticky__item" data-toggle="m-tooltip" title="Chat" data-placement="left">
        <a href="#" id="addClass">
          <i class="flaticon-chat"></i>
        </a>
      </li>
    </ul>
    <!-- Quick Nav: END -->
    <!-- Chat box: BEGIN -->
    <div id="shopee-chat-embedded" style="z-index: 1000; position: fixed; right: 10px; bottom: 0;"
        class="shopee-chat-root ember-application">
      <div class="ember-view">
        <div class="shopee-chat-container" id="_shopee-chat-container">
          <div class="buddy-list">
            <div class="chat-header first">
              <div class="chat-input header-search">
                <input type="text" placeholder="Tìm người dùng" class="ember-text-field ember-view">
                <span class="chat-input-prefix">
                  <span class="ic webchat_search"></span>
                </span>
              </div>
            </div>
            <!-- List conversation: begin -->
            <div class="list show-offer">
              <div class="ember-view">
                <div class="ember-view">
                  <div style="position: relative; width: 155px; height: 100px;">
                    <div v-if="userConversations" v-for="(user, index) in userConversations" :style="user.style">
                      <div class="ember-view" :id="user.userId" v-on:click="switchConversation(user.userId, user.username)">
                        <a href="#" :class="index > 0 ? 'buddy-item ember-view' : 'buddy-item active ember-view'">
                          <div class="shopee-chat__avatar">
                            <img :src="user.image" width="100%" height="100%">
                            <div class="badge "></div>
                          </div>
                          <div class="shopee-chat__name">{{user.username}}</div>
                          <div class="shopee-chat__close">✕</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- List conversation: end -->
            <a href="/offer" class="link-offer ember-view">
              Đã nhận trả giá
              <span class="badge">0</span>
            </a>
          </div>

          <div class="conversation-window">
            <div class="chat-header">
              <a style="cursor: pointer;" class="shopee-chat-close-button" id="chat-close-button">
                <span></span>
              </a>
              <div class="user-menu ember-view">
                <span style="cursor:pointer;" class="shopee-chat-header-text">
                  <span id="username"></span>
<!--                  <span class="arrow-down "></span>-->
                </span>
              </div>
            </div>

            <div class="chat-window ember-view">
              <!-- Content conversation: begin -->
              <div class="chat-content shopee-chat__scrollable chat-content ember-view">
                <div class="shopee-chat__scrollable-inner">
                  <div v-if="conversations" v-for="conversation in conversations" class="chat-message ember-view">
                    <!-- Message send to -->
                    <div v-if="conversation.role === 'to'" class="shopee-chat-grid">
                      <div class="col-15 message-content ">
                        <div class="chat-bubble to">
                          <div class="overflow-wrapper">
                            {{conversation.content}}
                          </div>
                        </div>
                        <div class="timestamp">
                          {{conversation.createdAt}}
                        </div>
                      </div>
                      <div class="col-1">
                        <div class="avatar">
                          <img :src="conversation.image">
                        </div>
                      </div>
                    </div>
                    <!-- Message send from -->
                    <div v-else class="shopee-chat-grid">
                      <div class="col-1">
                        <div class="avatar">
                          <img :src="conversation.image">
                        </div>
                      </div>
                      <div class="col-15 message-content reverse">
                        <div class="chat-bubble from">
                          <div class="overflow-wrapper">
                            {{conversation.content}}
                          </div>
                        </div>
                        <div class="timestamp">
                          {{conversation.createdAt}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Content conversation: end -->
              <!-- Footer chat: begin -->
              <div class="chat-panel">
                <textarea id="content-chat" placeholder="Gửi tin nhắn ..." maxlength="5000" class="ember-text-area ember-view"></textarea>
                <div class="chat-toolbar">
                  <div class="clearfix">
                    <div class="right">
                      <button v-on:click="sendMessage" class="shopee-chat__primary">Gửi</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Footer chat: end -->
            </div>
          </div>
        </div>
        <div class="liquid-modal liquid-modal--closed">
          <div class="liquid-child">
            <div class="lm-container">
              <div role="dialog" class="lf-dialog"></div>
            </div>
            <span class="lf-overlay"></span>
          </div>
        </div>
      </div>
    </div>
    <!-- Chat box: END -->
  </div>
</template>

<script>
  import http from '../../services/http-common.js';
  import toastr from '../../services/toastr.js';
  import { URL_AVATAR, ADDRESS_SOCKET } from '../../services/variables.js';

  export default {
    name: "Chat",
    data() {
      return {
        stompClient: null,
        headers: {},
        params: {
          // idSend: 1,
          idReceive: null
        },
        conversations: [],
        userConversations: [],
        message: {
          userIdSend: null,
          role: null,
          content: null,
          createdAt: null,
          image: null
        }
      }
    },
    methods: {
      initChat: function () {
        let self = this;
        let authorization = localStorage.getItem("authorization");
        let socket = new WebSocket(ADDRESS_SOCKET + authorization);
        self.stompClient = Stomp.over(socket);
        self.stompClient.debug = false;
        let headers = {};
        headers["authorization"] = authorization;
        let userId = localStorage.getItem('userId');
        self.stompClient.connect({headers}, function(frame) {
          self.stompClient.subscribe('/socket/message/' + userId, function(message){
            self.message = JSON.parse(message.body);
            self.message.image = URL_AVATAR + self.message.image;
            let myDate = new Date(self.message.createdAt);
            let options = {
              year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'
            };
            self.message.createdAt = myDate.toLocaleDateString('en', options);
            if (self.params.idReceive === self.message.userIdSend) {
              self.conversations.push(self.message);
            }
          });
        });
      },
      getUserConversation: function() {
        let self = this;
        http.get('/message/user-conversation')
            .then(response => {
              self.userConversations = JSON.parse(response.data.metadata);
              self.userConversations.forEach(function (element, index) {
                if (!element.image.includes(URL_AVATAR)) {
                  element.image = URL_AVATAR + element.image;
                }
                element.style = 'position:absolute;top:0;left:0;width:138px;height:50px;' +
                    'transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + index*50 + ', 0, 1);';
              });
              if (self.userConversations[0]) {
                self.params.idReceive = self.userConversations[0].userId;
                $('#username').text(self.userConversations[0].username);
                self.getConversation();
              }
            })
            .catch(e => {
              console.error(e);
              toastr.error("Error occurred");
            });
      },
      getConversation: function() {
        let vm = this;
        let queryString = Object.keys(this.params).map(key => key + '=' + this.params[key]).join('&');
        http.get('/message' + '?' + queryString)
            .then(response => {
              vm.conversations = JSON.parse(response.data.metadata);
              vm.conversations.forEach(function (element) {
                if (!element.image.includes(URL_AVATAR)) {
                  element.image = URL_AVATAR + element.image;
                }
                let myDate = new Date(element.createdAt);
                let options = {
                  year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'
                };
                element.createdAt = myDate.toLocaleDateString('en', options);
              });
            })
            .catch(e => {
              console.error(e);
              toastr.error("Error occurred");
            });
      },
      switchConversation: function(userId, username) {
        let self = this;
        let idOld = self.params.idReceive;
        self.params.idReceive = userId;
        self.conversations = [];
        self.getConversation();
        $('#'+ idOld).children().removeClass('active');
        $('#'+ userId).children().addClass('active');
        $('#username').text(username);
      },
      sendMessage: function () {
        let self = this;
        let content = $('#content-chat').val();
        let messageShow = {
          content: content,
          createdAt: null,
          image: URL_AVATAR + localStorage.getItem('image'),
          role: 'to'
        };
        self.conversations.push(messageShow);
        let messageSave = {
          userIdSend: localStorage.getItem('userId'),
          userIdReceive: this.params.idReceive,
          content: content
        };
        let authorization = localStorage.getItem("authorization");
        let headers = {};
        headers["authorization"] = authorization;
        let url = '/user/' + this.params.idReceive + '/';
        this.stompClient.send(
            url,
            {headers},
            JSON.stringify(messageSave)
        );
        $('#content-chat').val("");
      }
    },
    mounted() {
      this.initChat();
      this.getUserConversation();
    }
  }
</script>

<style scoped>
  .col-1 {
     padding-right: 0;
     padding-left: 0;
  }
</style>
