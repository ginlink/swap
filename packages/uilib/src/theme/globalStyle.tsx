import { createGlobalStyle } from 'styled-components'

export const FixedGlobalStyle = createGlobalStyle`
  html, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-display: fallback;
  }
  @supports (font-variation-settings: normal) {
    html, input, textarea, button {
      font-family: 'Inter var', sans-serif;
    }
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  a {
    color: #2776FF; 
  }

  * {
    box-sizing: border-box;
  }

  button {
    user-select: none;
  }

  html {
    font-size: 16px;
    font-variant: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
    
  }
`

export const ThemedGlobalStyle = createGlobalStyle`
  .three-line-legend-dark {
    width: 100%;
    height: 70px;
    position: absolute;
    padding: 8px;
    font-size: 12px;
    color: white;
    background-color: transparent;
    text-align: left;
    z-index: 10;
    pointer-events: none;
  }

  .tv-lightweight-charts{
    width: 100% !important;
    
    & > * {
      width: 100% !important;
    }
  }

  body {
    min-height: 100vh;
    background-position: 0 -30vh;
    background-repeat: no-repeat;

  }
`
