import config from "./config";

// Adding NormalQuestions
export const addNormalQuestions = async (data) => {
  return await config.post("/NormalQuestions", data);
};

// Get all NormalQuestions
export const getNormalQuestions = async () => {
  return await config.get(`/NormalQuestions?sort=createdAt&order=desc`);
};

// Get NormalQuestions By ID
export const getNormalQuestionsById = async (id) => {
  return await config.get("/NormalQuestions/" + id);
};

// Update NormalQuestions By ID
export const updateNormalQuestionsById = async (id, data) => {
  return await config.put("/NormalQuestions/" + id, data);
};

// Delete NormalQuestions BY ID
export const deleteNormalQuestionsById = async (id) => {
  return await config.delete("/NormalQuestions/" + id);
};
