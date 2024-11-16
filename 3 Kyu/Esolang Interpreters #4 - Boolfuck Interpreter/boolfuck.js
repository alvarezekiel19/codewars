let boolfuck = (code, input = "") => {
    const inputBits = [...input].flatMap(char =>
        char.charCodeAt().toString(2).padStart(8, '0').split("").reverse().map(Number)
    );

    let memory = [0], pointer = 0, inputPointer = 0, outputBits = "", stack = [], instructionPointer = 0;

    while (instructionPointer < code.length) {
        const cmd = code[instructionPointer];
        switch (cmd) {
            case '>': pointer++; if (pointer >= memory.length) memory.push(0); break;
            case '<': pointer--; if (pointer < 0) { memory.unshift(0); pointer = 0; } break;
            case '+': memory[pointer] ^= 1; break;
            case ';': outputBits += memory[pointer]; break;
            case ',': memory[pointer] = inputPointer < inputBits.length ? inputBits[inputPointer++] : 0; break;
            case '[':
                if (memory[pointer] === 0) {
                    let balance = 1;
                    while (balance > 0 && ++instructionPointer < code.length) {
                        if (code[instructionPointer] === '[') balance++;
                        else if (code[instructionPointer] === ']') balance--;
                    }
                } else stack.push(instructionPointer);
                break;
            case ']':
                if (memory[pointer] !== 0) instructionPointer = stack[stack.length - 1];
                else stack.pop();
                break;
        }
        instructionPointer++;
    }

    const bytes = outputBits.match(/.{1,8}/g) || [];
    return bytes.map(byte =>
        String.fromCharCode(parseInt(byte.padEnd(8, '0').split("").reverse().join(""), 2))
    ).join('');
}

