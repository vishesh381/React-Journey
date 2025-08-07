export const timestampMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.type === "ADD_TODO") {
    const timestamp = "Added at 2025-08-01: ";
    action.payload = `${timestamp}${action.payload}`;
  }
  return next(action);
};
