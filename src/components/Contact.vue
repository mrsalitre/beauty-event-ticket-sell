<template>
  <section id="contact">
    <div
      class="h-auto bg-cover bg-no-repeat bg-center py-20"
      :style="{
        backgroundImage: `url(${require('@/assets/contact-bg.jpg')})`
      }"
    >
      <div
        class="flex flex-wrap justify-center rounded-lg shadow-lg bg-white mx-4 md:mx-10"
      >
        <div class="w-full md:w-1/2 p-8">
          <form @submit.prevent="sendMessage()" class="w-full">
            <div class="flex flex-wrap -mx-3">
              <div class="w-full px-3">
                <input
                  v-model="name"
                  class="appearance-none bg-transparent border-b border-b-2 border-yellow-600 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-center"
                  id="grid-password"
                  type="text"
                  placeholder="Nombre"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3">
              <div class="w-full md:w-1/2 px-3 mt-6">
                <input
                  v-model="phone"
                  class="appearance-none bg-transparent border-b border-b-2 border-yellow-600 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-center"
                  id="grid-password"
                  type="text"
                  placeholder="Teléfono"
                />
              </div>
              <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
              <div class="w-full md:w-1/2 px-3 mt-6">
                <input
                  v-model="email"
                  class="appearance-none bg-transparent border-b border-b-2 border-yellow-600 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-center"
                  id="grid-password"
                  type="text"
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div class="w-full px-3 mt-6">
              <p class="my-10 text-center">
                <span>Numero de entradas</span><br />
                <button
                  @click.prevent="ticketsQuantity('-')"
                  class="bg-transparent hover:bg-yellow-600 text-black font-semibold hover:text-white border border-yellow-600 hover:border-transparent rounded-full py-1 px-2"
                >
                  -
                </button>
                <span>&nbsp;{{ tickets }}&nbsp;</span>
                <button
                  type="button"
                  @click.prevent="ticketsQuantity('+')"
                  class="bg-transparent hover:bg-yellow-600 text-black font-semibold hover:text-white border border-yellow-600 hover:border-transparent rounded-full py-1 px-2"
                >
                  +
                </button>
              </p>
            </div>
            <div
              v-for="(ticket, index) in tickets"
              :key="index"
              class="flex flex-wrap -mx-3"
            >
              <div class="w-full px-3 mb-6">
                <input
                  v-model="attendees[index]"
                  class="appearance-none bg-transparent border-b border-b-2 border-yellow-600 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-center"
                  id="grid-password"
                  type="text"
                  :placeholder="`Nombre del asistente ${index + 1}º`"
                />
              </div>
            </div>
            <div class="w-full px-3 mt-6 border border-yellow-600 rounded">
              <textarea
                v-model="message"
                placeholder="Mensaje"
                class="appearance-none resize-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-center h-32"
              ></textarea>
            </div>
            <div class="w-full text-center mt-6">
              <div
                v-if="errorsDisplay"
                class="text-red-500 text-xs italic text-center mb-6"
              >
                <ul>
                  <li v-for="(error, index) in errors" :key="index">
                    {{ error }}
                  </li>
                </ul>
              </div>
              <button
                type="submit"
                class="bg-transparent hover:bg-yellow-600 text-black font-semibold hover:text-white border border-yellow-600 hover:border-transparent rounded-lg py-2 px-3"
              >
                {{ sendText }}
              </button>
            </div>
          </form>
        </div>
        <div class="w-full h-auto md:w-1/2">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            style="border:0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.7917880883674!2d-15.428442885452236!3d28.12237481373822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40957476703b99%3A0x9e8d4979f1966a75!2sTAO%20Club%20%26%20Garden!5e0!3m2!1ses!2ses!4v1571871312528!5m2!1ses!2ses"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { functions } from "@/plugins/firebase";

export default {
  name: "Contact",
  data() {
    return {
      tickets: 1,
      sending: false,
      errors: [],
      name: "",
      phone: "",
      email: "",
      message: "",
      attendees: [""]
    };
  },
  methods: {
    validate: function() {
      return new Promise((resolve, reject) => {
        let name = this.name;
        let namePttr = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        let phone = this.phone;
        let phonePttr = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
        let emailPttr = /.+@.+\..+/;
        let email = this.email;
        let message = this.message;
        this.errors = [];
        if (!name) {
          this.errors.push("Por favor rellene el campo Nombre.");
        } else if (name.length > 40) {
          this.errors.push("El campo Nombre no debe superar los 40 caracteres");
        } else if (!namePttr.test(name)) {
          this.errors.push("El campo Nombre debe ser un nombre válido");
        }
        if (!phone) {
          this.errors.push("Por favor rellene el campo Teléfono.");
        } else if (!phonePttr.test(phone)) {
          this.errors.push("El campo Teléfono debe ser numero válido.");
        }
        if (!email) {
          this.errors.push("Por favor rellene el campo E-mail.");
        } else if (!emailPttr.test(email)) {
          this.errors.push("El campo E-mail debe ser un correo válido.");
        }
        if (message.length > 500) {
          this.errors.push(
            "El campo Mensaje no debe superar los 500 caracteres"
          );
        }
        for (let index = 0; index < this.tickets; index++) {
          if (!this.attendees[index]) {
            this.errors.push(`Escriba el nombre del ${index + 1}º asistente.`);
          } else if (this.attendees[index].length > 40) {
            this.errors.push(
              `El nombre del asistente ${index +
                1} no debe superar los 40 caracteres`
            );
          } else if (!namePttr.test(this.attendees[index])) {
            this.errors.push(
              `El nombre del asistente ${index + 1} debe ser un nombre válido`
            );
          }
        }
        if (!this.errorsDisplay) {
          resolve(true);
        } else {
          let err = this.errors;
          reject(err);
        }
      });
    },
    sendMessage: function() {
      this.validate()
        .then(() => {
          this.sending = true;
          functions.httpsCallable("sendMail")({
            name: this.name,
            phone: this.phone,
            email: this.email,
            message: this.message,
            attendees: this.attendees
          });
        })
        .then(() => {
          this.sending = false;
          this.name = "";
          this.phone = "";
          this.email = "";
          this.message = "";
          this.attendees = [];
          this.tickets = 1;
        });
    },
    ticketsQuantity: function(operator) {
      switch (operator) {
        case "+":
          this.tickets < 5 ? this.tickets++ : false;
          break;
        case "-":
          this.tickets >= 2 ? this.tickets-- : false;
          break;
        default:
          break;
      }
    }
  },
  computed: {
    errorsDisplay: function() {
      return this.errors.length > 0 ? true : false;
    },
    sendText: function() {
      return this.sending ? "Enviando..." : "Enviar";
    }
  }
};
</script>
