export const firstLastChar = (name) => {
  if (!name || null) return;
  let splitsName = name.split(" ");
  if (splitsName.length <= 1) {
    return splitsName[0].charAt(0);
  } else {
    let fisrt = splitsName[0].charAt(0);
    let last = splitsName[1].charAt(0);
    return fisrt + last;
  }
};

export const formatDate = (date) => {
  if (!date) return;
  return new Date(date).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
};
