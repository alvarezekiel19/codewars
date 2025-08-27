fn is_match(s: &str) -> bool {
    if s.is_empty() {
        return false;
    }

    if s.chars().any(|c| c != '0' && c != '1') {
        return false;
    }

    if s.len() > 1 && s.starts_with('0') {
        return false;
    }

    let mut remainder = 0;
    for c in s.chars() {
        remainder = (remainder * 2 + c.to_digit(2).unwrap()) % 7;
    }

    remainder == 0;
}
