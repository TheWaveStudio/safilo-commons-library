import{ onMounted, onUnmounted, reactive } from '@vue/composition-api'

export default function Breakpoints () {
  const breakpoints = reactive({
    isMobile: window.innerWidth < 1024,
    isDesktop: window.innerWidth >= 1024
  })

  const setBreakpoints = () => {
    breakpoints.isMobile = window.innerWidth < 1024
    breakpoints.isDesktop = window.innerWidth >= 1024
  }

  onMounted(function () {
    window.addEventListener('resize', setBreakpoints)
  })

  onUnmounted(function () {
    window.removeEventListener('resize', setBreakpoints)
  })

  return {
    breakpoints
  }
}
