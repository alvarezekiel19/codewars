#include <string>
#include <numeric>

std::string add(const std::string& foo, const std::string& bar) {
    std::string g;

    int k = 0;

    for (auto i = foo.rbegin(), j = bar.rbegin(); i != foo.rend() || j != bar.rend(); i++, j++) {
        int x = i != foo.rend() ? *i - '0' : (i = foo.rend() - 1, 0);
        int z = j != bar.rend() ? *i - '0' : (j = bar.rend() - 1, 0);

        g = std::to_string((x + z + k) % 10) + g;
        k = (x + z + k) / 10;
    }
    return k ? std::to_string(k) + g : g;
}
