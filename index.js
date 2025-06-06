document.addEventListener("DOMContentLoaded", () => {
  // Variáveis
  const header = document.querySelector("header")
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const nav = document.querySelector("nav")
  const backToTopBtn = document.querySelector(".back-to-top")
  const sliderPrevBtns = document.querySelectorAll(".slider .prev")
  const sliderNextBtns = document.querySelectorAll(".slider .next")
  const animatedElements = document.querySelectorAll(".animate-fadeInUp")

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
      backToTopBtn.classList.add("active")
    } else {
      header.classList.remove("scrolled")
      backToTopBtn.classList.remove("active")
    }
  })

  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      nav.classList.toggle("active")

      // Toggle icon
      const icon = mobileMenuBtn.querySelector("i")
      if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  }

  // Slider functionality
  let slideIndex = 0

  function showSlides(n, sliderContainer) {
    const slides = sliderContainer.querySelectorAll(".slide")

    if (slides.length === 0) return

    // Reset slide index if out of bounds
    if (n >= slides.length) slideIndex = 0
    if (n < 0) slideIndex = slides.length - 1

    // Hide all slides
    slides.forEach((slide) => {
      slide.style.display = "none"
      slide.classList.remove("active")
    })

    // Show current slide
    slides[slideIndex].style.display = "block"
    slides[slideIndex].classList.add("active")
  }

  // Initialize all sliders
  document.querySelectorAll(".slider").forEach((slider) => {
    showSlides(0, slider)
  })

  // Slider navigation
  sliderPrevBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const slider = this.closest(".slider")
      slideIndex--
      showSlides(slideIndex, slider)
    })
  })

  sliderNextBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const slider = this.closest(".slider")
      slideIndex++
      showSlides(slideIndex, slider)
    })
  })

  // Auto slide (optional)
  const autoSlide = setInterval(() => {
    const sliders = document.querySelectorAll(".slider")
    if (sliders.length > 0) {
      slideIndex++
      sliders.forEach((slider) => {
        showSlides(slideIndex, slider)
      })
    }
  }, 5000) // Change slide every 5 seconds

  // Form validation
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Simple validation
      let valid = true
      const name = document.getElementById("name")
      const email = document.getElementById("email")
      const message = document.getElementById("message")

      if (name && name.value.trim() === "") {
        valid = false
        name.classList.add("error")
      } else if (name) {
        name.classList.remove("error")
      }

      if (email && (email.value.trim() === "" || !isValidEmail(email.value))) {
        valid = false
        email.classList.add("error")
      } else if (email) {
        email.classList.remove("error")
      }

      if (message && message.value.trim() === "") {
        valid = false
        message.classList.add("error")
      } else if (message) {
        message.classList.remove("error")
      }

      if (valid) {
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]')
        const originalText = submitButton.textContent

        submitButton.disabled = true
        submitButton.textContent = "Enviando..."

        setTimeout(() => {
          submitButton.textContent = "Enviado com sucesso!"
          contactForm.reset()

          setTimeout(() => {
            submitButton.disabled = false
            submitButton.textContent = originalText
          }, 3000)
        }, 1500)
      }
    })
  }

  // Helper function to validate email
  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  // Scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    { threshold: 0.1 },
  )

  animatedElements.forEach((el) => {
    el.style.opacity = 0
    el.style.transform = "translateY(20px)"
    observer.observe(el)
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        // Close mobile menu if open
        if (nav.classList.contains("active")) {
          nav.classList.remove("active")
          mobileMenuBtn.querySelector("i").classList.remove("fa-times")
          mobileMenuBtn.querySelector("i").classList.add("fa-bars")
        }

        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Back to top button
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }
})
