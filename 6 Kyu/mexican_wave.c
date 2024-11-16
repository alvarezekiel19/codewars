#include <string.h>
#include <ctype.h>

void wave(char *x, char **target) {
    for (char foo = 0, *bar = x; *bar; bar++) {
        if (*bar != ' ') {
            strcpy(target[foo], x);
            target[foo++][bar - x] = toupper(*bar);
        }
    }
}
