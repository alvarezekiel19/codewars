const spinWords = sentence => sentence.split(" ").map(w => w.length > 4 ? [...w].reverse().join("") : w).join(" ");
