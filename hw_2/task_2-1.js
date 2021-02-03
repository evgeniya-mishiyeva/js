while (true) {
    count = parseInt(prompt("Enter a number"));

    if (isNaN(count) || null)
        continue;
    else break;
}
for (let i = 0; i < count; i++) {
    console.log(`hello from bot ${i}`);
}