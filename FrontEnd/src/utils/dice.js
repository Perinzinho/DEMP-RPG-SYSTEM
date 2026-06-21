export function rollD100(targetValue) {
    const value = Math.floor(Math.random() * 100) + 1;
    const fifth = Math.floor(targetValue / 5);

    let label = "Falha";
    let tier = "fail";

    if (value <= fifth) {
        label = "Crítico";
        tier = "critical";
    } else if (value <= targetValue) {
        label = "Sucesso";
        tier = "success";
    } else if (value >= 96) {
        label = "Falha Crítica";
        tier = "fumble";
    }

    return { value, label, tier };
}