<template>
  <div class="__chat">
    <!-- Quick Nav: BEGIN -->
    <ul class="m-nav-sticky" style="margin-top: 30px;">
      <li class="m-nav-sticky__item" data-toggle="m-tooltip" title="Purchase" data-placement="left">
        <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" target="_blank">
          <i class="la la-cart-arrow-down"></i>
        </a>
      </li>
      <li class="m-nav-sticky__item" data-toggle="m-tooltip" title="Documentation" data-placement="left">
        <a href="https://keenthemes.com/metronic/documentation.html" target="_blank"><i class="la la-code-fork"></i></a>
      </li>
      <li class="m-nav-sticky__item" data-toggle="m-tooltip" title="Chat" data-placement="left">
        <a href="#" id="addClass">
          <i class="la la-comments"></i>
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
                    <div style="position:absolute;top:0;left:0;transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);width:138px;height:50px;">
                      <div class="ember-view">
                        <!--/chat/136117046-->
                        <a href="#" class="buddy-item active ember-view">
                          <div class="shopee-chat__avatar">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAABJlBMVEXP2NxgfYtjf412j5uMoavO19uis7vG0dVxi5fBzNJyjJhjgI56kp5hfoxxi5h5kZ2ouL9ohJGInaipucCHnah3kJyxv8bL1NnM1dlphJGXqrN4kZzM1tqUp7Gnt76InqlkgY6wvsWGnKdrhpOnuL+xwMZ8lJ+3xMvAzNGCmaTFz9Sdr7fN1trN19tlgY5qhZJkgI6/y9COoqzL1dlphJJ0jZp7k566x8y7x81ng5CywMegsrp4kZ14kJyhs7uJn6nH0dZlgY+Fm6bG0daWqrO2xMqzwcfF0NXBzdK3xcu0wsh7k5+qusG0wsmzwchuiJVviZaYq7S7yM2Kn6m8yM6/y9GInqiWqbKNoqxzjJmjtLyqucGfsbmdr7iwv8WKoKpuiZVif42PQ9RwAAABzUlEQVR4Xu3YVZLjShBA0UyBmZmamXuYmZmZ3tv/Jua3Y8JWTdsKKR1zzwruR1aVlDIdAAAAAAAAAAAAAAAAAADyN1t+3fPqfiOTl7kQ1qp6QqkZinmdnP6hcFVs6wY6RtATwx75OlY7K2ZlczpBzmx194ZONOyKTbc0QiAmrWikFTHoIKeRKgdiz7o6LIo919XhophzRp3yYs01dcqINavqtCTWXFAnX6y5ok7nxZqyOhWJNjAeHERzVx6Py7Y6PRZzqnP4wSQ1dajN4U9AIRSDOhqpIyYFGuGs2HRuqBMNR/O3rKlYXjG1dazhbTGsF4yd557YtlFwrHpNCpslPeHZ81DmQj7T8OvFYt9vfM3LPwkAgOzDzMLdUqV/qHqnXymtLmRe3hPD9h/s7RzpGEc7e1v7Yk+4dX/zWCMsbw6eiClPgzV107XPL8SI3cEr/Wuv3+xK+t4ueXoq3rv3kq4PrbKeWvnjtqRn9MnTqXiDkaTkUkGn9uWypKK5rDM4/CYp+K4z+iGJW9SZrSc+z57OzEt6rtsag6ok6qfGYkOS1NJY/JIk/aexyEmS/tdYHEuSNCbzGU000UQTTTQAAAAAAAAAAAAAAAAAAL8BwZgl987F+p8AAAAASUVORK5CYII=" width="100%" height="100%">
                            <div class="badge "></div>
                          </div>
                          <div class="shopee-chat__name">luckyshop06</div>
                          <div class="shopee-chat__close">✕</div>
                        </a>
                      </div>
                    </div>
                    <div style="position:absolute;top:0;left:0;transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 50, 0, 1);width:138px;height:50px;">
                      <div class="ember-view">
                        <!--/chat/77371462-->
                        <a href="#" class="buddy-item ember-view">
                          <div class="shopee-chat__avatar">
                            <img src="//cf.shopee.vn/file/e0c25c8c616bcbd1dcbaa5caffa58dac_tn" width="100%" height="100%">
                            <div class="badge "></div>
                          </div>
                          <div class="shopee-chat__name">3cworld.vn</div>
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
                  luckyshop06
                  <span class="arrow-down "></span>
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
                <textarea placeholder="Gửi tin nhắn ..." maxlength="5000" class="ember-text-area ember-view"></textarea>
                <div class="chat-toolbar">
                  <div class="clearfix">
                    <div class="right">
                      <button v-on:click="sendMessage" class="shopee-chat__primary">
                        Gửi
                      </button>
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
  import http from '../../services/http-common';
  import toastr from '../../services/toastr.js';
  //'http://localhost:8080/api/images/avatar'

  export default {
    name: "Chat",
    data() {
      return {
        stompClient: null,
        headers: {},
        params: {
          idSend: 1,
          idReceive: 2
        },
        conversations: []
      }
    },
    methods: {
      initChat: function () {
        let vm = this;
        let authorization = localStorage.getItem("authorization");
        let socket = new WebSocket('ws://localhost:8080/carpool/websocket?authorization=' + authorization);
        vm.stompClient = Stomp.over(socket);
        vm.stompClient.debug = false;
        let headers = {};
        headers["authorization"] = authorization;
        vm.stompClient.connect({headers}, function(frame) {
          vm.stompClient.subscribe('/socket/message/' + '3', function(message){
            alert(message);
          });
        });
      },
      getConversation: function() {
        let vm = this;
        let queryString = Object.keys(this.params).map(key => key + '=' + this.params[key]).join('&');
        console.log(queryString);
        http.get('/message' + '?' + queryString)
            .then(response => {
              vm.conversations = JSON.parse(response.data.metadata);
              console.log(vm.conversations);
              vm.conversations.forEach(function (element) {
                if (!element.image.includes('http://localhost:8080/api/images/avatar')) {
                  element.image = 'http://localhost:8080/api/images/avatar/' + element.image;
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
      sendMessage: function () {
        let authorization = localStorage.getItem("authorization");
        let headers = {};
        headers["authorization"] = authorization;
        let url = '/user/3/';
        this.stompClient.send(
            url,
            {headers},
            JSON.stringify({'id': 123, 'userIdSend': 1, 'userIdReceive': 2, 'content': 'aaaaaa'})
        );
      }
    },
    mounted() {
      this.initChat();
      this.getConversation();
    }
  }
</script>

<style scoped>
  .col-1 {
     padding-right: 0;
     padding-left: 0;
  }
</style>
