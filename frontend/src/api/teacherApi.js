import config from "./config";

// Adding Teachers
export const addTeachers = async (data) => {
  return await config.post("/teachers", data);
};

// Get all Teachers
export const getTeachers = async () => {
  return await config.get("/teachers");
};

// Get Teachers By ID
export const getTeachersById = async (id) => {
  return await config.get("/teachers/" + id);
};

// Update Teachers By ID
export const updateTeachersById = async (id, data) => {
  return await config.put("/teachers/" + id, data);
};

// Delete Teachers BY ID
export const deleteTeachersById = async (id) => {
  try {
    return await config.delete("/teachers/" + id);
  } catch (error) {
    return error;
  }
};

// Change Password
export const changeProfile = async (data) => {
  return await config.post("/teachers/change", data);
};
