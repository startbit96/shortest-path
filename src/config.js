import Highlight from "reveal.js/plugin/highlight/highlight";

// Import theme
import "reveal.js/dist/theme/black.css";

// Import CSS for plugins
import "reveal.js/plugin/highlight/monokai.css";

export default {
  // App Config
  app: {
    name: "Faster Parallel Algorithm for Approximate Shortest Path",
  },
  // Reveal Config
  reveal: {
    plugins: [Highlight],
    hash: true,
  },
};
