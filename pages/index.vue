<template>
  <main>
    <section id="hero"></section>
    <article>
      <img src="/hc_logo.png" alt="Hair & Care 4U logo" />
      <section>
        <h1>Welcome to Hair & Care 4U, Yeovil</h1>
        <p>Yeovil's Premier Hair and Beauty Destination. Home to a dedicated team of stylists and therapists, offering a blend of suberb cutting and beautiful colour work.</p>
        <a
          class="btn"
          href="https://bookings.saloniq.co.uk/widget/dist/?6cf3e0f8-75f7-4b77-b6d2-9bbc17c996c8"
        >Book Online</a>
      </section>
      <section id="contact">
        <a href="tel:+44 1935 434534">01935 434534</a>
        <address>4, Tesco Stores, Queensway Pl, Yeovil BA20 1DL</address>
        <section id="socials">
          <a href="https://www.facebook.com/hairandcare4u/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="feather feather-facebook"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <!-- <a href="https://www.instagram.com/beautybar_yeovil">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="feather feather-instagram"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
            </svg>
          </a>-->
        </section>
      </section>
    </article>
  </main>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>

<style lang="scss" scoped>
  main {
    width: 100%;
    height: 100%;
    background: darkcyan;
    position: fixed;
    display: grid;
    grid-template: 100% / 55% 45%;
    @include breakpoint(tablet) {
      grid-template: 40% 60% / 100%;
    }
    @include breakpoint(mobile) {
      grid-template: 40% 60% / 100%;
    }
  }
  #hero {
    background-image: url('/hc_salon_shot.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  article {
    background: $white;
    padding: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: scroll;
    h1 {
      font-family: 'Bebas Neue', cursive;
      font-weight: 400;
      font-size: 36px;
      padding-bottom: 20px;
      color: $primary;
    }
    p {
      padding-bottom: 40px;
      line-height: 20px;
    }
    img {
      width: 200px;
      padding-bottom: 40px;
    }
    section {
      max-width: 500px;
      padding-bottom: 40px;
    }
    a {
      font-size: 18px;
      font-weight: 500;
      padding-bottom: 10px;
      display: block;
      color: $primary;
    }
  }
  #contact {
    padding-bottom: 0;
  }
  #socials {
    padding-bottom: 0;
    padding-top: 20px;
    a {
      width: 30px;
      height: 30px;
      display: inline-block;
      margin: 0 10px;
      svg {
        width: 100%;
        stroke: $primary;
      }
    }
  }
  .btn {
    background: $primary;
    color: $white;
    text-decoration: none;
    padding: 15px 40px;
    border-radius: 40px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    display: initial;
    &:hover,
    &:active,
    &:focus {
      opacity: 0.7;
    }
  }
</style>
