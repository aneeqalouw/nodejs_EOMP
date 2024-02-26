<template>
    <div class="container-fluid vh-100">
        <h2 class="fs-1 fw-bold d-block d-md-flex justify-content-center">
    Contact Us
  </h2>
  <br /><br />

  <!-- form -->
  <div class="container">
    <div class="row d-block d-md-flex justify-content-center gap-5">
      <div class="col d-block" id="form">
        <form action="#" method="post">
          <div class="row">
            <input type="text" placeholder="First name" required name="name" />
          </div>
          <br /><br />
          <div class="row">
            <input
              type="text"
              placeholder="Email address"
              required
              name="email"
            />
          </div>
          <br /><br />
          <div class="row">
            <textarea
              cols="30"
              rows="10"
              placeholder="Your message"
              required
              name="message"
            ></textarea>
            <button class="btn btn-dark my-3">Get in touch</button>
          </div>
        </form>
      </div>
      <br /><br />
      <br /><br />

      <!-- details -->
      <div class="col my-4 d-block" id="details" style="padding-top: 80px">
        <div class="row" id="detail">
          <div>
            <a href="mailto:inganathistemela13@gmail.com?">
              <svg
                width="28"
                height="25"
                viewBox="0 0 28 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_31_84)">
                  <path
                    d="M25.6667 7.84888V17.7083C25.6667 18.5053 25.3256 19.2723 24.7132 19.8523C24.1007 20.4322 23.2632 20.7813 22.372 20.828L22.1667 20.8333H5.83333C4.94058 20.8333 4.08156 20.5287 3.43202 19.9819C2.78249 19.4351 2.39154 18.6873 2.33916 17.8916L2.33333 17.7083V7.84888L13.3525 14.4083L13.4878 14.477C13.6473 14.5466 13.8225 14.5827 14 14.5827C14.1775 14.5827 14.3527 14.5466 14.5122 14.477L14.6475 14.4083L25.6667 7.84888Z"
                    fill="#F8F8F8"
                  />
                  <path
                    d="M22.1667 4.16675C23.4267 4.16675 24.5315 4.7605 25.1475 5.65321L14 12.2886L2.85249 5.65321C3.14501 5.22901 3.54691 4.87342 4.02465 4.6161C4.5024 4.35879 5.04213 4.20722 5.59883 4.17404L5.83333 4.16675H22.1667Z"
                    fill="#F8F8F8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_31_84">
                    <rect width="28" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <p>inganathistemela13@gmail.com</p>
        </div>
        <div class="row" id="detail">
          <div>
            <a href="tel:+27-68-227-2351">
              <svg
                width="25"
                height="27"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2458 14.5192L16.7719 15.0289C16.7719 15.0289 15.6437 16.2394 12.5656 12.9341C9.4875 9.62885 10.6156 8.41835 10.6156 8.41835L10.9135 8.0966C11.65 7.30685 11.7198 6.03785 11.0771 5.11085L9.76458 3.21748C8.96875 2.06998 7.43229 1.9181 6.52083 2.89685L4.88541 4.65185C4.43437 5.13785 4.13229 5.7656 4.16875 6.4631C4.2625 8.24848 5.01041 12.0881 9.18125 16.5679C13.6052 21.3176 17.7562 21.5066 19.4531 21.3356C19.9906 21.2816 20.4573 20.9869 20.8333 20.5819L22.3125 18.9934C23.3125 17.9212 23.0312 16.0819 21.7521 15.3315L19.7625 14.1626C18.9229 13.671 17.9021 13.815 17.2458 14.5192Z"
                  fill="#F8F8F8"
                />
              </svg>
            </a>
          </div>
          <p>+27 68 227 2351</p>
        </div>
        <div class="row" id="detail">
          <div>
            <a
              href="https://www.google.com/maps/d/u/0/viewer?mid=1lhs71HbZ6S6cAR6VQVrpW2dolhw&ll=-33.98215743335129%2C18.38364600000002&z=12"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_31_80)">
                  <path
                    d="M13 26C13 26 3.89999 14.131 3.89999 9.1C3.89999 7.90497 4.13537 6.72164 4.59269 5.61758C5.05001 4.51352 5.72031 3.51034 6.56532 2.66533C7.41034 1.82032 8.41351 1.15001 9.51758 0.692696C10.6216 0.235378 11.805 0 13 0C14.195 0 15.3784 0.235378 16.4824 0.692696C17.5865 1.15001 18.5897 1.82032 19.4347 2.66533C20.2797 3.51034 20.95 4.51352 21.4073 5.61758C21.8646 6.72164 22.1 7.90497 22.1 9.1C22.1 14.131 13 26 13 26ZM13 11.7C13.6896 11.7 14.3509 11.4261 14.8385 10.9385C15.3261 10.4509 15.6 9.78956 15.6 9.1C15.6 8.41044 15.3261 7.74912 14.8385 7.26152C14.3509 6.77393 13.6896 6.5 13 6.5C12.3104 6.5 11.6491 6.77393 11.1615 7.26152C10.6739 7.74912 10.4 8.41044 10.4 9.1C10.4 9.78956 10.6739 10.4509 11.1615 10.9385C11.6491 11.4261 12.3104 11.7 13 11.7Z"
                    fill="#F8F8F8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_31_80">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <p>Cape Town, South Africa</p>
        </div>
      </div>

      <br /><br />
    </div>
  </div>

    </div>
</template>

<script>
export default {};
</script>

<style src="../assets/css/style.css">

</style>
