export const handleRequest = async <T>(request: Promise<{ data: T }>): Promise<T> => {
  try {
    const { data } = await request;
    return data;
  } catch (error: any) {
    const message = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(message);
  }
};
