<template>
  <div>
    <h3>Post Office</h3>
    <div>
      <h5>보내는 사람</h5>
      <input type="text" placeholder="이름" v-model="sender.name">
      <input type="text" placeholder="주소" v-model="sender.address">
      <input type="text" placeholder="이메일" v-model="sender.email">
      <input type="text" placeholder="전화번호" v-model="sender.phone">
    </div>
    <div>
      <h5>받는 사람</h5>
      <input type="text" placeholder="이름" v-model="receiver.name">
      <input type="text" placeholder="주소" v-model="receiver.address">
      <input type="text" placeholder="이메일" v-model="receiver.email">
      <input type="text" placeholder="전화번호" v-model="receiver.phone">
    </div>
    <div>
      <h5>메시지 (타입: {{messageType}})</h5>
      <select v-model="messageType">
        <option value="email">이메일</option>
        <option value="post">편지</option>
        <option value="sms">문자</option>
      </select>
      <textarea cols="30" rows="10" v-model="message"></textarea>
    </div>
    <div>
      <button @click="send">전송</button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Person from "@/models/Person";
import EmailTemplate from "@/template-method/EmailTemplate";
import AbstractTemplate from "@/template-method/AbstractTemplate";
import { Component } from "vue-property-decorator";
import SMSTemplate from "../template-method/SMSTemplate";
import PostTemplate from "../template-method/PostTemplate";

@Component
export default class PostOfficeView extends Vue {
  private sender: Person = new Person();
  private receiver: Person = new Person();
  private message: string = "";
  private messageType: string = "";

  private send(): void {
    let template: AbstractTemplate;
    switch (this.messageType) {
      case "email":
        template = new EmailTemplate(this.sender, this.receiver, this.message);
        window.alert(template.build());
        break;

      case "post":
        template = new PostTemplate(this.sender, this.receiver, this.message);
        window.alert(template.build());
        break;

      case "sms":
        template = new SMSTemplate(this.sender, this.receiver, this.message);
        window.alert(template.build());
        break;

      default:
        break;
    }
  }
}
</script>
