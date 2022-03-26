const ctx = require.context("./", false, /\.svg$/);
const requireAll = (requireContext: any) =>
  requireContext.keys().map(requireContext);
requireAll(ctx);
