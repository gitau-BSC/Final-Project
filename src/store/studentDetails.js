import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

function studentStore(set) {
  return {
    student: null,
    setStudent: function (studentObj) {
      set((_set) => {
        return { student: studentObj };
      });
    },

    logout: function () {
      set((_set) => {
        return { student: null };
      });
    },

    
  };
}

const studentDetailsStore = create(
  devtools(persist(studentStore, { name: "student" })),
);

export default studentDetailsStore;